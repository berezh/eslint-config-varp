const tseslint = require("typescript-eslint");

const sharedConfig = require("./shared.js");

module.exports = tseslint.config(
  ...sharedConfig,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": "typescript",
    },
    rules: {
      // TYPESCRIPT
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "local",
          args: "after-used",
          ignoreRestSiblings: false,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-misused-promises": "error",
      // IMPORT
      "import/named": "off",
      "import/no-default-export": "off",
    },
  },
  {
    files: ["**/*.ts"],
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.ts": "CAMEL_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  }
);
