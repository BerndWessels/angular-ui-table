/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

/*
 AngularJS v1.1.5
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,T,p){'use strict';function lc(){var b=M.angular;M.angular=mc;return b}function Xa(b){return!b||typeof b.length!=="number"?!1:typeof b.hasOwnProperty!="function"&&typeof b.constructor!="function"?!0:b instanceof R||ga&&b instanceof ga||Ea.call(b)!=="[object Object]"||typeof b.callee==="function"}function n(b,a,c){var d;if(b)if(H(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==n)b.forEach(a,c);else if(Xa(b))for(d=
0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function qb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function nc(b,a,c){for(var d=qb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function rb(b){return function(a,c){b(c,a)}}function Fa(){for(var b=ba.length,a;b;){b--;a=ba[b].charCodeAt(0);if(a==57)return ba[b]="A",ba.join("");if(a==90)ba[b]="0";else return ba[b]=String.fromCharCode(a+1),ba.join("")}ba.unshift("0");
return ba.join("")}function sb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;n(arguments,function(a){a!==b&&n(a,function(a,c){b[c]=a})});sb(b,a);return b}function N(b){return parseInt(b,10)}function tb(b,a){return t(new (t(function(){},{prototype:b})),a)}function q(){}function qa(b){return b}function S(b){return function(){return b}}function C(b){return typeof b=="undefined"}function B(b){return typeof b!="undefined"}function L(b){return b!=null&&typeof b=="object"}function E(b){return typeof b==
"string"}function Ya(b){return typeof b=="number"}function ra(b){return Ea.apply(b)=="[object Date]"}function F(b){return Ea.apply(b)=="[object Array]"}function H(b){return typeof b=="function"}function sa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function U(b){return E(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function oc(b){return b&&(b.nodeName||b.bind&&b.find)}function Za(b,a,c){var d=[];n(b,function(b,g,i){d.push(a.call(c,b,g,i))});return d}function Ga(b,a){if(b.indexOf)return b.indexOf(a);
for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function ta(b,a){var c=Ga(b,a);c>=0&&b.splice(c,1);return a}function V(b,a){if(sa(b)||b&&b.$evalAsync&&b.$watch)throw Error("Can't copy Window or Scope");if(a){if(b===a)throw Error("Can't copy equivalent objects or arrays");if(F(b))for(var c=a.length=0;c<b.length;c++)a.push(V(b[c]));else{c=a.$$hashKey;n(a,function(b,c){delete a[c]});for(var d in b)a[d]=V(b[d]);sb(a,c)}}else(a=b)&&(F(b)?a=V(b,[]):ra(b)?a=new Date(b.getTime()):L(b)&&(a=V(b,{})));
return a}function pc(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ia(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&c=="object")if(F(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ia(b[d],a[d]))return!1;return!0}}else if(ra(b))return ra(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||sa(b)||sa(a))return!1;c={};for(d in b)if(!(d.charAt(0)===
"$"||H(b[d]))){if(!ia(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&a[d]!==p&&!H(a[d]))return!1;return!0}return!1}function $a(b,a){var c=arguments.length>2?ka.call(arguments,2):[];return H(a)&&!(a instanceof RegExp)?c.length?function(){return arguments.length?a.apply(b,c.concat(ka.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function qc(b,a){var c=a;/^\$+/.test(b)?c=p:sa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&a.$evalAsync&&
a.$watch&&(c="$SCOPE");return c}function ha(b,a){return JSON.stringify(b,qc,a?"  ":null)}function ub(b){return E(b)?JSON.parse(b):b}function ua(b){b&&b.length!==0?(b=I(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;return b}function va(b){b=w(b).clone();try{b.html("")}catch(a){}var c=w("<div>").append(b).html();try{return b[0].nodeType===3?I(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+I(b)})}catch(d){return I(c)}}function vb(b){var a={},c,d;n((b||
"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=B(c[1])?decodeURIComponent(c[1]):!0)});return a}function wb(b){var a=[];n(b,function(b,d){a.push(wa(d,!0)+(b===!0?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function ab(b){return wa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function rc(b,
a){function c(a){a&&d.push(a)}var d=[b],e,g,i=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;n(i,function(a){i[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(n(b.querySelectorAll("."+a),c),n(b.querySelectorAll("."+a+"\\:"),c),n(b.querySelectorAll("["+a+"]"),c))});n(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):n(a.attributes,function(b){if(!e&&i[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}
function xb(b,a){var c=function(){b=w(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animator",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)});e.enabled(!0)}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(M&&!d.test(M.name))return c();M.name=M.name.replace(d,"");Ha.resumeBootstrap=function(b){n(b,function(b){a.push(b)});c()}}function bb(b,a){a=a||"_";return b.replace(sc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function cb(b,a,c){if(!b)throw Error("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function xa(b,a,c){c&&F(b)&&(b=b[b.length-1]);cb(H(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function tc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return m}}if(!e)throw Error("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),m={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animationProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider",
"directive"),config:j,run:function(a){c.push(a);return this}};g&&j(g);return m})}})}function Ia(b){return b.replace(uc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(vc,"Moz$1")}function db(b,a){function c(){var e;for(var b=[this],c=a,i,f,h,j,m,k;b.length;){i=b.shift();f=0;for(h=i.length;f<h;f++){j=w(i[f]);c?j.triggerHandler("$destroy"):c=!c;m=0;for(e=(k=j.children()).length,j=e;m<j;m++)b.push(ga(k[m]))}}return d.apply(this,arguments)}var d=ga.fn[b],d=d.$original||d;c.$original=d;ga.fn[b]=
c}function R(b){if(b instanceof R)return b;if(!(this instanceof R)){if(E(b)&&b.charAt(0)!="<")throw Error("selectors not implemented");return new R(b)}if(E(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);eb(this,a.childNodes);this.remove()}else eb(this,b)}function fb(b){return b.cloneNode(!0)}function ya(b){zb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)ya(b[a])}function Ab(b,a,c){var d=ca(b,"events");ca(b,"handle")&&(C(a)?n(d,function(a,c){gb(b,
c,a);delete d[c]}):C(c)?(gb(b,a,d[a]),delete d[a]):ta(d[a],c))}function zb(b){var a=b[Ja],c=Ka[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Ab(b)),delete Ka[a],b[Ja]=p)}function ca(b,a,c){var d=b[Ja],d=Ka[d||-1];if(B(c))d||(b[Ja]=d=++wc,d=Ka[d]={}),d[a]=c;else return d&&d[a]}function Bb(b,a,c){var d=ca(b,"data"),e=B(c),g=!e&&B(a),i=g&&!L(a);!d&&!i&&ca(b,"data",d={});if(e)d[a]=c;else if(g)if(i)return d&&d[a];else t(d,a);else return d}function La(b,a){return(" "+b.className+" ").replace(/[\n\t]/g,
" ").indexOf(" "+a+" ")>-1}function Cb(b,a){a&&n(a.split(" "),function(a){b.className=U((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," "))})}function Db(b,a){a&&n(a.split(" "),function(a){if(!La(b,a))b.className=U(b.className+" "+U(a))})}function eb(b,a){if(a)for(var a=!a.nodeName&&B(a.length)&&!sa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function Eb(b,a){return Ma(b,"$"+(a||"ngController")+"Controller")}function Ma(b,a,c){b=w(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=
b.data(a))return c;b=b.parent()}}function Fb(b,a){var c=Na[a.toLowerCase()];return c&&Gb[b.nodeName]&&c}function xc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||T;if(C(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||
c.returnValue==!1};n(a[e||c.type],function(a){a.call(b,c)});Z<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function la(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===p)c=b.$$hashKey=Fa()}else c=b;return a+":"+c}function za(b){n(b,this.put,this)}function Hb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=
[],c=b.toString().replace(yc,""),c=c.match(zc),n(c[1].split(Ac),function(b){b.replace(Bc,function(b,c,d){a.push(d)})}),b.$inject=a}else F(b)?(c=b.length-1,xa(b[c],"fn"),a=b.slice(0,c)):xa(b,"fn",!0);return a}function yb(b){function a(a){return function(b,c){if(L(b))n(b,rb(a));else return a(b,c)}}function c(a,b){if(H(b)||F(b))b=k.instantiate(b);if(!b.$get)throw Error("Provider "+a+" must define $get factory method.");return m[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];n(a,function(a){if(!j.get(a))if(j.put(a,
!0),E(a)){var c=Aa(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],o=k.get(g[0]);o[g[1]].apply(o,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(H(a))try{b.push(k.invoke(a))}catch(l){throw l.message&&(l.message+=" from "+a),l;}else if(F(a))try{b.push(k.invoke(a))}catch(i){throw i.message&&(i.message+=" from "+String(a[a.length-1])),i;}else xa(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw Error("Service name expected");
if(a.hasOwnProperty(d)){if(a[d]===i)throw Error("Circular dependency: "+h.join(" <- "));return a[d]}else try{return h.unshift(d),a[d]=i,a[d]=b(d)}finally{h.shift()}}function d(a,b,e){var f=[],j=Hb(a),g,o,h;o=0;for(g=j.length;o<g;o++)h=j[o],f.push(e&&e.hasOwnProperty(h)?e[h]:c(h));a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);
case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(F(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return L(e)?e:c},get:c,annotate:Hb,has:function(b){return m.hasOwnProperty(b+
f)||a.hasOwnProperty(b)}}}var i={},f="Provider",h=[],j=new za,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,S(b))}),constant:a(function(a,b){m[a]=b;l[a]=b}),decorator:function(a,b){var c=k.get(a+f),d=c.$get;c.$get=function(){var a=u.invoke(d,c);return u.invoke(b,null,{$delegate:a})}}}},k=m.$injector=g(m,function(){throw Error("Unknown provider: "+h.join(" <- "));}),l={},u=l.$injector=
g(l,function(a){a=k.get(a+f);return u.invoke(a.$get,a)});n(e(b),function(a){u.invoke(a||q)});return u}function Cc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;n(a,function(a){!b&&I(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=i.getElementById(b))?d.scrollIntoView():(d=e(i.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var i=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function Ib(b){this.register=function(a,c){b.factory(Ia(a)+"Animation",c)};this.$get=["$injector",function(a){return function(b){if(b&&(b=Ia(b)+"Animation",a.has(b)))return a.get(b)}}]}function Dc(b,a,c,d){function e(a){try{a.apply(null,ka.call(arguments,1))}finally{if(o--,o===0)for(;z.length;)try{z.pop()()}catch(b){c.error(b)}}}function g(a,b){(function s(){n(r,function(a){a()});y=b(s,a)})()}function i(){x!=f.url()&&(x=f.url(),n(v,function(a){a(f.url())}))}
var f=this,h=a[0],j=b.location,m=b.history,k=b.setTimeout,l=b.clearTimeout,u={};f.isMock=!1;var o=0,z=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=function(a){n(r,function(a){a()});o===0?a():z.push(a)};var r=[],y;f.addPollFn=function(a){C(y)&&g(100,k);r.push(a);return a};var x=j.href,W=a.find("base");f.url=function(a,b){if(a){if(x!=a)return x=a,d.history?b?m.replaceState(null,"",a):(m.pushState(null,"",a),W.attr("href",W.attr("href"))):
b?j.replace(a):j.href=a,f}else return j.href.replace(/%27/g,"'")};var v=[],A=!1;f.onUrlChange=function(a){A||(d.history&&w(b).bind("popstate",i),d.hashchange?w(b).bind("hashchange",i):f.addPollFn(i),A=!0);v.push(a);return a};f.baseHref=function(){var a=W.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var G={},D="",$=f.baseHref();f.cookies=function(a,b){var d,e,f,j;if(a)if(b===p)h.cookie=escape(a)+"=;path="+$+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(E(b))d=(h.cookie=escape(a)+
"="+escape(b)+";path="+$).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!")}else{if(h.cookie!==D){D=h.cookie;d=D.split("; ");G={};for(f=0;f<d.length;f++)e=d[f],j=e.indexOf("="),j>0&&(a=unescape(e.substring(0,j)),G[a]===p&&(G[a]=unescape(e.substring(j+1))))}return G}};f.defer=function(a,b){var c;o++;c=k(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};f.defer.cancel=function(a){return u[a]?(delete u[a],l(a),e(q),!0):!1}}function Ec(){this.$get=
["$window","$log","$sniffer","$document",function(b,a,c,d){return new Dc(b,d,a,c)}]}function Fc(){this.$get=function(){function b(b,d){function e(a){if(a!=k){if(l){if(l==a)l=a.n}else l=a;g(a.n,a.p);g(a,k);k=a;k.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw Error("cacheId "+b+" taken");var i=0,f=t({},d,{id:b}),h={},j=d&&d.capacity||Number.MAX_VALUE,m={},k=null,l=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!C(b))return a in h||i++,h[a]=b,i>j&&this.remove(l.key),
b},get:function(a){var b=m[a];if(b)return e(b),h[a]},remove:function(a){var b=m[a];if(b){if(b==k)k=b.p;if(b==l)l=b.n;g(b.n,b.p);delete m[a];delete h[a];i--}},removeAll:function(){h={};i=0;m={};k=l=null},destroy:function(){m=f=h=null;delete a[b]},info:function(){return t({},f,{size:i})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Gc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Jb(b){var a=
{},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ",i=/^\s*(https?|ftp|mailto|file):/;this.directive=function h(d,e){E(d)?(cb(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];n(a[d],function(a){try{var g=b.invoke(a);if(H(g))g={compile:S(g)};else if(!g.compile&&g.link)g.compile=S(g.link);g.priority=g.priority||0;g.name=g.name||d;g.require=
g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){c(h)}});return e}])),a[d].push(e)):n(d,rb(h));return this};this.urlSanitizationWhitelist=function(a){return B(a)?(i=a,this):i};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document",function(b,j,m,k,l,u,o,z,r){function y(a,b,c){a instanceof w||(a=w(a));n(a,function(b,c){b.nodeType==3&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});
var d=W(a,b,a,c);return function(b,c){cb(b,"scope");for(var e=c?Ba.clone.call(a):a,j=0,g=e.length;j<g;j++){var h=e[j];(h.nodeType==1||h.nodeType==9)&&e.eq(j).data("$scope",b)}x(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function x(a,b){try{a.addClass(b)}catch(c){}}function W(a,b,c,d){function e(a,c,d,g){var h,i,k,l,o,m,u,z=[];o=0;for(m=c.length;o<m;o++)z.push(c[o]);u=o=0;for(m=j.length;o<m;u++)i=z[u],c=j[o++],h=j[o++],c?(c.scope?(k=a.$new(L(c.scope)),w(i).data("$scope",k)):k=a,(l=c.transclude)||
!g&&b?c(h,k,i,d,function(b){return function(c){var d=a.$new();d.$$transcluded=!0;return b(d,c).bind("$destroy",$a(d,d.$destroy))}}(l||b)):c(h,k,i,p,g)):h&&h(a,i.childNodes,p,g)}for(var j=[],g,h,k,i=0;i<a.length;i++)h=new ma,g=v(a[i],[],h,d),h=(g=g.length?A(g,a[i],h,b,c):null)&&g.terminal||!a[i].childNodes||!a[i].childNodes.length?null:W(a[i].childNodes,g?g.transclude:b),j.push(g),j.push(h),k=k||g||h;return k?e:null}function v(a,b,c,j){var g=c.$attr,h;switch(a.nodeType){case 1:G(b,da(hb(a).toLowerCase()),
"E",j);var i,k,l;h=a.attributes;for(var o=0,m=h&&h.length;o<m;o++)if(i=h[o],i.specified)k=i.name,l=da(k),Y.test(l)&&(k=l.substr(6).toLowerCase()),l=da(k.toLowerCase()),g[l]=k,c[l]=i=U(Z&&k=="href"?decodeURIComponent(a.getAttribute(k,2)):i.value),Fb(a,l)&&(c[l]=!0),s(a,b,i,l),G(b,l,"A",j);a=a.className;if(E(a)&&a!=="")for(;h=e.exec(a);)l=da(h[2]),G(b,l,"C",j)&&(c[l]=U(h[3])),a=a.substr(h.index+h[0].length);break;case 3:P(b,a.nodeValue);break;case 8:try{if(h=d.exec(a.nodeValue))l=da(h[1]),G(b,l,"M",
j)&&(c[l]=U(h[2]))}catch(u){}}b.sort(K);return b}function A(a,b,c,d,e){function h(a,b){if(a)a.require=s.require,z.push(a);if(b)b.require=s.require,ea.push(b)}function i(a,b){var c,d="data",e=!1;if(E(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw Error("No controller: "+a);}else F(a)&&(c=[],n(a,function(a){c.push(i(a,b))}));return c}function k(a,d,e,g,h){var l,v,r,D,x;l=b===e?c:pc(c,new ma(w(e),c.$attr));v=l.$$element;
if(K){var y=/^\s*([@=&])(\??)\s*(\w*)\s*$/,s=d.$parent||d;n(K.scope,function(a,b){var c=a.match(y)||[],e=c[3]||b,g=c[2]=="?",c=c[1],h,k,i;d.$$isolateBindings[b]=c+e;switch(c){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=s;l[e]&&(d[b]=j(l[e])(s));break;case "=":if(g&&!l[e])break;k=u(l[e]);i=k.assign||function(){h=d[b]=k(s);throw Error(Kb+l[e]+" (directive: "+K.name+")");};h=d[b]=k(s);d.$watch(function(){var a=k(s);a!==d[b]&&(a!==h?h=d[b]=a:i(s,a=h=d[b]));return a});break;case "&":k=
u(l[e]);d[b]=function(a){return k(s,a)};break;default:throw Error("Invalid isolate scope definition for directive "+K.name+": "+a);}})}q&&n(q,function(a){var b={$scope:d,$element:v,$attrs:l,$transclude:h};x=a.controller;x=="@"&&(x=l[a.name]);v.data("$"+a.name+"Controller",o(x,b))});g=0;for(r=z.length;g<r;g++)try{D=z[g],D(d,v,l,D.require&&i(D.require,v))}catch(Hc){m(Hc,va(v))}a&&a(d,e.childNodes,p,h);g=0;for(r=ea.length;g<r;g++)try{D=ea[g],D(d,v,l,D.require&&i(D.require,v))}catch(J){m(J,va(v))}}for(var l=
-Number.MAX_VALUE,z=[],ea=[],r=null,K=null,W=null,J=c.$$element=w(b),s,A,Y,G,P=d,q,na,t,B=0,C=a.length;B<C;B++){s=a[B];Y=p;if(l>s.priority)break;if(t=s.scope)O("isolated scope",K,s,J),L(t)&&(x(J,"ng-isolate-scope"),K=s),x(J,"ng-scope"),r=r||s;A=s.name;if(t=s.controller)q=q||{},O("'"+A+"' controller",q[A],s,J),q[A]=s;if(t=s.transclude)O("transclusion",G,s,J),G=s,l=s.priority,t=="element"?(Y=w(b),J=c.$$element=w(T.createComment(" "+A+": "+c[A]+" ")),b=J[0],ja(e,w(Y[0]),b),P=y(Y,d,l)):(Y=w(fb(b)).contents(),
J.html(""),P=y(Y,d));if(s.template)if(O("template",W,s,J),W=s,t=H(s.template)?s.template(J,c):s.template,t=Lb(t),s.replace){Y=w("<div>"+U(t)+"</div>").contents();b=Y[0];if(Y.length!=1||b.nodeType!==1)throw Error(g+t);ja(e,J,b);A={$attr:{}};a=a.concat(v(b,a.splice(B+1,a.length-(B+1)),A));D(c,A);C=a.length}else J.html(t);if(s.templateUrl)O("template",W,s,J),W=s,k=$(a.splice(B,a.length-B),k,J,c,e,s.replace,P),C=a.length;else if(s.compile)try{na=s.compile(J,c,P),H(na)?h(null,na):na&&h(na.pre,na.post)}catch(I){m(I,
va(J))}if(s.terminal)k.terminal=!0,l=Math.max(l,s.priority)}k.scope=r&&r.scope;k.transclude=G&&P;return k}function G(d,e,j,g){var l=!1;if(a.hasOwnProperty(e))for(var k,e=b.get(e+c),i=0,o=e.length;i<o;i++)try{if(k=e[i],(g===p||g>k.priority)&&k.restrict.indexOf(j)!=-1)d.push(k),l=!0}catch(u){m(u)}return l}function D(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,j){j=="class"?(x(e,b),a["class"]=
(a["class"]?a["class"]+" ":"")+b):j=="style"?e.attr("style",e.attr("style")+";"+b):j.charAt(0)!="$"&&!a.hasOwnProperty(j)&&(a[j]=b,d[j]=c[j])})}function $(a,b,c,d,e,j,h){var i=[],o,m,u=c[0],z=a.shift(),r=t({},z,{controller:null,templateUrl:null,transclude:null,scope:null}),z=H(z.templateUrl)?z.templateUrl(c,d):z.templateUrl;c.html("");k.get(z,{cache:l}).success(function(l){var k,z,l=Lb(l);if(j){z=w("<div>"+U(l)+"</div>").contents();k=z[0];if(z.length!=1||k.nodeType!==1)throw Error(g+l);l={$attr:{}};
ja(e,c,k);v(k,a,l);D(d,l)}else k=u,c.html(l);a.unshift(r);o=A(a,k,d,h);for(m=W(c[0].childNodes,h);i.length;){var ea=i.shift(),l=i.shift();z=i.shift();var x=i.shift(),y=k;l!==u&&(y=fb(k),ja(z,w(l),y));o(function(){b(m,ea,y,e,x)},ea,y,e,x)}i=null}).error(function(a,b,c,d){throw Error("Failed to load template: "+d.url);});return function(a,c,d,e,j){i?(i.push(c),i.push(d),i.push(e),i.push(j)):o(function(){b(m,c,d,e,j)},c,d,e,j)}}function K(a,b){return b.priority-a.priority}function O(a,b,c,d){if(b)throw Error("Multiple directives ["+
b.name+", "+c.name+"] asking for "+a+" on: "+va(d));}function P(a,b){var c=j(b,!0);c&&a.push({priority:0,compile:S(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);x(d.data("$binding",e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function s(a,b,c,d){var e=j(c,!0);e&&b.push({priority:100,compile:S(function(a,b,c){b=c.$$observers||(c.$$observers={});if(e=j(c[d],!0))c[d]=e(a),(b[d]||(b[d]=[])).$$inter=!0,(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,
a)})})})}function ja(a,b,c){var d=b[0],e=d.parentNode,j,g;if(a){j=0;for(g=a.length;j<g;j++)if(a[j]==d){a[j]=c;break}}e&&e.replaceChild(c,d);c[w.expando]=d[w.expando];b[0]=c}var ma=function(a,b){this.$$element=a;this.$attr=b||{}};ma.prototype={$normalize:da,$set:function(a,b,c,d){var e=Fb(this.$$element[0],a),j=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=bb(a,"-"));if(hb(this.$$element[0])==="A"&&a==="href")q.setAttribute("href",
b),e=q.href,e.match(i)||(this[a]=b="unsafe:"+e);c!==!1&&(b===null||b===p?this.$$element.removeAttr(d):this.$$element.attr(d,b));j&&n(j[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);z.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var q=r[0].createElement("a"),ea=j.startSymbol(),J=j.endSymbol(),Lb=ea=="{{"||J=="}}"?qa:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,J)},Y=/^ngAttr[A-Z]/;return y}]}
function da(b){return Ia(b.replace(Ic,""))}function Jc(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){L(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var i,f;E(e)&&(f=e.match(a),i=f[1],f=f[3],e=b.hasOwnProperty(i)?b[i]:ib(g.$scope,i,!0)||ib(d,i,!0),xa(e,i,!0));i=c.instantiate(e,g);if(f){if(typeof g.$scope!=="object")throw Error('Can not export controller as "'+f+'". No scope object provided!');g.$scope[f]=i}return i}}]}function Kc(){this.$get=
["$window",function(b){return w(b.document)}]}function Lc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Mc(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,h){for(var j,m,k=0,l=[],u=e.length,o=!1,z=[];k<u;)(j=e.indexOf(b,k))!=-1&&(m=e.indexOf(a,j+g))!=-1?(k!=j&&l.push(e.substring(k,j)),l.push(k=c(o=e.substring(j+g,
m))),k.exp=o,k=m+i,o=!0):(k!=u&&l.push(e.substring(k)),k=u);if(!(u=l.length))l.push(""),u=1;if(!h||o)return z.length=u,k=function(a){try{for(var b=0,c=u,j;b<c;b++){if(typeof(j=l[b])=="function")j=j(a),j==null||j==p?j="":typeof j!="string"&&(j=ha(j));z[b]=j}return z.join("")}catch(g){d(Error("Error while interpolating: "+e+"\n"+g.toString()))}},k.exp=e,k.parts=l,k}var g=b.length,i=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Mb(b){for(var b=b.split("/"),
a=b.length;a--;)b[a]=ab(b[a]);return b.join("/")}function Nb(b,a){var c=jb.exec(b);a.$$protocol=c[1];a.$$host=c[3];a.$$port=N(c[5])||Oa[c[1]]||null}function Ob(b,a){var c=Pb.exec(b);a.$$path=decodeURIComponent(c[1]);a.$$search=vb(c[3]);a.$$hash=decodeURIComponent(c[5]||"");if(a.$$path&&a.$$path.charAt(0)!="/")a.$$path="/"+a.$$path}function fa(b,a,c){return a.indexOf(b)==0?a.substr(b.length):c}function Ca(b){var a=b.indexOf("#");return a==-1?b:b.substr(0,a)}function kb(b){return b.substr(0,Ca(b).lastIndexOf("/")+
1)}function Qb(b,a){var a=a||"",c=kb(b);this.$$parse=function(a){var b={};Nb(a,b);var g=fa(c,a);if(!E(g))throw Error('Invalid url "'+a+'", missing path prefix "'+c+'".');Ob(g,b);t(this,b);if(!this.$$path)this.$$path="/";this.$$compose()};this.$$compose=function(){var a=wb(this.$$search),b=this.$$hash?"#"+ab(this.$$hash):"";this.$$url=Mb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=fa(b,d))!==p)return d=e,(e=fa(a,e))!==p?c+(fa("/",e)||e):
b+d;else if((e=fa(c,d))!==p)return c+e;else if(c==d+"/")return c}}function lb(b,a){var c=kb(b);this.$$parse=function(d){Nb(d,this);var e=fa(b,d)||fa(c,d);if(!E(e))throw Error('Invalid url "'+d+'", does not start with "'+b+'".');e=e.charAt(0)=="#"?fa(a,e):e;if(!E(e))throw Error('Invalid url "'+d+'", missing hash prefix "'+a+'".');Ob(e,this);this.$$compose()};this.$$compose=function(){var c=wb(this.$$search),e=this.$$hash?"#"+ab(this.$$hash):"";this.$$url=Mb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ca(b)==Ca(a))return a}}function Rb(b,a){lb.apply(this,arguments);var c=kb(b);this.$$rewrite=function(d){var e;if(b==Ca(d))return d;else if(e=fa(c,d))return b+a+e;else if(c===d+"/")return c}}function Pa(b){return function(){return this[b]}}function Sb(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Nc(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?
(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function i(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,h=d.baseHref(),j=d.url();a?(h=h?j.substring(0,j.indexOf("/",j.indexOf("//")+2))+h:j,e=e.history?Qb:Rb):(h=Ca(j),e=lb);f=new e(h,"#"+b);f.$$parse(f.$$rewrite(j));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=w(a.target);I(b[0].nodeName)!=="a";)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href"),
j=f.$$rewrite(e);e&&!b.attr("target")&&j&&!a.isDefaultPrevented()&&(a.preventDefault(),j!=d.url()&&(f.$$parse(j),c.$apply(),M.angular["ff-684208-preventDefault"]=!0))}});f.absUrl()!=j&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,f.absUrl()).defaultPrevented?d.url(f.absUrl()):(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);i(b)}),c.$$phase||c.$digest()))});var m=0;c.$watch(function(){var a=d.url(),b=f.$$replace;if(!m||a!=f.absUrl())m++,
c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),b),i(a))});f.$$replace=!1;return m});return f}]}function Oc(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
c.console||{},e=b[a]||b.log||q;return e.apply?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,b)}}return{log:e("log"),warn:e("warn"),info:e("info"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Pc(b,a){function c(a){return a.indexOf(r)!=-1}function d(a){a=a||1;return o+a<b.length?b.charAt(o+a):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||
a=="\u000b"||a=="\u00a0"}function i(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function h(a,c,d){d=d||o;throw Error("Lexer Error: "+a+" at column"+(B(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function j(){for(var a="",c=o;o<b.length;){var j=I(b.charAt(o));if(j=="."||e(j))a+=j;else{var g=d();if(j=="e"&&f(g))a+=j;else if(f(j)&&g&&e(g)&&a.charAt(a.length-1)=="e")a+=j;else if(f(j)&&(!g||!e(g))&&a.charAt(a.length-
1)=="e")h("Invalid exponent");else break}o++}a*=1;l.push({index:c,text:a,json:!0,fn:function(){return a}})}function m(){for(var c="",d=o,f,j,h,k;o<b.length;){k=b.charAt(o);if(k=="."||i(k)||e(k))k=="."&&(f=o),c+=k;else break;o++}if(f)for(j=o;j<b.length;){k=b.charAt(j);if(k=="("){h=c.substr(f-d+1);c=c.substr(0,f-d);o=j;break}if(g(k))j++;else break}d={index:d,text:c};if(Da.hasOwnProperty(c))d.fn=d.json=Da[c];else{var m=Tb(c,a);d.fn=t(function(a,b){return m(a,b)},{assign:function(a,b){return Ub(a,c,b)}})}l.push(d);
h&&(l.push({index:f,text:".",json:!1}),l.push({index:f+1,text:h,json:!1}))}function k(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var j=b.charAt(o);e+=j;if(f)j=="u"?(j=b.substring(o+1,o+5),j.match(/[\da-f]{4}/i)||h("Invalid unicode escape [\\u"+j+"]"),o+=4,d+=String.fromCharCode(parseInt(j,16))):(f=Qc[j],d+=f?f:j),f=!1;else if(j=="\\")f=!0;else if(j==a){o++;l.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=j;o++}h("Unterminated quote",c)}for(var l=[],u,o=0,z=[],
r,y=":";o<b.length;){r=b.charAt(o);if(c("\"'"))k(r);else if(e(r)||c(".")&&e(d()))j();else if(i(r)){if(m(),"{,".indexOf(y)!=-1&&z[0]=="{"&&(u=l[l.length-1]))u.json=u.text.indexOf(".")==-1}else if(c("(){}[].,;:?"))l.push({index:o,text:r,json:":[,".indexOf(y)!=-1&&c("{[")||c("}]:,")}),c("{[")&&z.unshift(r),c("}]")&&z.shift(),o++;else if(g(r)){o++;continue}else{var x=r+d(),n=x+d(2),v=Da[r],A=Da[x],G=Da[n];G?(l.push({index:o,text:n,fn:G}),o+=3):A?(l.push({index:o,text:x,fn:A}),o+=2):v?(l.push({index:o,
text:r,fn:v,json:"[,:".indexOf(y)!=-1&&c("+-")}),o+=1):h("Unexpected next character ",o,o+1)}y=r}return l}function Rc(b,a,c,d){function e(a,c){throw Error("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(O.length===0)throw Error("Unexpected end of expression: "+b);return O[0]}function i(a,b,c,d){if(O.length>0){var e=O[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,
c,d,f){return(b=i(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),O.shift(),b):!1}function h(a){f(a)||e("is unexpected, expecting ["+a+"]",i())}function j(a,b){return t(function(c,d){return a(c,d,b)},{constant:b.constant})}function m(a,b,c){return t(function(d,e){return a(d,e)?b(d,e):c(d,e)},{constant:a.constant&&b.constant&&c.constant})}function k(a,b,c){return t(function(d,e){return b(d,e,a,c)},{constant:a.constant&&c.constant})}function l(){for(var a=[];;)if(O.length>0&&!i("}",")",";","]")&&a.push(w()),
!f(";"))return a.length==1?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function u(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(P());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function o(){var a=z(),b,c;if(f("?"))if(b=o(),c=f(":"))return m(a,b,o());else e("expected :",c);else return a}function z(){for(var a=r(),b;;)if(b=f("||"))a=k(a,b.fn,r());else return a}function r(){var a=
y(),b;if(b=f("&&"))a=k(a,b.fn,r());return a}function y(){var a=x(),b;if(b=f("==","!=","===","!=="))a=k(a,b.fn,y());return a}function x(){var a;a=n();for(var b;b=f("+","-");)a=k(a,b.fn,n());if(b=f("<",">","<=",">="))a=k(a,b.fn,x());return a}function n(){for(var a=v(),b;b=f("*","/","%");)a=k(a,b.fn,v());return a}function v(){var a;return f("+")?A():(a=f("-"))?k($,a.fn,v()):(a=f("!"))?j(a.fn,v()):A()}function A(){var a;if(f("("))a=w(),h(")");else if(f("["))a=G();else if(f("{"))a=D();else{var b=f();(a=
b.fn)||e("not a primary expression",b);if(b.json)a.constant=a.literal=!0}for(var c;b=f("(","[",".");)b.text==="("?(a=s(a,c),c=null):b.text==="["?(c=a,a=ma(a)):b.text==="."?(c=a,a=ja(a)):e("IMPOSSIBLE");return a}function G(){var a=[],b=!0;if(g().text!="]"){do{var c=P();a.push(c);c.constant||(b=!1)}while(f(","))}h("]");return t(function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d},{literal:!0,constant:b})}function D(){var a=[],b=!0;if(g().text!="}"){do{var c=f(),c=c.string||c.text;
h(":");var d=P();a.push({key:c,value:d});d.constant||(b=!1)}while(f(","))}h("}");return t(function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e];d[f.key]=f.value(b,c)}return d},{literal:!0,constant:b})}var $=S(0),K,O=Pc(b,d),P=function(){var a=o(),c,d;return(d=f("="))?(a.assign||e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=o(),function(b,d){return a.assign(b,c(b,d),d)}):a},s=function(a,b){var c=[];if(g().text!=")"){do c.push(P());while(f(","))}h(")");return function(d,
e){for(var f=[],j=b?b(d,e):d,g=0;g<c.length;g++)f.push(c[g](d,e));g=a(d,e,j)||q;return g.apply?g.apply(j,f):g(f[0],f[1],f[2],f[3],f[4])}},ja=function(a){var b=f().text,c=Tb(b,d);return t(function(b,d,e){return c(e||a(b,d),d)},{assign:function(c,d,e){return Ub(a(c,e),b,d)}})},ma=function(a){var b=P();h("]");return t(function(c,d){var e=a(c,d),f=b(c,d),j;if(!e)return p;if((e=e[f])&&e.then){j=e;if(!("$$v"in e))j.$$v=p,j.then(function(a){j.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,
e)[b(c,e)]=d}})},w=function(){for(var a=P(),b;;)if(b=f("|"))a=k(a,b.fn,u());else return a};a?(P=z,s=ja=ma=w=function(){e("is not valid json",{text:b,index:0})},K=A()):K=l();O.length!==0&&e("is an unexpected token",O[0]);K.literal=!!K.literal;K.constant=!!K.constant;return K}function Ub(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function ib(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,i=0;i<g;i++)d=a[i],b&&(b=
(e=b)[d]);return!c&&H(b)?$a(e,b):b}function Vb(b,a,c,d,e){return function(g,i){var f=i&&i.hasOwnProperty(b)?i:g,h;if(f===null||f===p)return f;if((f=f[b])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!a||f===null||f===p)return f;if((f=f[a])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!c||f===null||f===p)return f;if((f=f[c])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!d||f===null||f===p)return f;if((f=
f[d])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!e||f===null||f===p)return f;if((f=f[e])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}return f}}function Tb(b,a){if(mb.hasOwnProperty(b))return mb[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Vb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,j;do j=Vb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=p,a=j;while(e<d);return j};else{var g="var l, fn, p;\n";n(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+
(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return mb[b]=e}function Sc(){var b={};this.$get=["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Rc(d,!1,a,c.csp);case "function":return d;default:return q}}}]}function Tc(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return Uc(function(a){b.$evalAsync(a)},a)}]}function Uc(b,a){function c(a){return a}function d(a){return i(a)}var e=function(){var f=[],h,j;return j={resolve:function(a){if(f){var c=f;f=p;h=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1])})}},reject:function(a){j.resolve(i(a))},promise:{then:function(b,j){var g=e(),i=function(d){try{g.resolve((b||c)(d))}catch(e){a(e),g.reject(e)}},o=function(b){try{g.resolve((j||
d)(b))}catch(c){a(c),g.reject(c)}};f?f.push([i,o]):h.then(i,o);return g.promise},always:function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var j=null;try{j=(a||c)()}catch(g){return b(g,!1)}return j&&j.then?j.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},
i=function(a){return{then:function(c,j){var g=e();b(function(){g.resolve((j||d)(a))});return g.promise}}};return{defer:e,reject:i,when:function(f,h,j){var m=e(),k,l=function(b){try{return(h||c)(b)}catch(d){return a(d),i(d)}},u=function(b){try{return(j||d)(b)}catch(c){return a(c),i(c)}};b(function(){g(f).then(function(a){k||(k=!0,m.resolve(g(a).then(l,u)))},function(a){k||(k=!0,m.resolve(u(a)))})});return m.promise},all:function(a){var b=e(),c=0,d=F(a)?[]:{};n(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});c===0&&b.resolve(d);return b.promise}}}function Vc(){var b={};this.when=function(a,c){b[a]=t({reloadOnSearch:!0,caseInsensitiveMatch:!1},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,i,f){function h(a,b,c){for(var b=
"^"+b.replace(/[-\/\\^$:*+?.()|[\]{}]/g,"\\$&")+"$",d="",e=[],f={},j=/\\([:*])(\w+)/g,g,i=0;(g=j.exec(b))!==null;){d+=b.slice(i,g.index);switch(g[1]){case ":":d+="([^\\/]*)";break;case "*":d+="(.*)"}e.push(g[2]);i=j.lastIndex}d+=b.substr(i);var h=a.match(RegExp(d,c.caseInsensitiveMatch?"i":""));h&&n(e,function(a,b){f[a]=h[b+1]});return h?f:null}function j(){var b=m(),j=u.current;if(b&&j&&b.$$route===j.$$route&&ia(b.pathParams,j.pathParams)&&!b.reloadOnSearch&&!l)j.params=b.params,V(j.params,d),a.$broadcast("$routeUpdate",
j);else if(b||j)l=!1,a.$broadcast("$routeChangeStart",b,j),(u.current=b)&&b.redirectTo&&(E(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=t({},b.resolve),c;n(a,function(b,c){a[c]=E(b)?g.get(b):g.invoke(b)});if(B(c=b.template))H(c)&&(c=c(b.params));else if(B(c=b.templateUrl))if(H(c)&&(c=c(b.params)),B(c))b.loadedTemplateUrl=c,c=i.get(c,{cache:f}).then(function(a){return a.data});
B(c)&&(a.$template=c);return e.all(a)}}).then(function(c){if(b==u.current){if(b)b.locals=c,V(b.params,d);a.$broadcast("$routeChangeSuccess",b,j)}},function(c){b==u.current&&a.$broadcast("$routeChangeError",b,j,c)})}function m(){var a,d;n(b,function(b,e){if(!d&&(a=h(c.path(),e,b)))d=tb(b,{params:t({},c.search(),a),pathParams:a}),d.$$route=b});return d||b[null]&&tb(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];n((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=!1,u={routes:b,reload:function(){l=!0;a.$evalAsync(j)}};a.$on("$locationChangeSuccess",j);return u}]}function Wc(){this.$get=S({})}function Xc(){var b=10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=Fa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;
this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$listeners={};this.$$isolateBindings={}}function g(a){if(h.$$phase)throw Error(h.$$phase+" already in progress");h.$$phase=a}function i(a,b){var c=d(a);xa(c,b);return c}function f(){}e.prototype={$new:function(a){if(H(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=Fa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=
a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=i(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!H(b)){var h=i(b||q,"listener");g.fn=function(a,b,c){h(c)}}if(typeof a=="string"&&d.constant){var r=g.fn;g.fn=function(a,b,c){r.call(this,a,b,c);ta(e,g)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){ta(e,
g)}},$watchCollection:function(a,b){var c=this,e,f,g=0,i=d(a),h=[],n={},x=0;return this.$watch(function(){f=i(c);var a,b;if(L(f))if(Xa(f)){if(e!==h)e=h,x=e.length=0,g++;a=f.length;if(x!==a)g++,e.length=x=a;for(b=0;b<a;b++)e[b]!==f[b]&&(g++,e[b]=f[b])}else{e!==n&&(e=n={},x=0,g++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==f[b]&&(g++,e[b]=f[b]):(x++,e[b]=f[b],g++));if(x>a)for(b in g++,e)e.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(x--,delete e[b])}else e!==f&&(e=f,g++);return g},
function(){b(f,e,c)})},$digest:function(){var a,d,e,i,u=this.$$asyncQueue,o,z,r=b,n,x=[],p,v;g("$digest");do{z=!1;for(n=this;u.length;)try{n.$eval(u.shift())}catch(A){c(A)}do{if(i=n.$$watchers)for(o=i.length;o--;)try{if(a=i[o],(d=a.get(n))!==(e=a.last)&&!(a.eq?ia(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))z=!0,a.last=a.eq?V(d):d,a.fn(d,e===f?d:e,n),r<5&&(p=4-r,x[p]||(x[p]=[]),v=H(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,v+="; newVal: "+ha(d)+"; oldVal: "+ha(e),x[p].push(v))}catch(G){c(G)}if(!(i=
n.$$childHead||n!==this&&n.$$nextSibling))for(;n!==this&&!(i=n.$$nextSibling);)n=n.$parent}while(n=i);if(z&&!r--)throw h.$$phase=null,Error(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ha(x));}while(z||u.length);h.$$phase=null},$destroy:function(){if(!(h==this||this.$$destroyed)){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;
if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{h.$$phase=null;try{h.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[Ga(c,b)]=null}},$emit:function(a,b){var d=[],e,f=this,g=!1,i={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},h=[i].concat(ka.call(arguments,1)),n,x;do{e=f.$$listeners[a]||d;i.currentScope=f;n=0;for(x=e.length;n<x;n++)if(e[n])try{if(e[n].apply(null,h),g)return i}catch(p){c(p)}else e.splice(n,1),n--,x--;f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=
this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ka.call(arguments,1)),i,h;do{d=e;f.currentScope=d;e=d.$$listeners[a]||[];i=0;for(h=e.length;i<h;i++)if(e[i])try{e[i].apply(null,g)}catch(n){c(n)}else e.splice(i,1),i--,h--;if(!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}while(d=e);return f}};var h=new e;return h}]}function Yc(){this.$get=["$window","$document",function(b,a){var c=
{},d=N((/android (\d+)/.exec(I((b.navigator||{}).userAgent))||[])[1]),e=a[0]||{},g,i=/^(Moz|webkit|O|ms)(?=[A-Z])/,f=e.body&&e.body.style,h=!1,j=!1;if(f){for(var m in f)if(h=i.exec(m)){g=h[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}h=!!("transition"in f||g+"Transition"in f);j=!!("animation"in f||g+"Animation"in f)}return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||e.documentMode>7),hasEvent:function(a){if(a=="input"&&Z==9)return!1;if(C(c[a])){var b=
e.createElement("div");c[a]="on"+a in b}return c[a]},csp:e.securityPolicy?e.securityPolicy.isActive:!1,vendorPrefix:g,transitions:h,animations:j}}]}function Zc(){this.$get=S(M)}function Wb(b){var a={},c,d,e;if(!b)return a;n(b.split("\n"),function(b){e=b.indexOf(":");c=I(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function $c(b,a){var c=ad.exec(b);if(c==null)return!0;var d={protocol:c[2],host:c[4],port:N(c[6])||Oa[c[2]]||null,relativeProtocol:c[2]===p||c[2]===""},
c=jb.exec(a),c={protocol:c[1],host:c[3],port:N(c[5])||Oa[c[1]]||null};return(d.protocol==c.protocol||d.relativeProtocol)&&d.host==c.host&&(d.port==c.port||d.relativeProtocol&&c.port==Oa[c.protocol])}function Xb(b){var a=L(b)?b:p;return function(c){a||(a=Wb(b));return c?a[I(c)]||null:a}}function Yb(b,a,c){if(H(c))return c(b,a);n(c,function(c){b=c(b,a)});return b}function bd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults=
{transformResponse:[function(d){E(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ub(d,!0)));return d}],transformRequest:[function(a){return L(a)&&Ea.apply(a)!=="[object File]"?ha(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],i=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,k,l){function u(a){function c(a){var b=
t({},a,{data:Yb(a.data,a.headers,d.transformResponse)});return 200<=a.status&&a.status<300?b:k.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},f={};t(d,a);d.headers=f;d.method=oa(d.method);t(f,e.headers.common,e.headers[I(d.method)],a.headers);(a=$c(d.url,b.url())?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:p)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){var b=Yb(a.data,Xb(f),a.transformRequest);C(a.data)&&delete f["Content-Type"];if(C(a.withCredentials)&&
!C(e.withCredentials))a.withCredentials=e.withCredentials;return o(a,b,f).then(c,c)},p],j=k.when(d);for(n(y,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;)var a=g.shift(),i=g.shift(),j=j.then(a,i);j.success=function(a){j.then(function(b){a(b.data,b.status,b.headers,d)});return j};j.error=function(a){j.then(null,function(b){a(b.data,b.status,b.headers,d)});return j};return j}function o(b,c,g){function j(a,
b,c){n&&(200<=a&&a<300?n.put(s,[a,b,Wb(c)]):n.remove(s));i(b,a,c);d.$$phase||d.$apply()}function i(a,c,d){c=Math.max(c,0);(200<=c&&c<300?l.resolve:l.reject)({data:a,status:c,headers:Xb(d),config:b})}function h(){var a=Ga(u.pendingRequests,b);a!==-1&&u.pendingRequests.splice(a,1)}var l=k.defer(),o=l.promise,n,p,s=z(b.url,b.params);u.pendingRequests.push(b);o.then(h,h);if((b.cache||e.cache)&&b.cache!==!1&&b.method=="GET")n=L(b.cache)?b.cache:L(e.cache)?e.cache:r;if(n)if(p=n.get(s))if(p.then)return p.then(h,
h),p;else F(p)?i(p[1],p[0],V(p[2])):i(p,200,{});else n.put(s,o);p||a(b.method,s,c,j,g,b.timeout,b.withCredentials,b.responseType);return o}function z(a,b){if(!b)return a;var c=[];nc(b,function(a,b){a==null||a==p||(F(a)||(a=[a]),n(a,function(a){L(a)&&(a=ha(a));c.push(wa(b)+"="+wa(a))}))});return a+(a.indexOf("?")==-1?"?":"&")+c.join("&")}var r=c("$http"),y=[];n(g,function(a){y.unshift(E(a)?l.get(a):l.invoke(a))});n(i,function(a,b){var c=E(a)?l.get(a):l.invoke(a);y.splice(b,0,{response:function(a){return c(k.when(a))},
responseError:function(a){return c(k.reject(a))}})});u.pendingRequests=[];(function(a){n(arguments,function(a){u[a]=function(b,c){return u(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){u[a]=function(b,c,d){return u(t(d||{},{method:a,url:b,data:c}))}})})("post","put");u.defaults=e;return u}]}function cd(){this.$get=["$browser","$window","$document",function(b,a,c){return dd(b,ed,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}
function dd(b,a,c,d,e,g){function i(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Z?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c);return d}return function(e,h,j,m,k,l,u,o){function z(){p=-1;t&&t();v&&v.abort()}function r(a,d,e,f){var j=(h.match(jb)||["",g])[1];A&&c.cancel(A);t=v=null;d=j=="file"?e?200:404:d;a(d==1223?204:d,e,f);b.$$completeOutstandingRequest(q)}
var p;b.$$incOutstandingRequestCount();h=h||b.url();if(I(e)=="jsonp"){var x="_"+(d.counter++).toString(36);d[x]=function(a){d[x].data=a};var t=i(h.replace("JSON_CALLBACK","angular.callbacks."+x),function(){d[x].data?r(m,200,d[x].data):r(m,p||-2);delete d[x]})}else{var v=new a;v.open(e,h,!0);n(k,function(a,b){a&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v.readyState==4){var a=v.getAllResponseHeaders(),b=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified",
"Pragma"];a||(a="",n(b,function(b){var c=v.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));r(m,p||v.status,v.responseType?v.response:v.responseText,a)}};if(u)v.withCredentials=!0;if(o)v.responseType=o;v.send(j||"")}if(l>0)var A=c(z,l);else l&&l.then&&l.then(z)}}function fd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",
posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",
mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function gd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,h){var j=c.defer(),m=j.promise,k=B(h)&&!h,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}k||b.$apply()},f),h=function(){delete g[m.$$timeoutId]};m.$$timeoutId=f;g[f]=j;m.then(h,h);return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in
g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Zb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",$b);a("date",ac);a("filter",hd);a("json",id);a("limitTo",jd);a("lowercase",kd);a("number",bc);a("orderBy",cc);a("uppercase",ld)}function hd(){return function(b,a,c){if(!F(b))return b;var d=[];d.check=function(a){for(var b=0;b<d.length;b++)if(!d[b](a))return!1;
return!0};switch(typeof c){case "function":break;case "boolean":if(c==!0){c=function(a,b){return Ha.equals(a,b)};break}default:c=function(a,b){b=(""+b).toLowerCase();return(""+a).toLowerCase().indexOf(b)>-1}}var e=function(a,b){if(typeof b=="string"&&b.charAt(0)==="!")return!e(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if(d.charAt(0)!=="$"&&e(a[d],b))return!0}return!1;case "array":for(d=
0;d<a.length;d++)if(e(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)g=="$"?function(){if(a[g]){var b=g;d.push(function(c){return e(c,a[b])})}}():function(){if(a[g]){var b=g;d.push(function(c){return e(ib(c,b),a[b])})}}();break;case "function":d.push(a);break;default:return b}for(var i=[],f=0;f<b.length;f++){var h=b[f];d.check(h)&&i.push(h)}return i}}function $b(b){var a=b.NUMBER_FORMATS;return function(b,
d){if(C(d))d=a.CURRENCY_SYM;return dc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function bc(b){var a=b.NUMBER_FORMATS;return function(b,d){return dc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function dc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),i=b+"",f="",h=[],j=!1;if(i.indexOf("e")!==-1){var m=i.match(/([\d\.]+)e(-?)(\d+)/);m&&m[2]=="-"&&m[3]>e+1?i="0":(f=i,j=!0)}if(!j){i=(i.split(ec)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,i),
a.maxFrac));var i=Math.pow(10,e),b=Math.round(b*i)/i,b=(""+b).split(ec),i=b[0],b=b[1]||"",j=0,m=a.lgSize,k=a.gSize;if(i.length>=m+k)for(var j=i.length-m,l=0;l<j;l++)(j-l)%k===0&&l!==0&&(f+=c),f+=i.charAt(l);for(l=j;l<i.length;l++)(i.length-l)%m===0&&l!==0&&(f+=c),f+=i.charAt(l);for(;b.length<e;)b+="0";e&&e!=="0"&&(f+=d+b.substr(0,e))}h.push(g?a.negPre:a.posPre);h.push(f);h.push(g?a.negSuf:a.posSuf);return h.join("")}function nb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=
b.substr(b.length-a));return d+b}function Q(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return nb(e,a,d)}}function Qa(b,a){return function(c,d){var e=c["get"+b](),g=oa(a?"SHORT"+b:b);return d[g][e]}}function ac(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,i=0,f=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=N(b[9]+b[10]),i=N(b[9]+b[11]));f.call(a,N(b[1]),N(b[2])-1,N(b[3]));g=N(b[4]||0)-g;i=N(b[5]||0)-i;f=
N(b[6]||0);b=Math.round(parseFloat("0."+(b[7]||0))*1E3);h.call(a,g,i,f,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",i=[],f,h,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;E(c)&&(c=md.test(c)?N(c):a(c));Ya(c)&&(c=new Date(c));if(!ra(c))return c;for(;e;)(h=nd.exec(e))?(i=i.concat(ka.call(h,1)),e=i.pop()):(i.push(e),e=null);n(i,function(a){f=od[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return g}}function id(){return function(b){return ha(b,!0)}}function jd(){return function(b,a){if(!F(b)&&!E(b))return b;a=N(a);if(E(b))return a?a>=0?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function cc(b){return function(a,c,d){function e(a,b){return ua(b)?function(b,c){return a(c,b)}:a}if(!F(a))return a;if(!c)return a;for(var c=F(c)?c:[c],c=
Za(c,function(a){var c=!1,d=a||qa;if(E(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?(f=="string"&&(c=c.toLowerCase()),f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],i=0;i<a.length;i++)g.push(a[i]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function aa(b){H(b)&&(b={link:b});b.restrict=b.restrict||
"AC";return S(b)}function fc(b,a){function c(a,c){c=c?"-"+bb(c,"-"):"";b.removeClass((a?Ra:Sa)+c).addClass((a?Sa:Ra)+c)}var d=this,e=b.parent().controller("form")||Ta,g=0,i=d.$error={},f=[];d.$name=a.name;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(pa);c(!0);d.$addControl=function(a){f.push(a);a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];n(i,function(b,c){d.$setValidity(c,!0,a)});ta(f,
a)};d.$setValidity=function(a,b,f){var k=i[a];if(b){if(k&&(ta(k,f),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;i[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(Ga(k,f)!=-1)return}else i[a]=k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(f);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(pa).addClass(Ua);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(Ua).addClass(pa);d.$dirty=!1;d.$pristine=!0;n(f,function(a){a.$setPristine()})}}
function X(b){return C(b)||b===""||b===null||b!==b}function Va(b,a,c,d,e,g){var i=function(){var e=a.val();if(ua(c.ngTrim||"T"))e=U(e);d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})};if(e.hasEvent("input"))a.bind("input",i);else{var f,h=function(){f||(f=g.defer(function(){i();f=null}))};a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||h()});a.bind("change",i);e.hasEvent("paste")&&a.bind("paste cut",h)}d.$render=function(){a.val(X(d.$viewValue)?"":d.$viewValue)};
var j=c.ngPattern,m=function(a,b){return X(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),p)};j&&((e=j.match(/^\/(.*)\/([gim]*)$/))?(j=RegExp(e[1],e[2]),e=function(a){return m(j,a)}):e=function(a){var c=b.$eval(j);if(!c||!c.test)throw Error("Expected "+j+" to be a RegExp but was "+c);return m(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var k=N(c.ngMinlength),e=function(a){return!X(a)&&a.length<k?(d.$setValidity("minlength",!1),p):(d.$setValidity("minlength",
!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=N(c.ngMaxlength),e=function(a){return!X(a)&&a.length>l?(d.$setValidity("maxlength",!1),p):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}}function ob(b,a){b="ngClass"+b;return aa(function(c,d,e){function g(b){if(a===!0||c.$index%2===a)h&&!ia(b,h)&&i(h),f(b);h=V(b)}function i(a){L(a)&&!F(a)&&(a=Za(a,function(a,b){if(a)return b}));d.removeClass(F(a)?a.join(" "):a)}function f(a){L(a)&&!F(a)&&(a=Za(a,
function(a,b){if(a)return b}));a&&d.addClass(F(a)?a.join(" "):a)}var h=p;c.$watch(e[b],g,!0);e.$observe("class",function(){var a=c.$eval(e[b]);g(a,a)});b!=="ngClass"&&c.$watch("$index",function(d,g){var h=d&1;h!==g&1&&(h===a?f(c.$eval(e[b])):i(c.$eval(e[b])))})})}var I=function(b){return E(b)?b.toLowerCase():b},oa=function(b){return E(b)?b.toUpperCase():b},Z=N((/msie (\d+)/.exec(I(navigator.userAgent))||[])[1]),w,ga,ka=[].slice,Wa=[].push,Ea=Object.prototype.toString,mc=M.angular,Ha=M.angular||(M.angular=
{}),Aa,hb,ba=["0","0","0"];q.$inject=[];qa.$inject=[];hb=Z<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?oa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var sc=/[A-Z]/g,pd={full:"1.1.5",major:1,minor:1,dot:5,codeName:"triangle-squarification"},Ka=R.cache={},Ja=R.expando="ng-"+(new Date).getTime(),wc=1,gc=M.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},gb=
M.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},uc=/([\:\-\_]+(.))/g,vc=/^moz([A-Z])/,Ba=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;T.readyState==="complete"?setTimeout(a):(this.bind("DOMContentLoaded",a),R(M).bind("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?w(this[b]):w(this[this.length+b])},length:0,push:Wa,sort:[].sort,
splice:[].splice},Na={};n("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(b){Na[I(b)]=b});var Gb={};n("input,select,option,textarea,button,form,details".split(","),function(b){Gb[oa(b)]=!0});n({data:Bb,inheritedData:Ma,scope:function(b){return Ma(b,"$scope")},controller:Eb,injector:function(b){return Ma(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:La,css:function(b,a,c){a=Ia(a);if(B(c))b.style[a]=c;else{var d;Z<=8&&(d=b.currentStyle&&b.currentStyle[a],
d===""&&(d="auto"));d=d||b.style[a];Z<=8&&(d=d===""?p:d);return d}},attr:function(b,a,c){var d=I(a);if(Na[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||q).specified?d:p;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?p:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:t(Z<9?function(b,a){if(b.nodeType==1){if(C(a))return b.innerText;b.innerText=a}else{if(C(a))return b.nodeValue;
b.nodeValue=a}}:function(b,a){if(C(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(C(a))return b.value;b.value=a},html:function(b,a){if(C(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)ya(d[c]);b.innerHTML=a}},function(b,a){R.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==La&&b!==Eb?a:d)===p)if(L(a)){for(e=0;e<this.length;e++)if(b===Bb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<
this.length;e++)b(this[e],a,d);return this}return b.$dv}});n({removeData:zb,dealoc:ya,bind:function a(c,d,e){var g=ca(c,"events"),i=ca(c,"handle");g||ca(c,"events",g={});i||ca(c,"handle",i=xc(c,g));n(d.split(" "),function(d){var h=g[d];if(!h){if(d=="mouseenter"||d=="mouseleave"){var j=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=a.nodeType===9?a.documentElement:a,e=c&&c.parentNode;return a===e||!(!e||!(e.nodeType===1&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&
16)))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;(!c||c!==this&&!j(this,c))&&i(a,d)})}else gc(c,d,i),g[d]=[];h=g[d]}h.push(e)})},unbind:Ab,replaceWith:function(a,c){var d,e=a.parentNode;ya(a);n(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===1&&c.push(a)});return c},contents:function(a){return a.childNodes||
[]},append:function(a,c){n(new R(c),function(c){(a.nodeType===1||a.nodeType===11)&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;n(new R(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=w(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){ya(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;n(new R(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Db,
removeClass:Cb,toggleClass:function(a,c,d){C(d)&&(d=!La(a,c));(d?Db:Cb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;a!=null&&a.nodeType!==1;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:fb,triggerHandler:function(a,c){var d=(ca(a,"events")||{})[c];n(d,function(c){c.call(a,{preventDefault:q})})}},function(a,c){R.prototype[c]=function(c,e){for(var g,
i=0;i<this.length;i++)g==p?(g=a(this[i],c,e),g!==p&&(g=w(g))):eb(g,a(this[i],c,e));return g==p?this:g}});za.prototype={put:function(a,c){this[la(a)]=c},get:function(a){return this[la(a)]},remove:function(a){var c=this[a=la(a)];delete this[a];return c}};var zc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ac=/,/,Bc=/^\s*(_?)(\S+?)\1\s*$/,yc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;Ib.$inject=["$provide"];var qd=function(){var a="$ngAnimateController",c={running:!0};this.$get=["$animation","$window","$sniffer","$rootElement",
"$rootScope",function(d,e,g,i){i.data(a,c);i=function(c,i){function j(j,k,o){return function(m,r,p){function x(a){var c=0,a=E(a)?a.split(/\s*,\s*/):[];n(a,function(a){c=Math.max(parseFloat(a)||0,c)});return c}function t(){m.addClass(K);if($)$(m,v,P);else if(H(e.getComputedStyle)){var a=g.vendorPrefix+"Animation",c=g.vendorPrefix+"Transition",d=0;n(m,function(f){if(f.nodeType==1){var g="transition",i=c,j=1,h=e.getComputedStyle(f)||{};if(parseFloat(h.animationDuration)>0||parseFloat(h[a+"Duration"])>
0)g="animation",i=a,j=Math.max(parseInt(h[g+"IterationCount"])||0,parseInt(h[i+"IterationCount"])||0,j);f=Math.max(x(h[g+"Delay"]),x(h[i+"Delay"]));g=Math.max(x(h[g+"Duration"]),x(h[i+"Duration"]));d=Math.max(f+j*g,d)}});e.setTimeout(v,d*1E3)}else v()}function v(){if(!v.run)v.run=!0,o(m,r,p),m.removeClass(w),m.removeClass(K),m.removeData(a)}var A=c.$eval(i.ngAnimate),w=A?L(A)?A[j]:A+"-"+j:"",D=d(w),A=D&&D.setup,$=D&&D.start,D=D&&D.cancel;if(w){var K=w+"-active";r||(r=p?p.parent():m.parent());if(!g.transitions&&
!A&&!$||(r.inheritedData(a)||q).running)k(m,r,p),o(m,r,p);else{var O=m.data(a)||{};O.running&&((D||q)(m),O.done());m.data(a,{running:!0,done:v});m.addClass(w);k(m,r,p);if(m.length==0)return v();var P=(A||q)(m);e.setTimeout(t,1)}}else k(m,r,p),o(m,r,p)}}function m(a,c,d){d?d.after(a):c.append(a)}var k={};k.enter=j("enter",m,q);k.leave=j("leave",q,function(a){a.remove()});k.move=j("move",function(a,c,d){m(a,c,d)},q);k.show=j("show",function(a){a.css("display","")},q);k.hide=j("hide",q,function(a){a.css("display",
"none")});k.animate=function(a,c){j(a,q,q)(c)};return k};i.enabled=function(a){if(arguments.length)c.running=!a;return!c.running};return i}]},Kb="Non-assignable model expression: ";Jb.$inject=["$provide"];var Ic=/^(x[\:\-_]|data[\:\-_])/i,jb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,Pb=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Oa={http:80,https:443,ftp:21};Rb.prototype=lb.prototype=Qb.prototype={$$replace:!1,absUrl:Pa("$$absUrl"),url:function(a,c){if(C(a))return this.$$url;
var d=Pb.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Pa("$$protocol"),host:Pa("$$host"),port:Pa("$$port"),path:Sb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(C(a))return this.$$search;B(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=E(a)?vb(a):a;this.$$compose();return this},hash:Sb("$$hash",qa),replace:function(){this.$$replace=!0;return this}};var Da={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:q,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:p},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":q,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Qc={n:"\n",f:"\u000c",r:"\r",
t:"\t",v:"\u000b","'":"'",'"':'"'},mb={},ad=/^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/,ed=M.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");};Zb.$inject=["$provide"];$b.$inject=["$locale"];bc.$inject=["$locale"];var ec=".",od={yyyy:Q("FullYear",4),yy:Q("FullYear",
2,0,!0),y:Q("FullYear",1),MMMM:Qa("Month"),MMM:Qa("Month",!0),MM:Q("Month",2,1),M:Q("Month",1,1),dd:Q("Date",2),d:Q("Date",1),HH:Q("Hours",2),H:Q("Hours",1),hh:Q("Hours",2,-12),h:Q("Hours",1,-12),mm:Q("Minutes",2),m:Q("Minutes",1),ss:Q("Seconds",2),s:Q("Seconds",1),sss:Q("Milliseconds",3),EEEE:Qa("Day"),EEE:Qa("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){var a=-1*a.getTimezoneOffset(),c=a>=0?"+":"";c+=nb(Math[a>0?"floor":"ceil"](a/60),2)+nb(Math.abs(a%60),
2);return c}},nd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,md=/^\d+$/;ac.$inject=["$locale"];var kd=S(I),ld=S(oa);cc.$inject=["$parse"];var rd=S({restrict:"E",compile:function(a,c){Z<=8&&(!c.href&&!c.name&&c.$set("href",""),a.append(T.createComment("IE fix")));return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),pb={};n(Na,function(a,c){var d=da("ng-"+c);pb[d]=function(){return{priority:100,compile:function(){return function(a,
g,i){a.$watch(i[d],function(a){i.$set(c,!!a)})}}}}});n(["src","srcset","href"],function(a){var c=da("ng-"+a);pb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),Z&&e.prop(a,g[a]))})}}}});var Ta={$addControl:q,$removeControl:q,$setValidity:q,$setDirty:q,$setPristine:q};fc.$inject=["$element","$attrs","$scope"];var Wa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:fc,compile:function(){return{pre:function(a,d,i,f){if(!i.action){var h=
function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};gc(d[0],"submit",h);d.bind("$destroy",function(){c(function(){gb(d[0],"submit",h)},0,!1)})}var j=d.parent().controller("form"),m=i.name||i.ngForm;m&&(a[m]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);m&&(a[m]=p);t(f,Ta)})}}}};return a?t(V(d),{restrict:"EAC"}):d}]},sd=Wa(),td=Wa(!0),ud=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,vd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
wd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,hc={text:Va,number:function(a,c,d,e,g,i){Va(a,c,d,e,g,i);e.$parsers.push(function(a){var c=X(a);return c||wd.test(a)?(e.$setValidity("number",!0),a===""?null:c?a:parseFloat(a)):(e.$setValidity("number",!1),p)});e.$formatters.push(function(a){return X(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!X(a)&&a<f?(e.$setValidity("min",!1),p):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var h=parseFloat(d.max),
d=function(a){return!X(a)&&a>h?(e.$setValidity("max",!1),p):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return X(a)||Ya(a)?(e.$setValidity("number",!0),a):(e.$setValidity("number",!1),p)})},url:function(a,c,d,e,g,i){Va(a,c,d,e,g,i);a=function(a){return X(a)||ud.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,i){Va(a,c,d,e,g,i);a=function(a){return X(a)||vd.test(a)?
(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){C(d.name)&&c.attr("name",Fa());c.bind("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,i=d.ngFalseValue;E(g)||(g=!0);E(i)||(i=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});
e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:i})},hidden:q,button:q,submit:q,reset:q},ic=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,i){i&&(hc[I(g.type)]||hc.text)(d,e,g,i,c,a)}}}],Sa="ng-valid",Ra="ng-invalid",pa="ng-pristine",Ua="ng-dirty",xd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function i(a,c){c=c?"-"+bb(c,"-"):"";
e.removeClass((a?Ra:Sa)+c).addClass((a?Sa:Ra)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var f=g(d.ngModel),h=f.assign;if(!h)throw Error(Kb+d.ngModel+" ("+va(e)+")");this.$render=q;var j=e.inheritedData("$formController")||Ta,m=0,k=this.$error={};e.addClass(pa);i(!0);this.$setValidity=function(a,c){if(k[a]!==!c){if(c){if(k[a]&&m--,!m)i(!0),this.$valid=
!0,this.$invalid=!1}else i(!1),this.$invalid=!0,this.$valid=!1,m++;k[a]=!c;i(c,a);j.$setValidity(a,c,this)}};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(Ua).addClass(pa)};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=!1,e.removeClass(pa).addClass(Ua),j.$setDirty();n(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,h(a,d),n(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
var l=this;a.$watch(function(){var c=f(a);if(l.$modelValue!==c){var d=l.$formatters,e=d.length;for(l.$modelValue=c;e--;)c=d[e](c);if(l.$viewValue!==c)l.$viewValue=c,l.$render()}})}],yd=function(){return{require:["ngModel","^?form"],controller:xd,link:function(a,c,d,e){var g=e[0],i=e[1]||Ta;i.$addControl(g);c.bind("$destroy",function(){i.$removeControl(g)})}}},zd=S({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),jc=function(){return{require:"?ngModel",
link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(X(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Ad=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&n(a.split(g),function(a){a&&c.push(U(a))});return c});e.$formatters.push(function(a){return F(a)?
a.join(", "):p})}}},Bd=/^(true|false|\d+)$/,Cd=function(){return{priority:100,compile:function(a,c){return Bd.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},Dd=aa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==p?"":a)})}),Ed=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",
c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],Fd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],Gd=ob("",!0),Hd=ob("Odd",0),Id=ob("Even",1),Jd=aa({compile:function(a,c){c.$set("ngCloak",p);a.removeClass("ng-cloak")}}),Kd=[function(){return{scope:!0,controller:"@"}}],Ld=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],kc={};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress".split(" "),
function(a){var c=da("ng-"+a);kc[c]=["$parse",function(d){return function(e,g,i){var f=d(i[c]);g.bind(I(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Md=aa(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),Nd=["$animator",function(a){return{transclude:"element",priority:1E3,terminal:!0,restrict:"A",compile:function(c,d,e){return function(c,d,f){var h=a(c,f),j,m;c.$watch(f.ngIf,function(a){j&&(h.leave(j),j=p);m&&(m.$destroy(),m=p);ua(a)&&(m=c.$new(),e(m,function(a){j=
a;h.enter(a,d.parent(),d)}))})}}}}],Od=["$http","$templateCache","$anchorScroll","$compile","$animator",function(a,c,d,e,g){return{restrict:"ECA",terminal:!0,compile:function(i,f){var h=f.ngInclude||f.src,j=f.onload||"",m=f.autoscroll;return function(f,i,n){var o=g(f,n),p=0,r,t=function(){r&&(r.$destroy(),r=null);o.leave(i.contents(),i)};f.$watch(h,function(g){var h=++p;g?(a.get(g,{cache:c}).success(function(a){h===p&&(r&&r.$destroy(),r=f.$new(),o.leave(i.contents(),i),a=w("<div/>").html(a).contents(),
o.enter(a,i),e(a)(r),B(m)&&(!m||f.$eval(m))&&d(),r.$emit("$includeContentLoaded"),f.$eval(j))}).error(function(){h===p&&t()}),f.$emit("$includeContentRequested")):t()})}}}}],Pd=aa({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Qd=aa({terminal:!0,priority:1E3}),Rd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,i){var f=i.count,h=g.attr(i.$attr.when),j=i.offset||0,m=e.$eval(h),k={},l=c.startSymbol(),p=c.endSymbol();n(m,function(a,e){k[e]=
c(a.replace(d,l+f+"-"+j+p))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(c in m||(c=a.pluralCat(c-j)),k[c](e,g,!0))},function(a){g.text(a)})}}}],Sd=["$parse","$animator",function(a,c){return{transclude:"element",priority:1E3,terminal:!0,compile:function(d,e,g){return function(d,e,h){var j=c(d,h),m=h.ngRepeat,k=m.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),l,p,o,z,r,t={$id:la};if(!k)throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '"+
m+"'.");h=k[1];o=k[2];(k=k[4])?(l=a(k),p=function(a,c,e){r&&(t[r]=a);t[z]=c;t.$index=e;return l(d,t)}):p=function(a,c){return la(c)};k=h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+h+"'.");z=k[3]||k[1];r=k[2];var x={};d.$watchCollection(o,function(a){var c,h,k=e,l,o={},t,q,w,s,B,y,C=[];if(Xa(a))B=a;else{B=[];for(w in a)a.hasOwnProperty(w)&&w.charAt(0)!="$"&&B.push(w);B.sort()}t=B.length;h=
C.length=B.length;for(c=0;c<h;c++)if(w=a===B?c:B[c],s=a[w],l=p(w,s,c),x.hasOwnProperty(l))y=x[l],delete x[l],o[l]=y,C[c]=y;else if(o.hasOwnProperty(l))throw n(C,function(a){a&&a.element&&(x[a.id]=a)}),Error("Duplicates in a repeater are not allowed. Repeater: "+m+" key: "+l);else C[c]={id:l},o[l]=!1;for(w in x)if(x.hasOwnProperty(w))y=x[w],j.leave(y.element),y.element[0].$$NG_REMOVED=!0,y.scope.$destroy();c=0;for(h=B.length;c<h;c++){w=a===B?c:B[c];s=a[w];y=C[c];if(y.element){q=y.scope;l=k[0];do l=
l.nextSibling;while(l&&l.$$NG_REMOVED);y.element[0]!=l&&j.move(y.element,null,k);k=y.element}else q=d.$new();q[z]=s;r&&(q[r]=w);q.$index=c;q.$first=c===0;q.$last=c===t-1;q.$middle=!(q.$first||q.$last);y.element||g(q,function(a){j.enter(a,null,k);k=a;y.scope=q;y.element=a;o[y.id]=y})}x=o})}}}}],Td=["$animator",function(a){return function(c,d,e){var g=a(c,e);c.$watch(e.ngShow,function(a){g[ua(a)?"show":"hide"](d)})}}],Ud=["$animator",function(a){return function(c,d,e){var g=a(c,e);c.$watch(e.ngHide,
function(a){g[ua(a)?"hide":"show"](d)})}}],Vd=aa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Wd=["$animator",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var i=a(c,e),f,h,j=[];c.$watch(e.ngSwitch||e.on,function(a){for(var d=0,l=j.length;d<l;d++)j[d].$destroy(),i.leave(h[d]);h=[];j=[];if(f=g.cases["!"+a]||g.cases["?"])c.$eval(e.change),n(f,function(a){var d=
c.$new();j.push(d);a.transclude(d,function(c){var d=a.element;h.push(c);i.enter(c,d.parent(),d)})})})}}}],Xd=aa({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,g,i,f){f.cases["!"+c.ngSwitchWhen]=f.cases["!"+c.ngSwitchWhen]||[];f.cases["!"+c.ngSwitchWhen].push({transclude:d,element:g})}}}),Yd=aa({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,c,i,f){f.cases["?"]=f.cases["?"]||[];f.cases["?"].push({transclude:d,
element:c})}}}),Zd=aa({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),$d=["$http","$templateCache","$route","$anchorScroll","$compile","$controller","$animator",function(a,c,d,e,g,i,f){return{restrict:"ECA",terminal:!0,link:function(a,c,m){function k(){var f=d.current&&d.current.locals,k=f&&f.$template;if(k){o.leave(c.contents(),c);l&&(l.$destroy(),l=null);k=w("<div></div>").html(k).contents();o.enter(k,c);var k=g(k),m=d.current;l=m.scope=a.$new();if(m.controller)f.$scope=
l,f=i(m.controller,f),m.controllerAs&&(l[m.controllerAs]=f),c.children().data("$ngControllerController",f);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else o.leave(c.contents(),c),l&&(l.$destroy(),l=null)}var l,n=m.onload||"",o=f(a,m);a.$on("$routeChangeSuccess",k);k()}}}],ae=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],be=S({terminal:!0}),ce=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
e={$setViewValue:q};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,j={},m=e,k;h.databound=d.ngModel;h.init=function(a,c,d){m=a;k=d};h.addOption=function(c){j[c]=!0;m.$viewValue==c&&(a.val(c),k.parent()&&k.remove())};h.removeOption=function(a){this.hasOption(a)&&(delete j[a],m.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+la(c)+" ?";k.val(c);a.prepend(k);a.val(c);k.prop("selected",!0)};h.hasOption=
function(a){return j.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=q})}],link:function(e,i,f,h){function j(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),a===""&&t.prop("selected",!0)):C(a)&&t?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new za(d.$viewValue);n(c.find("option"),function(c){c.selected=
B(a.get(c.value))})};a.$watch(function(){ia(e,d.$viewValue)||(e=V(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function k(e,f,g){function i(){var a={"":[]},c=[""],d,h,q,v,s;q=g.$modelValue;v=u(e)||[];var z=l?qb(v):v,B,y,A;y={};s=!1;var C,D;if(o)if(t&&F(q)){s=new za([]);for(h=0;h<q.length;h++)y[k]=q[h],s.put(t(e,y),q[h])}else s=new za(q);for(A=0;B=z.length,A<B;A++){y[k]=v[l?y[l]=
z[A]:A];d=m(e,y)||"";if(!(h=a[d]))h=a[d]=[],c.push(d);o?d=s.remove(t?t(e,y):n(e,y))!=p:(t?(d={},d[k]=q,d=t(e,d)===t(e,y)):d=q===n(e,y),s=s||d);C=j(e,y);C=C===p?"":C;h.push({id:t?t(e,y):l?z[A]:A,label:C,selected:d})}o||(r||q===null?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(z=c.length;y<z;y++){d=c[y];h=a[d];if(w.length<=y)q={element:E.clone().attr("label",d),label:h.label},v=[q],w.push(v),f.append(q.element);else if(v=w[y],q=v[0],q.label!=d)q.element.attr("label",
q.label=d);C=null;A=0;for(B=h.length;A<B;A++)if(d=h[A],s=v[A+1]){C=s.element;if(s.label!==d.label)C.text(s.label=d.label);if(s.id!==d.id)C.val(s.id=d.id);if(C[0].selected!==d.selected)C.prop("selected",s.selected=d.selected)}else d.id===""&&r?D=r:(D=x.clone()).val(d.id).attr("selected",d.selected).text(d.label),v.push({element:D,label:d.label,id:d.id,selected:d.selected}),C?C.after(D):q.element.append(D),C=D;for(A++;v.length>A;)v.pop().element.remove()}for(;w.length>y;)w.pop()[0].element.remove()}
var h;if(!(h=q.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_ (track by _expr_)?' but got '"+q+"'.");var j=c(h[2]||h[1]),k=h[4]||h[6],l=h[5],m=c(h[3]||""),n=c(h[2]?h[1]:k),u=c(h[7]),t=h[8]?c(h[8]):null,w=[[{element:f,label:""}]];r&&(a(r)(e),r.removeClass("ng-scope"),r.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=u(e)||[],d={},h,i,j,m,q,r;if(o){i=[];m=0;for(r=w.length;m<r;m++){a=w[m];j=1;for(q=a.length;j<
q;j++)if((h=a[j].element)[0].selected){h=h.val();l&&(d[l]=h);if(t)for(var s=0;s<c.length;s++){if(d[k]=c[s],t(e,d)==h)break}else d[k]=c[h];i.push(n(e,d))}}}else if(h=f.val(),h=="?")i=p;else if(h=="")i=null;else if(t)for(s=0;s<c.length;s++){if(d[k]=c[s],t(e,d)==h){i=n(e,d);break}}else d[k]=c[h],l&&(d[l]=h),i=n(e,d);g.$setViewValue(i)})});g.$render=i;e.$watch(i)}if(h[1]){for(var l=h[0],u=h[1],o=f.multiple,q=f.ngOptions,r=!1,t,x=w(T.createElement("option")),E=w(T.createElement("optgroup")),v=x.clone(),
h=0,A=i.children(),G=A.length;h<G;h++)if(A[h].value==""){t=r=A.eq(h);break}l.init(u,r,v);if(o&&(f.required||f.ngRequired)){var D=function(a){u.$setValidity("required",!f.required||a&&a.length);return a};u.$parsers.push(D);u.$formatters.unshift(D);f.$observe("required",function(){D(u.$viewValue)})}q?k(e,i,u):o?m(e,i,u):j(e,i,u,l)}}}}],de=["$interpolate",function(a){var c={addOption:q,removeOption:q};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var g=a(d.text(),!0);g||e.$set("value",
d.text())}return function(a,d,e){var j=d.parent(),m=j.data("$selectController")||j.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.bind("$destroy",function(){m.removeOption(e.value)})}}}}],ee=S({restrict:"E",terminal:!0});(ga=M.jQuery)?(w=ga,t(ga.fn,{scope:Ba.scope,controller:Ba.controller,injector:Ba.injector,inheritedData:Ba.inheritedData}),db("remove",!0),db("empty"),
db("html")):w=R;Ha.element=w;(function(a){t(a,{bootstrap:xb,copy:V,extend:t,equals:ia,element:w,forEach:n,injector:yb,noop:q,bind:$a,toJson:ha,fromJson:ub,identity:qa,isUndefined:C,isDefined:B,isString:E,isFunction:H,isObject:L,isNumber:Ya,isElement:oc,isArray:F,version:pd,isDate:ra,lowercase:I,uppercase:oa,callbacks:{counter:0},noConflict:lc});Aa=tc(M);try{Aa("ngLocale")}catch(c){Aa("ngLocale",[]).provider("$locale",fd)}Aa("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",Jb).directive({a:rd,
input:ic,textarea:ic,form:sd,script:ae,select:ce,style:ee,option:de,ngBind:Dd,ngBindHtmlUnsafe:Fd,ngBindTemplate:Ed,ngClass:Gd,ngClassEven:Id,ngClassOdd:Hd,ngCsp:Ld,ngCloak:Jd,ngController:Kd,ngForm:td,ngHide:Ud,ngIf:Nd,ngInclude:Od,ngInit:Pd,ngNonBindable:Qd,ngPluralize:Rd,ngRepeat:Sd,ngShow:Td,ngSubmit:Md,ngStyle:Vd,ngSwitch:Wd,ngSwitchWhen:Xd,ngSwitchDefault:Yd,ngOptions:be,ngView:$d,ngTransclude:Zd,ngModel:yd,ngList:Ad,ngChange:zd,required:jc,ngRequired:jc,ngValue:Cd}).directive(pb).directive(kc);
a.provider({$anchorScroll:Cc,$animation:Ib,$animator:qd,$browser:Ec,$cacheFactory:Fc,$controller:Jc,$document:Kc,$exceptionHandler:Lc,$filter:Zb,$interpolate:Mc,$http:bd,$httpBackend:cd,$location:Nc,$log:Oc,$parse:Sc,$route:Vc,$routeParams:Wc,$rootScope:Xc,$q:Tc,$sniffer:Yc,$templateCache:Gc,$timeout:gd,$window:Zc})}])})(Ha);w(T).ready(function(){rc(T,xb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
/*
 * Hamster.js v1.0.3
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

(function(window, document){
'use strict';

/**
 * Hamster
 * use this to create instances
 * @returns {Hamster.Instance}
 * @constructor
 */
var Hamster = function(element) {
  return new Hamster.Instance(element);
};

// default event name
Hamster.SUPPORT = 'wheel';

// default DOM methods
Hamster.ADD_EVENT = 'addEventListener';
Hamster.REMOVE_EVENT = 'removeEventListener';
Hamster.PREFIX = '';

// until browser inconistencies have been fixed...
Hamster.READY = false;

Hamster.Instance = function(element){
  if (!Hamster.READY) {
    // fix browser inconistencies
    Hamster.normalise.browser();

    // Hamster is ready...!
    Hamster.READY = true;
  }

  this.element = element;

  // store attached event handlers
  this.handlers = [];

  // return instance
  return this;
};

/**
 * create new hamster instance
 * all methods should return the instance itself, so it is chainable.
 * @param   {HTMLElement}       element
 * @returns {Hamster.Instance}
 * @constructor
 */
Hamster.Instance.prototype = {
  /**
   * bind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  wheel: function onEvent(handler, useCapture){
    Hamster.event.add(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.add(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  },

  /**
   * unbind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  unwheel: function offEvent(handler, useCapture){
    // if no handler argument,
    // unbind the last bound handler (if exists)
    if (handler === undefined && (handler = this.handlers.slice(-1)[0])) {
      handler = handler.original;
    }

    Hamster.event.remove(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.remove(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  }
};

Hamster.event = {
  /**
   * cross-browser 'addWheelListener'
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  add: function add(hamster, eventName, handler, useCapture){
    // store the original handler
    var originalHandler = handler;

    // redefine the handler
    handler = function(originalEvent){

      if (!originalEvent) {
        originalEvent = window.event;
      }

      // create a normalised event object,
      // and normalise "deltas" of the mouse wheel
      var event = Hamster.normalise.event(originalEvent),
          delta = Hamster.normalise.delta(originalEvent);

      // fire the original handler with normalised arguments
      return originalHandler(event, delta[0], delta[1], delta[2]);

    };

    // cross-browser addEventListener
    hamster.element[Hamster.ADD_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // store original and normalised handlers on the instance
    hamster.handlers.push({
      original: originalHandler,
      normalised: handler
    });
  },

  /**
   * removeWheelListener
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  remove: function remove(hamster, eventName, handler, useCapture){
    // search for handler on the instance
    var originalHandler = handler,
        lookup = {};
    for (var i = 0, len = hamster.handlers.length; i < len; ++i) {
      lookup[hamster.handlers[i].original] = hamster.handlers[i];
    }
    handler = lookup[originalHandler].normalised;

    if (handler) {
      // cross-browser removeEventListener
      hamster.element[Hamster.REMOVE_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);
      // remove handler from the instance
      hamster.handlers.splice(hamster.handlers.indexOf(handler), 1);
    }
  }
};

/**
 * these hold the lowest deltas,
 * used to normalise the delta values
 * @type {Number}
 */
var lowestDelta,
    lowestDeltaXY;

Hamster.normalise = {
  /**
   * fix browser inconistencies
   */
  browser: function normaliseBrowser(){
    // detect deprecated wheel events
    if (!('onwheel' in document || document.documentMode >= 9)) {
      Hamster.SUPPORT = document.onmousewheel !== undefined ?
                        'mousewheel' : // webkit and IE < 9 support at least "mousewheel"
                        'DOMMouseScroll'; // assume remaining browsers are older Firefox
    }

    // detect deprecated event model
    if (!window.addEventListener) {
      // assume IE < 9
      Hamster.ADD_EVENT = 'attachEvent';
      Hamster.REMOVE_EVENT = 'detachEvent';
      Hamster.PREFIX = 'on';
    }

    // indexOf shim for IE < 9
    if (!('indexOf' in Array.prototype)) {
      Array.prototype.indexOf= function(find, i /*opt*/) {
        if (i === undefined) {
          i = 0;
        }
        if (i < 0) {
          i += this.length;
        }
        if (i < 0) {
          i = 0;
        }
        for (var n = this.length; i < n; ++i) {
          if (i in this && this[i] === find) {
            return i;
          }
        }
        return -1;
      };
    }
  },

  /**
   * create a normalised event object
   * @param   {Function}    originalEvent
   * @returns {Object}      event
   */
   event: function normaliseEvent(originalEvent){
    var event = Hamster.SUPPORT === 'wheel' ? originalEvent : {
          // keep a reference to the original event object
          originalEvent: originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: 'wheel',
          deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          delatZ: 0,
          preventDefault: function(){
            if (originalEvent.preventDefault) {
              originalEvent.preventDefault();
            } else {
              originalEvent.returnValue = false;
            }
          },
          stopPropagation: function(){
            if (originalEvent.stopPropagation) {
              originalEvent.stopPropagation();
            } else {
              originalEvent.cancelBubble = false;
            }
          }
        };

    // calculate deltaY (and deltaX) according to the event

    // 'mousewheel'
    if (originalEvent.wheelDelta) {
      event.deltaY = - 1/40 * originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaX) {
      event.deltaX = - 1/40 * originalEvent.wheelDeltaX;
    }

    // 'DomMouseScroll'
    if (originalEvent.detail) {
      event.deltaY = originalEvent.detail;
    }

    return event;
  },

  /**
   * normalise 'deltas' of the mouse wheel
   * @param   {Function}    originalEvent
   * @returns {Array}       deltas
   */
  delta: function normaliseDelta(originalEvent){
    var delta = 0,
      deltaX = 0,
      deltaY = 0,
      absDelta = 0,
      absDeltaXY = 0,
      fn;

    // normalise deltas according to the event

    // 'wheel' event
    if (originalEvent.deltaY) {
      deltaY = originalEvent.deltaY * -1;
      delta  = deltaY;
    }
    if (originalEvent.deltaX) {
      deltaX = originalEvent.deltaX;
      delta  = deltaX * -1;
    }

    // 'mousewheel' event
    if (originalEvent.wheelDelta) {
      delta = originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaY) {
      deltaY = originalEvent.wheelDeltaY;
    }
    if (originalEvent.wheelDeltaX) {
      deltaX = originalEvent.wheelDeltaX * -1;
    }

    // 'DomMouseScroll' event
    if (originalEvent.detail) {
      delta = originalEvent.detail * -1;
    }

    // look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
    }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
      lowestDeltaXY = absDeltaXY;
    }

    // convert deltas to whole numbers
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    return [delta, deltaX, deltaY];
  }
};

// Expose Hamster to the global object
window.Hamster = Hamster;

// requireJS module definition
if (typeof window.define === 'function' && window.define.amd) {
  window.define('hamster', [], function(){
    return Hamster;
  });
}

})(window, window.document);

