const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.loaders.append('css', {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
})

module.exports = environment
