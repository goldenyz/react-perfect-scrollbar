/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: path.join(__dirname, 'index.js'),

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/dist/',
    },

    resolve: {
        alias: {
            'react-perfect-scrollbar': path.join(__dirname, '..'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },

    devServer: {
        open: true,
    },

    devtool: 'source-map',
};
