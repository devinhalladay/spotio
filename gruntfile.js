module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile Sass
    sass: {
      options: {
        sourceMap: false,
        sourceComments: true
      },
      glue: { // Process GLUE Sass
        files: [{
          expand: true,
          cwd: "skin",
          src: ["glue1.scss"],
          dest: "dist",
          ext: ".css"
        }]
      },
      apps: { // Process App-specific Sass
        files: [{
          expand: true,
          cwd: "skin/apps",
          src: ["*.scss"],
          dest: "Apps/",
          ext: ".css",
          // The function below is a hack to move compiled CSS files into /Apps/[filename_base]/css/style.css
          rename: function(dest, src) {
            return dest + src.slice(0, -4) + "/css/" + 'style.css';
          }
        }]
      }
    },

    // Watch and build
    watch: {
      glue: {
        files: ['skin/**/*.scss', '!skin/apps/*.scss'],
        tasks: ['sass']
      },
      sass: {
        files: 'skin/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Run tasks
  grunt.registerTask('default', ['sass', 'watch']);
};
