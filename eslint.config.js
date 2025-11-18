const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const json = require("eslint-plugin-json");
const sonarjs = require("eslint-plugin-sonarjs");
const checkFile = require("eslint-plugin-check-file");
const globals = require("globals");
const importPlugin = require("eslint-plugin-import");
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  // json
  {
    files: ["**/*.json"],
    ...json.configs["recommended"],
  },
  // sonarjs,
  {
    plugins: { sonarjs },
    rules: {
      "sonarjs/cognitive-complexity": ["error", 15],
    },
  },
  // check-file
  {
    files: ["src/**/*.*", "test/**/*.*"],
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{js,ts,jsx,tsx,json}": "CAMEL_CASE",
        },
      ],
    },
  },
  // import
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/first": "error",
      "import/default": "off",
      "import/prefer-default-export": "off",
      "import/no-named-as-default": "off",
      "import/order": ["error", { groups: ["external"], "newlines-between": "always" }],
    },
  },
  // rules
  {
    // files: ["**/*.{js,ts,jsx,tsx,json}"],
    rules: {
      "no-underscore-dangle": ["error", { allowAfterThis: true, allow: ["_id"] }],
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
      "prefer-destructuring": ["error", { object: true, array: false }],
      "max-classes-per-file": 0,
      "no-console": ["error", { allow: ["warn", "error", "info"] }],
      "no-nested-ternary": "error",
      radix: "off",
      "no-plusplus": "off",
      "no-debugger": "warn",
      "no-use-before-define": ["error", { functions: false, classes: true }],
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "no-unreachable": "error",
      "no-duplicate-case": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "max-params": ["error", 7],
      "no-useless-escape": "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest,
        ...globals.node,
      },
    },
  },
  eslintPluginPrettierRecommended,
  {
    ignores: [".next", "build", "dist", "**/*.scss", "**/*.css"],
  },
];
