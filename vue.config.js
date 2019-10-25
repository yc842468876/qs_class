const config = require('./src/config');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'develop' ? config.baseURL_test : config.baseURL_prd,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};