import config from '@maxpatiiuk/prettier-config';

export default {
  ...config,
  overrides: [
    {
      files: ['**/slides.md', '**/pages/*.md'],
      options: {
        parser: 'slidev',
        plugins: ['prettier-plugin-slidev'],
      },
    },
  ],
};
