module.exports = {
  extends: ["prettier", "plugin:import/recommended", "plugin:json/recommended"],
  plugins: ["prettier"],
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
        printWidth: 180,
        useTabs: false,
        arrowParens: "avoid",
        bracketSameLine: true,
      },
    ],
    // RULES
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
  },
};
