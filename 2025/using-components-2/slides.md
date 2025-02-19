---
titleTemplate: '%s'
author: Omar Kawach, Max Patiiuk
mdc: true
colorSchema: dark
---

## ArcGIS Maps SDK for JavaScript: App Development with Components part 2: Using Frameworks

Omar Kawach, Max Patiiuk

---
is: feedback
---


---

# 2nd session in a 3-part series

- Brief description of previous session (web components in simple CDN no-build apps)
- Detail on current session's agenda (using web components with frameworks and bundlers)
- Brief description of next session & date&time

> If you missed the previous session, we have a recording. watch them in order - they build on top of each other


---

# index.html demo

> in previous session you saw how to write quick index.html app
> quick to get started and easy for simple apps


---
layout: intro
---

# Using Bundlers


---

# Why bundlers are useful for larger apps

but as app grows, adding a bundler can help. benefits:

- can import/export between files
- live reload
- better performance - minification and bundle splitting
- Can use modern JS syntax, which will get downcompiled as neede
- Can do complete offline apps with local assets
- TypeScript, IntelliSense
  - Can borrow material from my previous year's TypeScript Benefits list https://github.com/maxpatiiuk/esri-dev-summit-presentations/blob/main/2024/calcite-react/index.md#typescript-
  - show example of bugs TypeScript can easily catch?
  - or show autocomplete for Maps SDK APIs?
- more customizability, control, support for advanced use cases


> reduce, or split into multiple slides. Show TypeScript IntelliSense demo/screenshot in action


---

# DEMO: vanilla JS app with Vite


---

# Modern bundlers are simple to use and have great DX

Either demo transforming index.html into Vite, ESM, TypeScript

OR, take Vite,ESM,TypeScript starter app from jsapi-resources and walk over
main differences from index.html


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

# Calcite components

> Briefly mention why Calcite. Can borrow material from my previous year's Calcite Benefits list: https://github.com/maxpatiiuk/esri-dev-summit-presentations/blob/main/2024/calcite-react/index.md#calcite-design-system-

Demo how easy it is to build a good app with our web components


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