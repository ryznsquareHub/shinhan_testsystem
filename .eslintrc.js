// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        node: true, // Node 환경에서 사용되는 변수도 인식하도록 설정
      },
    parserOptions: {
        parser: '@babel/eslint-parser', // 최신 버전의 Babel ESLint 파서 사용
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: [
        'plugin:vue/vue3-essential', // Vue 3 필수 설정
        'eslint:recommended'
      ],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  }