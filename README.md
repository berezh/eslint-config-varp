# eslint-config-varp

<a href="https://www.npmjs.com/package/eslint-config-varp">
    <img src="https://nodei.co/npm/eslint-config-varp.png?mini=true">
</a>

### Go in

1. [Setup](#setup)

2. [User cases](#user-cases):
    * [Override rules](#override-rules)
    * [Ignore path](#ignore-path)

3. [Notes](#notes)



## Setup

1. Install:

```js
npm install -D eslint-config-varp
```

2. Add `prettier` config to the `package.json`:

```js
  "prettier": "eslint-config-varp/prettier",
```

3. Create `eslint.config.js` file with content:

```js
const { defineConfig } = require("eslint/config");
const configs = require("eslint-config-varp");

module.exports = defineConfig([
  extends: [configs.eslint.base, configs.eslint.typescript, configs.eslint.react],
  rules: {
    /* Eslint rules */
  }
]);
```

4. Add `.vscode/settings.json` file with content:
```json
{
  "editor.tabSize": 2,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": [
    "typescript",
    "typescriptreact",
    "javascript",
    "javascriptreact",
    "markdown",
    "json",
    "jsonc"
  ],
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "always"
    },
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "stylelint.validate": ["scss"],
  "stylelint.snippet": ["scss"],
  "stylelint.enable": true
}
```

5. Add new scripts to package.json:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "stylelint": "stylelint \"**/*.scss\"",
  "stylelint:fix": "stylelint \"**/*.scss\" --fix",
}
```

## User cases

### Override rules

* Add `overrides` property in config file

```js
module.exports = {
  overrides: [
    {
      files: ["*/**/*.js"],
      rules: {
        /* Overrided rules */
      },
    },
  ],
};
```

### Override rules with file/folder

* In `eslint.config.js` disable `X` rule.
* Add new section with path you want to override the `X` rule

Example:

```js
{
  rules: {
    "check-file/filename-naming-convention": "off",
  },
},
{
  files: ["src/**/*", "test/**/*"],
  ignores: ["src/migrations/**/*"],
  rules: {
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts,tsx}": "CAMEL_CASE",
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    "check-file/folder-naming-convention": ["error", { "src/**/": "CAMEL_CASE", "test/**/": "CAMEL_CASE" }],
  },
},
```

### Ignore path

```js
const { defineConfig } = require("eslint/config");
const configs = require("eslint-config-varp");

module.exports = defineConfig([
  extends: [varp.eslint.base, varp.eslint.typescript, varp.eslint.react],
  {
    ignores: ["stories", "**/*.txt"],
  },
]);
```

## Notes

- `typescript` package is not on `peerDependencies`, but it require to be on the project.
