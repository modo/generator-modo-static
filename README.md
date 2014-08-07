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

## Usage

Clone this generator
```
git clone https://github.com/modo/generator-modo-static.git
```

Link the directory as a local NPM package
```
cd generator-modo-static
npm link
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo modo-static`, it will ask you for a site name
```
yo modo-static
```

## Grunt Tasks

Aliased tasks most useful when developing (configuration can be found in `grunt/aliases.js`):

* [server](#server)
* [build:development](#build)
* [build:production](#build)

Full list of sub-tasks (all configuration can be found in `grunt/[taskname].js`):

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

**Runs all compile tasks in development mode**
```
grunt build:development
```

**Runs all compile tasks in production mode,  minifying output
```
grunt build:production
```

---

### assemble
Compiles handlebars templates into HTML files in `public` directory.

**Has** `{{production}}` **set to** `false`
```
grunt assemble:development
```

**Has** `{{production}}` **set to** `true`
```
grunt assemble:production
```

### bower_concat
Concatenates all bower_component js into a single library file – `/public/lib/min/libraries.min.js`. Bower packages typically do not need to be added manually to the configuration, but can use this to exclude & define dependencies.
```
grunt bower_concat
```

### clean
Removes generated files in `public/` to avoid orphans.
```
grunt clean
```

### concat
Concatenates custom JS files into a single file – `/public/lib/min/scripts.min.js`.
```
grunt concat
```

### concat_css
Concatenates library css into a single library file – ``/public/lib/min/libraries.css`. Files must be manually added to this list, unlike `bower_concat`.
```
grunt concat_css
```

### express
Serves up files from `/public` at `localhost:{{port}}`.
```
grunt express
```

### jshint
Checks files in `/front-end/js` for common errors and code-style.
```
grunt jshint
```

### notify
Pops OSX/Growl-style notifications on the desktop when key tasks have completed.

### open
Opens a tab in your default browser to `localhost:{{express.port}}`
```
grunt open
```

### sass
Compiles files from `/front-end/sass` to single CSS at `/public/lib/min/styles.css`

**Nested format w/ source maps**
```
grunt sass:development
```

**Compressed format w/o source maps**
```
grunt sass:production
```

### uglify
Minifies compiled JS files in `/public/lib/min`
```
grunt uglify
```

### watch
Watches files for changes for on-the-fly compilation & browser reload
```
grunt watch
```

### concurrent
Performs multiple tasks at once for speedier builds

**Compiles site files in development mode**
```
grunt concurrent:site_development
```

**Compiles site files in production mode**
```
grunt concurrent:site_production
```

**Compiles library files**
```
grunt concurrent:libraries
```
