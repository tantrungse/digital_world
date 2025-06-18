const { environment } = require('@rails/webpacker')

// Add css-loader and postcss-loader configuration
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Configure CSS processing
environment.loaders.get('css').use.find(item => item.loader === 'css-loader').options = {
  ...environment.loaders.get('css').use.find(item => item.loader === 'css-loader').options,
  importLoaders: 2
}

module.exports = environment
