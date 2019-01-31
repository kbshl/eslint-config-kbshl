module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-object-injection': 'off',
  },
};
