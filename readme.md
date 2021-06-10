# eslint-config-varp

<a href="https://www.npmjs.com/package/eslint-config-varp">
    <img src="https://nodei.co/npm/eslint-config-varp.png?mini=true">
</a>

## Set up

1. Install with peer dependencies:

```js
npx install-peerdeps --dev eslint-config-varp
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

### Notes

- `typescript` package not on `peerDependencies`, but it require to be on the project.

