const packageName = require('./package.json').name;
const CracoLessPlugin = require("craco-less");
const path = require('path')
const themeColor = {
  '@primary-color': '#5b6aff',// 全局主色
  '@gray-color': '#9da2ac'
}

const port = 8081

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'course': path.resolve(__dirname, 'src/course')
    },
    configure: (webpackConfig) => {
      webpackConfig.output.library = `${packageName}-[name]`
      webpackConfig.output.libraryTarget = 'umd'
      webpackConfig.output.publicPath = `http://localhost:${port}/`
      return webpackConfig;
    }

  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeColor,
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  devServer: {
    port: port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}
