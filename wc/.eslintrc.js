module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@stencil/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    // I am a truthy/falsy enjoyer. Sue me, Stencil.
    '@stencil/strict-boolean-conditions': 'off',
    // This rule seems to be broken currently.
    '@stencil/decorators-context': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
