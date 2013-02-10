/*global module:false*/
module.exports = function (grunt) {


    // Project configuration.
    grunt.initConfig({

        compass : {
            dev : {
                src : 'public/sass/',
                dest : 'public/css/',
                linecomments : false,
                forcecompile : true,
                debugsass : false,
                images : '/public/img/',
                relativeassets : true
            },
            production : {
                src : 'dist/sass/',
                dest : 'dist/css/',
                linecomments : false,
                forcecompile : true,
                debugsass : false,
                images : '/dist/img/',
                relativeassets : true,
                outputstyle: 'compressed'
            }
        },

        jshint : {
            options : {
                curly : true,
                eqeqeq : true,
                immed : true,
                latedef : true,
                newcap : true,
                noarg : true,
                sub : true,
                undef : true,
                boss : true,
                eqnull : true,
                browser : true
            },
            globals : {
                log : false,
                console : false,
                google : true
            }
        },

        lint : {
            files : ['grunt.js', 'public/js/*.js']
        },

        watch : {
            files : ['public/sass/style.scss', '<config:lint.files>'],
            tasks : ['compass:dev', 'lint']
        },

        copy : {
            dist : {
                files : {
                    "dist/" : "public/**"
                }
            }
        },

        clean: {
            dist: ["dist"]
            //            ,
            //            trimDist: [
            //                "dist/sass",
            //                "dist/css/fonts/quicksand/*.scss",
            //                "dist/css/fonts/quicksand/*.css"
            //            ]
        },

        // doesn't seem to work
        // leave it anyway to serve as a reference
        exec: {
            deploy: {
                command: 'cap deploy',
                stdout: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-compass');


    // Default task.
    grunt.registerTask('default', '');
    //    grunt.registerTask('build', 'clean:dist copy:dist compass:production clean:trimDist');
    grunt.registerTask('build', 'clean:dist copy:dist');

};
