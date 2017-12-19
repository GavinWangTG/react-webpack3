const config = require('./config.js')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./util.js')
const baseWebpackConfig = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');


module.exports = merge(baseWebpackConfig, {
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
    },
    plugins: [
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[chunkhash:8].css')
        }),
        //js 代码压缩
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        //生成公共的js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})