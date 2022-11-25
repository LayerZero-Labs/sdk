module.exports = {
    overrides: [
        {
            files: '*.ts',
            options: {
                printWidth: 145,
                semi: false,
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'es5',
                singleQuote: true,
            },
        },
        {
            files: '*.js',
            options: {
                printWidth: 145,
                semi: false,
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'es5',
                singleQuote: true,
            },
        },
    ],
}
