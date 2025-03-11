import eslintConfig from '@arcgis/eslint-config';
import eslintConfigLumina from '@arcgis/eslint-config/lumina';

export default [
  {
    ignores: ['dist', 'node_modules', '**/*.js', '**/*.cjs'],
  },
  ...eslintConfig,
  ...eslintConfigLumina,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      // Soften rules to make demos simpler
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
];
