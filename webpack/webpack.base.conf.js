const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const config = require('./config.js');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: './app/index.jsx'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: config.dev.assetsPublicPath,
        filename: '[name].js'
    },

    resolve:{
        extensions:['.js','.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(less|css)?$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        },
                        {loader: 'postcss-loader'},
                        {loader: 'less-loader'},
                    ]
                })
            },
            {
                test: /\.(scss|css)?$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        },
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'},
                    ]
                })
            },
            {
                test: /\.(jpg|jpeg|gif|bmp|png|webp)?$/i,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|svg|ttf|eot)?$/i,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader'
            }
        ]
    }
}
