# ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling (Demo App)

[Session Description](../..)

## Key changes from [3-web-components](../3-web-components)

Based on [Calcite TypeScript guide](https://developers.arcgis.com/calcite-design-system/resources/frameworks/#typescript) and [Map Components TypeScript guide](https://developers.arcgis.com/javascript/latest/get-started-react/#bonus-typescript):

- Add TypeScript dependency and React type annotations to the project:

  ```sh
  npm install -D typescript @types/react @types/react-dom
  ```

- Create a [tsconfig.json](./tsconfig.json) file
- Tell TypeScript to use React-specific autocomplete for Calcite and Map Components from [src/vite-env.d.ts](./src/vite-env.d.ts):

  ```ts
  /// <reference types="@esri/calcite-components/types/react" />
  /// <reference types="@arcgis/map-components/types/react" />
  ```

- Rename .js and .jsx files to .ts and .tsx
- Profit!

Tips:

- If a dependency requires special TypeScript instructions, it will usually point
  that out in its documentation or it may publish a separate package to NPM for
  types (usually named `@types/dependency-name`)
- To get the most out of TypeScript, you need to add type annotations to your
  code and make sure your dependencies have types available (most do nowadays)
- TypeScript does not change the way your code runs - it just adds extra checks
  during development.

## Technologies used:

- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)
- [ArcGIS Maps SDK for JavaScript's ES modules](https://developers.arcgis.com/javascript/latest/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)

## Installation

> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://git-scm.com/downloads) is required to run the following commands.

1. Clone this sample app

   ```sh
   git clone https://github.com/maxpatiiuk/esri-dev-summit-presentations esri-dev-summit-presentations
   cd esri-dev-summit-presentations/2026/build-tooling/demo/4-typescript
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
