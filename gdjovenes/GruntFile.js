module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      // options: {
      //   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      // },
      build: {
        src: 'js/scripts.min.js',
        dest: 'js/scripts.min.js'
      }
    },

    sass: {
    	dist: {
    		options: {
    			style: 'compressed'
    		},
    		files: {
          // dest : source
          'css/style.css' : 'css/style.scss'
    		}
    	}
    },

    autoprefixer: {
      prefix: {
        src: 'css/style.css',
        dest: 'css/style.css',
      },
    },

    watch: {
      options: {
        livereload: true,
      },
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        options: {
          livereload: false,
        },
        files: 'css/*.scss',
        tasks: ['sass', 'autoprefixer'],
      },
      src: {
        files: ['js/*.js', 'css/*.css', '*.html', '!js/*.js'],
        tasks: ['default'],
      },
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};