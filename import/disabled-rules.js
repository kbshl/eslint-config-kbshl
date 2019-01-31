module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'import/exports-last': 'off',
    'import/extensions': 'error',
    'import/max-dependencies': [
      'off',
      {
        max: 10,
      },
    ],
    'import/no-default-export': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/unambiguous': 'off',
  },
};
