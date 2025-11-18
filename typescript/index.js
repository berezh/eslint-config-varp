var { defineConfig } = require("eslint/config");
var tseslint = require("typescript-eslint");

module.exports = defineConfig([
  tseslint.configs.recommended,
  {
    // extends: [tseslint.configs.recommended],
    files: ["**/*.ts", "**/*.tsx"],
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
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-loss-of-precision": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-empty-object-type": "warn",
      // // IMPORT
      // "import/named": "off",
      // "import/no-default-export": "off",
    },
  },
  // js
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  // {
  //   files: ["**/*.ts"],
  //   rules: {
  //     "check-file/filename-naming-convention": [
  //       "error",
  //       {
  //         "**/*.ts": "CAMEL_CASE",
  //       },
  //       {
  //         ignoreMiddleExtensions: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   files: ["**/*.js"],
  //   rules: {
  //     "@typescript-eslint/no-require-imports": "off",
  //   },
  // },
]);
