#!/bin/sh

RESOURCE_DIR="$(dirname "$(readlink -f $0)")"

echo "Copying template..."
cp -R "$RESOURCE_DIR/template/"* .

echo "Installing packages..."
xargs -a "$RESOURCE_DIR/dependencies.txt" npm install

echo "Running watch task..."
npm run watch