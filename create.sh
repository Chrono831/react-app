#!/bin/sh

RESOURCE_DIR="$(dirname "$(readlink -f $0)")"

echo "Copying template..."
cp -R "$RESOURCE_DIR/template/"* .

echo "Installing packages..."
xargs -a "$RESOURCE_DIR/dependencies.txt" npm install

echo "Running initial build..."
npm run build


echo "Your new React application is ready!"
echo
echo "To build this application: npm run build"
echo "To watch for changes: npm run watch"
