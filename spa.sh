# pushd Apps; for i in *; do zip -r ../dist/$i.zip $i; done; popd
# for file in dist/*.zip; do mv "${file}" "${file/%.zip/.spa}"; done
