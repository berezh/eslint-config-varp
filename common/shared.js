const js = require("@eslint/js");

const baseConfig = require("../eslint.config.js");

module.exports = [
  js.configs.recommended,
  ...baseConfig,
  {
    rules: {
      // Rules
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "linebreak-style": "off",
    },
  },
];
