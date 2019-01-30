module.exports = {
  extends: ['./no-rules-config.js'],
  globals: {
    // From eslint-config-axway env-titanium
    alert: false,
    console: false,
    decodeURIComponent: false,
    encodeURIComponent: false,
    L: false,
    require: false,
    Ti: false,
    Titanium: false,
    clearTimeout: false,
    clearInterval: false,
    setTimeout: false,
    setInterval: false,
    exports: false,
    module: false,

    // Custom
    'Ti.UI': false,
    'module.exports': false,
  },
  rules: {},
};
