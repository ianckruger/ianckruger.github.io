// eslint.config.js
import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{ts,tsx,js,jsx,vue}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: eslintPluginVue,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintPluginVue.configs['flat/recommended'].rules,
    },
  },
]
