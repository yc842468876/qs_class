const config = require('./src/config');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: config.baseURL_test,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};