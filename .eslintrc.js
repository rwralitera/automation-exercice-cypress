/* eslint-disable linebreak-style */
module.exports = {
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'consistent-this': [2, '_this'],
    eqeqeq: 2,
    'func-names': 0,
    'global-require': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'max-len': 0,
    'max-nested-callbacks': [1, 5],
    'no-else-return': 0,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    }],
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': [2, 'nofunc'],
    'no-var': 0,
    'quote-props': [2, 'as-needed', { numbers: true }],
    quotes: [2, 'single'],
    'space-before-function-paren': [1, 'never'],
    'vars-on-top': 0,
    'class-methods-use-this': 0,
    'prefer-destructuring': 0,
    'no-restricted-properties': 0,
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }, { blankLine: 'always', prev: '*', next: 'throw' }],
    'no-mixed-operators': 0,
    'no-await-in-loop': 0,
  },
  env: {
    node: true,
    mongo: true
  },
  globals: {
    print: true
  },
  extends: ['airbnb-base', 'plugin:cypress/recommended']
};
