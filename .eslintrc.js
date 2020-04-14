// see https://eslint.org/docs/rules/
module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: `eslint:recommended`,
    globals: {
        Atomics: `readonly`,
        SharedArrayBuffer: `readonly`,
    },
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        indent: [
            `error`,
            4,
        ],
        "linebreak-style": [
            `error`,
            `windows`,
        ],
        quotes: [
            `error`,
            `backtick`,
        ],
        semi: [
            `error`,
            `always`,
        ],
        "comma-dangle": [
            `error`,
            `always-multiline`,
        ],
    },
};
