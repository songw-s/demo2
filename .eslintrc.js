module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "indent": ["error", 2],
    "eol-last": "off",
    "no-unused-vars": "off",
    "no-multiple-empty-lines": [2, {"max": 99999, "maxEOF": 0}],
    "quote-props": "off",
    "prefer-const": "off"
  }
}
