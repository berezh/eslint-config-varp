module.exports = {
  extends: ["varp-common", "plugin:react/recommended"],
  plugins: ["react-hooks"],
  rules: {
    // HOOKS
    "react-hooks/rules-of-hooks": "error",
    // REACT
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
  },
};
