module.exports = {
    plugins: ['prettier', '@typescript-eslint'],
    extends: ['airbnb-typescript', 'prettier', 'next/core-web-vitals'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/']
            },
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    rules: {
        'react/jsx-filename-extension': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-param-reassign': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'import/order': 0,
        'no-console': 0,
        'no-shadow': 0,
        '@typescript-eslint/naming-convention': 0,
        'import/no-cycle': 0,
        'prefer-destructuring': 0,
        '@typescript-eslint/no-unused-vars': [
            1,
            {
                vars: 'all',
                args: 'none'
            }
        ],
        'prettier/prettier': [
            2,
            {
                bracketSpacing: true,
                printWidth: 140,
                singleQuote: true,
                trailingComma: 'none',
                tabWidth: 4,
                useTabs: false,
                endOfLine: 'auto'
            }
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ]
    }
};
