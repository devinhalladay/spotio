module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Configure notifications
    notify_hooks: {
      options: {
        enabled: true,
        title: "Spotio",
        success: true,
        duration: 1
      }
    },

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
      glue: { // Copy GLUE to each App directory
        files: [
          { src: 'dist/glue1.css', dest: 'Apps/about/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/ad/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/album/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/artist/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/artist-chart/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/browse/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/buddy-list/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/chart/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/collection/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/collection-album/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/collection-artist/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/collection-songs/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/concerts/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/creator-about/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/discover/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/error/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/feedback/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/findfriends/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/full-screen-modal/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/genre/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/glue-resources/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/hub/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/licenses/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/lyrics/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/messages/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/notification-center/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/people/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/playlist-desktop/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/playlist-folder/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/profile/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/radio-hub/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/search/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/settings/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/share/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/social-feed/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/station/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/stations/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/suggest/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/zlink/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/zlink-queue/css/glue1.css' },
          { src: 'dist/glue1.css', dest: 'Apps/zlogin/css/glue1.css' },
        ]
      },
      apps: { // Copy App directories into .tmp/Spotify.app
        files: [{
          expand: true,
          cwd: 'Apps',
          src: ['**/*'],
          dest: '.tmp/Spotify.app/Contents/Resources/Apps/',
        }]
      },
      icon: { // Copy App directories into .tmp/Spotify.app
        files: [{
          expand: true,
          src: ['Icon.icns'],
          dest: 'dist/Spotify.app/Contents/Resources/',
        }]
      }
    },

    // Watch and build
    watch: {
      glue: { // Watch our GLUE file separately from App sass
        files: ['skin/**/*.scss', '!skin/apps/*.scss'],
        tasks: ['sass:glue', 'copy:glue', 'copy:apps', 'shell:copyspotifyapp', 'notify_hooks']
      },
      apps: { // Watch App-specific sass separately from GLUE
        files: ['skin/apps/*.scss', 'skin/base/_variables.scss'],
        tasks: ['sass:apps', 'copy:apps', 'shell:copyspotifyapp', 'notify_hooks']
      },
      bundlejs: { // Watch App-specific bundle.js
        files: ['Apps/**/bundle.js'],
        tasks: ['copy:apps', 'shell:copyspotifyapp', 'notify_hooks']
      },
    },

    // Delete files
    clean: {
      // Delete .spa files
      spa: ['.tmp/Spotify.app/Contents/Resources/Apps/*.spa'],
      oldApps: {
        files: {
          src: ['.tmp/Spotify.app', '.tmp/Spotify.dmg']
        }
      }
    },

    mkdir: {
      tmp: {
        options: {
          create: ['.tmp']
        },
      },
    },

    curl: {
      '.tmp/Spotify.dmg': 'https://download.spotify.com/Spotify.dmg',
    },

    shell: {
      extract: {
        command: [
          'hdiutil attach .tmp/Spotify.dmg',
          'cp -R "/Volumes/Spotify/Spotify.app" .tmp/',
          'hdiutil detach /Volumes/Spotify'
        ].join('&&')
      },
      copyspotifyapp: {
        command: 'sudo cp -r ".tmp/Spotify.app" "dist/"'
      },
      package: {
        command: "find dist/Spotify.app/Contents/Resources/Apps/* -maxdepth 0 -type d | awk -F '' '{print \"END_DIR=`basename \" $0\"`; cd \" $0 \"; zip -q -r ../$END_DIR.spa *; cd ../../../../../ ; rm -r \"$0}' | bash"
      }
    },

    compress: {
      main: {
        options: {
          archive: 'dist/Spotify.zip'
        },
        files: [{cwd: 'dist', expand: true, src: ['Spotify.app/**/*'], dest: '/'}]
      }
    },
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Run tasks
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('download', ['mkdir', 'curl', 'shell:extract']);
  grunt.registerTask('release', ['copy:apps', 'shell:copyspotifyapp', 'copy:icon', 'shell:package']);
};
