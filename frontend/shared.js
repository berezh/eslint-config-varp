const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');

const baseConfig = require('../eslint.config.js');

module.exports = [
  js.configs.recommended,
  ...baseConfig,
  {
    plugins: { react, 'react-hooks': reactHooks },
    rules: {
      // REACT
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-deprecated': 'off',
      'react/sort-comp': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/no-array-index-key': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      // HOOKS
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];
