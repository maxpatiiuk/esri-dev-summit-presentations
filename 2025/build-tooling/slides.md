---
titleTemplate: '%s'
author: Max Payson, Max Patiiuk
mdc: true
colorSchema: dark
---

## ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling

Max Payson, Max Patiiuk

---
is: feedback
---


---

# Audience

- Developers looking to add build step to their apps
- Developers looking to learn more about the capabilities of the build tools
- Developers interested in how Esri's teams are leveraging modern build tools


---

# Agenda

TODO: create agenda based on the presentation outline



---

# Benefits of using build tools

- Ease of using external libraries
- Can import/export between files
- Live reload
- Better performance - minification and bundle splitting
- Can use modern JS syntax, which will get downcompiled as needed
- Can build complete offline apps with local assets
- TypeScript, IntelliSense
  - TODO: Can borrow material from my previous year's TypeScript Benefits list https://github.com/maxpatiiuk/esri-dev-summit-presentations/blob/main/2024/calcite-react/index.md#typescript-
  - show example of bugs TypeScript can easily catch?
  - or show autocomplete for Maps SDK APIs?
- more customizability, control, support for advanced use cases

TODO: split into multiple slides or reduce. Move TypeScript out further down?


---

# Disadvantages of build tools

- More complexity to set them up and get going
  - But, build tools are getting easier and easier to use - the barrier have never been lower


---

# Vite

- Most popular build tool today
- Used in many Esri's teams
- Has great developer experience
- Has large community, and is still growing rapidly


---

# DEMO: Using Vite starter

- Create a Vite starter project
- Start the dev server and show how simple it is to use
- Walk through thw most important files
  - In the process explain how to convert a no-build step spp to Vite
    - Replace CDN script tags with NPM imports
    - Link to map-components NPM get started


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

# DEMO: Add Vitest

- Vitest inherits Vite config - things "just work"
- Showcase basic html snapshot test via Vitest browser mode


---

# Summary

- Build tools, like Vite and frameworks like React help your app grow and stay maintainable
- They offer plenty of control, and developer experience enhancements
- They pair well with testing tools like Vitest to ensure your app is production-ready


---
src: ../.meta/footer.md
---
