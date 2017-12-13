const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const ASSETS_PATH = path.resolve(__dirname, 'assets');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

const ENTRY_PATH = path.resolve(SRC_PATH, 'index.js');
const TEMPLATE_PATH = path.resolve(ASSETS_PATH, 'vcTemplate.html');

// Redux paths
const COMPONENTS_PATH = path.resolve(SRC_PATH, 'components');
const CONTAINERS_PATH = path.resolve(SRC_PATH, 'containers');
const CONSTANTS_PATH  = path.resolve(SRC_PATH, 'constants');
const ACTIONS_PATH  = path.resolve(SRC_PATH, 'actions');
const REDUCERS_PATH = path.resolve(SRC_PATH, 'reducers');
const TESTS_PATH    = path.resolve(SRC_PATH, 'tests');

module.exports = {
    src : SRC_PATH,
    build : BUILD_PATH,
    entry : ENTRY_PATH,
    assets : ASSETS_PATH,
    template : TEMPLATE_PATH,
    nodeModules : NODE_MODULES_PATH,
    app : {
        components : COMPONENTS_PATH,
        containers : CONTAINERS_PATH,
        constants  : CONSTANTS_PATH,
        actions    : ACTIONS_PATH,
        reducers   : REDUCERS_PATH,
        tests      : TESTS_PATH,
    }
};