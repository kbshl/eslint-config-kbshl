module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'import/no-named-default': 2,
    'import/no-namespace': 0,
    'import/order': [
      0,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
  },
}
