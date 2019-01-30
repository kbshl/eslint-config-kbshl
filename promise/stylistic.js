module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'promise/always-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-nesting': 'warn',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'promise/valid-params': 'warn',
  },
};
