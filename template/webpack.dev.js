const merge = require('webpack-merge');
const common = require('./webpack.common.js');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = env => merge(common(env), {
    devtool: 'cheap-module-source-map',
});
