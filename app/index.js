'use strict';
var path = require('path'),
    fs = require('fs'),
    _ = require('underscore'),
    yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
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

    copyGruntConfigs: function () {
        var self = this,
            configFiles = fs.readdirSync('./templates/grunt');

        // Main Gruntfile
        self.template("_Gruntfile.js", "Gruntfile.js", { sitename: self.sitename });

        // Grunt Task Configurations
        _.each(configFiles, function (file) {
            var filename = path.basename(file);
            self.copy(filename, path.join('grunt/', filename.replace('_', '')));
        });
    },

    copyJSTemplates: function () {
        this.copy('js/_scripts.js', 'front-end/js/scripts.js');
    },

    copySCSSTemplates: function () {
        var self = this,
            componentFiles = fs.readdirSync('./templates/sass/components');

        self.copy('sass/_styles.scss', 'front-end/sass/styles.scss');

        // Common Components
        _.each(componentFiles, function (file) {
            var filename = path.basename(file);
            self.copy(filename, path.join('front-end/sass/', filename.replace('_', '')));
        });
    },

    copyHBSTemplates: function () {

    }
});