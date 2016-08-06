# Compile Sass
sass skin/glue1.scss:build/glue1.css
rm -f build/*.map

# Filter build/glue1.css into all app dirs
sh filterdown.sh

# Convert app dirs to .spa files
# sh spa.sh

# Move everything in apps to build/
pushd Apps; for i in *; do mv "${i}" "../dist/"; done; popd

# curl https://download.spotify.com/Spotify.dmg --create-dirs -o .tmp/Spotify.dmg
# hdiutil attach Spotify.dmg
# sudo cp -R "/Volumes/Spotify/Spotify.app" .tmp/
# sudo chmod -R 755 .tmp/Spotify.app
# for f in dist* ; do sudo cp -R "${f}" $(pwd)/Products/Spotify.app/Contents/Resources/Apps/; done
# for f in $(pwd)/Products/Spotify.app/Contents/Resources/Apps/*.spa ; do rm -rf $(pwd)/Products/Spotify.app/Contents/Resources/Apps/${f##*/} &> /dev/null; done
# echo -e "${Cyan}Installed Spotify.app Binary to${Color_Off} ${Green}$(pwd)/Products/Spotify.app${Color_Off}"
# echo -e "${Cyan}Spotify.app source code is at${Color_Off} ${Green}$(pwd)/Source${Color_Off}"
# hdiutil detach Spotify.dmg -force &> /dev/null
# hdiutil unmount Spotify.dmg -force
# rm -rf $(pwd)/Spotify.dmg &> /dev/null
