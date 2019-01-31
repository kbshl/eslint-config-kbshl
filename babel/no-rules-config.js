module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      objectLiteralDuplicateProperties: false,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['babel'],
  rules: {},
};
