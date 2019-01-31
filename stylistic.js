module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    'block-spacing': ['off', 'always'],
    camelcase: [
      'off',
      {
        properties: 'always',
      },
    ],
    'capitalized-comments': 'error',
    'brace-style': [
      'off',
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': [
      'off',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'off',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'off',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    // Too many use-cases for reassigning "this" to different values
    'consistent-this': 'off',
    'computed-property-spacing': ['off', 'never'],
    'eol-last': ['off', 'always'],
    'func-call-spacing': ['off', 'never'],
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': ['off', 'expression'],
    'function-paren-newline': ['off', 'consistent'],
    'id-blacklist': 'error',
    'implicit-arrow-linebreak': ['off', 'beside'],
    indent: [
      'off',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],
    'init-declarations': 'off',
    // When using short composable functions, using single-letter variables is fine
    'id-length': 'off',
    'id-match': [
      'error',
      // For example: camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'key-spacing': [
      'off',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'off',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'lines-around-comment': 'off',
    'lines-around-directive': [
      'off',
      {
        before: 'always',
        after: 'always',
      },
    ],
    'lines-between-class-members': [
      'off',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    'max-classes-per-file': ['off', 1],
    'max-depth': ['error', 4],
    'max-len': [
      'off',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'error',
      {
        max: 2500,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
    'max-lines-per-function': ['error', 150],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'max-statements': ['error', 40],
    // This would be cool to get the fixer, but too strict.
    'multiline-comment-style': ['off', 'starred-block'],
    'multiline-ternary': ['off', 'never'],
    'new-parens': 'warn',
    'newline-per-chained-call': [
      'off',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    'new-cap': [
      'warn',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'warn',
    'no-lonely-if': 'error',
    // It's handy, but harder to read
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'off',
      {
        max: 2,
        maxEOF: 0,
      },
    ],
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-mixed-spaces-and-tabs': 'off',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'warn',
    'no-new-object': 'error',
    'no-plusplus': 'warn',
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    // Methods are optional so you can specify a name if you want
    'object-shorthand': ['error', 'properties'],
    'one-var': [
      'error',
      {
        uninitialized: 'always',
        initialized: 'never',
      },
    ],
    // Readability on a case-by-case basis
    'operator-assignment': 'warn',
    // Meh...
    'padding-line-between-statements': 'off',
    // Nah, I like it, but not that much...
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-object-spread': 'warn',
    'quote-props': [
      'off',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    quotes: [
      'off',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'require-jsdoc': 'off',
    semi: ['off', 'always'],
    'semi-spacing': [
      'off',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': ['off', 'last'],
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'sort-vars': 'off',
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true,
        },
      },
    ],
    'space-before-blocks': 'off',
    'space-before-function-paren': [
      'off',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['off', 'never'],
    'space-infix-ops': 'off',
    'space-unary-ops': [
      'off',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'switch-colon-spacing': [
      'off',
      {
        after: true,
        before: false,
      },
    ],
    'template-curly-spacing': 'off',
    'template-tag-spacing': ['off', 'never'],
    'unicode-bom': ['warn', 'never'],
    'wrap-regex': 'off',
    'no-tabs': 'off',
    'no-trailing-spaces': [
      'off',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': [
      'off',
      'beside',
      {
        overrides: {},
      },
    ],
    'object-curly-newline': [
      'off',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'object-curly-spacing': ['off', 'always'],
    'object-property-newline': [
      'off',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'one-var-declaration-per-line': ['off', 'always'],
    'operator-linebreak': [
      'off',
      'before',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],
    'padded-blocks': [
      'off',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],

    // Deprecated
    'no-spaced-func': 'off',
  },
};
