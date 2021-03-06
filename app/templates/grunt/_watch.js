/**
 * Watches files for changes for on-the-fly compilation & browser reload
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function (grunt, options) {
    return {
        templates: {
            files: ['<%= path.templates %>/**/*'],
            tasks: ['assemble:development']
        },
        styles: {
            files: ['<%= path.sass %>/**/*.scss'],
            tasks: ['sass:development']
        },
        libs: {
            files: ['<%= path.cwd %>/bower.json'],
            tasks: ['concat_css', 'bower_concat']
        },
        scripts: {
            files: ['<%= path.js %>/**/*.js'],
            tasks: ['concat']
        },
        reload: {
            files: [
                '<%= path.public %>/**/*'
            ],
            options: {
                livereload: true
            }
        }
    };
};