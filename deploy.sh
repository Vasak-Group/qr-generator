#!/bin/bash

# abort on errors
set -e
# build
npm run build

# navigate into the build output directory
cd dist

echo 'qrgenerator.vasak.net.ar' >CNAME

git init
git submodule deinit -f --all
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Vasak-Group/qr-generator.git main:gh-pages
cd -
