'use strict'
const webpack = require('webpack')
const build = require('./build-all')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

const config = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'PRODUCTION'
    })
  ]
})
build(config)
