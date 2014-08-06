'use strict';
var path = require('path'),
    fs = require('fs'),
    _ = require('underscore'),
    yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    _copyDirectory: function (src, dest) {
        var self = this,
            srcFiles = fs.readdirSync(__dirname + '/templates/' + src);

        _.each(srcFiles, function (file) {
            var filename = path.basename(file);
            self.copy(path.join(src, filename), path.join(dest, filename.replace('_', '')));
        });
    },

    promptUser: function () {
        var self = this,
            done = self.async(),
            prompts = [{
                name: 'siteName',
                message: 'What is your sites\'s name ?'
            }];

        console.log(self.yeoman);

        self.prompt(prompts, function (props) {
            self.siteName = props.siteName;
            done();
        });
    },

    scaffoldFolders: function(){
        this.mkdir('front-end');
        this.mkdir('front-end/sass');
        this.mkdir('front-end/sass/components');
        this.mkdir('front-end/sass/site');
        this.mkdir('front-end/templates');
        this.mkdir('front-end/templates/layouts');
        this.mkdir('front-end/templates/partials');
        this.mkdir('front-end/templates/helpers');
        this.mkdir('front-end/templates/data');
        this.mkdir('public');
        this.mkdir('public/lib');
        this.mkdir('public/lib/img');
        this.mkdir('public/lib/min');
        this.mkdir('grunt');
    },

    copyPackageFiles: function () {
        // NPM
        this.copy('_package.json', 'package.json');

        // Bower
        this.copy('_bower.json', 'bower.json');
    },

    copyGruntConfigs: function () {
        // Main Gruntfile
        this.template("_Gruntfile.js", "Gruntfile.js", { sitename: this.siteName });

        // Grunt Task Configurations
        this._copyDirectory('grunt', 'grunt/');
    },

    copyJSTemplates: function () {
        this.copy('js/_scripts.js', 'front-end/js/scripts.js');
    },

    copySCSSTemplates: function () {
        // Main Style File
        this.copy('sass/_styles.scss', 'front-end/sass/styles.scss');

        // Common Components
        this._copyDirectory('sass/components', 'front-end/sass/components/');
    },

    copyHBSTemplates: function () {
        // Layouts
        this._copyDirectory('hbs/layouts', 'front-end/templates/layouts');

        // Pages
        this._copyDirectory('hbs/pages', 'front-end/templates/pages');

        // Partials
        this._copyDirectory('hbs/partials', 'front-end/templates/partials');

        // Data
        this.template('hbs/data/_project.json', 'front-end/templates/data/project.json', { sitename: this.siteName });
    },

    runNpm: function () {
        var done = this.async();

        this.npmInstall('', function () {
            done();
        });
    },

    runBower: function () {
        var done = this.async();

        this.bowerInstall('', function () {
            done();
        });
    }
});