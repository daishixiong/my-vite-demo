module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'no-new': ['off'],
        camelcase: ['warn', {
            properties: 'never'
        }],
        'brace-style': ['error', 'stroustrup'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'never'
        }],
        'spaced-comment': ['warn', 'always', {
            line: {
                markers: ['/'],
                exceptions: ['-', '+']
            },
            block: {
                markers: ['!', '*!'],
                exceptions: ['*'],
                balanced: true
            }
        }]
    }
}
