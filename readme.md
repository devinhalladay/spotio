# Spotio for Spotify.app

### **[HELP NEEDED](http://github.com/devinhalladay/spotio/issues)**

![Spotio screenshot](screenshot.png)

**If you decided to go with Spotify after Rdio was bought but, like me, you miss Rdio's light UI, you're in luck—I discovered that you can skin the Spotify app with CSS.**

*Disclaimer: I have nothing but respect for the Spotify design and engineering teams, and undertaking this project has served only to increase that respect. They're really, really brilliant teams doing things that I admire greatly. I appreciate the design decisions they made while designing the app, but I prefer a light theme in my apps, so this project is merely an attempt to cater to my love of Rdio, not to do it "better" than the Spotify team did.*

---

# Download
**IMPORTANT:** Make sure you allow opening applications from anywhere in your Mac's Security preferences, otherwise this app will ***not*** work.

**Make sure you quit (cmd + q) your local Spotify.app before launching my version, otherwise my version won't launch.**

Download the latest release: https://github.com/devinhalladay/spotio/releases/latest.

# To-do
- [ ] Add a Grunt task to setup the local repo for people who have just cloned this repo for development.
- [ ] Add documentation guide for contributing to this repo.
- [ ] Design new icons for the app for `v1.1` public release.
- [x] **HIGH PRIORITY:** Figure out how to get access to the rendered DOM from Chromium Embedded Framework so I can fully style all elements.
- [x] Streaming build system so I don't need to keep rebuilding and recompiling every single Sass file when I make a single change.

# Development
Originally, I used bash scripts to manage development for this app, but I switched to a streaming build system using Grunt.

## Grunt Tasks
- `sudo grunt`: Build all CSS and watch for changes
- `sudo grunt clean:spa`: Deletes all `.spa` files from .tmp/Spotify.app
- `sudo grunt clean:oldApps`: Deletes old apps in .tmp
- `sudo grunt download`: Downloads latest spotify binary and places it in .tmp/
- `sudo grunt shell:extract`: Extracts the most recently downloaded Spotify.app from .tmp/Spotify.dmg
- `sudo grunt compress`: Compress your Spotify.app into a distributable .zip
- `sudo grunt copy:icon`: Copies the custom icon into dist/Spotify.app

---

# License

MIT License

Copyright (c) 2016 Devin Halladay studio@devinhalladay.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
