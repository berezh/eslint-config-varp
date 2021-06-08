# eslint-config-varp

<a href="https://www.npmjs.com/package/eslint-config-varp">
    <img src="https://nodei.co/npm/eslint-config-varp.png?mini=true">
</a>

## ESlint

1. Install with peer dependencies:

```js
npm install --save-dev eslint-config-varp eslint eslint-import-resolver-alias eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier
```

2. Create `.prettierrc.json` file with content:

```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "printWidth": 120,
    "useTabs": false
}

```

3. Create `.eslintrc.js` file with content:

```js
module.exports = {
    extends: ["varp"],
    rules: {
        /* Additional rules */
    }
};
```

4. Add `.vscode/settings.json` file with content:
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

5. Add new scripts to package.json:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

## StyleLint

1. Install with peer dependencies:

```js
npm install --save-dev stylelint stylelint-config-recommended stylelint-order stylelint-scss stylelint-selector-bem-pattern
```

2. Create `.stylelintrc.js` with content:

```js
module.exports = {
    extends: ["eslint-config-varp/stylelint"],
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

