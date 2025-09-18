const tseslint = require("typescript-eslint");
const typescriptParser = require("@typescript-eslint/parser");

const sharedConfig = require("./shared.js");

module.exports = tseslint.config([
  ...sharedConfig,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
      },
    },
    settings: {
      "import/resolver": "typescript",
    },
    rules: {
      // TYPESCRIPT
      camelcase: "off",
      "@typescript-eslint/camelcase": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: false,
          classes: true,
          variables: true,
          typedefs: true,
        },
      ],
      "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-loss-of-precision": "off",
      // REACT
      "react/no-unescaped-entities": "off",
      // IMPORT
      "import/named": "off",
      "import/order": ["error", { groups: ["external"], "newlines-between": "always" }],
      "import/no-default-export": "off",
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.ts": "CAMEL_CASE",
          "**/*.tsx": "CAMEL_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
]);
