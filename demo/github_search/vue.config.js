const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/search': {
        target: 'https://api.github.com',//填写目标服务器的地址
        ws: true,//配置是否支持websock
        changeOrigin: true//配置是否改变请求时的host
      },
    }
  }
})
