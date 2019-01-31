module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'import/dynamic-import-chunkname': 'off',
    'import/group-exports': 'off',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-named-default': 'error',
    'import/no-named-export': 'warn',
    'import/no-namespace': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
