module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'html',
    'standard',
    'vue'
  ],
  env: {
    browser: true
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline']
  }
}