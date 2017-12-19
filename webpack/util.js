const path = require('path')
const config = require('./config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function(_path) {
	if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
    var assetsSubDirectory = process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}