module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-named-as-default-member': 0,
    'no-console': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    camelcase: 0,
  },
};