/*
 * angular-mousewheel v1.0.2
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

angular.module('monospaced.mousewheel', [])
  .directive('msdWheel', ['$parse', function($parse){
    return {
      restrict: 'A, C',
        link: function(scope, element, attr) {
        var expr = $parse(attr['msdWheel']),
            fn = function(event, delta, deltaX, deltaY){
              scope.$apply(function(){
                expr(scope, {
                  $event: event,
                  $delta: delta,
                  $deltaX: deltaX,
                  $deltaY: deltaY
                });
              });
            },
            hamster;

        if (typeof Hamster === 'undefined') {
          // fallback to standard wheel event
          element.bind('wheel', function(event){
            scope.$apply(function() {
              expr(scope, {
                $event: event
              });
            });
          });
          return;
        }

        // don't create multiple Hamster instances per element
        if (!(hamster = element.data('hamster'))) {
          hamster = Hamster(element[0]);
          element.data('hamster', hamster);
        }

        // bind Hamster wheel event
        hamster.wheel(fn);

        // unbind Hamster wheel event
        scope.$on('$destroy', function(){
          hamster.unwheel(fn);
        });
      }
    };
  }]);

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview
 * some functions for browser-side pretty printing of code contained in html.
 *
 * <p>
 * For a fairly comprehensive set of languages see the
 * <a href="http://google-code-prettify.googlecode.com/svn/trunk/README.html#langs">README</a>
 * file that came with this source.  At a minimum, the lexer should work on a
 * number of languages including C and friends, Java, Python, Bash, SQL, HTML,
 * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk
 * and a subset of Perl, but, because of commenting conventions, doesn't work on
 * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.
 * <p>
 * Usage: <ol>
 * <li> include this source file in an html page via
 *   {@code <script type="text/javascript" src="/path/to/prettify.js"></script>}
 * <li> define style rules.  See the example page for examples.
 * <li> mark the {@code <pre>} and {@code <code>} tags in your source with
 *    {@code class=prettyprint.}
 *    You can also use the (html deprecated) {@code <xmp>} tag, but the pretty
 *    printer needs to do more substantial DOM manipulations to support that, so
 *    some css styles may not be preserved.
 * </ol>
 * That's it.  I wanted to keep the API as simple as possible, so there's no
 * need to specify which language the code is in, but if you wish, you can add
 * another class to the {@code <pre>} or {@code <code>} element to specify the
 * language, as in {@code <pre class="prettyprint lang-java">}.  Any class that
 * starts with "lang-" followed by a file extension, specifies the file type.
 * See the "lang-*.js" files in this directory for code that implements
 * per-language file handlers.
 * <p>
 * Change log:<br>
 * cbeust, 2006/08/22
 * <blockquote>
 *   Java annotations (start with "@") are now captured as literals ("lit")
 * </blockquote>
 * @requires console
 */

