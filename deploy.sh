#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves.
set -euo pipefail
cd "$(dirname "$0")"
npm run build
remote=$(git remote get-url origin)
tmp=$(mktemp -d)
cp -R dist/. "$tmp"
cd "$tmp"
git init -q -b gh-pages
git add -A
git commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -f "$remote" gh-pages
rm -rf "$tmp"
