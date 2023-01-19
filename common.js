module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "prettier",
    "plugin:import/recommended",
    "plugin:json/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["prettier", "@typescript-eslint"],
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
    // IMPORT
    "import/no-default-export": "error",
    "import/named": "off",
    "import/order": ["error", { groups: ["external"], "newlines-between": "always" }],
    "import/first": "error",
    "import/no-named-as-default": "off",
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
