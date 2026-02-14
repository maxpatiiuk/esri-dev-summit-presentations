import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup(() => {
  return {
    themes: {
      // This theme has higher contrast than the default light theme
      // There is also github-light-high-contrast, but it makes colors too dark
      // to see the differences between the syntaxes, reducing readability
      light: 'github-light',
    },
  };
});
