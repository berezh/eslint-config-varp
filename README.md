# eslint-config-varp

<a href="https://www.npmjs.com/package/eslint-config-varp">
    <img src="https://nodei.co/npm/eslint-config-varp.png?mini=true">
</a>

## Set up

1. Install with peer dependencies:

```js
npx install-peerdeps --dev eslint-config-varp
```

2. Create `.prettierrc.js` file with content:

```js
module.exports = {
    /* Rrettier rules */
};

```

3. Create `.eslintrc.js` file with content:

```js
module.exports = {
    extends: ["varp"],
    rules: {
        /* Eslint rules */
    }
};
```

4. Create `.eslintignore` file with content:

```
node_modules
```

5. Add `.vscode/settings.json` file with content:
```json
{
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.validate": ["typescript", "typescriptreact"]
}
```

6. Add new scripts to package.json:

```json
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
}
```

## Cases

### Override folder

```js
module.exports = {
  extends: '../.eslintrc.js',
    rules: {
        /* Overrided rules */
    }
};
```

## Notes

- `typescript` package not on `peerDependencies`, but it require to be on the project.

