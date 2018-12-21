module.exports = {
  extends: ['plugin:promise/recommended'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['promise'],
}
