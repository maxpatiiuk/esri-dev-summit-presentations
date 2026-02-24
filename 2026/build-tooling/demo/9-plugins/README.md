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
   cd esri-dev-summit-presentations/2026/build-tooling/demo/9-plugins
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Copy `.env.local.example` to `.env.local` and update it with an [API key](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/tutorials/create-an-api-key/online/) that has access to the [ArcGIS Places service](https://developers.arcgis.com/rest/places/). Note, if you do not have an ArcGIS Location Platform account, sign up for free [here](https://location.arcgis.com/sign-up/).

4. Start the development server

   ```sh
   npm run dev
   ```

For production build and deployment, see [Vite documentation](https://vite.dev/guide/static-deploy.html).

## Testing

1. Install browser test dependencies

   ```sh
   npm run test-pre
   ```

2. Run the tests

   ```sh
   npm run test
   ```

## How this sample was created

1. Use Vite starter app (React + TypeScript): `npm init vite`

2. Follow the Maps SDK's ["Get started with npm"](https://developers.arcgis.com/javascript/latest/get-started/#npm) guide to install `@arcgis/map-components`

3. Add `<calcite-shell>` and `<arcgis-map>` components to `App.tsx`
