module.exports = {
  env: {
    es6: true,
  },
  extends: [
    './security/index.js',
    './import/index.js',
    './promise/index.js',
    // Disable ESLint rules that conflicting with Prettier
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['json', 'promise'],
  rules: {
    'padded-blocks': 0,
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-use-before-define': [2, { functions: false }],
    'global-require': 0,
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'no-useless-catch': 'error',
  },
}
