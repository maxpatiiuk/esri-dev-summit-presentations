---
titleTemplate: '%s'
author: Max Payson, Max Patiiuk
mdc: true
colorSchema: dark
---

## ArcGIS Maps SDK for JavaScript:<br>Fast Development and Build Tooling

Max Patiiuk, Max Payson

---
is: feedback
---


---

# Agenda

- Introduction to build tools
- Building an app (based on how Esri teams do it)
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
layout: center
---

# Demo: [Get started with Vite](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/build-tooling/demo/1-javascript)


<!--
- Create a Vite starter project
- Start the dev server and show how simple it is to use
- Show index.html, main.js, Splash.js, package.json
  - Similar to no-build-step apps
- Show live update
-->


---

## React ⚛️

- As app grows, it benefits from more structure
- The most popular JavaScript library for building dynamic user-interfaces
- Build anything out of small Components
- JSX (JavaScript Syntax Extension).
  - `return <h1>Hello World! 👋</h1>;`
  - JavaScript code in HTML-like syntax


---
layout: center
---

# Demo: [Add basic React 19](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/build-tooling/demo/2-react)


---

# Calcite Design System 💎

- Library of 50 reusable web components
- Provides consistent and accessible UI out of the box
- Works with any framework


---

# JS Maps SDK components 📍

- The most powerful Web GIS mapping library
- Now simpler to use than ever thanks to web components


---
layout: center
---

# Demo: [Add Calcite and JS Maps SDK components](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/build-tooling/demo/3-web-components)


---

## TypeScript 🦾

Most developers see great benefit from adding TypeScript to their projects:

> TypeScript: catch your bugs before your users do

- Auto-magically provides better autocomplete and inline documentation
- Helps with code refactoring
- Encourages self-documenting code
- Essential part of every ArcGIS Online app at Esri


<!--
That's a lot of promises - lets see TypeScript in action by adding it to our
project.
-->


---
layout: center
---

# Demo: [Adopt TypeScript](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/build-tooling/demo/4-typescript)


---

# ESLint 🚩

- Optional, but very helpful on projects with multiple developers
- Enforce consistent code style on your team
- Catch some issues that TypeScript can't (like bad coding patterns)
- Autofix some issues for you


---
layout: center
---

# Demo: [Use ESLint](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2025/build-tooling/demo/5-eslint)


---

# Publishing

- You learned Vite, React, Calcite, Map Components, TypeScript, ESLint - now what?
- Let's publish the app!

<!--
That's it for the main tools Esri teams use to build their apps
Now comes the question - how do you get your app out there?
-->

---

# Demo: Publishing the app

Do a production build:

```sh
npm run build
```

Outputs static files that can be published to any hosting provider (GitHub
Pages, Vercel) or local server (NGINX, Microsoft IIS, Apache)

<!--
- The output is index.html and static files - same as no-build-step apps
  - Show off single minified JavaScript file
- Can be deployed to any hosting provider (GitHub Pages, Vercel) or local server (NGINX, Microsoft IIS, Apache)
-->


---

# Fun fact

These slides are built with Vite and hosted on GitHub Pages! ✨

(with help from [Slidev](https://sli.dev/))

---

# Summary of demos

- **Vite ⚡** simplifies the development workflow
- **React ⚛️** makes it easy to do complex things in a maintainable way
- **Calcite 💎** provides ready to use user interface components
- **TypeScript 🦾** catches your bugs before your users do
- **ESLint 🚩** ensures the code style stays consistent


---
layout: intro
---

# Enhance the app


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
layout: center
---

# Questions?

ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling

Demos and additional resources available at:
[bit.ly/esri-2025-build-tooling](https://bit.ly/esri-2025-build-tooling)

<img src="./assets/qr-code.svg" alt="" style="margin: 0 auto">

<!--
If you wish to dive deeper, you can find our demos and
additional resources at the URL above, or you can scan the QR code.
-->

---
src: ../.meta/footer.md
---
