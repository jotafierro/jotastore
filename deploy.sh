#!/usr/bin/env sh

# NOTE: I need change route in
# vite.config.js
# @/App.jsx
# @/components/Brand/Brand.jsx
# @/components/NavContainer/NavContainer.jsx
# @/components/Brand/Brand.jsx
# @/components/ProductCard/ProductCard.jsx

# this example is from https://vitejs.dev/guide/static-deploy.html#github-pages

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jotafierro/jotastore.git main:gh-pages

cd -
