const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      allowedHosts: 'all', // 모든 호스트 허용
      client: {
        webSocketURL: 'auto://0.0.0.0/ws', // 모든 프로토콜 허용
      },
    },
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),           // 기본 설정 (src 폴더)
        '@components': path.resolve(__dirname, 'src/components'), // 추가 예시
        '@assets': path.resolve(__dirname, 'src/assets'),         // 추가 예시
      }
    }
  }
})