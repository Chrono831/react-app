const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths');
const options = require('./options');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = env => merge(common(env), {
    devtool: 'cheap-module-source-map',
});
