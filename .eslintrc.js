module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:json/recommended'
    ],
    plugins: ['@typescript-eslint', 'json', 'react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/prop-types': 'off',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true,
            },
        ],
        '@typescript-eslint/no-empty-interface': [
            'error',
            { allowSingleExtends: true },
        ],
        'react/display-name': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'import/no-default-export': 'error',
        'import/named': 'off',
        'import/order': [
            'error',
            { groups: ['external'], 'newlines-between': 'always' },
        ],
        'import/first': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'react/no-unescaped-entities': 'off',
        'import/no-named-as-default': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'max-len': ['error', { code: 120, comments: 200 }],
        indent: 'off',
        '@typescript-eslint/indent':['error', 4],
        'quotes': 'off',
        '@typescript-eslint/quotes':['error', 'single']
        
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules'],
            },
            typescript: {
                project: './',
            },
            alias: {
                map: [['src', './src']],
                extensions: ['.ts', '.tsx', '.js'],
            },
        },
    },
};
