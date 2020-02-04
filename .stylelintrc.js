module.exports = {
  processors: ['stylelint-processor-html'],
  extends: 'stylelint-config-recommended-scss',
  rules: {
    'no-empty-source': null // vue 파일내 style 미작성 이슈
  }
}
