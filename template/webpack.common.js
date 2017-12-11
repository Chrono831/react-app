'use strict';
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = require('./paths');
const options = require('./options');

module.exports = env => ({
    entry : [paths.entry] ,
    output: {
        pathinfo: true,
        filename: 'bundle.js',
        path: paths.build,
    },
    module: {
        strictExportPresence: true,
        rules: [
            { 
                test : /\.(js|jsx|mjs)$/, 
                exclude: /node_modules/, 
                include: paths.src,
                use: {
                    loader: 'babel-loader',
                    options: options.babelOptions
                },
            },
            {
              test : [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              use : [{ loader : 'url-loader', options : options.imageOptions, }],
            },
            {
                test : /\.scss$/,
                use : ExtractTextPlugin.extract({
                    use  : [
                        { loader : 'css-loader', options: { importLoaders : 2 }, },
                        { loader : 'postcss-loader', options : options.postCssOptions, },
                        { loader : 'sass-loader' },
                    ]
                })
            },{
                test : /\.css$/,
                use : ExtractTextPlugin.extract({
                    use  : [
                        { loader : 'css-loader', options: { importLoaders : 1 }, },
                        { loader : 'postcss-loader', options : options.postCssOptions, }, 
                    ]
                })
            },
        ]
    },
    plugins : [
        new CleanWebpackPlugin(paths.build), // cleans the build path on every build
        new ExtractTextPlugin('bundle.css'), // extract imported css into own file
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env.NODE_ENV)
            }
        }), // exposes the process.env.NODE_ENV variable passed from script in package.json to the application
    ]
});