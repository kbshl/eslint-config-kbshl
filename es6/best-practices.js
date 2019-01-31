module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    // Three words: "componentDidMount" :)
    'class-methods-use-this': 'off',
    'no-class-assign': 'error',
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-duplicate-imports': 'error',
    // Not applicable for a config preset (should be configured only in projects)
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],
    'no-return-await': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': 'error',
    // Maybe one day
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',
  },
};
