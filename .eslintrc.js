module.exports = {
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    mocha: true,
  },
  plugins: ['prettier', 'import', 'jest'],
  rules: {
    'prettier/prettier': 'error',
  },
};
