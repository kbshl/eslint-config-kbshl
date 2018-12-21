module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'import/max-dependencies': [0, { max: 10 }],
    'import/unambiguous': 0,
    'import/exports-last': 0,
    'import/extensions': {
      js: 0,
    },
  },
}
