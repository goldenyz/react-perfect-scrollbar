/* eslint-disable */
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var env = process.env.NODE_ENV;

var libraryName = '[name]';

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
];
var outputFile;

if (env === 'production') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
    plugins.push(new ExtractTextPlugin('css/styles.min.css'));
} else {
    outputFile = libraryName + '.js';
    plugins.push(new ExtractTextPlugin('css/styles.css'));
}

module.exports = {

    entry: {
        'react-perfect-scrollbar': [
            path.join(__dirname, '/src/index.js'),
            path.join(__dirname, '/src/styles.scss')
        ]
    },

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        root: path.resolve('./src')
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap&-minimize!postcss!sass?sourceMap')
            }
        ]
    },

    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            },
        },
    ],

    plugins: plugins
};
