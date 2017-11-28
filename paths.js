const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const ASSETS_PATH = path.resolve(__dirname, 'assets');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

const ENTRY_PATH = path.resolve(SRC_PATH, 'index.js');
const TEMPLATE_PATH = path.resolve(ASSETS_PATH, 'vcTemplate.html');

module.exports = {
    src : SRC_PATH,
    build : BUILD_PATH,
    entry : ENTRY_PATH,
    assets : ASSETS_PATH,
    template : TEMPLATE_PATH,
    nodeModules : NODE_MODULES_PATH,
};