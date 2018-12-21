module.exports = {
  env: {
    es6: true,
  },
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
    'import/extensions': ['.js'],
  },
}
