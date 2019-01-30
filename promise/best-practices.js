module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'promise/catch-or-return': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
  },
};
