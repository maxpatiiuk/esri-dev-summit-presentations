# ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling (Demo App)

[Session Description](../..)

## Technologies used:

- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)
- [ArcGIS Maps SDK for JavaScript's ES modules](https://developers.arcgis.com/javascript/latest/)
- [Vite](https://vite.dev/)
- [Sonda](https://sonda.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)

## Installation

> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://git-scm.com/downloads) is required to run the following commands.

1. Clone this sample app

   ```sh
   git clone https://github.com/maxpatiiuk/esri-dev-summit-presentations esri-dev-summit-presentations
   cd esri-dev-summit-presentations/2026/build-tooling/demo/7-sonda
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm run dev
   ```

   To run Sonda during the build:

   ```sh
   npm run build:sonda
   ```

For production build and deployment, see [Vite documentation](https://vite.dev/guide/static-deploy.html).

## How this sample was created

1. Use Vite starter app (React + TypeScript): `npm init vite`

2. Follow the Maps SDK's ["Get started with npm"](https://developers.arcgis.com/javascript/latest/get-started/#npm) guide to install `@arcgis/map-components`

3. Add `<calcite-shell>` and `<arcgis-map>` components to `App.tsx`
