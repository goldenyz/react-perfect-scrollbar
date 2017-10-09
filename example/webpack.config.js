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
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-2', 'react'],
                },
            },
            {
                test: /\.(jpg|png|svg|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[hash].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use: [
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
