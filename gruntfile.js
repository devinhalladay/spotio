module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      task: {
        src: ['source'],
        dest: 'destination'
      },
      options: {
        'sourcemap': 'none',
        'update': true
      }
    },
    watch: {
      task: {
        src: ['source'],
        dest: 'destination'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);
};
