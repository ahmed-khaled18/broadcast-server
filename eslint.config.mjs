import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import nestjsTypedPlugin from '@darraghor/eslint-plugin-nestjs-typed';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'commitlint.config.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@darraghor/nestjs-typed': nestjsTypedPlugin.plugin,
    },
  },
  {
    rules: {
      // TypeScript Best Practices
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-duplicate-type-constituents': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',

      // Basic NestJS Rules (removed old plugin rules since we have better ones below)

      // Advanced NestJS Rules (from @darraghor/eslint-plugin-nestjs-typed)
      '@darraghor/nestjs-typed/all-properties-have-explicit-defined': 'warn',
      '@darraghor/nestjs-typed/api-property-matches-property-optionality':
        'error',
      '@darraghor/nestjs-typed/injectable-should-be-provided': 'error',
      '@darraghor/nestjs-typed/no-duplicate-decorators': 'error',
      '@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters':
        'error',
      '@darraghor/nestjs-typed/controllers-should-supply-api-tags': 'warn',
      '@darraghor/nestjs-typed/api-method-should-specify-api-response': 'warn',
      '@darraghor/nestjs-typed/api-method-should-specify-api-operation': 'warn',
      '@darraghor/nestjs-typed/api-enum-property-best-practices': 'error',
      '@darraghor/nestjs-typed/api-property-returning-array-should-set-array':
        'error',
      '@darraghor/nestjs-typed/should-specify-forbid-unknown-values': 'error',
      '@darraghor/nestjs-typed/param-decorator-name-matches-route-param':
        'error',
      '@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator':
        'error',
      '@darraghor/nestjs-typed/validate-nested-of-array-should-set-each':
        'error',
      '@darraghor/nestjs-typed/all-properties-are-whitelisted': 'warn',
      '@darraghor/nestjs-typed/api-methods-should-be-guarded': 'warn',
      '@darraghor/nestjs-typed/sort-module-metadata-arrays': 'error',

      // General Code Quality Rules for NestJS
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-expressions': 'error',
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-throw-literal': 'error',
      'no-return-assign': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-array-constructor': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
    },
  }
);
