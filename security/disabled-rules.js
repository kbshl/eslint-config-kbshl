module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'security/detect-non-literal-fs-filename': 0,
    'security/detect-object-injection': 0,
  },
}
