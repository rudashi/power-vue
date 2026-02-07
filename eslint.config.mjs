import eslint from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintTS from 'typescript-eslint'

export default [
    eslint.configs.recommended,
    ...eslintTS.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.{js,mjs,cjs,ts'],
        plugins: {
            vue: pluginVue,
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
    {
        files: ['*.vue', '**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: eslintTS.parser,
            },
        },
    },
    {
        rules: {
            'semi': ['error', 'never'],
            'eol-last': ['error', 'always'],
            'no-var': 'error',
            'arrow-parens': ['error', 'as-needed'],
            'max-len': ['error', {
                code: 140,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreTrailingComments: true,
            }],
            complexity: ['error', 32],
            quotes: ['error', 'single', {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }],
            'no-console': 'error',
            'no-debugger': 'error',
            'comma-dangle': ['error', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'only-multiline',
            }],
            'no-return-assign': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                'vars': 'all',
                'args': 'after-used',
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
            }],

            '@typescript-eslint/explicit-function-return-type': ['error', {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            }],
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            'no-empty': 'error',
            'array-bracket-spacing': ['error', 'never'],
            'object-curly-spacing': ['error', 'always'],
            'no-return-await': 'error',
            'object-shorthand': ['error', 'always'],
            'no-extra-semi': 'error',
            'prefer-const': ['error', {
                destructuring: 'all',
                ignoreReadBeforeAssign: true,
            }],
            'no-prototype-builtins': 'off',
            'no-void': 'off',
            'no-case-declarations': 'off',
            indent: ['error', 4, {
                flatTernaryExpressions: true,
                offsetTernaryExpressions: false,
            }],
            'sort-imports': ['error', {
                ignoreDeclarationSort: true,
                ignoreCase: true,
            }],
            'multiline-ternary': 'off',
            'no-implicit-coercion': ['error', { boolean: false }],

            'vue/require-default-prop': 'off',
            'vue/one-component-per-file': 'off',
            'vue/custom-event-name-casing': ['error', 'camelCase', { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] }],
            'vue/multi-word-component-names': 'off',

            'vue/attributes-order': ['error', {
                order: [
                    'DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'UNIQUE', 'GLOBAL', 'SLOT',
                    'TWO_WAY_BINDING', 'ATTR_DYNAMIC', 'ATTR_STATIC', 'ATTR_SHORTHAND_BOOL', 'OTHER_DIRECTIVES', 'EVENTS', 'CONTENT',
                ],
                alphabetical: true,
            }],
            'vue/html-indent': ['error', 4],
        },
    },
    {
        files: ['packages/icons/**/*.{js,ts,mjs}'],
        rules: {
            'max-len': 'off',
        },
    },
]
