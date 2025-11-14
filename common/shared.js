import js from "@eslint/js";
import { defineConfig } from "eslint/config";

import baseConfig from "../eslint.config.js";

export default defineConfig([
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
]);
