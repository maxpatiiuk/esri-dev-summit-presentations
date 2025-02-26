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

- Overview
- Demos
  - Get started with Vite
  - Add dependencies
  - Use TypeScript and modern features
  - Lazy load source bundles
  - Publish the app
  - Add tests with Vitest
  - Add custom plugins

---

# What are build tools?

> Build tools automate tasks like bundling and optimizing source code, help manage dependencies, and enhance development workflows.\
> (Thanks Copilot)

---

# What are build tools?

> Build tools automate tasks like bundling and optimizing source code, help manage dependencies, and enhance development workflows.\
> (Thanks Copilot)

Examples: 
* Vite
* Parcel
* Webpack

---

# Build tool benefits

- Improve development experience (live updates...)
- Enable modern syntax features and dependencies
- Automate transpiling, bundling, and testing code
- Optimize performance (reduce file sizes, split bundles...)
- Allow extending capabilities with plugins

---

# Vite

- Most popular build tool today
- Great developer experience
- Large and rapidly growing community
- Used by many Esri teams

---

# Demo: Get started with Vite

- Create a Vite starter project
- Start the dev server and show how simple it is to use
- Walk through thw most important files
  - In the process explain how to convert a no-build step spp to Vite
    - Replace CDN script tags with NPM imports
    - Link to map-components NPM get started

---

# Demo summary

- Quick to get started
- Live updates -> fast feedback loop

---

# DEMO: Add basic React 19

- Show adding dependencies to use calcite and map-components


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

# DEMO: Add react-router

- Show landing page with a link that loads the map page
- Map is loaded lazily
- Throughout, have code editor and dev server side by side to show off hot module replacement


---

# DEMO: Publishing

- Show build & preview
  - Vite team working on 4x speed up (using Rolldown)
- The output is index.html and static files - same as no-build-step apps
- Can be deployed to any hosting provider (GitHub Pages, Vercel) or local server (NGINX, Microsoft IIS, Apache)
- Vite guide: [vite.dev/guide/static-deploy](https://vite.dev/guide/static-deploy)

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
