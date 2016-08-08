module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      glue: {
        files: [{
          expand: true,
          cwd: "skin",
          src: ["glue1.scss"],
          dest: "dist",
          ext: ".css"
        }]
      },
      apps: {
        files: [{
          expand: true,
          cwd: "skin/apps",
          src: ["*.scss"],
          dest: "Apps/",
          ext: ".css",
          rename: function(dest, src) {
            return dest + src.slice(0, -4) + "/css/" + 'style.css';
          }
        }]
      },
    },
    watch: {
      source: {
        files: ['skin/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
