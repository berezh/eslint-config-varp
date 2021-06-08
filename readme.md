# eslint-config-varp

<a href="https://www.npmjs.com/package/varp-code">
    <img src="https://nodei.co/npm/varp-code.png?mini=true">
</a>

## Add ESlint

1. Install with peer dependencies:

```js
npm --dev varp-code 
```

2. Create `.eslintrc.js` file in root with content:

```js
module.exports = {
    extends: ["varp-code"],
    rules: {
        /* Additional rules */
    }
};
```

3. Add `.vscode/settings.json` file with content:
```json
{
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.trimAutoWhitespace": true,
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "typescript",
        "typescriptreact"
    ],
    "eslint.run": "onSave",
    "eslint.nodePath": "./node_modules"
}
```

4. Add new scripts to package.json:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

## Set up StyleLint

1. Install with peer dependencies:

```js
npx install-peerdeps --dev stylelint-config-varp
```

2. Create `.stylelintrc.js` with content:

```js
module.exports = {
    extends: ["varp-code/style"],
    rules: {
        /* Additional rules */
    }
};
```

3. Add `.vscode/settings.json` with content:
```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.stylelint": true
    },
    "stylelint.validate": ["scss"],
}
```

4. Add `.stylelintignore` with content:

```
node_modules
!*.scss
```

5. Add new scripts to package.json:

```json
"scripts": {
  "stylelint": "stylelint .",
  "stylelint:fix": "stylelint . --fix"
}
```

6. Call `stylelint` with `eslint`:

```json
"scripts": {
        "lint": "stylelint . && eslint .",
        "lint:fix": "stylelint . --fix && eslint . --fix"
}
```


### Notes

- `typescript` package not on `peerDependencies`, but it require to be on the project.

