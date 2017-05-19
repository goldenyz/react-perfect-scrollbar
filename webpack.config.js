/* eslint-disable */
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var env = process.env.NODE_ENV;

var libraryName = '[name]';

var plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
];
var outputFile;

if (env === 'production') {
    plugins.push(new UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: true
        },
    }));
    plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true
    }));
    outputFile = libraryName + '.min.js';
    plugins.push(new ExtractTextPlugin({
        filename: 'css/styles.min.css'
    }));
} else {
    outputFile = libraryName + '.js';
    plugins.push(new ExtractTextPlugin({
        filename: 'css/styles.css'
    }));
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
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
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
