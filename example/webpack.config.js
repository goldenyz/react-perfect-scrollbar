/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: path.join(__dirname, 'index.js'),

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/dist/',
    },

    resolve: {
        alias: {
            'react-perfect-scrollbar': path.join(__dirname, '..', 'src'),
        },
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-1', 'react'],
                },
            },
            {
                test: /\.(jpg|png|svg|ttf|eot)$/,
                loader: 'file-loader',
                query: {
                    name: 'img/[hash].[ext]',
                },
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    devtool: 'source-map',
};
