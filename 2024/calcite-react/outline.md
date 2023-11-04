# Outline

- [x] Extracted material from all previous years into a single outline to see a
      one page view of everything.
- [x] Add new ideas to the outline
- [ ] Trim it down to fit into 60 minutes.

## Overview

- React
- TypeScript
- Calcite
- ArcGIS Maps SDK for JavaScript

## React

JavaScript library for building user-interfaces

- Virtual DOM (Document Object Model)
  - Copy of real DOM
  - If there's a change, VDOM will update, compare differences between the real
    DOM and virtual DOM, then only the part of the DOM that is changed will
    update, rather than the entire DOM
- JSX (JavaScript Syntax Extension)
  - JavaScript code in HTML-like syntax
- One-way data binding
  - Data is transferred from top to bottom

## TypeScript

Javascript with syntax for types

- Open-source programming language developed by Microsoft
- Superset of JavaScript
- Add types to data such as: strings, booleans, numbers, etc.
- Helps with code management
- Throws errors allowing developers to catch issues earlier on in development
- [TypeScript setup](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/)
  - Use TypeScript to catch typos, have better autocomplete, and build more
    maintainable apps

## Calcite Design System

- 50+ Web Components (Custom Elements), 2000+ icons, color schemes, design
  tokens
  - Ready to use & reuse
- Built with Stencil.js
  - Compiler that generates Web Components (Custom Elements)
  - Uses TypeScript, JSX, and CSS (SASS also available)
- Documentation
  - Getting started
  - Gallery
  - Samples
  - CSS Variables
    - Supported feature in modern CSS, unrelated to Calcite Components and Web
      Components
- Calcite Components React

> speaker notes:
>
> Calcite Design System is a set of reusable web components with implementation
> guidance that can be used to build on-brand and accessible web applications.
> Along with web components it includes a UI kit, icons, and color schemes.
>
> Calcite Components are framework-agnostic, so it can web components built with
> StencilJS. Stencil is a compiler that generates custom elements using
> TypeScript, JSX, and CSS.
>
> Calcite Components React is a wrapper for calcite components. When using with
> TypeScript it gives you type safety. The reason why you would use this instead
> of using calcite components directly is that custom events are connected for
> you instead of having to access the Dom node and adding event listeners to a
> ref.
>
> Walk through documentation:
> https://developers.arcgis.com/calcite-design-system/components/

## Calcite Design System: Benefits

- Consistent UX; consistent brand identity
- Clear direction for designers and developers; follows best practices
- Reduce effort & cost; speed up updates
- Improve accessibility (WCAG 2.1 AA); comply with web-standards

## ArcGIS Maps SDK for JavaScript

Empower your web apps with geospatial web technology

- Features include, but aren't limited to:
  - Portal set up
  - Load and display geographic information in 2D and 3D
  - Out-of-the-box widgets
  - Create custom widgets with Widget Development Framework
- Written in TypeScript
- Install and set up
  - CDN
  - ESM
- [Maps SDK Resources](https://github.com/Esri/jsapi-resources)
  - [React sample app](https://github.com/Esri/jsapi-resources/tree/main/esm-samples/jsapi-react)
  - [TypeScript sample app](https://github.com/Esri/jsapi-resources/tree/main/esm-samples/jsapi-vite-ts)

> speaker notes:
>
> ArcGIS API for JS is a web API that allows users to create apps that unlock
> your data’s potential with interactive user experiences. The Portal API allows
> developers to work with users, groups, and content that’s hosted within ArcGIS
> Online or ArcGIS Enterprise.
>
> There’s also out-of-the-box widgets that developers can use to enrich their
> user’s experience. Along with that developers can use the Widget class to
> create new widgets or repurpose existing ones.
>
> There are different ways to set it up but for this project we are going to use
> the ES modules build.

## Good practice

- Check Maps SDK release notes
- Update to new version regularly
- Learn your tools ([DevTools](https://developer.chrome.com/docs/devtools/),
  IDE) well
- Use GitHub Dependabot to receive alerts of new versions and security fixes
- Write Unit tests and other types of tests for your code - will give you
  confidence that changes to the app in one place didn't break something else

## Development Environment Setup

Installation:

```sh
npx create-react-app my-app --template typescript
npm install @esri/calcite-components-react
npm install @arcgis/core
npm install ncp
```

Add copy script and build scripts:

```json
  "scripts": {
    "start": "npm run copy && vite",
    "build": "npm run copy && vite build",
    "copy": "ncp node_modules/@esri/calcite-components/dist/calcite/assets/* ./public/assets/"
  },
```

> speaker notes:
>
> To start, create the app using the React builder of your choice. For this
> example here, we’re using create-react-app and starting off with the
> TypeScript template.
>
> Next, install calcite-components-react. We don’t need to install
> calcite-components because it’s a dependency of this package.
>
> Install the ES module build of ArcGIS API for JS
>
> And finally, install ncp. We'll use that to copy the assets over. This allows
> icon to show and the date picker to be properly translated.

## Layout + Feature

TODO: what kind of app are we looking to build? (Purpose, Features,
Functionality)

> speaker notes:
>
> Highlight differences between Calcite Components and Calcite Components React.
> Why should React Apps use Calcite Components React instead?

## Adding Custom Widgets to the View

> speaker notes:
>
> Demonstrate usage of Calcite Components within React Components and showcase
> app as it's being built

## Other Sessions Worth Seeing

TODO: update with 2024 sessions

- [Building Web Apps with ArcGIS API for JavaScript and Calcite Design System](https://mediaspace.esri.com/media/t/1_6eotmuhb/244321192)
- [Calcite Design System: Design & Build Web Apps](https://mediaspace.esri.com/media/t/1_a5nli0bn/244321192)
- [Esri's Design System: Build Compelling Web Apps Faster Using the New Web Component Library](https://www.youtube.com/watch?v=R-J_xsYGRKg)
- [Esri's Design System: Build Beautiful, Consistent Web Apps Faster](https://www.youtube.com/watch?v=UNkjECNnB-Q)

## Questions?

Information and documentation

- Slides & Notes:
  [https://bit.ly/esri-2024-calcite-react](https://bit.ly/esri-2024-calcite-react)
- [Esri Community](https://community.esri.com/t5/arcgis-api-for-javascript/ct-p/arcgis-api-for-javascript)
- Calcite Design System
  - Documentation: https://developers.arcgis.com/calcite-design-system
  - GitHub: https://github.com/Esri/calcite-components
  - Calcite Components
    React: https://www.npmjs.com/package/@esri/calcite-components-react
- ArcGIS API for JavaScript
  - Documentation: https://developers.arcgis.com/javascript
  - TypeScript setup:
    https://developers.arcgis.com/javascript/latest/guide/typescript-setup/
  - [odoenet (Rene's blog)](https://odoe.net/blog)
- React: https://reactjs.org/
- TypeScript: https://www.typescriptlang.org
- Demo App: https://github.com/rslibed/2022-ds-react-ts-calcite-components

## Please take our survey

1. Download the Esri Events app and go to DevSummit
2. Select the session you attended
3. Scroll down to the "Feedback" section
4. Complete Answers, add a Comment, and Select "Submit"
