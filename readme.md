# Rdio skin for Spotify
## VERY WIP

I sorely miss Rdio. It was the perfect music streaming service: quality streaming, massive selection, perfect UX, beautiful UI, and wonderful social interaction features. When it was bought by Pandora, many of us were left out in the dust and were forced to choose between lesser services like Apple Music, Spotify, and Google Play Music.

**If you decided to go with Spotify but, like me, you hate the UI, you're in luck—I discovered that you can skin the Spotify app with CSS.**

---

## DOCS
- `sudo grunt`: Build all CSS and watch for changes
- `sudo grunt clean`: Deletes all `.spa` files from .tmp/Spotify.app
- `sudo grunt clean:oldApps`: Deletes old apps in .tmp
- `sudo grunt download`: Downloads latest spotify binary and places it in .tmp/
- `sudo grunt shell:extract`: Extracts the most recently downloaded Spotify.app from .tmp/Spotify.dmg

## TODO
- [x] Streaming build system so I don't need to keep rebuilding and recompiling every single Sass file when I make a single change.

<!-- ## Install

*Note: not tested on Windows, but in theory this approach will also work on the Windows Spotify app*

Spotify's Mac app uses a modular design where each page in the app is broken up into modules, or `Apps`. Each `App` is either a page or an element of a page (i.e. `about` is the app's about popover, `collection` is your collection page, `collection-album` is the albums tab of your collection, etc.).

The current, up-to-date with the current Rdio Skin CSS, Spotify.app is built for you in /dist. -->

## Contributing

TODO
