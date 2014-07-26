# Web app generator [![Build Status](http://img.shields.io/travis/ZucchiniZe/generator-zapp.svg?style=flat)](https://travis-ci.org/ZucchiniZe/generator-zapp)

> [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [gulp](http://gulpjs.com/) for the build process

![screenshot](screenshot.png)


## Features

Please see our [gulpfile.js](app/templates/gulpfile.js) for up to date information on what we support.

* CSS Autoprefixing
* Built-in preview server with livereload
* Cross Browser synchronization with [browsersync](http://browsersync.io)
* JSHint errors delivered with gulp-notify
* Automagically compile Less
* Automagically lint your scripts
* Awesome image optimization
* Automagically wire-up dependencies installed with [Bower](http://bower.io) *(when `gulp watch` or `gulp wiredep`)*

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*


## Getting Started

- Install: `npm install -g generator-zapp`
- Run: `yo zapp`
- Run `gulp` for building and `gulp watch` for preview


## Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

To install dependencies, run `bower install --save package-name` to get the files, then run `gulp wiredep` to automagically add `script` or `style` tags to your `index.html`.

## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.
