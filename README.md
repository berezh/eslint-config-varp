# eslint-config-varp

<a href="https://www.npmjs.com/package/eslint-config-varp">
    <img src="https://nodei.co/npm/eslint-config-varp.png?mini=true">
</a>

### Go in

1. [Initial Setup](#initial-setup)

2. Specify config:
    * [Common](#common)
    * [Frontend](#frontend)

3. [User cases](#user-cases):
    * [Override rules](#override-rules)
    * [Ignore path](#ignore-path)

4. [Notes](#notes)



## Initial Setup

1. Install with peer dependencies:

```js
npx install-peerdeps -D eslint-config-varp
```

2. Create `.prettierrc.js` file with content:

```js
module.exports = {
  /* Rrettier rules */
};
```

3. Add `.vscode/settings.json` file with content:
```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["typescript", "typescriptreact", "javascript", "javascriptreact", "markdown", "json"],
}
```

4. Add new scripts to package.json:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

## Configs

### Common

Config for simple packages or backend

1. Create `.eslintrc.js` file with content:

```js
module.exports = {
  extends: ["eslint-config-varp/common/index.js"],
  rules: {
    /* Eslint rules */
  }
};
```

### Frontend

1. Install specific configurations

```js
npm install -D eslint-plugin-react@7 eslint-plugin-react-hooks@4
```

2. Create `.eslintrc.js` file with content:

```js
module.exports = {
  extends: ["varp"],
  rules: {
    /* Eslint rules */
  }
};
```

## User cases

### Override rules

* Create file in selected folter: `.eslintrc.js`
* Add content:
```js
module.exports = {
  extends: '../.eslintrc.js',
  rules: {
    /* Overrided rules */
  }
};
```

### Ignore path

* Create file: `.eslintignore`
* Add content:

```
disc
```

## Notes

- `typescript` package is not on `peerDependencies`, but it require to be on the project.
