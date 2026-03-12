import config from '@maxpatiiuk/prettier-config';

export default {
  ...config,
  plugins: [],
  overrides: [
    {
      files: ['**/slides.md', '**/pages/*.md', '**/.meta/*.md'],
      options: {
        parser: 'slidev',
        plugins: ['prettier-plugin-slidev'],
      },
    },
    {
      files: ['**/2026/vis-techniques-3d/slides.md'],
      options: {
        parser: 'slidev',
        plugins: ['prettier-plugin-slidev'],
        printWidth: 60,
      },
    },
  ],
};
