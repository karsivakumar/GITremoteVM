// Do all grunt related stuff inside the grunt function here

module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

grunt.initConfig({
             pkg: grunt.file.readJSON('package.json'),

// 1. copy files

        copy: {
            main: {
            files: [{
                    expand: true,
                    cwd: 'workfiles/',
                    src: ['*.js'],
                    dest: 'dist/copiedfiles/',
                    filter: 'isFile'
                },
                ],
            },
        },

// 2. compile files

        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env'],
            },
            dist: {
                files: {
                    'dist/compiled/foo.js': 'dist/copiedfiles/foo.js',
                    'dist/compiled/bar.js': 'dist/copiedfiles/bar.js'
                }
            }
        },
        
// 3. concatenate files

    concat: {
        options: {
            separator: ';',
        },
        dist: {
                src: ['dist/compiled/foo.js', 'dist/compiled/bar.js'],
                dest: 'dist/compiled/scripts.js'
        }
    },

// 4. header and footer insertion

    header: {
        dist: {
            options: {
                text: '//header inserted in js file'
            },
            files: {
                'dist/compiled/headerscripts.js': 'dist/compiled/scripts.js'
            }
        }
    },

    footer: {
        dist: {
            options: {
                text: '//footer inserted in js file'
            },
            files: {
                'dist/compiled/headerfooterscripts.js': 'dist/compiled/headerscripts.js'
            }
        }
    },

// 5. uglify / compress files

    uglify: {
        my_target: {
            files: {
                'dist/compiled/finalscript.js': 'dist/compiled/headerfooterscripts.js'
            }
        }
    },

});

    // grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask( 'default', ['copy', 'babel', 'concat', 'header', 'footer', 'uglify']);

};