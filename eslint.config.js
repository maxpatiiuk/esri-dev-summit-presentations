import eslintConfig from '@arcgis/eslint-config';
import eslintConfigLumina from '@arcgis/eslint-config/lumina';

export default [
  {
    ignores: ['dist', 'node_modules', '**/*.js'],
  },
  ...eslintConfig,
  ...eslintConfigLumina,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
];
