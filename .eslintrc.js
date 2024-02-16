module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  globals: {
    module: true,
    test: true,
    it: true,
    expect: true,
  },
};
