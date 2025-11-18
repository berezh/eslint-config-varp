module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order"],
  rules: {
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["local", "global"],
      },
    ],
    "rule-empty-line-before": [
      "always",
      {
        except: ["after-single-line-comment", "first-nested"],
      },
    ],
    "selector-class-pattern": null,
    "color-function-notation": "legacy",
    "custom-property-pattern": [
      "^([a-z][a-zA-Z0-9]+)|(([a-z][a-z0-9]*)(-[a-z0-9]+)*)$",
      {
        message: "Expected custom property name to be camel-case or kebab-case",
      },
    ],
    "scss/dollar-variable-pattern": [
      "^([a-z][a-zA-Z0-9]+)$",
      {
        message: "Expected name to be camel-case",
      },
    ],
    "scss/at-mixin-pattern": [
      "^([a-z][a-zA-Z0-9]+)$",
      {
        message: "Expected name to be camel-case",
      },
    ],
    // ORDER
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": null,
  },
};
