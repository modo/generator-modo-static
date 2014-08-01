'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var ModoStaticGenerator = yeoman.generators.Base.extend({
    promptUser: function () {
        var done = this.async();
        console.log(this.yeoman);

        var prompts = [{
            name: 'siteName',
            message: 'What is your sites\'s name ?'
        },{
            type: 'confirm',
            name: 'addDemoSection',
            message: 'Would you like to generate a demo section ?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            this.addDemoSection = props.addDemoSection;

            done();
        }.bind(this));
    }
});

module.exports = ModoStaticGenerator;