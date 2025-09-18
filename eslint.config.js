const prettierFlat = require('eslint-config-prettier/flat');
const json = require('eslint-plugin-json');
const prettierPlugin = require('eslint-plugin-prettier');
const sonarjs = require('eslint-plugin-sonarjs');
const globals = require('globals');
const checkFile = require('eslint-plugin-check-file');
const importPlugin = require('eslint-plugin-import');

module.exports = [
  prettierFlat,
  {
    plugins: {
      json,
      prettier: prettierPlugin,
      sonarjs,
      'check-file': checkFile,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          quoteProps: 'as-needed',
          printWidth: 180,
          useTabs: false,
          arrowParens: 'avoid',
          bracketSameLine: true,
        },
      ],
      // RULES
      'no-underscore-dangle': ['error', { allowAfterThis: true, allow: ['_id'] }],
      'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'max-classes-per-file': 0,
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'no-nested-ternary': 'error',
      radix: 'off',
      'no-plusplus': 'off',
      'no-debugger': 'warn',
      'no-use-before-define': ['error', { functions: false, classes: true }],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-unreachable': 'error',
      'no-duplicate-case': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'max-params': ['error', 7],
      'no-useless-escape': 'error',
      // IMPORT
      'import/first': 'error',
      'import/default': 'off',
      'import/prefer-default-export': 'off',
      'import/no-named-as-default': 'off',
      'import/order': ['error', { groups: ['external'], 'newlines-between': 'always' }],
      // sonarjs
      'sonarjs/cognitive-complexity': ['error', 15],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest,
        ...globals.mocha,
      },
    },
  },
  {
    files: ['src/**/*.*'],
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{js,ts}': 'CAMEL_CASE',
        },
      ],
    },
  },
];