// JSLint declarations
/*global console, document, navigator, setTimeout, window, define */

/**
 * Split {@code prettyPrint} into multiple timeouts so as not to interfere with
 * UI events.
 * If set to {@code false}, {@code prettyPrint()} is synchronous.
 */
window['PR_SHOULD_USE_CONTINUATION'] = true;

/**
 * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
 * {@code class=prettyprint} and prettify them.
 *
 * @param {Function?} opt_whenDone if specified, called when the last entry
 *     has been finished.
 */
var prettyPrintOne;
/**
 * Pretty print a chunk of code.
 *
 * @param {string} sourceCodeHtml code as html
 * @return {string} code as html, but prettier
 */
var prettyPrint;


(function () {
  var win = window;
  // Keyword lists for various languages.
  // We use things that coerce to strings to make them compact when minified
  // and to defeat aggressive optimizers that fold large string constants.
  var FLOW_CONTROL_KEYWORDS = ["break,continue,do,else,for,if,return,while"];
  var C_KEYWORDS = [FLOW_CONTROL_KEYWORDS,"auto,case,char,const,default," + 
      "double,enum,extern,float,goto,int,long,register,short,signed,sizeof," +
      "static,struct,switch,typedef,union,unsigned,void,volatile"];
  var COMMON_KEYWORDS = [C_KEYWORDS,"catch,class,delete,false,import," +
      "new,operator,private,protected,public,this,throw,true,try,typeof"];
  var CPP_KEYWORDS = [COMMON_KEYWORDS,"alignof,align_union,asm,axiom,bool," +
      "concept,concept_map,const_cast,constexpr,decltype," +
      "dynamic_cast,explicit,export,friend,inline,late_check," +
      "mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast," +
      "template,typeid,typename,using,virtual,where"];
  var JAVA_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,boolean,byte,extends,final,finally,implements,import," +
      "instanceof,null,native,package,strictfp,super,synchronized,throws," +
      "transient"];
  var CSHARP_KEYWORDS = [JAVA_KEYWORDS,
      "as,base,by,checked,decimal,delegate,descending,dynamic,event," +
      "fixed,foreach,from,group,implicit,in,interface,internal,into,is,let," +
      "lock,object,out,override,orderby,params,partial,readonly,ref,sbyte," +
      "sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort," +
      "var,virtual,where"];
  var COFFEE_KEYWORDS = "all,and,by,catch,class,else,extends,false,finally," +
      "for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then," +
      "throw,true,try,unless,until,when,while,yes";
  var JSCRIPT_KEYWORDS = [COMMON_KEYWORDS,
      "debugger,eval,export,function,get,null,set,undefined,var,with," +
      "Infinity,NaN"];
  var PERL_KEYWORDS = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for," +
      "goto,if,import,last,local,my,next,no,our,print,package,redo,require," +
      "sub,undef,unless,until,use,wantarray,while,BEGIN,END";
  var PYTHON_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "and,as,assert,class,def,del," +
      "elif,except,exec,finally,from,global,import,in,is,lambda," +
      "nonlocal,not,or,pass,print,raise,try,with,yield," +
      "False,True,None"];
  var RUBY_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "alias,and,begin,case,class," +
      "def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo," +
      "rescue,retry,self,super,then,true,undef,unless,until,when,yield," +
      "BEGIN,END"];
  var SH_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "case,done,elif,esac,eval,fi," +
      "function,in,local,set,then,until"];
  var ALL_KEYWORDS = [
      CPP_KEYWORDS, CSHARP_KEYWORDS, JSCRIPT_KEYWORDS, PERL_KEYWORDS +
      PYTHON_KEYWORDS, RUBY_KEYWORDS, SH_KEYWORDS];
  var C_TYPES = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;

  // token style names.  correspond to css classes
  /**
   * token style for a string literal
   * @const
   */
  var PR_STRING = 'str';
  /**
   * token style for a keyword
   * @const
   */
  var PR_KEYWORD = 'kwd';
  /**
   * token style for a comment
   * @const
   */
  var PR_COMMENT = 'com';
  /**
   * token style for a type
   * @const
   */
  var PR_TYPE = 'typ';
  /**
   * token style for a literal value.  e.g. 1, null, true.
   * @const
   */
  var PR_LITERAL = 'lit';
  /**
   * token style for a punctuation string.
   * @const
   */
  var PR_PUNCTUATION = 'pun';
  /**
   * token style for plain text.
   * @const
   */
  var PR_PLAIN = 'pln';

  /**
   * token style for an sgml tag.
   * @const
   */
  var PR_TAG = 'tag';
  /**
   * token style for a markup declaration such as a DOCTYPE.
   * @const
   */
  var PR_DECLARATION = 'dec';
  /**
   * token style for embedded source.
   * @const
   */
  var PR_SOURCE = 'src';
  /**
   * token style for an sgml attribute name.
   * @const
   */
  var PR_ATTRIB_NAME = 'atn';
  /**
   * token style for an sgml attribute value.
   * @const
   */
  var PR_ATTRIB_VALUE = 'atv';

  /**
   * A class that indicates a section of markup that is not code, e.g. to allow
   * embedding of line numbers within code listings.
   * @const
   */
  var PR_NOCODE = 'nocode';



