'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
    promptUser: function () {
        var done = this.async();
        console.log(this.yeoman);

        var prompts = [{
            name: 'siteName',
            message: 'What is your sites\'s name ?'
        }];

        this.prompt(prompts, function (props) {
            this.siteName = props.siteName;
            done();
        }.bind(this));
    },

    scaffoldFolders: function(){
        this.mkdir('front-end');
        this.mkdir('front-end/sass');
        this.mkdir('front-end/templates');
        this.mkdir('public');
        this.mkdir('public/lib');
        this.mkdir('public/lib/img');
        this.mkdir('public/lib/min');
        this.mkdir('grunt');
    }
});