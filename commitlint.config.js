module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [ 2,
            'always', [
                'add',
                'del',
                'edit',
                'fix',
                'build', 
                'chore', 
                'ci', 
                'docs', 
                'feat', 
                'perf', 
                'refactor',
                'revert', 
                'style', 
                'test'
            ]
        ]
    }
}
