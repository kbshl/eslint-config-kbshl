module.exports = {
  extends: ['plugin:security/recommended'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['security'],
}
