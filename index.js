var base = require("./base/index.js");
var typescript = require("./typescript/index.js");
var react = require("./react/index.js");
var prettier = require("./prettier/index.js");
var stylelint = require("./stylelint");

module.exports = { eslint: { base, typescript, react }, prettier, stylelint };
