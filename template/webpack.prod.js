const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common.js');
const paths = require('./paths');
const options = require('./options');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

console.log('Creating an optimized production build...');

module.exports = env => merge(common(env), {
    devtool: 'source-map', // adds a decent performance source mapping for debug
    plugins: [
        new UglifyJSPlugin(), // minifies code and drops dead code
    ]
});