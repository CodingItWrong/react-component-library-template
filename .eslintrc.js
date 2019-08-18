module.exports = {
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: '16.9',
    },
  },
  parser: 'babel-eslint',
  plugins: ['jest'],
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
  },
}
