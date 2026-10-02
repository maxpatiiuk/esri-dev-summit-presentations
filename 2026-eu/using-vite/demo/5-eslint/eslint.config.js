import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Enable rules recommended for all JavaScript projects
  eslint.configs.recommended,

  // Enable rules recommended for all TypeScript projects
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylisticTypeChecked,

  // Enable rules recommended for all React projects
  {
    ...react.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.recommended,

  // Run all of the above on .ts and .tsx files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    // An example of overriding default rule configuration
    // See rule documentation at https://typescript-eslint.io/rules/consistent-type-definitions
    // rules: {
    //  // Turn rule into a warning instead of an error
    //  // And make in prefer type aliases over interfaces
    //  "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    // },
  },
];
