module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'import/first': 2,
    'import/imports-first': 2,
    'import/no-anonymous-default-export': [
      0,
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/no-absolute-path': 0,
    'import/no-deprecated': 1,
    'import/no-duplicates': 2,
    'import/no-internal-modules': [
      0,
      {
        allow: [],
      },
    ],
    'import/no-mutable-exports': 2,
    'import/no-restricted-paths': 0,
    'import/no-unassigned-import': 0,
  },
}
