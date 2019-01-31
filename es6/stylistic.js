module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    // This is nice, but not useful all the time.
    'arrow-body-style': [
      'off',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'arrow-parens': [
      'off',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'arrow-spacing': [
      'off',
      {
        before: true,
        after: true,
      },
    ],
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    'no-invalid-this': 'off',
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
    camelcase: [
      'off',
      {
        properties: 'always',
      },
    ],
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: true,
      },
    ],
    'yield-star-spacing': ['off', 'after'],
    'rest-spread-spacing': ['off', 'never'],
    'generator-star-spacing': [
      'off',
      {
        before: false,
        after: true,
      },
    ],
  },
};
