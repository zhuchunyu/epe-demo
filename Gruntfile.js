module.exports = function (grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/scripts/main.js',
                dest: 'build/public/scripts/main.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['public/scripts/main.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
        },
        jshint: {
            options: {
                ignores: [
                    "build/public/scripts/*.js"
                ]
            },
            src: [
                "public/scripts/*.js"
            ]
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
                    noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
                },
                src: ['test/**/*.js']
            }
        }
    });
    
    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // 加载包含 "jshint" 任务的插件。
    grunt.loadNpmTasks("grunt-contrib-jshint");
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Add the grunt-mocha-test tasks.
    grunt.loadNpmTasks('grunt-mocha-test');
    
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify', 'jshint', 'mochaTest']);
    
};