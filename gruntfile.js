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

    copy: {
      app: {
        files: [
          { src: 'dist/glue1.css' dest: 'Apps/about' },
          { src: 'dist/glue1.css' dest: 'Apps/ad' },
          { src: 'dist/glue1.css' dest: 'Apps/album' },
          { src: 'dist/glue1.css' dest: 'Apps/artist' },
          { src: 'dist/glue1.css' dest: 'Apps/artist-chart' },
          { src: 'dist/glue1.css' dest: 'Apps/browse' },
          { src: 'dist/glue1.css' dest: 'Apps/buddy-list' },
          { src: 'dist/glue1.css' dest: 'Apps/chart' },
          { src: 'dist/glue1.css' dest: 'Apps/collection' },
          { src: 'dist/glue1.css' dest: 'Apps/collection-album' },
          { src: 'dist/glue1.css' dest: 'Apps/collection-artist' },
          { src: 'dist/glue1.css' dest: 'Apps/collection-songs' },
          { src: 'dist/glue1.css' dest: 'Apps/concerts' },
          { src: 'dist/glue1.css' dest: 'Apps/creator-about' },
          { src: 'dist/glue1.css' dest: 'Apps/discover' },
          { src: 'dist/glue1.css' dest: 'Apps/error' },
          { src: 'dist/glue1.css' dest: 'Apps/feedback' },
          { src: 'dist/glue1.css' dest: 'Apps/findfriends' },
          { src: 'dist/glue1.css' dest: 'Apps/full-screen-modal' },
          { src: 'dist/glue1.css' dest: 'Apps/genre' },
          { src: 'dist/glue1.css' dest: 'Apps/glue-resources' },
          { src: 'dist/glue1.css' dest: 'Apps/hub' },
          { src: 'dist/glue1.css' dest: 'Apps/licenses' },
          { src: 'dist/glue1.css' dest: 'Apps/lyrics' },
          { src: 'dist/glue1.css' dest: 'Apps/messages' },
          { src: 'dist/glue1.css' dest: 'Apps/notification-center' },
          { src: 'dist/glue1.css' dest: 'Apps/people' },
          { src: 'dist/glue1.css' dest: 'Apps/playlist-desktop' },
          { src: 'dist/glue1.css' dest: 'Apps/playlist-folder' },
          { src: 'dist/glue1.css' dest: 'Apps/profile' },
          { src: 'dist/glue1.css' dest: 'Apps/radio-hub' },
          { src: 'dist/glue1.css' dest: 'Apps/search' },
          { src: 'dist/glue1.css' dest: 'Apps/settings' },
          { src: 'dist/glue1.css' dest: 'Apps/share' },
          { src: 'dist/glue1.css' dest: 'Apps/social-feed' },
          { src: 'dist/glue1.css' dest: 'Apps/station' },
          { src: 'dist/glue1.css' dest: 'Apps/stations' },
          { src: 'dist/glue1.css' dest: 'Apps/suggest' },
          { src: 'dist/glue1.css' dest: 'Apps/zlink' },
          { src: 'dist/glue1.css' dest: 'Apps/zlink-queue' },
          { src: 'dist/glue1.css' dest: 'Apps/zlogin' },
        ]
      },

    },

    // Watch and build
    watch: {
      glue: { // Watch our GLUE file separately from App sass
        files: ['skin/**/*.scss', '!skin/apps/*.scss'],
        tasks: ['sass:glue']
      },
      apps: { // Watch App-specific sass separately from GLUE
        files: ['skin/apps/*.scss', 'skin/base/_variables.scss'],
        tasks: ['sass:apps']
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
