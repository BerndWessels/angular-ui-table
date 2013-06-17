(function (window, angular, undefined) {
  angular.module('uiTable', ['monospaced.mousewheel']).controller('uiTableController', [
    '$scope',
    '$element',
    '$timeout',
    '$compile',
    function ($scope, $element, $timeout, $compile) {
      var controller = this;
      controller.updateOptions = function () {
      };
      controller.updateColumns = function () {
        if ($scope.rows) {
          $.each($scope.rows, function (index, row) {
            controller.deleteRow(row);
          });
          $scope.rows = [];
        }
        $scope.vScrollbarOptions.page = 0;
        if ($scope.columnScopes) {
          $.each($scope.columnScopes, function (index, columnScope) {
            $scope.measureHeadColumns.empty();
            $scope.measureHeadCells.empty();
            $scope.fixedLeftHeadColumns.empty();
            $scope.fixedLeftBodyColumns.empty();
            $scope.fixedLeftHeadCells.empty();
            $scope.fixedRightHeadColumns.empty();
            $scope.fixedRightBodyColumns.empty();
            $scope.fixedRightHeadCells.empty();
            $scope.scrollHeadColumns.empty();
            $scope.scrollHeadCells.empty();
            columnScope.$destroy();
          });
        }
        $scope.numberOfColumnsFixedLeft = 0;
        $scope.numberOfColumnsFixedRight = 0;
        $scope.columnScopes = [];
        var totalColumnPixels = 0;
        var totalColumnStars = 0;
        var totalTablePixels = $scope.linkElement.width();
        var lastFixedLeftIndex = -1;
        var lastScrollIndex = -1;
        $.each($scope.uiTableOptions.columns, function (index, column) {
          var columnScope = $scope.$new();
          $scope.columnScopes.push(columnScope);
          columnScope.column = column;
          if (isNaN(column.width) === false) {
            columnScope.width = parseInt(column.width, 10);
            totalColumnPixels += columnScope.width;
          } else {
            var i = column.width.indexOf('px');
            if (i >= 0) {
              columnScope.width = parseInt(column.width.substring(0, i), 10);
              totalColumnPixels += columnScope.width;
            } else {
              i = column.width.indexOf('*');
              if (i >= 0) {
                columnScope.stars = parseInt(column.width.substring(0, i), 10);
                totalColumnStars += columnScope.stars;
              }
            }
          }
          lastFixedLeftIndex = column.fixed && column.fixed == 'left' ? index : lastFixedLeftIndex;
          lastScrollIndex = !column.fixed || column.fixed != 'left' && column.fixed != 'right' ? index : lastScrollIndex;
        });
        $.each($scope.columnScopes, function (index, columnScope) {
          if (columnScope.hasOwnProperty('stars')) {
            var totalPixels = $scope.uiTableOptions.columnsWidth && (!columnScope.column.fixed || columnScope.column.fixed === '') ? $scope.uiTableOptions.columnsWidth : totalTablePixels;
            columnScope.width = columnScope.stars * (totalPixels - totalColumnPixels) / totalColumnStars;
            if (columnScope.width < 8) {
              columnScope.width = 8;
            }
          }
          if (index > lastScrollIndex) {
            columnScope.column.fixed = 'right';
          } else if (index > lastFixedLeftIndex) {
            columnScope.column.fixed = '';
          } else {
            columnScope.column.fixed = 'left';
          }
        });
        $.each($scope.columnScopes, function (index, columnScope) {
          var columnHtml = '<div class="cssTableColumn" style="width:' + columnScope.width + 'px;"></div>';
          var headTemplate = columnScope.column.headTemplate && columnScope.column.headTemplate.length > 0 ? columnScope.column.headTemplate : '<span ng-bind="column.title"></span>\n<span class="cssTableColumnSort">\n    <i ui-if="column.sort == \'asc\'" class="icon-sort-up"></i>\n    <i ui-if="column.sort == \'desc\'" class="icon-sort-down"></i>\n    <span ui-if="column.sortOrder > 0" ng-bind="column.sortOrder"\n          style="font-size: x-small; vertical-align: top;"></span>\n</span>\n<span class="cssTableColumnTools">\n    <span ui-if="column.fixed == \'left\'" ui-table-column-fix="scroll"><i class="icon-signout"></i></span>\n    <span ui-if="column.fixed == \'right\'" ui-table-column-fix="scroll"><i class="icon-signout icon-flip-horizontal"></i></span>\n    <span ui-if="column.fixed != \'left\'" ui-table-column-fix="left"><i\n            class="icon-signin icon-flip-horizontal"></i></span>\n    <span ui-if="column.fixed != \'right\'" ui-table-column-fix="right"><i class="icon-signin"></i></span>\n    <span ui-table-column-reorder style="cursor:move;"><i class="icon-sort icon-rotate-90"></i></span>\n</span>\n<div ui-table-column-resize class="cssTableColumnResize"></div>';
          var cellHtml = '<div class="cssTableCell"><div class="cssTableCellContent" style="width:' + columnScope.width + 'px;">' + headTemplate + '</div></div>';
          columnScope.measureHeadColumn = $(columnHtml);
          columnScope.measureHeadCell = $(cellHtml);
          columnScope.measureHeadCellContent = $('div.cssTableCellContent', columnScope.measureHeadCell);
          columnScope.headColumn = $(columnHtml);
          columnScope.headCell = $(cellHtml);
          columnScope.headCellContent = $('div.cssTableCellContent', columnScope.headCell);
          $scope.measureHeadColumns.append(columnScope.measureHeadColumn);
          $scope.measureHeadCells.append(columnScope.measureHeadCell);
          if (columnScope.column.fixed && columnScope.column.fixed == 'left') {
            $scope.fixedLeftHeadColumns.append(columnScope.headColumn);
            $scope.fixedLeftBodyColumns.append(columnScope.headColumn);
            $scope.fixedLeftHeadCells.append(columnScope.headCell);
            $scope.numberOfColumnsFixedLeft++;
          } else if (columnScope.column.fixed && columnScope.column.fixed == 'right') {
            $scope.fixedRightHeadColumns.append(columnScope.headColumn);
            $scope.fixedRightBodyColumns.append(columnScope.headColumn);
            $scope.fixedRightHeadCells.append(columnScope.headCell);
            $scope.numberOfColumnsFixedRight++;
          } else {
            $scope.scrollHeadColumns.append(columnScope.headColumn);
            $scope.scrollBodyColumns.append(columnScope.headColumn);
            $scope.scrollHeadCells.append(columnScope.headCell);
          }
          columnScope.measureHeadCell = $compile(columnScope.measureHeadCell)(columnScope);
          columnScope.headCell = $compile(columnScope.headCell)(columnScope);
          columnScope.headCell.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
          columnScope.headCell.bind('mouseenter.uiTable', function (e) {
            controller.currentMouseColumnScope = columnScope;
            $('.cssTableColumnTools', columnScope.headCellContent).fadeIn('fast');
          });
          columnScope.headCell.bind('mouseleave.uiTable', function (e) {
            controller.currentMouseColumnScope = null;
            $('.cssTableColumnTools', columnScope.headCellContent).fadeOut(0);
          });
          columnScope.headCell.bind('click.uiTable', function (e) {
            $scope.$apply(function () {
              if (columnScope.column.sort === '') {
                columnScope.column.sort = 'asc';
              } else if (columnScope.column.sort == 'asc') {
                columnScope.column.sort = 'desc';
              } else if (columnScope.column.sort == 'desc') {
                columnScope.column.sort = '';
              }
              if (e.shiftKey === true) {
                var highestSortOrder = 0;
                $.each($scope.columnScopes, function (indexSortColumn, sortColumnScope) {
                  highestSortOrder = Math.max(sortColumnScope.column.sortOrder, highestSortOrder);
                });
                $.each($scope.columnScopes, function (indexSortColumn, sortColumnScope) {
                  if ((sortColumnScope.column.sort == 'asc' || sortColumnScope.column.sort == 'desc') && sortColumnScope.column.sortOrder === 0) {
                    sortColumnScope.column.sortOrder = ++highestSortOrder;
                  }
                });
              } else {
                $.each($scope.columnScopes, function (indexSortColumn, sortColumnScope) {
                  sortColumnScope.column.sortOrder = 0;
                  if (sortColumnScope != columnScope) {
                    if (sortColumnScope.column.sort == 'asc' || sortColumnScope.column.sort == 'desc') {
                      sortColumnScope.column.sort = '';
                    }
                  }
                });
              }
            });
            e.preventDefault();
          });
        });
      };
      controller.renderRow = function (rowIndex) {
        var startIndex = $scope.vScrollbarOptions.position;
        if (rowIndex === undefined) {
          rowIndex = startIndex;
        }
        var data = $scope.uiTableOptions.data;
        var isDataArray = $.isArray(data);
        var total = isDataArray ? data.length : $scope.uiTableOptions.total;
        var neededHeight = $scope.scrollBodyContainer.height();
        var rowsHeight = 0;
        var i = 0;
        var iRowScope = null;
        while (i < $scope.rows.length) {
          iRowScope = $scope.rows[i];
          if (iRowScope.row.index < startIndex) {
            controller.deleteRow(iRowScope);
            $scope.rows.splice(i, 1);
            continue;
          } else {
            break;
          }
        }
        if ($scope.rows.length === 0) {
          $scope.rows.push(controller.createRow(rowIndex, isDataArray ? data[rowIndex] : data(rowIndex)));
          if ($scope.uiTableOptions.rowsHeight || $scope.uiTableOptions.noCellBinding) {
            controller.renderRow(rowIndex + 1);
          }
          return;
        }
        iRowScope = $scope.rows[0];
        if (rowIndex < iRowScope.row.index) {
          $scope.rows.unshift(controller.createRow(rowIndex, isDataArray ? data[rowIndex] : data(rowIndex)));
          if ($scope.uiTableOptions.rowsHeight || $scope.uiTableOptions.noCellBinding) {
            controller.renderRow(rowIndex + 1);
          }
          return;
        }
        i = 0;
        while (i < $scope.rows.length) {
          iRowScope = $scope.rows[i];
          rowsHeight += iRowScope.height;
          if (rowsHeight > neededHeight) {
            i++;
            break;
          }
          if (iRowScope.row.index + 1 >= total) {
            i++;
            break;
          }
          var iNextRowScope = i < $scope.rows.length - 1 ? $scope.rows[i + 1] : null;
          if (!iNextRowScope || iNextRowScope.row.index > iRowScope.row.index + 1) {
            $scope.rows.splice(i + 1, 0, controller.createRow(iRowScope.row.index + 1, isDataArray ? data[iRowScope.row.index + 1] : data(iRowScope.row.index + 1)));
            if ($scope.uiTableOptions.rowsHeight || $scope.uiTableOptions.noCellBinding) {
              controller.renderRow(rowIndex + 1);
            }
            return;
          }
          i++;
        }
        while (i < $scope.rows.length) {
          iRowScope = $scope.rows[i];
          if (iRowScope.row.index != rowIndex) {
            controller.deleteRow(iRowScope);
            $scope.rows.splice(i, 1);
          } else {
            i++;
          }
        }
      };
      controller.createRow = function (rowIndex, rowData) {
        var selection = $scope.uiTableOptions.selection[rowIndex];
        var isSelected = selection ? selection.isSelected : false;
        var measureRowHtml = '<div class="cssTableRow' + (isSelected ? ' selected">' : '">');
        var fixedLeftRowHtml = '<div class="cssTableRow' + (isSelected ? ' selected">' : '">');
        var fixedRightRowHtml = '<div class="cssTableRow' + (isSelected ? ' selected">' : '">');
        var scrollRowHtml = '<div class="cssTableRow' + (isSelected ? ' selected">' : '">');
        $.each($scope.columnScopes, function (index, columnScope) {
          var dataTemplate = columnScope.column.dataTemplate && columnScope.column.dataTemplate.length > 0 ? columnScope.column.dataTemplate : '<span ng-bind="row.data.' + columnScope.column.field + '"></span>';
          if ($scope.uiTableOptions.noCellBinding) {
            dataTemplate = dataTemplate.replace('{{' + columnScope.column.field + '}}', rowData[columnScope.column.field]);
          }
          var cellHtml = '<div class="cssTableCell"><div class="cssTableCellContent" style="width:' + columnScope.width + 'px;">' + dataTemplate + '</div></div>';
          measureRowHtml += cellHtml;
          if (columnScope.column.fixed && columnScope.column.fixed == 'left') {
            fixedLeftRowHtml += cellHtml;
          } else if (columnScope.column.fixed && columnScope.column.fixed == 'right') {
            fixedRightRowHtml += cellHtml;
          } else {
            scrollRowHtml += cellHtml;
          }
        });
        var rowScope = $scope.$new();
        rowScope.row = {
          index: rowIndex,
          data: rowData,
          isSelected: isSelected
        };
        if ($scope.uiTableOptions.noCellBinding) {
          if ($scope.numberOfColumnsFixedLeft > 0) {
            rowScope.fixedLeftRowElement = $(fixedLeftRowHtml + '</div>');
          }
          if ($scope.numberOfColumnsFixedRight > 0) {
            rowScope.fixedRightRowElement = $(fixedRightRowHtml + '</div>');
          }
          rowScope.scrollRowElement = $(scrollRowHtml + '</div>');
        } else {
          if (!$scope.uiTableOptions.rowsHeight && !$scope.uiTableOptions.noCellBinding) {
            rowScope.measureRowElement = $compile(measureRowHtml + '</div>')(rowScope);
          }
          if ($scope.numberOfColumnsFixedLeft > 0) {
            rowScope.fixedLeftRowElement = $compile(fixedLeftRowHtml + '</div>')(rowScope);
          }
          if ($scope.numberOfColumnsFixedRight > 0) {
            rowScope.fixedRightRowElement = $compile(fixedRightRowHtml + '</div>')(rowScope);
          }
          rowScope.scrollRowElement = $compile(scrollRowHtml + '</div>')(rowScope);
          if (rowScope.fixedLeftRowElement) {
            rowScope.fixedLeftRowElement.bind('mouseenter.cssTableRow', function () {
              rowScope.fixedLeftRowElement.addClass('mouseover');
              if (rowScope.fixedRightRowElement) {
                rowScope.fixedRightRowElement.addClass('mouseover');
              }
              rowScope.scrollRowElement.addClass('mouseover');
            });
            rowScope.fixedLeftRowElement.bind('mouseleave.cssTableRow', function () {
              rowScope.fixedLeftRowElement.removeClass('mouseover');
              if (rowScope.fixedRightRowElement) {
                rowScope.fixedRightRowElement.removeClass('mouseover');
              }
              rowScope.scrollRowElement.removeClass('mouseover');
            });
            rowScope.fixedLeftRowElement.bind('click.cssTableRow', function (event) {
              controller.onClickRow(event, rowScope);
            });
          }
          if (rowScope.fixedRightRowElement) {
            rowScope.fixedRightRowElement.bind('mouseenter.cssTableRow', function () {
              rowScope.fixedRightRowElement.addClass('mouseover');
              if (rowScope.fixedLeftRowElement) {
                rowScope.fixedLeftRowElement.addClass('mouseover');
              }
              rowScope.scrollRowElement.addClass('mouseover');
            });
            rowScope.fixedRightRowElement.bind('mouseleave.cssTableRow', function () {
              rowScope.fixedRightRowElement.removeClass('mouseover');
              if (rowScope.fixedLeftRowElement) {
                rowScope.fixedLeftRowElement.removeClass('mouseover');
              }
              rowScope.scrollRowElement.removeClass('mouseover');
            });
            rowScope.fixedRightRowElement.bind('click.cssTableRow', function (event) {
              controller.onClickRow(event, rowScope);
            });
          }
          rowScope.scrollRowElement.bind('mouseenter.cssTableRow', function () {
            if (rowScope.fixedLeftRowElement) {
              rowScope.fixedLeftRowElement.addClass('mouseover');
            }
            if (rowScope.fixedRightRowElement) {
              rowScope.fixedRightRowElement.addClass('mouseover');
            }
            rowScope.scrollRowElement.addClass('mouseover');
          });
          rowScope.scrollRowElement.bind('mouseleave.cssTableRow', function () {
            if (rowScope.fixedLeftRowElement) {
              rowScope.fixedLeftRowElement.removeClass('mouseover');
            }
            if (rowScope.fixedRightRowElement) {
              rowScope.fixedRightRowElement.removeClass('mouseover');
            }
            rowScope.scrollRowElement.removeClass('mouseover');
          });
          rowScope.scrollRowElement.bind('click.cssTableRow', function (event) {
            controller.onClickRow(event, rowScope);
          });
        }
        if ($scope.rows.length === 0) {
          if (rowScope.measureRowElement) {
            $scope.measureBodyRows.append(rowScope.measureRowElement);
          }
          if (rowScope.fixedLeftRowElement) {
            $scope.fixedLeftBodyRows.append(rowScope.fixedLeftRowElement);
          }
          if (rowScope.fixedRightRowElement) {
            $scope.fixedRightBodyRows.append(rowScope.fixedRightRowElement);
          }
          $scope.scrollBodyRows.append(rowScope.scrollRowElement);
        } else {
          var i = 0;
          while (i < $scope.rows.length) {
            var iRowScope = $scope.rows[i];
            if (iRowScope.row.index > rowIndex) {
              if (rowScope.measureRowElement) {
                iRowScope.measureRowElement.before(rowScope.measureRowElement);
              }
              if (rowScope.fixedLeftRowElement) {
                iRowScope.fixedLeftRowElement.before(rowScope.fixedLeftRowElement);
              }
              if (rowScope.fixedRightRowElement) {
                iRowScope.fixedRightRowElement.before(rowScope.fixedRightRowElement);
              }
              iRowScope.scrollRowElement.before(rowScope.scrollRowElement);
              break;
            }
            var iNextRowScope = i < $scope.rows.length - 1 ? $scope.rows[i + 1] : null;
            if (!iNextRowScope) {
              if (rowScope.measureRowElement) {
                iRowScope.measureRowElement.after(rowScope.measureRowElement);
              }
              if (rowScope.fixedLeftRowElement) {
                iRowScope.fixedLeftRowElement.after(rowScope.fixedLeftRowElement);
              }
              if (rowScope.fixedRightRowElement) {
                iRowScope.fixedRightRowElement.after(rowScope.fixedRightRowElement);
              }
              iRowScope.scrollRowElement.after(rowScope.scrollRowElement);
              break;
            }
            if (iNextRowScope && iNextRowScope.row.index > rowIndex) {
              if (rowScope.measureRowElement) {
                iNextRowScope.measureRowElement.before(rowScope.measureRowElement);
              }
              if (rowScope.fixedLeftRowElement) {
                iNextRowScope.fixedLeftRowElement.before(rowScope.fixedLeftRowElement);
              }
              if (rowScope.fixedRightRowElement) {
                iNextRowScope.fixedRightRowElement.before(rowScope.fixedRightRowElement);
              }
              iNextRowScope.scrollRowElement.before(rowScope.scrollRowElement);
              break;
            }
            i++;
          }
        }
        if (rowScope.measureRowElement) {
          rowScope.$watch(function () {
            return rowScope.measureRowElement.height();
          }, function (newValue) {
            if (rowScope.fixedLeftRowElement) {
              $('div.cssTableCellContent', rowScope.fixedLeftRowElement).css({ height: newValue });
            }
            if (rowScope.fixedRightRowElement) {
              $('div.cssTableCellContent', rowScope.fixedRightRowElement).css({ height: newValue });
            }
            $('div.cssTableCellContent', rowScope.scrollRowElement).css({ height: newValue });
            rowScope.height = newValue;
            controller.renderRow(rowIndex);
          });
        } else if ($scope.uiTableOptions.noCellBinding) {
          var rowHeight = Math.max(rowScope.fixedLeftRowElement ? rowScope.fixedLeftRowElement.height() : 0, rowScope.fixedRightRowElement ? rowScope.fixedRightRowElement.height() : 0, rowScope.scrollRowElement.height());
          if (rowScope.fixedLeftRowElement) {
            $('div.cssTableCellContent', rowScope.fixedLeftRowElement).css({ height: rowHeight });
          }
          if (rowScope.fixedRightRowElement) {
            $('div.cssTableCellContent', rowScope.fixedRightRowElement).css({ height: rowHeight });
          }
          $('div.cssTableCellContent', rowScope.scrollRowElement).css({ height: rowHeight });
          rowScope.height = rowHeight;
        } else {
          if (rowScope.fixedLeftRowElement) {
            $('div.cssTableCellContent', rowScope.fixedLeftRowElement).css({ height: $scope.uiTableOptions.rowsHeight });
          }
          if (rowScope.fixedRightRowElement) {
            $('div.cssTableCellContent', rowScope.fixedRightRowElement).css({ height: $scope.uiTableOptions.rowsHeight });
          }
          $('div.cssTableCellContent', rowScope.scrollRowElement).css({ height: $scope.uiTableOptions.rowsHeight });
          rowScope.height = $scope.uiTableOptions.rowsHeight;
        }
        $scope.vScrollbarOptions.page++;
        return rowScope;
      };
      controller.deleteRow = function (rowScope) {
        if (rowScope.measureRowElement) {
          rowScope.measureRowElement.remove();
          rowScope.measureRowElement = null;
        }
        if (rowScope.fixedLeftRowElement) {
          rowScope.fixedLeftRowElement.remove();
          rowScope.fixedLeftRowElement = null;
        }
        if (rowScope.fixedRightRowElement) {
          rowScope.fixedRightRowElement.remove();
          rowScope.fixedRightRowElement = null;
        }
        rowScope.scrollRowElement.remove();
        rowScope.scrollRowElement = null;
        rowScope.$destroy();
        $scope.vScrollbarOptions.page--;
      };
      controller.updateLayout = function () {
        var fixedWidth = 0;
        if ($scope.numberOfColumnsFixedLeft > 0) {
          fixedWidth += $scope.fixedLeftHeadCells.width();
          $scope.fixedLeftBodyContainer.height($scope.linkElement.height() - $scope.scrollHeadContainer.height() - 16);
        }
        if ($scope.numberOfColumnsFixedRight > 0) {
          fixedWidth += $scope.fixedRightHeadCells.width();
          $scope.fixedRightBodyContainer.height($scope.linkElement.height() - $scope.scrollHeadContainer.height() - 16);
        }
        $scope.scrollHeadContainer.width($scope.linkElement.width() - fixedWidth - 16);
        $scope.scrollBodyContainer.width($scope.linkElement.width() - fixedWidth - 16);
        $scope.scrollBodyContainer.height($scope.linkElement.height() - $scope.scrollHeadContainer.height() - 16);
        $scope.vScrollbarOptions.size = $scope.linkElement.height() - $scope.scrollHeadContainer.height() - 16;
        $scope.hScrollbarOptions.size = $scope.linkElement.width() - fixedWidth - 16;
        $scope.hScrollbarOptions.page = $scope.linkElement.width() - fixedWidth - 16;
        $scope.hScrollbarOptions.total = $scope.scrollHeadTable.width();
        var newPosition = $scope.hScrollbarOptions.position;
        if (newPosition + $scope.hScrollbarOptions.page > $scope.hScrollbarOptions.total) {
          newPosition = $scope.hScrollbarOptions.total - $scope.hScrollbarOptions.page;
          $scope.hScrollbarOptions.position = newPosition < 0 ? 0 : newPosition;
        }
      };
      controller.onClickRow = function (event, rowScope) {
        $scope.$apply(function () {
          if (event.shiftKey === false && event.ctrlKey === false) {
            $scope.uiTableOptions.selection.length = 0;
            $.each($scope.rows, function (index, iRowScope) {
              if (iRowScope.row.isSelected) {
                iRowScope.row.isSelected = false;
                if (iRowScope.fixedLeftRowElement) {
                  iRowScope.fixedLeftRowElement.removeClass('selected');
                }
                if (iRowScope.fixedRightRowElement) {
                  iRowScope.fixedRightRowElement.removeClass('selected');
                }
                iRowScope.scrollRowElement.removeClass('selected');
              }
            });
            $scope.uiTableOptions.selection[rowScope.row.index] = rowScope.row;
            if (!rowScope.row.isSelected) {
              rowScope.row.isSelected = true;
              if (rowScope.fixedLeftRowElement) {
                rowScope.fixedLeftRowElement.addClass('selected');
              }
              if (rowScope.fixedRightRowElement) {
                rowScope.fixedRightRowElement.addClass('selected');
              }
              rowScope.scrollRowElement.addClass('selected');
            }
          } else if (event.shiftKey === true && event.ctrlKey === false) {
          } else if (event.ctrlKey === false) {
          }
        });
      };
      controller.currentMouseColumnScope = null;
    }
  ]).directive('uiTable', [
    '$window',
    '$timeout',
    '$rootScope',
    '$compile',
    function ($window, $timeout, $rootScope, $compile) {
      return {
        controller: 'uiTableController',
        restrict: 'C',
        scope: { uiTableOptions: '=' },
        template: '<div class="cssTable cssMeasure">\n    <div class="cssTableColumnGroup" id="measureHeadColumns">\n        <!-- each col in cols -->\n    </div>\n    <div class="cssTableRowGroup" id="measureHeadCells">\n        <!-- each row in rows -->\n    </div>\n</div>\n<div class="cssTable cssMeasure">\n    <div class="cssTableColumnGroup" id="measureBodyColumns">\n        <!-- each col in cols -->\n    </div>\n    <div class="cssTableRowGroup" id="measureBodyRows">\n        <!-- each row in rows -->\n    </div>\n</div>\n<div class="cssTable" msd-wheel="onMouseWheel($event, $delta, $deltaX, $deltaY)">\n    <div class="cssTableRowGroup">\n        <div class="cssTableRow" id="headRow">\n            <div class="cssTableCell" ng-show="numberOfColumnsFixedLeft > 0">\n                <!-- fixed left headers -->\n                <div class="cssTable">\n                    <div class="cssTableColumnGroup" id="fixedLeftHeadColumns">\n                        <!-- each col in fixedCols -->\n                    </div>\n                    <div class="cssTableRowGroup">\n                        <div class="cssTableRow" id="fixedLeftHeadCells">\n                            <!-- each col in fixedCols -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="cssTableCell">\n                <!-- scroll headers -->\n                <div class="cssScrollContainer" id="scrollHeadContainer">\n                    <div class="cssTable" id="scrollHeadTable">\n                        <div class="cssTableColumnGroup" id="scrollHeadColumns">\n                            <!-- each col in scrollCols -->\n                        </div>\n                        <div class="cssTableRowGroup">\n                            <div class="cssTableRow" id="scrollHeadCells">\n                                <!-- each col in scrollCols -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="cssTableCell" ng-show="numberOfColumnsFixedRight > 0">\n                <!-- fixed right headers -->\n                <div class="cssTable">\n                    <div class="cssTableColumnGroup" id="fixedRightHeadColumns">\n                        <!-- each col in fixedCols -->\n                    </div>\n                    <div class="cssTableRowGroup">\n                        <div class="cssTableRow" id="fixedRightHeadCells">\n                            <!-- each col in fixedCols -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="cssTableCell">\n            </div>\n        </div>\n        <div class="cssTableRow">\n            <div class="cssTableCell" ng-show="numberOfColumnsFixedLeft > 0">\n                <!-- fixed left body -->\n                <div class="cssFixedContainer" id="fixedLeftBodyContainer">\n                    <div class="cssTable">\n                        <div class="cssTableColumnGroup" id="fixedLeftBodyColumns">\n                            <!-- each col in fixedCols -->\n                        </div>\n                        <div class="cssTableRowGroup" id="fixedLeftBodyRows">\n                            <!-- each row in rows -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="cssTableCell">\n                <!-- scroll body -->\n                <div class="cssScrollContainer" id="scrollBodyContainer" style="float:left;">\n                    <div class="cssTable" id="scrollBodyTable">\n                        <div class="cssTableColumnGroup" id="scrollBodyColumns">\n                            <!-- each col in scrollCols -->\n                        </div>\n                        <div class="cssTableRowGroup" id="scrollBodyRows">\n                            <!-- each row in rows -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="cssTableCell" ng-show="numberOfColumnsFixedRight > 0">\n                <!-- fixed body -->\n                <div class="cssFixedContainer" id="fixedRightBodyContainer">\n                    <div class="cssTable">\n                        <div class="cssTableColumnGroup" id="fixedRightBodyColumns">\n                            <!-- each col in fixedCols -->\n                        </div>\n                        <div class="cssTableRowGroup" id="fixedRightBodyRows">\n                            <!-- each row in rows -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="cssTableCell">\n                <div ui-scrollbar ui-scrollbar-options="vScrollbarOptions" style="width:16px;">\n                </div>\n            </div>\n        </div>\n        <div class="cssTableRow">\n            <div class="cssTableCell" ng-show="numberOfColumnsFixedLeft > 0">\n            </div>\n            <div class="cssTableCell">\n                <div ui-scrollbar ui-scrollbar-options="hScrollbarOptions" style="height:16px;">\n                </div>\n            </div>\n            <div class="cssTableCell" ng-show="numberOfColumnsFixedRight > 0">\n            </div>\n            <div class="cssTableCell">\n            </div>\n        </div>\n    </div>\n</div>',
        compile: function compile(templateElement, templateAttributes, transclude) {
          return {
            pre: function (scope, linkElement, attributes, controller) {
              scope.numberOfColumnsFixedLeft = 0;
              scope.numberOfColumnsFixedRight = 0;
              scope.onMouseWheel = function (event, delta, deltaX, deltaY) {
                var newPos = scope.vScrollbarOptions.position - delta;
                if (newPos < 0) {
                  newPos = 0;
                }
                if (newPos > scope.vScrollbarOptions.total - 1) {
                  newPos = scope.vScrollbarOptions.total - 1;
                }
                if (scope.vScrollbarOptions.position != newPos) {
                  scope.vScrollbarOptions.position = newPos;
                }
                event.preventDefault();
              };
            },
            post: function (scope, linkElement, attributes, controller) {
              scope.rows = [];
              scope.vScrollbarOptions = {
                vertical: true,
                fullRange: true,
                position: 0,
                page: 0,
                total: 0,
                size: 0
              };
              scope.hScrollbarOptions = {
                vertical: false,
                fullRange: false,
                position: 0,
                page: 0,
                total: 0,
                size: 0
              };
              scope.linkElement = linkElement;
              scope.measureHeadColumns = $('#measureHeadColumns', linkElement);
              scope.measureHeadCells = $('#measureHeadCells', linkElement);
              scope.measureBodyColumns = $('#measureBodyColumns', linkElement);
              scope.measureBodyRows = $('#measureBodyRows', linkElement);
              scope.fixedLeftHeadColumns = $('#fixedLeftHeadColumns', linkElement);
              scope.fixedRightHeadColumns = $('#fixedRightHeadColumns', linkElement);
              scope.fixedLeftHeadCells = $('#fixedLeftHeadCells', linkElement);
              scope.fixedRightHeadCells = $('#fixedRightHeadCells', linkElement);
              scope.fixedLeftBodyColumns = $('#fixedLeftBodyColumns', linkElement);
              scope.fixedRightBodyColumns = $('#fixedRightBodyColumns', linkElement);
              scope.fixedLeftBodyRows = $('#fixedLeftBodyRows', linkElement);
              scope.fixedRightBodyRows = $('#fixedRightBodyRows', linkElement);
              scope.scrollHeadColumns = $('#scrollHeadColumns', linkElement);
              scope.scrollHeadCells = $('#scrollHeadCells', linkElement);
              scope.scrollBodyColumns = $('#scrollBodyColumns', linkElement);
              scope.scrollBodyRows = $('#scrollBodyRows', linkElement);
              scope.fixedLeftBodyContainer = $('#fixedLeftBodyContainer', linkElement);
              scope.fixedRightBodyContainer = $('#fixedRightBodyContainer', linkElement);
              scope.scrollHeadContainer = $('#scrollHeadContainer', linkElement);
              scope.scrollBodyContainer = $('#scrollBodyContainer', linkElement);
              scope.scrollHeadTable = $('#scrollHeadTable', linkElement);
              scope.scrollBodyTable = $('#scrollBodyTable', linkElement);
              scope.$watch('uiTableOptions', function (newValue) {
                scope.$watch('uiTableOptions.data', function (newValue) {
                  if ($.isArray(newValue)) {
                    scope.vScrollbarOptions.total = newValue.length;
                  } else {
                    scope.vScrollbarOptions.total = scope.uiTableOptions.total;
                  }
                });
                scope.$watch('uiTableOptions.total', function (newValue) {
                  if (!$.isArray(scope.uiTableOptions.data)) {
                    scope.vScrollbarOptions.total = newValue;
                  }
                });
                controller.updateColumns();
                controller.updateLayout();
              });
              scope.$watch(function () {
                return scope.scrollHeadContainer.height();
              }, function (newValue) {
                controller.updateLayout();
              });
              scope.$watch(function () {
                return scope.fixedLeftHeadCells.width();
              }, function (newValue) {
                controller.updateLayout();
              });
              scope.$watch(function () {
                return scope.fixedRightHeadCells.width();
              }, function (newValue) {
                controller.updateLayout();
              });
              scope.$watch(function () {
                return scope.measureHeadCells.height();
              }, function (newValue) {
                $('div.cssTableCellContent', scope.fixedLeftHeadCells).css({ height: newValue });
                $('div.cssTableCellContent', scope.fixedRightHeadCells).css({ height: newValue });
                $('div.cssTableCellContent', scope.scrollHeadCells).css({ height: newValue });
                controller.updateLayout();
              });
              scope.$watch(function () {
                return scope.scrollHeadTable.width();
              }, function (newValue) {
                scope.hScrollbarOptions.total = newValue;
              });
              scope.$watch(function () {
                return scope.scrollHeadContainer.width();
              }, function (newValue) {
                scope.hScrollbarOptions.total = scope.scrollHeadTable.width();
              });
              scope.$watch('hScrollbarOptions.position', function (newValue) {
                scope.scrollHeadContainer.scrollLeft(newValue);
                scope.scrollBodyContainer.scrollLeft(newValue);
              });
              scope.$watch('vScrollbarOptions.position', function (newValue) {
                controller.renderRow();
              });
            }
          };
        }
      };
      ;
    }
  ]).directive('uiTableColumnResize', [function () {
      return {
        require: '^uiTable',
        restrict: 'EAC',
        scope: false,
        template: '',
        compile: function compile(templateElement, templateAttributes, transclude) {
          return {
            pre: function (scope, linkElement, attributes, controller) {
            },
            post: function (scope, linkElement, attributes, controller) {
              if (linkElement.parents('div.cssMeasure:first').length > 0) {
                return;
              }
              linkElement.bind('click.uiTable', function (e) {
                return false;
              });
              linkElement.bind('mousedown.uiTable', function (e) {
                var pageX = e.pageX;
                var currentTotalTableWidth = scope.linkElement.width() - 16;
                var currentTotalColumnWidth = 0;
                var lastScrollColumnScope = null;
                var lastScrollColumnIndex = null;
                var scopeIndex = 0;
                $.each(scope.columnScopes, function (indexMeasure, columnScopeMeasure) {
                  currentTotalColumnWidth += columnScopeMeasure.width;
                  if (!columnScopeMeasure.column.fixed || columnScopeMeasure.column.fixed === '') {
                    lastScrollColumnScope = columnScopeMeasure;
                  }
                  if (scope === columnScopeMeasure) {
                    scopeIndex = indexMeasure;
                  }
                });
                $(document).bind('mousemove.uiTable', function (e) {
                  var offset = e.pageX - pageX;
                  var newWidth = scope.width + offset;
                  if (newWidth < 8) {
                    newWidth = 8;
                  }
                  var missingPixels = currentTotalTableWidth - currentTotalColumnWidth - (newWidth - scope.width);
                  if (scope == lastScrollColumnScope && missingPixels > 0) {
                    return;
                  }
                  scope.measureHeadColumn.css({ width: newWidth });
                  scope.measureHeadCellContent.css({ width: newWidth });
                  scope.headColumn.css({ width: newWidth });
                  scope.headCellContent.css({ width: newWidth });
                  $('.cssTableCell:nth-child(' + (scopeIndex + 1) + ')', scope.measureBodyRows).each(function (i) {
                    $(this).children(':first').css({ width: newWidth });
                  });
                  if (scope.column.fixed && scope.column.fixed == 'left') {
                    $('.cssTableCell:nth-child(' + (scope.headCell.index() + 1) + ')', scope.fixedLeftBodyRows).each(function (i) {
                      $(this).children(':first').css({ width: newWidth });
                    });
                  } else if (scope.column.fixed && scope.column.fixed == 'right') {
                    $('.cssTableCell:nth-child(' + (scope.headCell.index() + 1) + ')', scope.fixedRightBodyRows).each(function (i) {
                      $(this).children(':first').css({ width: newWidth });
                    });
                  } else {
                    $('.cssTableCell:nth-child(' + (scope.headCell.index() + 1) + ')', scope.scrollBodyRows).each(function (i) {
                      $(this).children(':first').css({ width: newWidth });
                    });
                  }
                  if (missingPixels > 0) {
                    var lastWidth = lastScrollColumnScope.width + missingPixels;
                    lastScrollColumnScope.measureHeadColumn.css({ width: lastWidth });
                    lastScrollColumnScope.measureHeadCellContent.css({ width: lastWidth });
                    lastScrollColumnScope.headColumn.css({ width: lastWidth });
                    lastScrollColumnScope.headCellContent.css({ width: lastWidth });
                    $('.cssTableCell:nth-child(' + (lastScrollColumnScope.headCell.index() + 1) + ')', scope.measureBodyRows).each(function (i) {
                      $(this).children(':first').css({ width: lastWidth });
                    });
                    if (lastScrollColumnScope.column.fixed && lastScrollColumnScope.column.fixed == 'left') {
                      $('.cssTableCell:nth-child(' + (lastScrollColumnScope.headCell.index() + 1) + ')', scope.fixedLeftBodyRows).each(function (i) {
                        $(this).children(':first').css({ width: lastWidth });
                      });
                    } else if (lastScrollColumnScope.column.fixed && lastScrollColumnScope.column.fixed == 'right') {
                      $('.cssTableCell:nth-child(' + (lastScrollColumnScope.headCell.index() + 1) + ')', scope.fixedRightBodyRows).each(function (i) {
                        $(this).children(':first').css({ width: lastWidth });
                      });
                    } else {
                      $('.cssTableCell:nth-child(' + (lastScrollColumnScope.headCell.index() + 1) + ')', scope.scrollBodyRows).each(function (i) {
                        $(this).children(':first').css({ width: lastWidth });
                      });
                    }
                  }
                  scope.$apply(function () {
                    controller.updateLayout();
                  });
                  e.preventDefault();
                });
                $(document).bind('mouseup.uiTable', function (e) {
                  $(document).unbind('.uiTable');
                  var offset = e.pageX - pageX;
                  var newWidth = scope.width + offset;
                  if (newWidth < 0) {
                    newWidth = 0;
                  }
                  var missingPixels = currentTotalTableWidth - currentTotalColumnWidth - (newWidth - scope.width);
                  if (missingPixels > 0) {
                    lastScrollColumnScope.width += missingPixels;
                    lastScrollColumnScope.column.width = lastScrollColumnScope.width;
                  }
                  scope.width = newWidth;
                  scope.column.width = newWidth;
                  e.preventDefault();
                });
                e.preventDefault();
              });
            }
          };
        }
      };
    }]).directive('uiTableColumnReorder', [function () {
      return {
        replace: true,
        require: '^uiTable',
        restrict: 'EAC',
        scope: false,
        template: '<span ng-transclude=""></span>',
        transclude: true,
        compile: function compile(templateElement, templateAttributes, transclude) {
          return {
            pre: function (scope, linkElement, attributes, controller) {
            },
            post: function (scope, linkElement, attributes, controller) {
              if (linkElement.parents('div.cssMeasure:first').length > 0) {
                return;
              }
              linkElement.bind('mousedown.uiTable', function (e) {
                var previousMouseColumnScope = null;
                $(document).bind('mousemove.uiTable', function (e) {
                  if (previousMouseColumnScope && previousMouseColumnScope !== controller.currentMouseColumnScope) {
                    previousMouseColumnScope.headCellContent.removeClass('reorder');
                  }
                  if (scope !== controller.currentMouseColumnScope) {
                    controller.currentMouseColumnScope.headCellContent.addClass('reorder');
                  }
                  previousMouseColumnScope = controller.currentMouseColumnScope;
                  e.preventDefault();
                });
                $(document).bind('mouseup.uiTable', function (e) {
                  $(document).unbind('.uiTable');
                  if (controller.currentMouseColumnScope) {
                    controller.currentMouseColumnScope.headCellContent.removeClass('reorder');
                    var dragIndex = scope.columnScopes.indexOf(scope);
                    var dropIndex = scope.columnScopes.indexOf(controller.currentMouseColumnScope);
                    if (dropIndex < dragIndex) {
                      dropIndex++;
                    }
                    scope.$apply(function () {
                      scope.column.fixed = controller.currentMouseColumnScope.column.fixed;
                      scope.uiTableOptions.columns.splice(dropIndex, 0, scope.uiTableOptions.columns.splice(dragIndex, 1)[0]);
                      controller.updateColumns();
                      controller.updateLayout();
                      controller.renderRow();
                    });
                  }
                  e.preventDefault();
                });
                e.preventDefault();
              });
            }
          };
        }
      };
    }]).directive('uiTableColumnFix', [function () {
      return {
        replace: true,
        require: '^uiTable',
        restrict: 'EAC',
        scope: false,
        template: '<span ng-transclude=""></span>',
        transclude: true,
        compile: function compile(templateElement, templateAttributes, transclude) {
          return {
            pre: function (scope, linkElement, attributes, controller) {
            },
            post: function (scope, linkElement, attributes, controller) {
              if (linkElement.parents('div.cssMeasure:first').length > 0) {
                return;
              }
              linkElement.bind('click.uiTable', function (e) {
                var firstScrollColumnScope = null;
                var lastScrollColumnScope = null;
                $.each(scope.columnScopes, function (index, columnScope) {
                  if (!columnScope.column.fixed || columnScope.column.fixed != 'left' && columnScope.column.fixed != 'right') {
                    firstScrollColumnScope = firstScrollColumnScope ? firstScrollColumnScope : columnScope;
                    lastScrollColumnScope = columnScope;
                  }
                });
                var dropIndex = 0;
                if (attributes.uiTableColumnFix == 'left') {
                  dropIndex = scope.columnScopes.indexOf(firstScrollColumnScope);
                  scope.column.fixed = 'left';
                } else if (attributes.uiTableColumnFix == 'right') {
                  dropIndex = scope.columnScopes.indexOf(lastScrollColumnScope);
                  scope.column.fixed = 'right';
                } else {
                  dropIndex = scope.columnScopes.indexOf(firstScrollColumnScope);
                  scope.column.fixed = '';
                }
                var dragIndex = scope.columnScopes.indexOf(scope.$parent);
                scope.$apply(function () {
                  scope.uiTableOptions.columns.splice(dropIndex, 0, scope.uiTableOptions.columns.splice(dragIndex, 1)[0]);
                  scope.columnScopes.splice(dropIndex, 0, scope.columnScopes.splice(dragIndex, 1)[0]);
                  controller.updateColumns();
                  controller.updateLayout();
                  controller.renderRow();
                });
                e.preventDefault();
              });
            }
          };
        }
      };
    }]).directive('uiScrollbar', [
    '$window',
    '$timeout',
    '$rootScope',
    function ($window, $timeout, $rootScope) {
      return {
        replace: true,
        restrict: 'EAC',
        scope: { uiScrollbarOptions: '=' },
        template: '<div class="uiScrollbarOuter">\n    <div class="uiScrollbarInner"></div>\n</div>',
        compile: function compile(templateElement, templateAttributes, transclude) {
          return {
            pre: function (scope, linkElement, attributes, controller) {
            },
            post: function (scope, linkElement, attributes, controller) {
              var outer = linkElement;
              var inner = $('div.uiScrollbarInner', linkElement);
              var update = function () {
                var range = scope.uiScrollbarOptions.fullRange ? scope.uiScrollbarOptions.page - 1 : 0;
                if (scope.uiScrollbarOptions.vertical === true) {
                  outer.css({ height: scope.uiScrollbarOptions.size });
                  inner.css({
                    left: 0,
                    top: Math.ceil(scope.uiScrollbarOptions.size * scope.uiScrollbarOptions.position / (scope.uiScrollbarOptions.total + range)),
                    width: outer.width(),
                    height: Math.floor(scope.uiScrollbarOptions.size * scope.uiScrollbarOptions.page / (scope.uiScrollbarOptions.total + range))
                  });
                } else {
                  outer.css({ width: scope.uiScrollbarOptions.size });
                  inner.css({
                    top: 0,
                    left: Math.ceil(scope.uiScrollbarOptions.size * scope.uiScrollbarOptions.position / (scope.uiScrollbarOptions.total + range)),
                    height: outer.height(),
                    width: Math.floor(scope.uiScrollbarOptions.size * scope.uiScrollbarOptions.page / (scope.uiScrollbarOptions.total + range))
                  });
                }
              };
              scope.$watch('uiScrollbarOptions', function (newValue) {
                inner.unbind('.uiScrollbar');
                inner.bind('mousedown.uiScrollbar', function (e) {
                  var mouse = scope.uiScrollbarOptions.vertical === true ? e.pageY : e.pageX;
                  var position = scope.uiScrollbarOptions.position;
                  $(document).bind('mousemove.uiScrollbar', function (e) {
                    var range = scope.uiScrollbarOptions.fullRange ? scope.uiScrollbarOptions.page - 1 : 0;
                    var page = scope.uiScrollbarOptions.vertical === true ? e.pageY : e.pageX;
                    var offset = Math.ceil((page - mouse) / (scope.uiScrollbarOptions.size / (scope.uiScrollbarOptions.total + range)));
                    var newPos = position + offset;
                    if (newPos < 0) {
                      newPos = 0;
                    }
                    range = scope.uiScrollbarOptions.fullRange ? 1 : scope.uiScrollbarOptions.page;
                    if (newPos + range > scope.uiScrollbarOptions.total) {
                      newPos = scope.uiScrollbarOptions.total - range;
                    }
                    if (scope.uiScrollbarOptions.position != newPos) {
                      if (!$rootScope.$$phase) {
                        scope.$apply(function () {
                          scope.uiScrollbarOptions.position = newPos;
                        });
                      }
                    }
                    e.preventDefault();
                  });
                  $(document).mouseup(function (e) {
                    $(document).unbind('mousemove.uiScrollbar');
                    e.preventDefault();
                  });
                  e.preventDefault();
                });
                scope.$watch('uiScrollbarOptions.size', function (newValue) {
                  update();
                });
                scope.$watch('uiScrollbarOptions.page', function (newValue) {
                  update();
                });
                scope.$watch('uiScrollbarOptions.total', function (newValue) {
                  update();
                });
                scope.$watch('uiScrollbarOptions.position', function (newValue) {
                  update();
                });
              });
            }
          };
        }
      };
    }
  ]).directive('uiIf', [function () {
      return {
        transclude: 'element',
        priority: 1000,
        terminal: true,
        restrict: 'A',
        compile: function (element, attr, transclude) {
          return function (scope, element, attr) {
            var childElement;
            var childScope;
            scope.$watch(attr['uiIf'], function (newValue) {
              if (childElement) {
                childElement.remove();
                childElement = undefined;
              }
              if (childScope) {
                childScope.$destroy();
                childScope = undefined;
              }
              if (newValue) {
                childScope = scope.$new();
                transclude(childScope, function (clone) {
                  childElement = clone;
                  element.after(clone);
                });
              }
            });
          };
        }
      };
    }]);
}(window, window.angular));