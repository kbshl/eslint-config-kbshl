module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
    },
  },
  extends: [
    './stylistic.js',
    './best-practices.js',
    './possible-errors.js',
    './import/index.js',
    './security/index.js',
    './promise/index.js',
    './es6/index.js',
  ],
  plugins: ['json'],
  rules: {},
};
