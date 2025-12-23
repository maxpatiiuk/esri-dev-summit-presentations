# ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling (Demo App)

[Session Description](../..)

## Key changes from [1-javascript](../1-javascript)

- Add React dependencies to the project:
  ```sh
  npm install react react-dom
  # Install the Vite React plugin:
  npm install -D @vitejs/plugin-react-swc
  ```
- Add react plugin to [vite.config.ts](./vite.config.ts)
- Rename .js files to .jsx
- Render Splash screen using React in [src/main.jsx](./src/main.jsx)
- Use JSX syntax in [src/Splash.jsx](./src/Splash.jsx)

## Technologies used:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

## Installation

> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://git-scm.com/downloads) is required to run the following commands.

1. Clone this sample app

   ```sh
   git clone https://github.com/maxpatiiuk/esri-dev-summit-presentations esri-dev-summit-presentations
   cd esri-dev-summit-presentations/2026/build-tooling/demo/2-react
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
