module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "es5",
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        quoteProps: "as-needed",
        printWidth: 120,
        useTabs: false,
        arrowParens: "avoid",
        bracketSameLine: true,
      },
    ],
    // ORIGINAL
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    camelcase: "off",
    "lines-between-class-members": "error",
    // HOOKS
    "react-hooks/rules-of-hooks": "error",
    // IMPORT
    "import/no-default-export": "error",
    "import/named": "off",
    "import/order": ["error", { groups: ["external"], "newlines-between": "always" }],
    "import/first": "error",
    "import/no-named-as-default": "off",
    // REACT
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    // TYPESCRIPT
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
    "@typescript-eslint/explicit-function-return-type": "off",
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
    "no-explicit-any": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
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
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [["src", "./src"]],
        extensions: [".ts", ".tsx", ".js"],
      },
    },
  },
};
