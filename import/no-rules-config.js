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
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs'],
    'import/ignore': [
      'node_modules',
      '.json$',
      '.(scss|less|css|styl|coffee|hbs|svg)$',
    ],
    'import/external-module-folders': ['node_modules', 'modules'],
  },
};
