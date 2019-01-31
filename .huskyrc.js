module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'npm run lint:commit',
  },
};
