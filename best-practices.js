const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': [
      'warn',
      {
        allowImplicit: true,
      },
    ],
    'block-scoped-var': 'error',
    complexity: ['error', 14],
    'consistent-return': 'error',
    curly: ['off', 'multi-line'],
    'default-case': [
      'warn',
      {
        commentPattern: '^no default$',
      },
    ],
    'dot-location': ['warn', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['warn', 'smart'],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': [
      'warn',
      {
        allowElseIf: false,
      },
    ],
    // We're all grown ups here...?
    'no-empty-function': [
      'warn',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'warn',
    'no-global-assign': [
      'error',
      {
        exceptions: [],
      },
    ],
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': [
      'warn',
      {
        allowLoop: true,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // Sometimes this is ok (foo.length - 1 == index of last one)
    'no-magic-numbers': 'warn',
    'no-multi-spaces': [
      'off',
      {
        ignoreEOLComments: false,
      },
    ],
    'no-multi-str': 'error',
    'no-native-reassign': 'warn',
    'no-new-func': 'warn',
    'no-new-wrappers': 'error',
    'no-new': 'warn',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
        ],
      },
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      },
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['fixme'],
        location: 'anywhere',
      },
    ],
    'no-with': 'warn',
    // Maybe one day... Not sure I'm in...
    'prefer-promise-reject-errors': 'warn',
    radix: 'error',
    // If you don't need async, don't use async or return Promise.resolve...
    'require-await': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
    'require-atomic-updates': 'off',
    'require-unicode-regexp': 'off',
    'no-misleading-character-class': 'off',
    'no-async-promise-executor': 'off',
    'wrap-iife': [
      'off',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],

    // Strict
    strict: ['error', 'never'],

    // Variables
    'no-restricted-globals': ['error', 'fdescribe'].concat(restrictedGlobals),
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^ignored',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // CommonJS
    // See known limitations: http://eslint.org/docs/rules/callback-return it's just annoying...
    'callback-return': 'off',
    // Sometimes this is ok. We shouldn't break a build
    'global-require': 'off',
    'handle-callback-err': 'error',
    'no-mixed-requires': [
      'error',
      {
        grouping: true,
        allowCall: false,
      },
    ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'warn',
  },
};
