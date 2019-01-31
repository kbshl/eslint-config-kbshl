module.exports = {
  // prettier-ignore
  '**/*.+(js|ts|vue|json)': [
    'prettier --write',
    'eslint --report-unused-disable-directives',
    'git add',
  ],
  '**/*.+(css|sass|less|graphql|yml|yaml|scss)': [
    'prettier --write',
    'git add',
  ],
  // prettier-ignore
  '(README|readme).md': [
    'prettier --write',
    'markdownlint',
    'git add',
  ]
}
