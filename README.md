SharePoint SPA
----------------

This app creates a simple angular app in a SharePoint aspx page.


Build
=====

The build is handled by Gulp.  By default, the build will create a folder named `dist` and will compile all js files located under `app` along with all bower components into a single minified JS file, which will then be embedded in the aspx page so that they can be served from a SharePoint location.


