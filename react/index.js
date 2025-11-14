import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default defineConfig([
  {
    plugins: { react, "react-hooks": reactHooks },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // REACT
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-deprecated": "off",
      "react/sort-comp": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/no-array-index-key": "warn",
      "react/jsx-boolean-value": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      // HOOKS
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
    },
  },
]);
