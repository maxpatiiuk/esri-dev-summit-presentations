# ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling (Demo App)

[Session Description](../..)

## Technologies used:

- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)
- [ArcGIS Maps SDK for JavaScript's ES modules](https://developers.arcgis.com/javascript/latest/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)

## Installation

> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://git-scm.com/downloads) is required to run the following commands.

1. Clone this sample app

   ```sh
   git clone https://github.com/maxpatiiuk/esri-dev-summit-presentations esri-dev-summit-presentations
   cd esri-dev-summit-presentations/2025/build-tooling/demo/2-react
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

## Key changes from [3-web-components](../3-web-components)

- Add TypeScript dependency and React type annotations to the project:

  ```sh
  npm install -D typescript @types/react @types/react-dom
  ```

  - TIP: if a dependency require special TypeScript instructions, it will usually point that out in its documentation or it may publish a separate package to NPM for types (usually named `@types/dependency-name`)

- Create a [tsconfig.json](./tsconfig.json) file
- Tell TypeScript to use React-specific autocomplete for Calcite and Map Components to [src/vite-env.d.ts](./src/vite-env.d.ts):

  ```ts
  /// <reference types="@esri/calcite-components/types/react" />
  /// <reference types="@arcgis/map-components/types/react" />
  ```

- Rename .js and .jsx files to .ts and .tsx
- Profit!

> TypeScript does not change the way your code runs - it just adds extra checks
> during development.
