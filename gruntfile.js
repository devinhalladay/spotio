module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      glue: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: "skin",
          src: ["glue1.scss"],
          dest: "dist",
          ext: ".css"
        }]
      },
      apps: {
        options: {
          sourcemap: 'none'
        },
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
      options: {
        spawn: false,
      },
      source: {
        files: ['skin/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};
