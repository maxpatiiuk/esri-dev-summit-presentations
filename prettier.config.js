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
  ],
};
