module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'import/first': 'error',
    'import/imports-first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-internal-modules': [
      'off',
      {
        allow: [],
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'warn',
    'import/no-restricted-paths': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-webpack-loader-syntax': 'error',
  },
};
