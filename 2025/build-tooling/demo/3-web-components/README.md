# ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling (Demo App)

[Session Description](../..)

## Technologies used:

- [Vite](https://vitejs.dev/)
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

## Key changes from [2-react](../2-react)

- Add Calcite Design System and Map Components dependencies to the project:
  ```sh
  npm install @esri/calcite-components @arcgis/map-components
  ```
- Import their styles in [src/index.css](./src/index.css)
- import `<calcite-link` and use it in [src/Splash.jsx](./src/Splash.jsx)
