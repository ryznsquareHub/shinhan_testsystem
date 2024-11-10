const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),           // 기본 설정 (src 폴더)
        '@components': path.resolve(__dirname, 'src/components'), // 추가 예시
        '@assets': path.resolve(__dirname, 'src/assets'),         // 추가 예시
      }
    }
  }
})