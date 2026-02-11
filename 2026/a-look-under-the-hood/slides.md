---
titleTemplate: '%s'
author: Thorben Westerhuys, Max Patiiuk
mdc: true
colorSchema: light
---

## ArcGIS Maps SDK for JavaScript:<br>A Look Under the Hood

Max Patiiuk, Thorben Westerhuys

---
is: feedback
---

---

# Agenda

- How Esri's largest monorepos works
  - What is a monorepo and why create it? 📐
  - What tooling is needed? ⚙️
  - Live Demo 🧪
- TODO: topic 2
  - TODO

---
layout: intro
---

# How Esri's largest<br>monorepo works

---

# Definition

> **Repository** - a version-controlled storage space that contains files
> belonging to a project. Commonly hosted on GitHub.

For example,
[Calcite components](https://github.com/Esri/calcite-design-system/tree/main) is
a single GitHub repository.

[![Calcite components repository](./assets/calcite-preview.svg)](https://github.com/Esri/calcite-design-system/tree/main)

---

# 3 code organization patterns

- Monolith - a single large repository for a single project

  ![All code is in a single repository](./assets/monolith.svg)

- Polyrepo - scattered repositories

  ![Code is split across separate repositories](./assets/polyrepo.svg)

- Monorepo - a single repository with code split into packages

  ![Multiple packages in a shared repository](./assets/monorepo.svg)

<!--
Monorepo is a way to organize code on a project where multiple teams need to collaborate.
The simplest way to explain what is a monorepo is to compare it to other code organization patterns.
-->

---

# Monolith

<img src="./assets/monolith.svg" alt="" style="position:absolute;right:50px;top:50px">

Single large repository for a single cohesive product.

Pros:

- The default approach when the project "just grows"
- Less tooling

Cons:

- Scaling bottlenecks (build times, IDE performance)
- High coupling

Esri examples: [esri-leaflet](https://github.com/Esri/esri-leaflet)<br>Community
examples: [TypeScript](https://github.com/microsoft/TypeScript),
[VSCode](https://github.com/microsoft/vscode)

---

# Polyrepo

<img src="./assets/polyrepo.svg" alt="" style="position:absolute;right:50px;top:50px">

Separate, but related repositories.

Pros:

- Low coupling. Each repository can move fast independently.

Cons:

- High duplication. Hard to keep things in sync.
- Local development tricky - juggling many repositories & dev servers.
- PRs and issues split between multiple repositories - disruptive

Esri examples: [EsriDevEvents](https://github.com/EsriDevEvents)<br>Community
examples: [express.js](https://github.com/expressjs) (split across 30
repositories)

---

# Monorepo

<img src="./assets/monorepo.svg" alt="" style="position:absolute;right:50px;top:50px">

Many semi-independent packages under a common roof.​

Pros:​

- Control how much coupling you get.​
- Consistent coding standards and tooling. Setup once, benefit many.​

Cons:​

- More tooling complexity

Esri examples:
[calcite-design-system](https://github.com/Esri/calcite-design-system),
[jsapi-resources](https://github.com/Esri/jsapi-resources)<br>Community
examples: [react](https://github.com/facebook/react),
[vite](https://github.com/vitejs/vite)

---

# Example Monorepo structure

<!-- prettier-ignore -->
```yaml
- .github/           # Shared GitHub actions​
- .gitignore         # Single gitignore​
- eslint.config.js   # Single config​
- prettier.config.js # Single config​
- pnpm-lock.yaml     # Single lock file for the entire monorepo​
- packages/          # ...
```

---

# Example Monorepo structure - packages/

<!-- prettier-ignore -->
```yaml
- packages/
  - app/
  - utils/
  - build-utils/
  - configs/
```

---

# Esri's largest monorepo

<!-- prettier-ignore -->
```yaml
- packages/
  - map-packages/     # @arcgis/map-components, map-components-react, embeddable-components
  - coding-packages/  # @arcgis/coding-components, Arcade
  - charts-packages/  # @arcgis/charts-components, charts-components-react
  - core-packages/    # @arcgis/core
  - ...
  - docs-packages/    # Private, Internal, and External docs
  - test-packages/    # Test apps for verifying libraries
  - starter-packages/  # New monorepo package starters
  - support-packages/ # Configs. Tooling
- samples/            # Public sample & starter packages
```

---

# Esri's largest monorepo - support-packages/

<!-- prettier-ignore -->
```yaml
- packages/
  - support-packages/
    - runtime-utils
    - build-utils
    - monorepo-cli
    - lumina-runtime         # Base class for all web components (uses Lit)
    - lumina-compiler        # Internal web component framework (uses Vite and TypeScript)
    - eslint-config
    - prettier-config
    - typescript-config
    - storybook-config
    - codemod                # Codemods for migrating between frameworks or updating libraries
    - create-cli             # CLI to bootstrap a new Maps SDK package
```

---
layout: intro
---

# Monorepo tooling

---

# Disclaimer

- This presentation covers a common monorepo stack​
- Every team has their unique needs, baggage, and preferences​
- No tooling works universally​

Do your own research to find what is right for you

---

# Package manager

Used not just for installing external packages, but for linking monorepo
packages together.​

- npm (default for non-monorepo projects, simple)​
- yarn (most common in monorepos as it supported them first)​
- pnpm (modern, fast, has security options)​

[pnpm](https://pnpm.io/installation) and
[pnpm workspace](https://pnpm.io/workspaces) get started

---

# Turbo build cache

- Build package once – reuse, if nothing changed​
- Build cache is shared between CI and all devs​
- Result: `pnpm build:all` "builds" thousands of files in 3s​

[Turbo Introduction​](https://turborepo.dev/docs)

---

# WIP

---
layout: intro
---

# TODO: topic 2

---
layout: center
---

# Questions?

ArcGIS Maps SDK for JavaScript: Fast Development and Build Tooling

Demos and additional resources available at:
[arcg.is/esri-2025-build-tooling](https://arcg.is/esri-2025-build-tooling)

<!--
<img src="./assets/qr-code.svg" alt="" style="margin: 0 auto">
If you wish to dive deeper, you can find our demos and
additional resources at the URL above, or you can scan the QR code.
-->

---
src: ../.meta/footer.md
---
