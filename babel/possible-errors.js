module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'babel/no-unused-expressions': 'error',
    'babel/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
