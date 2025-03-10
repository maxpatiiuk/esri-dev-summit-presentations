const prettierCommand = `prettier --write`;

export default {
  '*.{ts,tsx}': [`eslint --config eslint.config.js --fix`, prettierCommand],
  '*.{css,scss,js,md,mdx,json,yml,yaml,json,html}': prettierCommand,
};
