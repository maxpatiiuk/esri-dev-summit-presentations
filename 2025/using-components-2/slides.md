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

If you missed the previous session, we have a recording. They build on top of each other


---

# Today's session

2nd in a 3-part series

---

# Calcite Design System 💎

- Library of 50 reusable web components
- Provides consistent and accessible UI out of the box
- Works with any framework
- Will be covered in more detail in the 3rd session in this series


---

# JS Maps SDK components 📍

- The most powerful Web GIS mapping library
- Now simpler to use than ever thanks to web components


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

# Frameworks make app development easier

Benefits:

- more structure (for scalable growth)
  - encourages building app from "components" - reusable building blocks
- declarative rendering, declarative events
  - web components (map-components, calcite) are simpler to use with frameworks
  - querySelector and addEventListener replaced by cleaner JSX

React is most popular - will use them in this presentation. Angular and Vue also popular. Web components work in all.

> Can borrow material from my previous year's React Benefits list https://github.com/maxpatiiuk/esri-dev-summit-presentations/blob/main/2024/calcite-react/index.md#react-%EF%B8%8F

---


# React demo

Either convert Vite+ESM into React

OR, take React starter app from jsapi-resources and walk over
main differences from Vite+ES

> Have code and browser side by side, showcasing HMR feature in Vite+React


---

# TypeScript demo

Add TypeScript to React app. Highlight web component name and prop autocomplete


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