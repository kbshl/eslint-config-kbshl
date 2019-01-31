module.exports = {
  extends: ['./no-rules-config.js'],
  rules: {
    'babel/object-curly-spacing': 'off',
    'babel/semi': 'off',
    'babel/no-invalid-this': 'error',
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'babel/camelcase': [
      'error',
      {
        properties: 'always',
      },
    ],
    'babel/valid-typeof': 'error',

    // No opinion
    'babel/flow-object-type': 'off',

    // Deprecated rules
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    'babel/func-params-comma-dangle': 'off',
    'babel/generator-star-spacing': 'off',
    'babel/object-shorthand': 'off',
  },
};
