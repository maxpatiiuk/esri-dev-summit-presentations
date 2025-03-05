---
titleTemplate: '%s'
author: Max Payson, Max Patiiuk
mdc: true
colorSchema: dark
---

## ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling

Max Patiiuk, Max Payson

---
is: feedback
---


---

# Are you looking to...

- Learn about build tool capabilities?
- Add a build step to your app?
- Learn how Esri teams are leveraging modern build tools?

Then this presentation is for you!


---

# Agenda

- Introduction to build tools
- Building an app
  - Get started with Vite
  - Add dependencies
  - Use TypeScript and ESLint
  - Publish the app
- Enhance the app
  - Lazy load parts of the application
  - Add tests with Vitest
  - Add custom plugins


---

# What are build tools?

Build tools transform the code that is easiest for developers to write into code that is most performant for the browser to run.


---

# Build tool benefits

- Improve development experience (live updates...)
- Enable modern syntax features and dependencies
- Make testing code simpler
- Optimize performance (reduce file sizes, split bundles...)
- Allow extending capabilities with plugins


---

# Examples of build tools

* Vite
* Parcel
* Webpack

---

# Vite

- Most popular build tool today
- Used by many Esri teams
- Great developer experience
- Large and rapidly growing community


---

# Demo: Get started with Vite

Run the following command to bootstrap a new Vite project:

```sh
npm create vite
```

<!--
- Create a Vite starter project
- Show index.html, main.js, Splash.js, package.json
- Start the dev server and show how simple it is to use
- Show live update
  - Image blinked during update - will fix in next step
-->


---

# Demo: Get started with Vite: summary

- Quick to get started
- Live updates -> fast feedback loop

<!--
This will get you pretty far, but as your app grows and interface becomes more
complex, you will likely benefit from more structure. That's where user interface
libraries come in.
-->


---

## React ⚛️

> A JavaScript library for building dynamic user-interfaces

- Build anything out of small Components
- JSX (JavaScript Syntax Extension).
  - `return <h1>Hello World! 👋</h1>;`
  - JavaScript code in HTML-like syntax

<!--
Many different libraries are used at Esri. But React is the most popular in the world.

> Many of your may already be familiar with React. It isn't just a
> JavaScript library, but a powerful tool for building highly dynamic
> applications, while keeping the codebase maintainable and scalable.
>
> React is keen on keeping your app maintainable as it grows. It does that
> by encouraging you to build the application out of small components. Small
> components are great because they are easier to reason about and easier to reuse.
>
> React also introduces JSX - which is an optional syntax that bridges the gap
> between HTML and JavaScript, taking the best of both - the **readability** and
> **simplicity** of HTML, combined with the **power** and **flexibility** of
> JavaScript.

-->


---

# Demo: Add basic React 19

Add React dependencies to the project:

```sh
npm install react react-dom
# Install the Vite React plugin:
npm install -D @vitejs/plugin-react-swc
```

- Show adding dependencies to use calcite and map-components
- Walk through thw most important files
  - In the process explain how to convert a no-build step app to Vite
    - Replace CDN script tags with NPM imports
    - Link to map-components NPM get started

---

# DEMO: TypeScript

- Show adding TypeScript


---

# DEMO: ESLint

- Show adding general ESLint config, as well as typescript-eslint and React
  - Don't actually write the config - just copy paste it and include in the starter we distribute

---

# Demo summary

- Easily add new dependencies
- Enable modern JavaScript syntax features
- Linting and TypeScript -> minimize programming errors
- Auto complete -> faster development

---

# DEMO: Publishing

- Show build & preview
  - Vite team working on 4x speed up (using Rolldown)
- The output is index.html and static files - same as no-build-step apps
- Can be deployed to any hosting provider (GitHub Pages, Vercel) or local server (NGINX, Microsoft IIS, Apache)
- Vite guide: [vite.dev/guide/static-deploy](https://vite.dev/guide/static-deploy)


---

# DEMO: Add react-router

- Show landing page with a link that loads the map page
- Map is loaded lazily
- Throughout, have code editor and dev server side by side to show off hot module replacement


---

# Demo summary

- Optimize performance by splitting bundles
- Quickly preview or debug builds, before they are deployed

---

# DEMO: Add Vitest

- Vitest inherits Vite config - things "just work"
- Showcase basic html snapshot test via Vitest browser mode


---

# DEMO: Add custom plugins

- Add JS API build plugin
- Add chaos monkey development plugin


---

# In conclusion...

- Build tools like Vite help your app grow and stay maintainable
- They offer plenty of control and developer experience enhancements
- They pair well with testing tools like Vitest to ensure your app is production-ready


---
src: ../.meta/footer.md
---
