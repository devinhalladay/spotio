for D in `find Apps -type d -maxdepth 1 -mindepth 1`
do
  tar -cvf $D.zip $D
done

zip -r foo.zip dir_path


# pushd Unwanted1/Unwanted2
# zip -r ~/new.zip wanted
# popd

for i in *; do zip -r $i.zip $i; done

pushd Apps; for i in *; do zip -r ../build/Apps/$i.zip $i; done; popd

for file in build/Apps/*.zip; do echo mv "$file" "$file.spa"; done

for i in *.yourfiles; do mv "$i" "`echo $i | sed 's/old/new/g'`"; done
