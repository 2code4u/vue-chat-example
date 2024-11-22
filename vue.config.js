const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  devServer: {
    historyApiFallback: true,
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@src', path.resolve(__dirname, './src'))
    config.resolve.alias.set('@api', path.resolve(__dirname, './api'))
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-chat-example/'
  : '/'
})
