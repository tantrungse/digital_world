const { environment } = require('@rails/webpacker')

// Remove postcss-loader if it's present
const cssLoader = environment.loaders.get('css')
cssLoader.use = cssLoader.use.filter(loader => loader.loader !== 'postcss-loader')

module.exports = environment