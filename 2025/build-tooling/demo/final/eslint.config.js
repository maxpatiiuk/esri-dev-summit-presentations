import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    ...react.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  react.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],

    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    // Don't do type-aware linting for untyped files
    files: ["**/*.js"],
    ...tsEslint.configs.disableTypeChecked,
  },
];
