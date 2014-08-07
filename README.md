# Static Site Generator

> [Yeoman](http://yeoman.io) generator for static websites - lets you quickly set up a project using [Handlebars](http://handlebarsjs.com/) for templating & SASS w/ [Bourbon](http://bourbon.io) & [Neat](http://neat.bourbon.io) for styling.


## Requirements
* [Node.js](http://nodejs.org)
* [Grunt CLI](http://gruntjs.org)
  ```
  npm install -g grunt-cli
  ```
* [Bower](http://bower.io)
  ```
  npm install -g bower
  ```
* [Yeoman](http://yeoman.io)
  ```
  npm install -g yo
  ```

## Grunt Tasks

Aliased tasks most useful when developing:

* [server](#server)
* [build:development](#build)
* [build:production](#build)

Full list of sub-tasks:

* [assemble](#assemble)
* [bower_concat](#bower_concat)
* [clean](#clean)
* [concat](#concat)
* [express](#express)
* [jshint](#jshint)
* [notify](#notify)
* [open](#open)
* [sass](#sass)
* [uglify](#uglify)
* [watch](#watch)
* [concurrent](#concurrent)

### server
Runs `build:development` & opens the project in your browser using a local Express server. Tab automatically reloads when any change is detected.
```
grunt server
```

### build
Compiles templates, styles, and javascript into the `public` directory
```
// Compiles with source maps (when available)
grunt build:development

// Compiles without source maps
grunt build:production
```

---

### assemble
Compiles handlebars templates into HTML files in `public` directory
```shell
# Has {{production}} set to false
grunt assemble:development

# Has {{production}} set to true
grunt assemble:production
```
Configuration is in `grunt/assemble.js`

### bower_concat
Concatenates all bower_component js into a single library file – `/public/lib/min/libraries.min.js`
```
grunt bower_concat
```
Configuration is in `grunt/bower_concat.js`. Bower packages typically do not need to be added manually to the configuration, but can use this to exclude & define dependencies.

### clean
Removes generated files in `public/` to avoid orphans
```
grunt clean
```
Configuration is in `grunt/clean.js`

### concat
Concatenates custom JS files into a single file – `/public/lib/min/scripts.min.js`
```
grunt concat
```
Configuration is in `grunt/concat.js`

### concat_css
Concatenates library css into a single library file – ``/public/lib/min/libraries.css`
```
grunt concat_css
```
Configuration is in `grunt/concat_css.js`. Files must be manually added to this list, unlike `bower_concat`

### express
Serves up files from `/public` at `localhost:{{port}}`
```
grunt express
```
Configuration is in `grunt/express.js`

### jshint
Checks files in `/front-end/js` for common errors and code-style
```
grunt jshint
```
Configuration is in `grunt/jshint.js`

### notify
Pops OSX/Growl-style notifications on the desktop when key tasks have completed. This task should not be run directly. Configuration is in `grunt/notify.js`

### open
Opens a tab in your default browser to `localhost:{{express.port}}`
```
grunt open
```
Configuration is in `grunt/open.js`

### sass
Compiles files from `/front-end/sass` to single CSS at `/public/lib/min/styles.css`
```
// Compiles to nested format with source maps
grunt sass:development

// Compiles to compressed format w/o source maps
grunt sass:production
```
Configuration is in `grunt/sass.js`

### uglify
Minifies compiled JS files in `/public/lib/min`
```
grunt uglify
```
Configuration is in `grunt/uglify.js`

### watch
Watches files for changes for on-the-fly compilation & browser reload
```
grunt watch
```
Configuration is in `grunt/watch.js`

### concurrent
Performs multiple tasks at once for speedier builds
```
// Compiles site files in development mode
grunt concurrent:site_development

// Compiles site files in production mode
grunt concurrent:site_production

// Compiles library files
grunt concurrent:libraries
```
Configuration is in `grunt/concurrent.js`
