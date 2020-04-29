// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'eol-last': 'off',
    'space-infix-ops': 'off',
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }], 
    'semi': 'off',
    'spaced-comment': 'off',
    'quotes': 'off',
    'brace-style': 'off',
    'no-multiple-empty-lines': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off',
    'comma-spacing': 'off',
    'no-trailing-spaces': 'off',
    'no-tabs': 'off',
    'no-multi-spaces': 'off',
    'keyword-spacing': 'off',
    'key-spacing': 'off',
    'space-before-blocks': 'off',
    'eqeqeq': 'off',
    'arrow-spacing': 'off',
    'comma-dangle': 'off',
    'no-undef': 'off',
    'one-var': 'off',
    'no-mixed-operators': 'off',
    'camelcase': 'off',
    'no-redeclare': 'off',
    'no-fallthrough': 'off',
    'semi-spacing': 'off',
    'block-spacing': 'off', 
    'object-property-newline': 'off',
    'no-undef-init': 'off',
    'padded-blocks': 'off',
    'no-unneeded-ternary': 'off',
    'no-sequences': 'off'
  }
}