/**
 * A set of tokens that can precede a regular expression literal in
 * javascript
 * http://web.archive.org/web/20070717142515/http://www.mozilla.org/js/language/js20/rationale/syntax.html
 * has the full list, but I've removed ones that might be problematic when
 * seen in languages that don't support regular expression literals.
 *
 * <p>Specifically, I've removed any keywords that can't precede a regexp
 * literal in a syntactically legal javascript program, and I've removed the
 * "in" keyword since it's not a keyword in many languages, and might be used
 * as a count of inches.
 *
 * <p>The link above does not accurately describe EcmaScript rules since
 * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works
 * very well in practice.
 *
 * @private
 * @const
 */
var REGEXP_PRECEDER_PATTERN = '(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*';

// CAVEAT: this does not properly handle the case where a regular
// expression immediately follows another since a regular expression may
// have flags for case-sensitivity and the like.  Having regexp tokens
// adjacent is not valid in any language I'm aware of, so I'm punting.
// TODO: maybe style special characters inside a regexp as punctuation.


  /**
   * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally
   * matches the union of the sets of strings matched by the input RegExp.
   * Since it matches globally, if the input strings have a start-of-input
   * anchor (/^.../), it is ignored for the purposes of unioning.
   * @param {Array.<RegExp>} regexs non multiline, non-global regexs.
   * @return {RegExp} a global regex.
   */
  function combinePrefixPatterns(regexs) {
    var capturedGroupIndex = 0;
  
    var needToFoldCase = false;
    var ignoreCase = false;
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.ignoreCase) {
        ignoreCase = true;
      } else if (/[a-z]/i.test(regex.source.replace(
                     /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
        needToFoldCase = true;
        ignoreCase = false;
        break;
      }
    }
  
    var escapeCharToCodeUnit = {
      'b': 8,
      't': 9,
      'n': 0xa,
      'v': 0xb,
      'f': 0xc,
      'r': 0xd
    };
  
    function decodeEscape(charsetPart) {
      var cc0 = charsetPart.charCodeAt(0);
      if (cc0 !== 92 /* \\ */) {
        return cc0;
      }
      var c1 = charsetPart.charAt(1);
      cc0 = escapeCharToCodeUnit[c1];
      if (cc0) {
        return cc0;
      } else if ('0' <= c1 && c1 <= '7') {
        return parseInt(charsetPart.substring(1), 8);
      } else if (c1 === 'u' || c1 === 'x') {
        return parseInt(charsetPart.substring(2), 16);
      } else {
        return charsetPart.charCodeAt(1);
      }
    }
  
    function encodeEscape(charCode) {
      if (charCode < 0x20) {
        return (charCode < 0x10 ? '\\x0' : '\\x') + charCode.toString(16);
      }
      var ch = String.fromCharCode(charCode);
      return (ch === '\\' || ch === '-' || ch === ']' || ch === '^')
          ? "\\" + ch : ch;
    }
  
    function caseFoldCharset(charSet) {
      var charsetParts = charSet.substring(1, charSet.length - 1).match(
          new RegExp(
              '\\\\u[0-9A-Fa-f]{4}'
              + '|\\\\x[0-9A-Fa-f]{2}'
              + '|\\\\[0-3][0-7]{0,2}'
              + '|\\\\[0-7]{1,2}'
              + '|\\\\[\\s\\S]'
              + '|-'
              + '|[^-\\\\]',
              'g'));
      var ranges = [];
      var inverse = charsetParts[0] === '^';
  
      var out = ['['];
      if (inverse) { out.push('^'); }
  
      for (var i = inverse ? 1 : 0, n = charsetParts.length; i < n; ++i) {
        var p = charsetParts[i];
        if (/\\[bdsw]/i.test(p)) {  // Don't muck with named groups.
          out.push(p);
        } else {
          var start = decodeEscape(p);
          var end;
          if (i + 2 < n && '-' === charsetParts[i + 1]) {
            end = decodeEscape(charsetParts[i + 2]);
            i += 2;
          } else {
            end = start;
          }
          ranges.push([start, end]);
          // If the range might intersect letters, then expand it.
          // This case handling is too simplistic.
          // It does not deal with non-latin case folding.
          // It works for latin source code identifiers though.
          if (!(end < 65 || start > 122)) {
            if (!(end < 65 || start > 90)) {
              ranges.push([Math.max(65, start) | 32, Math.min(end, 90) | 32]);
            }
            if (!(end < 97 || start > 122)) {
              ranges.push([Math.max(97, start) & ~32, Math.min(end, 122) & ~32]);
            }
          }
        }
      }
  
      // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]
      // -> [[1, 12], [14, 14], [16, 17]]
      ranges.sort(function (a, b) { return (a[0] - b[0]) || (b[1]  - a[1]); });
      var consolidatedRanges = [];
      var lastRange = [];
      for (var i = 0; i < ranges.length; ++i) {
        var range = ranges[i];
        if (range[0] <= lastRange[1] + 1) {
          lastRange[1] = Math.max(lastRange[1], range[1]);
        } else {
          consolidatedRanges.push(lastRange = range);
        }
      }
  
      for (var i = 0; i < consolidatedRanges.length; ++i) {
        var range = consolidatedRanges[i];
        out.push(encodeEscape(range[0]));
        if (range[1] > range[0]) {
          if (range[1] + 1 > range[0]) { out.push('-'); }
          out.push(encodeEscape(range[1]));
        }
      }
      out.push(']');
      return out.join('');
    }
  
    function allowAnywhereFoldCaseAndRenumberGroups(regex) {
      // Split into character sets, escape sequences, punctuation strings
      // like ('(', '(?:', ')', '^'), and runs of characters that do not
      // include any of the above.
      var parts = regex.source.match(
          new RegExp(
              '(?:'
              + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]'  // a character set
              + '|\\\\u[A-Fa-f0-9]{4}'  // a unicode escape
              + '|\\\\x[A-Fa-f0-9]{2}'  // a hex escape
              + '|\\\\[0-9]+'  // a back-reference or octal escape
              + '|\\\\[^ux0-9]'  // other escape sequence
              + '|\\(\\?[:!=]'  // start of a non-capturing group
              + '|[\\(\\)\\^]'  // start/end of a group, or line start
              + '|[^\\x5B\\x5C\\(\\)\\^]+'  // run of other characters
              + ')',
              'g'));
      var n = parts.length;
  
      // Maps captured group numbers to the number they will occupy in
      // the output or to -1 if that has not been determined, or to
      // undefined if they need not be capturing in the output.
      var capturedGroups = [];
  
      // Walk over and identify back references to build the capturedGroups
      // mapping.
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          // groups are 1-indexed, so max group index is count of '('
          ++groupIndex;
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue) {
            if (decimalValue <= groupIndex) {
              capturedGroups[decimalValue] = -1;
            } else {
              // Replace with an unambiguous escape sequence so that
              // an octal escape sequence does not turn into a backreference
              // to a capturing group from an earlier regex.
              parts[i] = encodeEscape(decimalValue);
            }
          }
        }
      }
  
      // Renumber groups and reduce capturing groups to non-capturing groups
      // where possible.
      for (var i = 1; i < capturedGroups.length; ++i) {
        if (-1 === capturedGroups[i]) {
          capturedGroups[i] = ++capturedGroupIndex;
        }
      }
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          ++groupIndex;
          if (!capturedGroups[groupIndex]) {
            parts[i] = '(?:';
          }
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue && decimalValue <= groupIndex) {
            parts[i] = '\\' + capturedGroups[decimalValue];
          }
        }
      }
  
      // Remove any prefix anchors so that the output will match anywhere.
      // ^^ really does mean an anchored match though.
      for (var i = 0; i < n; ++i) {
        if ('^' === parts[i] && '^' !== parts[i + 1]) { parts[i] = ''; }
      }
  
      // Expand letters to groups to handle mixing of case-sensitive and
      // case-insensitive patterns if necessary.
      if (regex.ignoreCase && needToFoldCase) {
        for (var i = 0; i < n; ++i) {
          var p = parts[i];
          var ch0 = p.charAt(0);
          if (p.length >= 2 && ch0 === '[') {
            parts[i] = caseFoldCharset(p);
          } else if (ch0 !== '\\') {
            // TODO: handle letters in numeric escapes.
            parts[i] = p.replace(
                /[a-zA-Z]/g,
                function (ch) {
                  var cc = ch.charCodeAt(0);
                  return '[' + String.fromCharCode(cc & ~32, cc | 32) + ']';
                });
          }
        }
      }
  
      return parts.join('');
    }
  
    var rewritten = [];
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.global || regex.multiline) { throw new Error('' + regex); }
      rewritten.push(
          '(?:' + allowAnywhereFoldCaseAndRenumberGroups(regex) + ')');
    }
  
    return new RegExp(rewritten.join('|'), ignoreCase ? 'gi' : 'g');
  }


  /**
   * Split markup into a string of source code and an array mapping ranges in
   * that string to the text nodes in which they appear.
   *
   * <p>
   * The HTML DOM structure:</p>
   * <pre>
   * (Element   "p"
   *   (Element "b"
   *     (Text  "print "))       ; #1
   *   (Text    "'Hello '")      ; #2
   *   (Element "br")            ; #3
   *   (Text    "  + 'World';")) ; #4
   * </pre>
   * <p>
   * corresponds to the HTML
   * {@code <p><b>print </b>'Hello '<br>  + 'World';</p>}.</p>
   *
   * <p>
   * It will produce the output:</p>
   * <pre>
   * {
   *   sourceCode: "print 'Hello '\n  + 'World';",
   *   //                     1          2
   *   //           012345678901234 5678901234567
   *   spans: [0, #1, 6, #2, 14, #3, 15, #4]
   * }
   * </pre>
   * <p>
   * where #1 is a reference to the {@code "print "} text node above, and so
   * on for the other text nodes.
   * </p>
   *
   * <p>
   * The {@code} spans array is an array of pairs.  Even elements are the start
   * indices of substrings, and odd elements are the text nodes (or BR elements)
   * that contain the text for those substrings.
   * Substrings continue until the next index or the end of the source.
   * </p>
   *
   * @param {Node} node an HTML DOM subtree containing source-code.
   * @param {boolean} isPreformatted true if white-space in text nodes should
   *    be considered significant.
   * @return {Object} source code and the text nodes in which they occur.
   */
  function extractSourceSpans(node, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;
  
    var chunks = [];
    var length = 0;
    var spans = [];
    var k = 0;
  
    function walk(node) {
      switch (node.nodeType) {
        case 1:  // Element
          if (nocode.test(node.className)) { return; }
          for (var child = node.firstChild; child; child = child.nextSibling) {
            walk(child);
          }
          var nodeName = node.nodeName.toLowerCase();
          if ('br' === nodeName || 'li' === nodeName) {
            chunks[k] = '\n';
            spans[k << 1] = length++;
            spans[(k++ << 1) | 1] = node;
          }
          break;
        case 3: case 4:  // Text
          var text = node.nodeValue;
          if (text.length) {
            if (!isPreformatted) {
              text = text.replace(/[ \t\r\n]+/g, ' ');
            } else {
              text = text.replace(/\r\n?/g, '\n');  // Normalize newlines.
            }
            // TODO: handle tabs here?
            chunks[k] = text;
            spans[k << 1] = length;
            length += text.length;
            spans[(k++ << 1) | 1] = node;
          }
          break;
      }
    }
  
    walk(node);
  
    return {
      sourceCode: chunks.join('').replace(/\n$/, ''),
      spans: spans
    };
  }


  /**
   * Apply the given language handler to sourceCode and add the resulting
   * decorations to out.
   * @param {number} basePos the index of sourceCode within the chunk of source
   *    whose decorations are already present on out.
   */
  function appendDecorations(basePos, sourceCode, langHandler, out) {
    if (!sourceCode) { return; }
    var job = {
      sourceCode: sourceCode,
      basePos: basePos
    };
    langHandler(job);
    out.push.apply(out, job.decorations);
  }

  var notWs = /\S/;

  /**
   * Given an element, if it contains only one child element and any text nodes
   * it contains contain only space characters, return the sole child element.
   * Otherwise returns undefined.
   * <p>
   * This is meant to return the CODE element in {@code <pre><code ...>} when
   * there is a single child element that contains all the non-space textual
   * content, but not to return anything where there are multiple child elements
   * as in {@code <pre><code>...</code><code>...</code></pre>} or when there
   * is textual content.
   */
  function childContentWrapper(element) {
    var wrapper = undefined;
    for (var c = element.firstChild; c; c = c.nextSibling) {
      var type = c.nodeType;
      wrapper = (type === 1)  // Element Node
          ? (wrapper ? element : c)
          : (type === 3)  // Text Node
          ? (notWs.test(c.nodeValue) ? element : wrapper)
          : wrapper;
    }
    return wrapper === element ? undefined : wrapper;
  }

  /** Given triples of [style, pattern, context] returns a lexing function,
    * The lexing function interprets the patterns to find token boundaries and
    * returns a decoration list of the form
    * [index_0, style_0, index_1, style_1, ..., index_n, style_n]
    * where index_n is an index into the sourceCode, and style_n is a style
    * constant like PR_PLAIN.  index_n-1 <= index_n, and style_n-1 applies to
    * all characters in sourceCode[index_n-1:index_n].
    *
    * The stylePatterns is a list whose elements have the form
    * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].
    *
    * Style is a style constant like PR_PLAIN, or can be a string of the
    * form 'lang-FOO', where FOO is a language extension describing the
    * language of the portion of the token in $1 after pattern executes.
    * E.g., if style is 'lang-lisp', and group 1 contains the text
    * '(hello (world))', then that portion of the token will be passed to the
    * registered lisp handler for formatting.
    * The text before and after group 1 will be restyled using this decorator
    * so decorators should take care that this doesn't result in infinite
    * recursion.  For example, the HTML lexer rule for SCRIPT elements looks
    * something like ['lang-js', /<[s]cript>(.+?)<\/script>/].  This may match
    * '<script>foo()<\/script>', which would cause the current decorator to
    * be called with '<script>' which would not match the same rule since
    * group 1 must not be empty, so it would be instead styled as PR_TAG by
    * the generic tag rule.  The handler registered for the 'js' extension would
    * then be called with 'foo()', and finally, the current decorator would
    * be called with '<\/script>' which would not match the original rule and
    * so the generic tag rule would identify it as a tag.
    *
    * Pattern must only match prefixes, and if it matches a prefix, then that
    * match is considered a token with the same style.
    *
    * Context is applied to the last non-whitespace, non-comment token
    * recognized.
    *
    * Shortcut is an optional string of characters, any of which, if the first
    * character, gurantee that this pattern and only this pattern matches.
    *
    * @param {Array} shortcutStylePatterns patterns that always start with
    *   a known character.  Must have a shortcut string.
    * @param {Array} fallthroughStylePatterns patterns that will be tried in
    *   order if the shortcut ones fail.  May have shortcuts.
    *
    * @return {function (Object)} a
    *   function that takes source code and returns a list of decorations.
    */
  function createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns) {
    var shortcuts = {};
    var tokenizer;
    (function () {
      var allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns);
      var allRegexs = [];
      var regexKeys = {};
      for (var i = 0, n = allPatterns.length; i < n; ++i) {
        var patternParts = allPatterns[i];
        var shortcutChars = patternParts[3];
        if (shortcutChars) {
          for (var c = shortcutChars.length; --c >= 0;) {
            shortcuts[shortcutChars.charAt(c)] = patternParts;
          }
        }
        var regex = patternParts[1];
        var k = '' + regex;
        if (!regexKeys.hasOwnProperty(k)) {
          allRegexs.push(regex);
          regexKeys[k] = null;
        }
      }
      allRegexs.push(/[\0-\uffff]/);
      tokenizer = combinePrefixPatterns(allRegexs);
    })();

    var nPatterns = fallthroughStylePatterns.length;

    /**
     * Lexes job.sourceCode and produces an output array job.decorations of
     * style classes preceded by the position at which they start in
     * job.sourceCode in order.
     *
     * @param {Object} job an object like <pre>{
     *    sourceCode: {string} sourceText plain text,
     *    basePos: {int} position of job.sourceCode in the larger chunk of
     *        sourceCode.
     * }</pre>
     */
    var decorate = function (job) {
      var sourceCode = job.sourceCode, basePos = job.basePos;
      /** Even entries are positions in source in ascending order.  Odd enties
        * are style markers (e.g., PR_COMMENT) that run from that position until
        * the end.
        * @type {Array.<number|string>}
        */
      var decorations = [basePos, PR_PLAIN];
      var pos = 0;  // index into sourceCode
      var tokens = sourceCode.match(tokenizer) || [];
      var styleCache = {};

      for (var ti = 0, nTokens = tokens.length; ti < nTokens; ++ti) {
        var token = tokens[ti];
        var style = styleCache[token];
        var match = void 0;

        var isEmbedded;
        if (typeof style === 'string') {
          isEmbedded = false;
        } else {
          var patternParts = shortcuts[token.charAt(0)];
          if (patternParts) {
            match = token.match(patternParts[1]);
            style = patternParts[0];
          } else {
            for (var i = 0; i < nPatterns; ++i) {
              patternParts = fallthroughStylePatterns[i];
              match = token.match(patternParts[1]);
              if (match) {
                style = patternParts[0];
                break;
              }
            }

            if (!match) {  // make sure that we make progress
              style = PR_PLAIN;
            }
          }

          isEmbedded = style.length >= 5 && 'lang-' === style.substring(0, 5);
          if (isEmbedded && !(match && typeof match[1] === 'string')) {
            isEmbedded = false;
            style = PR_SOURCE;
          }

          if (!isEmbedded) { styleCache[token] = style; }
        }

        var tokenStart = pos;
        pos += token.length;

        if (!isEmbedded) {
          decorations.push(basePos + tokenStart, style);
        } else {  // Treat group 1 as an embedded block of source code.
          var embeddedSource = match[1];
          var embeddedSourceStart = token.indexOf(embeddedSource);
          var embeddedSourceEnd = embeddedSourceStart + embeddedSource.length;
          if (match[2]) {
            // If embeddedSource can be blank, then it would match at the
            // beginning which would cause us to infinitely recurse on the
            // entire token, so we catch the right context in match[2].
            embeddedSourceEnd = token.length - match[2].length;
            embeddedSourceStart = embeddedSourceEnd - embeddedSource.length;
          }
          var lang = style.substring(5);
          // Decorate the left of the embedded source
          appendDecorations(
              basePos + tokenStart,
              token.substring(0, embeddedSourceStart),
              decorate, decorations);
          // Decorate the embedded source
          appendDecorations(
              basePos + tokenStart + embeddedSourceStart,
              embeddedSource,
              langHandlerForExtension(lang, embeddedSource),
              decorations);
          // Decorate the right of the embedded section
          appendDecorations(
              basePos + tokenStart + embeddedSourceEnd,
              token.substring(embeddedSourceEnd),
              decorate, decorations);
        }
      }
      job.decorations = decorations;
    };
    return decorate;
  }

  /** returns a function that produces a list of decorations from source text.
    *
    * This code treats ", ', and ` as string delimiters, and \ as a string
    * escape.  It does not recognize perl's qq() style strings.
    * It has no special handling for double delimiter escapes as in basic, or
    * the tripled delimiters used in python, but should work on those regardless
    * although in those cases a single string literal may be broken up into
    * multiple adjacent string literals.
    *
    * It recognizes C, C++, and shell style comments.
    *
    * @param {Object} options a set of optional parameters.
    * @return {function (Object)} a function that examines the source code
    *     in the input job and builds the decoration list.
    */
  function sourceDecorator(options) {
    var shortcutStylePatterns = [], fallthroughStylePatterns = [];
    if (options['tripleQuotedStrings']) {
      // '''multi-line-string''', 'single-line-string', and double-quoted
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
           null, '\'"']);
    } else if (options['multiLineStrings']) {
      // 'multi-line-string', "multi-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
           null, '\'"`']);
    } else {
      // 'single-line-string', "single-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,
           /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
           null, '"\'']);
    }
    if (options['verbatimStrings']) {
      // verbatim-string-literal production from the C# grammar.  See issue 93.
      fallthroughStylePatterns.push(
          [PR_STRING, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
    }
    var hc = options['hashComments'];
    if (hc) {
      if (options['cStyleComments']) {
        if (hc > 1) {  // multiline hash comments
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, '#']);
        } else {
          // Stop C preprocessor declarations at an unclosed open comment
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
               null, '#']);
        }
        // #include <stdio.h>
        fallthroughStylePatterns.push(
            [PR_STRING,
             /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
             null]);
      } else {
        shortcutStylePatterns.push([PR_COMMENT, /^#[^\r\n]*/, null, '#']);
      }
    }
    if (options['cStyleComments']) {
      fallthroughStylePatterns.push([PR_COMMENT, /^\/\/[^\r\n]*/, null]);
      fallthroughStylePatterns.push(
          [PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
    }
    if (options['regexLiterals']) {
      /**
       * @const
       */
      var REGEX_LITERAL = (
          // A regular expression literal starts with a slash that is
          // not followed by * or / so that it is not confused with
          // comments.
          '/(?=[^/*])'
          // and then contains any number of raw characters,
          + '(?:[^/\\x5B\\x5C]'
          // escape sequences (\x5C),
          +    '|\\x5C[\\s\\S]'
          // or non-nesting character sets (\x5B\x5D);
          +    '|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+'
          // finally closed by a /.
          + '/');
      fallthroughStylePatterns.push(
          ['lang-regex',
           new RegExp('^' + REGEXP_PRECEDER_PATTERN + '(' + REGEX_LITERAL + ')')
           ]);
    }

    var types = options['types'];
    if (types) {
      fallthroughStylePatterns.push([PR_TYPE, types]);
    }

    var keywords = ("" + options['keywords']).replace(/^ | $/g, '');
    if (keywords.length) {
      fallthroughStylePatterns.push(
          [PR_KEYWORD,
           new RegExp('^(?:' + keywords.replace(/[\s,]+/g, '|') + ')\\b'),
           null]);
    }

    shortcutStylePatterns.push([PR_PLAIN,       /^\s+/, null, ' \r\n\t\xA0']);

    var punctuation =
      // The Bash man page says

      // A word is a sequence of characters considered as a single
      // unit by GRUB. Words are separated by metacharacters,
      // which are the following plus space, tab, and newline: { }
      // | & $ ; < >
      // ...
      
      // A word beginning with # causes that word and all remaining
      // characters on that line to be ignored.

      // which means that only a '#' after /(?:^|[{}|&$;<>\s])/ starts a
      // comment but empirically
      // $ echo {#}
      // {#}
      // $ echo \$#
      // $#
      // $ echo }#
      // }#

      // so /(?:^|[|&;<>\s])/ is more appropriate.

      // http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3
      // suggests that this definition is compatible with a
      // default mode that tries to use a single token definition
      // to recognize both bash/python style comments and C
      // preprocessor directives.

      // This definition of punctuation does not include # in the list of
      // follow-on exclusions, so # will not be broken before if preceeded
      // by a punctuation character.  We could try to exclude # after
      // [|&;<>] but that doesn't seem to cause many major problems.
      // If that does turn out to be a problem, we should change the below
      // when hc is truthy to include # in the run of punctuation characters
      // only when not followint [|&;<>].
      /^.[^\s\w\.$@\'\"\`\/\\]*/;

    fallthroughStylePatterns.push(
        // TODO(mikesamuel): recognize non-latin letters and numerals in idents
        [PR_LITERAL,     /^@[a-z_$][a-z_$@0-9]*/i, null],
        [PR_TYPE,        /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null],
        [PR_PLAIN,       /^[a-z_$][a-z_$@0-9]*/i, null],
        [PR_LITERAL,
         new RegExp(
             '^(?:'
             // A hex number
             + '0x[a-f0-9]+'
             // or an octal or decimal number,
             + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
             // possibly in scientific notation
             + '(?:e[+\\-]?\\d+)?'
             + ')'
             // with an optional modifier like UL for unsigned long
             + '[a-z]*', 'i'),
         null, '0123456789'],
        // Don't treat escaped quotes in bash as starting strings.  See issue 144.
        [PR_PLAIN,       /^\\[\s\S]?/, null],
        [PR_PUNCTUATION, punctuation, null]);

    return createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns);
  }

  var decorateSource = sourceDecorator({
        'keywords': ALL_KEYWORDS,
        'hashComments': true,
        'cStyleComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
      });

  /**
   * Given a DOM subtree, wraps it in a list, and puts each line into its own
   * list item.
   *
   * @param {Node} node modified in place.  Its content is pulled into an
   *     HTMLOListElement, and each line is moved into a separate list item.
   *     This requires cloning elements, so the input might not have unique
   *     IDs after numbering.
   * @param {boolean} isPreformatted true iff white-space in text nodes should
   *     be treated as significant.
   */
  function numberLines(node, opt_startLineNum, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;
    var lineBreak = /\r\n?|\n/;
  
    var document = node.ownerDocument;
  
    var li = document.createElement('li');
    while (node.firstChild) {
      li.appendChild(node.firstChild);
    }
    // An array of lines.  We split below, so this is initialized to one
    // un-split line.
    var listItems = [li];
  
    function walk(node) {
      switch (node.nodeType) {
        case 1:  // Element
          if (nocode.test(node.className)) { break; }
          if ('br' === node.nodeName) {
            breakAfter(node);
            // Discard the <BR> since it is now flush against a </LI>.
            if (node.parentNode) {
              node.parentNode.removeChild(node);
            }
          } else {
            for (var child = node.firstChild; child; child = child.nextSibling) {
              walk(child);
            }
          }
          break;
        case 3: case 4:  // Text
          if (isPreformatted) {
            var text = node.nodeValue;
            var match = text.match(lineBreak);
            if (match) {
              var firstLine = text.substring(0, match.index);
              node.nodeValue = firstLine;
              var tail = text.substring(match.index + match[0].length);
              if (tail) {
                var parent = node.parentNode;
                parent.insertBefore(
                    document.createTextNode(tail), node.nextSibling);
              }
              breakAfter(node);
              if (!firstLine) {
                // Don't leave blank text nodes in the DOM.
                node.parentNode.removeChild(node);
              }
            }
          }
          break;
      }
    }
  
    // Split a line after the given node.
    function breakAfter(lineEndNode) {
      // If there's nothing to the right, then we can skip ending the line
      // here, and move root-wards since splitting just before an end-tag
      // would require us to create a bunch of empty copies.
      while (!lineEndNode.nextSibling) {
        lineEndNode = lineEndNode.parentNode;
        if (!lineEndNode) { return; }
      }
  
      function breakLeftOf(limit, copy) {
        // Clone shallowly if this node needs to be on both sides of the break.
        var rightSide = copy ? limit.cloneNode(false) : limit;
        var parent = limit.parentNode;
        if (parent) {
          // We clone the parent chain.
          // This helps us resurrect important styling elements that cross lines.
          // E.g. in <i>Foo<br>Bar</i>
          // should be rewritten to <li><i>Foo</i></li><li><i>Bar</i></li>.
          var parentClone = breakLeftOf(parent, 1);
          // Move the clone and everything to the right of the original
          // onto the cloned parent.
          var next = limit.nextSibling;
          parentClone.appendChild(rightSide);
          for (var sibling = next; sibling; sibling = next) {
            next = sibling.nextSibling;
            parentClone.appendChild(sibling);
          }
        }
        return rightSide;
      }
  
      var copiedListItem = breakLeftOf(lineEndNode.nextSibling, 0);
  
      // Walk the parent chain until we reach an unattached LI.
      for (var parent;
           // Check nodeType since IE invents document fragments.
           (parent = copiedListItem.parentNode) && parent.nodeType === 1;) {
        copiedListItem = parent;
      }
      // Put it on the list of lines for later processing.
      listItems.push(copiedListItem);
    }
  
    // Split lines while there are lines left to split.
    for (var i = 0;  // Number of lines that have been split so far.
         i < listItems.length;  // length updated by breakAfter calls.
         ++i) {
      walk(listItems[i]);
    }
  
    // Make sure numeric indices show correctly.
    if (opt_startLineNum === (opt_startLineNum|0)) {
      listItems[0].setAttribute('value', opt_startLineNum);
    }
  
    var ol = document.createElement('ol');
    ol.className = 'linenums';
    var offset = Math.max(0, ((opt_startLineNum - 1 /* zero index */)) | 0) || 0;
    for (var i = 0, n = listItems.length; i < n; ++i) {
      li = listItems[i];
      // Stick a class on the LIs so that stylesheets can
      // color odd/even rows, or any other row pattern that
      // is co-prime with 10.
      li.className = 'L' + ((i + offset) % 10);
      if (!li.firstChild) {
        li.appendChild(document.createTextNode('\xA0'));
      }
      ol.appendChild(li);
    }
  
    node.appendChild(ol);
  }

  /**
   * Breaks {@code job.sourceCode} around style boundaries in
   * {@code job.decorations} and modifies {@code job.sourceNode} in place.
   * @param {Object} job like <pre>{
   *    sourceCode: {string} source as plain text,
   *    spans: {Array.<number|Node>} alternating span start indices into source
   *       and the text node or element (e.g. {@code <BR>}) corresponding to that
   *       span.
   *    decorations: {Array.<number|string} an array of style classes preceded
   *       by the position at which they start in job.sourceCode in order
   * }</pre>
   * @private
   */
  function recombineTagsAndDecorations(job) {
    var isIE8OrEarlier = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
    isIE8OrEarlier = isIE8OrEarlier && +isIE8OrEarlier[1] <= 8;
    var newlineRe = /\n/g;
  
    var source = job.sourceCode;
    var sourceLength = source.length;
    // Index into source after the last code-unit recombined.
    var sourceIndex = 0;
  
    var spans = job.spans;
    var nSpans = spans.length;
    // Index into spans after the last span which ends at or before sourceIndex.
    var spanIndex = 0;
  
    var decorations = job.decorations;
    var nDecorations = decorations.length;
    // Index into decorations after the last decoration which ends at or before
    // sourceIndex.
    var decorationIndex = 0;
  
    // Remove all zero-length decorations.
    decorations[nDecorations] = sourceLength;
    var decPos, i;
    for (i = decPos = 0; i < nDecorations;) {
      if (decorations[i] !== decorations[i + 2]) {
        decorations[decPos++] = decorations[i++];
        decorations[decPos++] = decorations[i++];
      } else {
        i += 2;
      }
    }
    nDecorations = decPos;
  
    // Simplify decorations.
    for (i = decPos = 0; i < nDecorations;) {
      var startPos = decorations[i];
      // Conflate all adjacent decorations that use the same style.
      var startDec = decorations[i + 1];
      var end = i + 2;
      while (end + 2 <= nDecorations && decorations[end + 1] === startDec) {
        end += 2;
      }
      decorations[decPos++] = startPos;
      decorations[decPos++] = startDec;
      i = end;
    }
  
    nDecorations = decorations.length = decPos;
  
    var sourceNode = job.sourceNode;
    var oldDisplay;
    if (sourceNode) {
      oldDisplay = sourceNode.style.display;
      sourceNode.style.display = 'none';
    }
    try {
      var decoration = null;
      while (spanIndex < nSpans) {
        var spanStart = spans[spanIndex];
        var spanEnd = spans[spanIndex + 2] || sourceLength;
  
        var decEnd = decorations[decorationIndex + 2] || sourceLength;
  
        var end = Math.min(spanEnd, decEnd);
  
        var textNode = spans[spanIndex + 1];
        var styledText;
        if (textNode.nodeType !== 1  // Don't muck with <BR>s or <LI>s
            // Don't introduce spans around empty text nodes.
            && (styledText = source.substring(sourceIndex, end))) {
          // This may seem bizarre, and it is.  Emitting LF on IE causes the
          // code to display with spaces instead of line breaks.
          // Emitting Windows standard issue linebreaks (CRLF) causes a blank
          // space to appear at the beginning of every line but the first.
          // Emitting an old Mac OS 9 line separator makes everything spiffy.
          if (isIE8OrEarlier) {
            styledText = styledText.replace(newlineRe, '\r');
          }
          textNode.nodeValue = styledText;
          var document = textNode.ownerDocument;
          var span = document.createElement('span');
          span.className = decorations[decorationIndex + 1];
          var parentNode = textNode.parentNode;
          parentNode.replaceChild(span, textNode);
          span.appendChild(textNode);
          if (sourceIndex < spanEnd) {  // Split off a text node.
            spans[spanIndex + 1] = textNode
                // TODO: Possibly optimize by using '' if there's no flicker.
                = document.createTextNode(source.substring(end, spanEnd));
            parentNode.insertBefore(textNode, span.nextSibling);
          }
        }
  
        sourceIndex = end;
  
        if (sourceIndex >= spanEnd) {
          spanIndex += 2;
        }
        if (sourceIndex >= decEnd) {
          decorationIndex += 2;
        }
      }
    } finally {
      if (sourceNode) {
        sourceNode.style.display = oldDisplay;
      }
    }
  }


  /** Maps language-specific file extensions to handlers. */
  var langHandlerRegistry = {};
  /** Register a language handler for the given file extensions.
    * @param {function (Object)} handler a function from source code to a list
    *      of decorations.  Takes a single argument job which describes the
    *      state of the computation.   The single parameter has the form
    *      {@code {
    *        sourceCode: {string} as plain text.
    *        decorations: {Array.<number|string>} an array of style classes
    *                     preceded by the position at which they start in
    *                     job.sourceCode in order.
    *                     The language handler should assigned this field.
    *        basePos: {int} the position of source in the larger source chunk.
    *                 All positions in the output decorations array are relative
    *                 to the larger source chunk.
    *      } }
    * @param {Array.<string>} fileExtensions
    */
  function registerLangHandler(handler, fileExtensions) {
    for (var i = fileExtensions.length; --i >= 0;) {
      var ext = fileExtensions[i];
      if (!langHandlerRegistry.hasOwnProperty(ext)) {
        langHandlerRegistry[ext] = handler;
      } else if (win['console']) {
        console['warn']('cannot override language handler %s', ext);
      }
    }
  }
  function langHandlerForExtension(extension, source) {
    if (!(extension && langHandlerRegistry.hasOwnProperty(extension))) {
      // Treat it as markup if the first non whitespace character is a < and
      // the last non-whitespace character is a >.
      extension = /^\s*</.test(source)
          ? 'default-markup'
          : 'default-code';
    }
    return langHandlerRegistry[extension];
  }
  registerLangHandler(decorateSource, ['default-code']);
  registerLangHandler(
      createSimpleLexer(
          [],
          [
           [PR_PLAIN,       /^[^<?]+/],
           [PR_DECLARATION, /^<!\w[^>]*(?:>|$)/],
           [PR_COMMENT,     /^<\!--[\s\S]*?(?:-\->|$)/],
           // Unescaped content in an unknown language
           ['lang-',        /^<\?([\s\S]+?)(?:\?>|$)/],
           ['lang-',        /^<%([\s\S]+?)(?:%>|$)/],
           [PR_PUNCTUATION, /^(?:<[%?]|[%?]>)/],
           ['lang-',        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
           // Unescaped content in javascript.  (Or possibly vbscript).
           ['lang-js',      /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
           // Contains unescaped stylesheet content
           ['lang-css',     /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
           ['lang-in.tag',  /^(<\/?[a-z][^<>]*>)/i]
          ]),
      ['default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl']);
  registerLangHandler(
      createSimpleLexer(
          [
           [PR_PLAIN,        /^[\s]+/, null, ' \t\r\n'],
           [PR_ATTRIB_VALUE, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, '\"\'']
           ],
          [
           [PR_TAG,          /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
           [PR_ATTRIB_NAME,  /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
           ['lang-uq.val',   /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
           [PR_PUNCTUATION,  /^[=<>\/]+/],
           ['lang-js',       /^on\w+\s*=\s*\"([^\"]+)\"/i],
           ['lang-js',       /^on\w+\s*=\s*\'([^\']+)\'/i],
           ['lang-js',       /^on\w+\s*=\s*([^\"\'>\s]+)/i],
           ['lang-css',      /^style\s*=\s*\"([^\"]+)\"/i],
           ['lang-css',      /^style\s*=\s*\'([^\']+)\'/i],
           ['lang-css',      /^style\s*=\s*([^\"\'>\s]+)/i]
           ]),
      ['in.tag']);
  registerLangHandler(
      createSimpleLexer([], [[PR_ATTRIB_VALUE, /^[\s\S]+/]]), ['uq.val']);
  registerLangHandler(sourceDecorator({
          'keywords': CPP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'types': C_TYPES
        }), ['c', 'cc', 'cpp', 'cxx', 'cyc', 'm']);
  registerLangHandler(sourceDecorator({
          'keywords': 'null,true,false'
        }), ['json']);
  registerLangHandler(sourceDecorator({
          'keywords': CSHARP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'verbatimStrings': true,
          'types': C_TYPES
        }), ['cs']);
  registerLangHandler(sourceDecorator({
          'keywords': JAVA_KEYWORDS,
          'cStyleComments': true
        }), ['java']);
  registerLangHandler(sourceDecorator({
          'keywords': SH_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true
        }), ['bsh', 'csh', 'sh']);
  registerLangHandler(sourceDecorator({
          'keywords': PYTHON_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'tripleQuotedStrings': true
        }), ['cv', 'py']);
  registerLangHandler(sourceDecorator({
          'keywords': PERL_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': true
        }), ['perl', 'pl', 'pm']);
  registerLangHandler(sourceDecorator({
          'keywords': RUBY_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': true
        }), ['rb']);
  registerLangHandler(sourceDecorator({
          'keywords': JSCRIPT_KEYWORDS,
          'cStyleComments': true,
          'regexLiterals': true
        }), ['js']);
  registerLangHandler(sourceDecorator({
          'keywords': COFFEE_KEYWORDS,
          'hashComments': 3,  // ### style block comments
          'cStyleComments': true,
          'multilineStrings': true,
          'tripleQuotedStrings': true,
          'regexLiterals': true
        }), ['coffee']);
  registerLangHandler(
      createSimpleLexer([], [[PR_STRING, /^[\s\S]+/]]), ['regex']);

  function applyDecorator(job) {
    var opt_langExtension = job.langExtension;

    try {
      // Extract tags, and convert the source code to plain text.
      var sourceAndSpans = extractSourceSpans(job.sourceNode, job.pre);
      /** Plain text. @type {string} */
      var source = sourceAndSpans.sourceCode;
      job.sourceCode = source;
      job.spans = sourceAndSpans.spans;
      job.basePos = 0;

      // Apply the appropriate language handler
      langHandlerForExtension(opt_langExtension, source)(job);

      // Integrate the decorations and tags back into the source code,
      // modifying the sourceNode in place.
      recombineTagsAndDecorations(job);
    } catch (e) {
      if (win['console']) {
        console['log'](e && e['stack'] ? e['stack'] : e);
      }
    }
  }

  /**
   * @param sourceCodeHtml {string} The HTML to pretty print.
   * @param opt_langExtension {string} The language name to use.
   *     Typically, a filename extension like 'cpp' or 'java'.
   * @param opt_numberLines {number|boolean} True to number lines,
   *     or the 1-indexed number of the first line in sourceCodeHtml.
   */
  function prettyPrintOne(sourceCodeHtml, opt_langExtension, opt_numberLines) {
    var container = document.createElement('pre');
    // This could cause images to load and onload listeners to fire.
    // E.g. <img onerror="alert(1337)" src="nosuchimage.png">.
    // We assume that the inner HTML is from a trusted source.
    container.innerHTML = sourceCodeHtml;
    if (opt_numberLines) {
      numberLines(container, opt_numberLines, true);
    }

    var job = {
      langExtension: opt_langExtension,
      numberLines: opt_numberLines,
      sourceNode: container,
      pre: 1
    };
    applyDecorator(job);
    return container.innerHTML;
  }

  function prettyPrint(opt_whenDone) {
    function byTagName(tn) { return document.getElementsByTagName(tn); }
    // fetch a list of nodes to rewrite
    var codeSegments = [byTagName('pre'), byTagName('code'), byTagName('xmp')];
    var elements = [];
    for (var i = 0; i < codeSegments.length; ++i) {
      for (var j = 0, n = codeSegments[i].length; j < n; ++j) {
        elements.push(codeSegments[i][j]);
      }
    }
    codeSegments = null;

    var clock = Date;
    if (!clock['now']) {
      clock = { 'now': function () { return +(new Date); } };
    }

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    var k = 0;
    var prettyPrintingJob;

    var langExtensionRe = /\blang(?:uage)?-([\w.]+)(?!\S)/;
    var prettyPrintRe = /\bprettyprint\b/;
    var prettyPrintedRe = /\bprettyprinted\b/;
    var preformattedTagNameRe = /pre|xmp/i;
    var codeRe = /^code$/i;
    var preCodeXmpRe = /^(?:pre|code|xmp)$/i;

    function doWork() {
      var endTime = (win['PR_SHOULD_USE_CONTINUATION'] ?
                     clock['now']() + 250 /* ms */ :
                     Infinity);
      for (; k < elements.length && clock['now']() < endTime; k++) {
        var cs = elements[k];
        var className = cs.className;
        if (prettyPrintRe.test(className)
            // Don't redo this if we've already done it.
            // This allows recalling pretty print to just prettyprint elements
            // that have been added to the page since last call.
            && !prettyPrintedRe.test(className)) {

          // make sure this is not nested in an already prettified element
          var nested = false;
          for (var p = cs.parentNode; p; p = p.parentNode) {
            var tn = p.tagName;
            if (preCodeXmpRe.test(tn)
                && p.className && prettyPrintRe.test(p.className)) {
              nested = true;
              break;
            }
          }
          if (!nested) {
            // Mark done.  If we fail to prettyprint for whatever reason,
            // we shouldn't try again.
            cs.className += ' prettyprinted';

            // If the classes includes a language extensions, use it.
            // Language extensions can be specified like
            //     <pre class="prettyprint lang-cpp">
            // the language extension "cpp" is used to find a language handler
            // as passed to PR.registerLangHandler.
            // HTML5 recommends that a language be specified using "language-"
            // as the prefix instead.  Google Code Prettify supports both.
            // http://dev.w3.org/html5/spec-author-view/the-code-element.html
            var langExtension = className.match(langExtensionRe);
            // Support <pre class="prettyprint"><code class="language-c">
            var wrapper;
            if (!langExtension && (wrapper = childContentWrapper(cs))
                && codeRe.test(wrapper.tagName)) {
              langExtension = wrapper.className.match(langExtensionRe);
            }

            if (langExtension) { langExtension = langExtension[1]; }

            var preformatted;
            if (preformattedTagNameRe.test(cs.tagName)) {
              preformatted = 1;
            } else {
              var currentStyle = cs['currentStyle'];
              var whitespace = (
                  currentStyle
                  ? currentStyle['whiteSpace']
                  : (document.defaultView
                     && document.defaultView.getComputedStyle)
                  ? document.defaultView.getComputedStyle(cs, null)
                  .getPropertyValue('white-space')
                  : 0);
              preformatted = whitespace
                  && 'pre' === whitespace.substring(0, 3);
            }

            // Look for a class like linenums or linenums:<n> where <n> is the
            // 1-indexed number of the first line.
            var lineNums = cs.className.match(/\blinenums\b(?::(\d+))?/);
            lineNums = lineNums
                ? lineNums[1] && lineNums[1].length ? +lineNums[1] : true
                : false;
            if (lineNums) { numberLines(cs, lineNums, preformatted); }

            // do the pretty printing
            prettyPrintingJob = {
              langExtension: langExtension,
              sourceNode: cs,
              numberLines: lineNums,
              pre: preformatted
            };
            applyDecorator(prettyPrintingJob);
          }
        }
      }
      if (k < elements.length) {
        // finish up in a continuation
        setTimeout(doWork, 250);
      } else if (opt_whenDone) {
        opt_whenDone();
      }
    }

    doWork();
  }

  /**
   * Contains functions for creating and registering new language handlers.
   * @type {Object}
   */
  var PR = win['PR'] = {
        'createSimpleLexer': createSimpleLexer,
        'registerLangHandler': registerLangHandler,
        'sourceDecorator': sourceDecorator,
        'PR_ATTRIB_NAME': PR_ATTRIB_NAME,
        'PR_ATTRIB_VALUE': PR_ATTRIB_VALUE,
        'PR_COMMENT': PR_COMMENT,
        'PR_DECLARATION': PR_DECLARATION,
        'PR_KEYWORD': PR_KEYWORD,
        'PR_LITERAL': PR_LITERAL,
        'PR_NOCODE': PR_NOCODE,
        'PR_PLAIN': PR_PLAIN,
        'PR_PUNCTUATION': PR_PUNCTUATION,
        'PR_SOURCE': PR_SOURCE,
        'PR_STRING': PR_STRING,
        'PR_TAG': PR_TAG,
        'PR_TYPE': PR_TYPE,
        'prettyPrintOne': win['prettyPrintOne'] = prettyPrintOne,
        'prettyPrint': win['prettyPrint'] = prettyPrint
      };

  // Make PR available via the Asynchronous Module Definition (AMD) API.
  // Per https://github.com/amdjs/amdjs-api/wiki/AMD:
  // The Asynchronous Module Definition (AMD) API specifies a
  // mechanism for defining modules such that the module and its
  // dependencies can be asynchronously loaded.
  // ...
  // To allow a clear indicator that a global define function (as
  // needed for script src browser loading) conforms to the AMD API,
  // any global define function SHOULD have a property called "amd"
  // whose value is an object. This helps avoid conflict with any
  // other existing JavaScript code that could have defined a define()
  // function that does not conform to the AMD API.
  if (typeof define === "function" && define['amd']) {
    define(function () {
      return PR; 
    });
  }
})();
