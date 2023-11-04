# Outline

- [x] Extracted material from all previous years into a single outline to see a
      one page view of everything.
- [x] Add new ideas to outline
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

## Calcite Design System

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

- Web Components (Custom Elements)
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

## ArcGIS Maps SDK for JavaScript

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

## ArcGIS Instant Apps

Portfolio

## Development Environment Setup

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

Installation

```sh
npx create-react-app my-app --template typescript
npm install @esri/calcite-components-react
npm install @arcgis/core
npm install ncp
```

Add copy script:
`ncp node_modules/@esri/calcite-components/dist/calcite/assets/\* ./public/assets/`

Scripts:

```json
  "scripts": {
    "start": "npm run copy && vite",
    "build": "npm run copy && vite build",
    "copy": "ncp node_modules/@esri/calcite-components/dist/calcite/assets/* ./public/assets/"
  },
```

## Layout + Feature

## Adding Custom Widgets to the View

## Questions?

Information and documentation

- Calcite Design System
  - Documentation: https://developers.arcgis.com/calcite-design-system
  - GitHub: https://github.com/Esri/calcite-components
  - Calcite Components
    React: https://www.npmjs.com/package/@esri/calcite-components-react
- ArcGIS API for JavaScript
  - Documentation: https://developers.arcgis.com/javascript/latest
- React
  - https://reactjs.org/
- TypeScript
  - https://www.typescriptlang.org
- Demo App
  - https://github.com/rslibed/2022-ds-react-ts-calcite-components

## Please take our survey

1. Download the Esri Events app and go to DevSummit
2. Select the session you attended
3. Scroll down to the "Feedback" section
4. Complete Answers, add a Comment, and Select "Submit"
