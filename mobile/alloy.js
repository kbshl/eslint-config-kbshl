module.exports = {
  extends: ['./titanium.js'],
  plugins: ['alloy'],
  globals: {
    // From eslint-config-axway env-alloy
    $: false,
    _: false,
    Alloy: false,
    OS_ANDROID: false,
    OS_IOS: false,
    OS_WINDOWS: false,
    Backbone: false,
    Widget: false,
    arguments: false,

    // Custom
    ENV_TEST: false,
    ENV_DEVELOPMENT: false,
    ENV_DEV: false,
    ENV_PRODUCTION: false,
    DIST_ADHOC: false,
    DIST_STORE: false,
    'Alloy.CFG': false,
    'Alloy.Globals': false,
    WPATH: false,
    migration: false,
    $model: false,
  },
  settings: {
    'import/core-modules': ['alloy'],
  },
  rules: {
    'no-unused-vars': 'off',
    'alloy/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^ignored',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },
};
