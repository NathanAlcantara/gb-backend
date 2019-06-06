module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'plugins': ['@typescript-eslint'],
    'extends': ['plugin:@typescript-eslint/recommended'],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'project': './tsconfig.json'
    },
    'rules': {
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 'tab'],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
    }
};
