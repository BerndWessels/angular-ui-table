# [uiTable](http://berndwessels.github.io/angular-ui-table)

A faster and better AngularJS data grid.

***

## Examples

See uiTable in action here [http://berndwessels.github.io/angular-ui-table](http://berndwessels.github.io/angular-ui-table).

## Usage

### 1. Install It

uiTable is available through Bower, so this is by far the easiest way to
obtain it. Just run:

```sh
$ bower install --save-dev ui-table
```

This will download the latest version of uiTable and install it into your
Bower directory (defaults to components). Boom!

### 2. Incorporate It

Now you have to add the script file to your application. You can, of course,
just add a script tag. If you're using ngBoilerplate or any of its derivatives,
simply add it to the `vendor.js` array of your `Gruntfile.js`:

```js
vendor: {
  js: [
    // ...
    'vendor/ui-table/ui-table.min.js',
    // ...
  ]
},
```

However you get it there, as soon as it's in your build path, you need to tell
your app module to depend on it:

```js
angular.module( 'myApp', [ 'uiTable', /* other deps */ ] );
```

Also be sure to include the stylesheet. In ngBoilerplate, simply import
`ui-table.less` into your `main.less` file.

Now you're ready to go! Sweet.

### 3. Use It

## Motivation

Almost every enterprise application needs a data grid. Unfortunately AngularJS is very slow and so far the only available grid I knew of was ngGrid. It looks good at first sight, but it has horrible performance. In the corporate world there are still many clients out there running on slow machines and old browsers on which ngGrid is just too slow.

The ui-table component is designed to address the performance issues of AngularJS but still offering all the features you can expect from a data grid. It offers modes for slower hardware and is strictly designed to please the user.

## Contributing

Contributions are encouraged! There is a lot to be done.

Missing and new features have to be added. Bugs have to be fixed (if there are any;). And there is always a way to sqeeze more performance out of it.

## Shameless Self-Promotion

Like uiTable? Star this repository to let me know! If this got you particulary
tickled, you can even follow me on [GitHub](http://github.com/berndwessels),
[Twitter](http://twitter.com/berndwessels),
[Google+](http://gplus.to/berndwessels), or
[LinkedIn](http://linkedin.com/in/berndwessels).

Enjoy.

