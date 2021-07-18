#!/usr/bin/env bash

set -e

# Install all production modules
npm ci --only=production

# Create .nojekyll
if ! [ -f .nojekyll ]; then
	touch .nojekyll
fi

# Delete .gitignore
if [ -f .gitignore ]; then
	rm -rf .gitignore
fi

# Commit and push
git add .
git commit --allow-empty-message --no-edit
git push origin main:gh-pages

# Reset one commit back
git reset --hard HEAD~