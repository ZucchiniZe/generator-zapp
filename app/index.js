'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var wiredep = require('wiredep');


var ZappGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      this.installDependencies({
        skipInstall: this.options['skip-install'],
        callback: function () {
          var bowerJson = JSON.parse(fs.readFileSync('./bower.json'));

          wiredep({
            bowerJson: bowerJson,
            directory: 'app/bower_components',
            src: 'app/index.html'
          });
        }
      });
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to ZucchiniZe\'s marvelous Webapp generator!'));

    var prompts = [{
      name: 'appName',
      message: 'What would you like to name you webapp?'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },
  app: function () {
    this.mkdir('app');
    this.mkdir('app/scripts');
    this.mkdir('app/styles');
    this.mkdir('app/images');
  },
  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('bowerrc', '.bowerrc');
  },
  git: function () {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
  },
  configs: function () {
    this.template('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },
  gulpfile: function () {
    this.copy('gulpfile.js', 'gulpfile.js');
  },
  h5bp: function () {
    this.copy('404.html', 'app/404.html');
    this.copy('robots.txt', 'app/robots.txt');
  },
  css: function () {
    this.copy('main.less', 'app/styles/main.less');
  },
  index: function () {
    this.copy('index.html', 'app/index.html');
  },
  js: function () {
    this.write('app/scripts/main.js', 'console.log(\'\\\'Allo \\\'Allo!\');');
  },
  message: function () {
    console.log('\nAfter running `npm install & bower install`, inject your front end dependencies into' +
               '\nyour HTML by running:' +
               '\n' +
               chalk.yellow.bold('\n  gulp wiredep'));
  }
});

module.exports = ZappGenerator;
