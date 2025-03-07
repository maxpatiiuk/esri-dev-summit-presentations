# ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling (Demo App)

[Session Description](../..)

## Key changes from [4-typescript](../4-typescript)

- Add ESLint and ESlint rules for React and TypeScript to the project:

  ```sh
  npm install -D @eslint/js typescript-eslint globals eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
  ```

  - TIP: these are all dev-dependencies - they are for use during development
    only - they won't slow down your app in production

- Create an [eslint.config.js](./eslint.config.js) file

Tip:

- ESLint rules can be customized in the [eslint.config.js](./eslint.config.js) file.
  Example:

  ```js
    // An example of overriding default rule configuration
    // See rule documentation at https://typescript-eslint.io/rules/consistent-type-definitions
    rules: {
     // Turn rule into a warning instead of an error
     // And make in prefer type aliases over interfaces
     "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    },
  ```

## Technologies used:

- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)
- [ArcGIS Maps SDK for JavaScript's ES modules](https://developers.arcgis.com/javascript/latest/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [ESLint](https://eslint.org/)

## Installation

> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://git-scm.com/downloads) is required to run the following commands.

1. Clone this sample app

   ```sh
   git clone https://github.com/maxpatiiuk/esri-dev-summit-presentations esri-dev-summit-presentations
   cd esri-dev-summit-presentations/2025/build-tooling/demo/5-eslint
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm run dev
   ```

For production build and deployment, see [Vite documentation](https://vite.dev/guide/static-deploy.html).
