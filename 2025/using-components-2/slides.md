---
titleTemplate: '%s'
author: Omar Kawach, Max Patiiuk
mdc: true
colorSchema: dark
---

## ArcGIS Maps SDK for JavaScript:<br>App Development with Components<br>part 2: Using Frameworks

Omar Kawach, Max Patiiuk, Nick Romano

---
is: feedback
---


---

# Previous session (yesterday)

App Development with Components Part 1: Core Patterns

> Join us for the third session in our three-part series on building applications with the ArcGIS Maps SDK for JavaScript. This session is focused on building the user experience in your web app with the SDK's components and Calcite Design System. Calcite provides a library of patterns, icons, and user-friendly, configurable web components that enable developers to easily build responsive, accessible web applications. We'll demonstrate how the components can be used together to build intuitive yet powerful experiences in your apps.

If you missed the previous session, we have a recording. These 3-part sessions build on top of each other


---

# Today's session

2nd in a 3-part series

- We will cover:
  - Calcite
  - ArcGIS Maps SDK for JavaScript
  - Bundlers
  - Frameworks


---

# Calcite Design System 💎

- An extensive library of reusable web components for designing compelling apps
- Provides consistent, customizable, responsive and accessible UI out of the box
- Works with any framework
- Will be covered in more detail by the 3rd session in this 3-part series


---

# ArcGIS Maps SDK for JavaScript 📍

- A comprehensive and powerful WebGIS mapping library
- Now simpler to use thanks to web components
- Core JavaScript API
  - Provides the main functionality. Contains the classes, methods, properties, events and type definitions for all the layers, components, visualization and client-side analysis functionality.
- JavaScript Maps SDK Components
  - Standards-based web components designed to encapsulate complex functionality (core API) and styling (Calcite) into small HTML markup chunks (i.e., UI)
- Documentation
   - Get started, programming patterns, tutorials, samples and API / component references


---

# index.html demo

> in previous session you saw how to write quick index.html app
> quick to get started and easy for simple apps


---
layout: intro
---

# Using Bundlers


---


# What are bundlers?

Bundlers transform the code that is easiest for developers to write into code that is most performant for the browser to run.


---

# Bundler benefits

- Improve development experience (live updates...)
- Enable modern syntax features and dependencies
- Make testing code simpler
- Optimize performance (reduce file sizes, split bundles...)
- Allow extending capabilities with plugins


---

# Examples of bundlers

* Vite
* Parcel
* Webpack

---

# Vite

- Most popular bundler today
- Used by many Esri teams
- Great developer experience
- Large and rapidly growing community


---
layout: center
---

# Demo: [Get started with Vite](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/using-components-2/demo/1-javascript)


<!--
- Describe converting index.html app to Vite
  - use jsapi-resources starter app
- Start the dev server and show how simple it is to use
- Show package.json - discuss dependencies and semver
- Show index.html, main.js
- Show live update
-->


---

# Publishing

1. Run the build command: `npm run build`
2. Deploy the `dist` folder anywhere!
   - any hosting provider (GitHub Pages, Vercel)
   - or local server (NGINX, Microsoft IIS, Apache)

<!--
- Vite team working on 4x speedup in build time
- The output is index.html and static files - same as no-build-step apps
  - Show off single minified JavaScript file
- Can be deployed to any hosting provider (GitHub Pages, Vercel) or local server (NGINX, Microsoft IIS, Apache)
- Mention assets can be made fully self-hosted
-->

---

# Fun fact

These slides are built with Vite and hosted on GitHub Pages! ✨

(with help from [Slidev](https://sli.dev/))


---
layout: intro
---

# Using frameworks

---

# Frameworks

- Frameworks make app development easier by providing more structure and declarative rendering
- React is most popular, but Angular and Vue also support web components
- Web components work in most major frameworks

---

# React ⚛️

- Most popular framework / library
- Top down data flow
- Declarative rendering and events (JSX)
- Encourages building app from "components" - reusable building blocks
- React19 has support for web components out of the box

--- 
layout: center
---

# Demo: [Get started with React](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/using-components-2/demo/2-react)


<!--
  - show differences to file extension
  - show how JSX is used, such as event handlers and props
  - highlight how we no longer have to use query selector
  - highlight the event listening logic
-->

---

# Summary of benefits from react

- Declarative rendering
- Easy to pass properties to components
- Easier event logic
- No need for query selectors
- Easy to consume web components


---

# TypeScript

- Typescript is a superset of JavaScript
- Adds static types to JavaScript
- Improves developer experience and code quality
- ArcGIS Web Components comes with TypeScript definitions out of the box

--- 
layout: center
---

# Demo: [Get started with React + Typescript](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/using-components-2/demo/3-typescript)

<!--
- Show tsconfig
- Show how to web component types use types in React
- Highlight the syntax highlighting and intellisense
- Show error when passing wrong type
- Maybe add a new method to the app component and show how to use the typings?
-->

---

# Summary of benefits from TypeScript

- Static types
- Improved developer experience
- Intellisense
- Error checking

---

# Framework specific component wrappers
- React 18 wrapper package for our components
  - npm: `@arcgis/map-components-react`
  - Encourage you to use React 19 going forward where no wrapper is needed


---
layout: intro
---

# Other component<br>packages

---

# Charts? Coding? Other components?


---
layout: intro
---

# Final notes


---


# Other frameworks

Angular and Vue also support web components.
(Show Angular get starter page in docs).
For Vue, show JS API resources sample?
Web components work in all.

> Show jsapi-resources - many great starter apps there

\*React 18 required wrappers which we provide. Not needed in React 19.


---

# Vite deep dive session (today in 2 hrs)

Deeper Vite and Vitest guide - shows how Esri is building apps

**When**: Today (Wednesday, March 12) | 4:00 PM - 5:00 PM PDT

**Where**: Smoketree C | Palm Springs Convention Center

> Learn how Esri's development teams are leveraging modern tools like Vite to
build fast, dynamic Web GIS applications. With features such as lazy loading,
client-side routing, hot module replacement, and lightning-fast builds, Vite
streamlines the entire development workflow from bundling to deployment. Paired
with Vitest for testing, these tools help ensure that your apps are both
high-performing and production-ready.


---

# Next session

App Development with Components Part 3: User Experience (deeper Calcite User Experience good practices)

**When**: Tomorrow (Thursday, March 13) | 1:00 PM - 2:00 PM PDT

**Where**: Primrose A | Palm Springs Convention Center

> Join us for the third session in our three-part series on building applications with the ArcGIS Maps SDK for JavaScript. This session is focused on building the user experience in your web app with the SDK's components and Calcite Design System. Calcite provides a library of patterns, icons, and user-friendly, configurable web components that enable developers to easily build responsive, accessible web applications. We'll demonstrate how the components can be used together to build intuitive yet powerful experiences in your apps.


---
src: ../.meta/footer.md
---