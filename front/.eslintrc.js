module.exports = {
  extends: [
    '@gitart/eslint-config-vue',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'import/no-named-as-default': 'off',
    'sort-imports': 'warn',
    'eslint-comments/no-unlimited-disable': 'off',
    'eol-last': 'off',
    'no-trailing-spaces': 'off',
    'arrow-parens': 'off',
    'prefer-const': 'off',
    'vue/valid-v-slot': 'off',
  },
}
