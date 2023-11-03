# Outline

Extracting material from all previous years into a single outline to see a one
page view of everything. Then, can add new ideas to this outline, and then trim
it down to fit into 45 minutes.

## Overview

- Setting up your dev environment
- Troubleshoot web application
  - Dev tools intro
  - Tips & Tricks
- JS Api resources and tips
- AI-based tools and helpers

## Code Editor

> speaker notes:
>
> If you already know which code editor or IDE you like, that is great! If you
> are just getting started and aren't sure, VS Code is a great start and a very
> popular choice
>
> a code editor provides the following nice features

- VS Code
  - Syntax highlighting
  - Code Hinting
  - Git integration
  - Theming
  - Task integration

[Demo](https://www.slant.co/topics/1686/~javascript-ides-or-editors)

## Code Editor: Prettier

![](https://hgonzago.github.io/tips-tricks-webinar/images/pretty.gif)

## Code Editor: ESLint

- ESLint flat config
- Calcite rules
- React/Vue/Jest/etc rules

## VS Code Live Server

LiveServer extension for VS Code. And web browser inside of VS Code (simple web
browser, or entire Edge with DevTools)

## Code Editor: GitLens

## Maps SDK Resources

[![JS API Resources](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/jsapiResources.png)](https://github.com/Esri/jsapi-resources)

- TypeScript definition file
- Build tools, e.g. Webpack
- OAuth Callback

## TypeScript/Vite

- Code assist
- ES6
- Webpack/Vite/Rollup/ESBuild
- [TypeScript setup](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/)
  - Use TypeScript to catch typos, and have better autocomplete, and
    maintainable apps - would be useful down the line too
- [ArcGIS API JS Template App](https://github.com/odoe/jsapi-cli-template-app)

## Good practice

- Check Maps SDK release notes
- Update to new version regularly
- Use GitHub Dependabot to receive alerts of new versions and security fixes

## ArcGIS API for JavaScript - next

Github repo for feedback:
[Esri/feedback-js-api-next](https://github.com/Esri/feedback-js-api-next)

Npm:

```sh
 npm install --save arcgis-js-api@next
```

CDN:

```html
<link
  rel="stylesheet"
  href="https://js.arcgis.com/next/esri/themes/light/main.css"
/>
<script src="https://js.arcgis.com/next/"></script>
```

## Dev Tools

> speaker notes:
>
> Suggest learning devtools well - will be very helpful in the long term
>
> Official docs are long, but very comprehensive and super helpful

Debugging tools === Productive programmers

Browser based tools to track down issues, inspect css, analyze performance and
more.

- Firefox Developer Edition
- Chrome and/or Chrome Canary
  - [Comprehensive Official Documentation](https://developer.chrome.com/docs/devtools/)
  - [Summary of advanced, lesser-known tools and tips](https://github.com/maxxxxxdlp/code_share/blob/main/misc/notes/Chrome%20DevTools.md)
- Edge
- Safari

## Dev Tools: Outline

- Console
- Breakpoints
- CSS inspection
- Snippets
- Network Traffic
- and much more!

## Debugging: Breakpoints

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/debugger.png)

- Various ways to pause code
- `debugger;`
- Blackboxing (from context menu)
- stop on (un)caught exceptions

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/breakpoints.gif)

## Debugging: Network requests

- Tip: Hold refresh button - empty cash and hard reload
- Records all network requests
- Inspect network traffic, e.g.
  - Search widget not displaying properly
  - Print task not executing as expected
  - Querying layer features

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/network.png)
![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/network.png)

## Debugging: AI helpers

- ChatGPT
- VS Code Chat ("Explain this error")
- GitHub Copilot/InteliiSence

## Console

- Tip: can copy-paste into console to pretty-print JSON
- Log diagnostic info
- Execute JavaScript
- Check values of objects at an app breakpoint

```js
require(['esri/geometry/support/webMercatorUtils'], function (
  webMercatorUtils,
) {
  var extent = this.view.extent;
  var geoExtent = webMercatorUtils.webMercatorToGeographic(extent);
  console.log(JSON.stringify(geoExtent));
});
```

[Console demo](https://github.com/hgonzago/DevSummit-presentations/blob/gh-pages/Dev-Summit-2017/Dev-debug-tips/Demos/dev-tools-demos/console.html)

[Debug Demo](https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/live/index.html)
![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/latlong.png)

## Console: Log Messages

- Log your own messages
- Warning message logged by Maps SDK

[![](https://hgonzago.github.io/tips-tricks-webinar/images/consoleerror.png)](https://hgonzago.github.io/tips-tricks-webinar/Demos/js-demo/index.html)

## Console: Custom formatters

[Controls how object values display](https://github.com/ycabon/arcgis-js-api-devtools)

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/formatters.png)

## CSS: Color Themes

- Detect user color scheme preferences
  - CSS media feature (light, dark, no-preference)
- Emulate via dev tools

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/theme-prefs.png)

## CSS: Inspect Styles

- Inspect element css
- View/toggle classes
- Edit styles applies to element
- Color picker (change color, color contrast)

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/computed-css.png)

## Elements: Inspect Web Component

- Web-component specific debugging (i.e shadow dom)
  - The Properties tab in devtools

## Network

- Inspect network traffic

[Network demo](https://developers.arcgis.com/javascript/latest/sample-code/widgets-search-3d/live/index.html)

## Debugging

- Breakpoints

[Debugging demo](https://developers.arcgis.com/javascript/latest/sample-code/widgets-search-3d/live/index.html)

## Debugging: Philosophy

Narrow down the issue:

- App specific
- API specific
- Server-side issue
- Are any 3rd party resources involved?

When debugging, isolate the issue to smaller and smaller reproducible case until
figured out what is the cause

- Is the problem with how the code is written?
- Is the issue on the client (API) or server?
- Is there a performance issue?
- Is the issue with the data?

![](https://hgonzago.github.io/tips-tricks-webinar/images/onion.jpg)

## Application

- Cookies
- Local Storage
- App Cache

## Emulation: Sensors

- Modify current location and locale

[![View map in japanese](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/map-locale.png)](https://www.arcgis.com/apps/instant/media/index.html?appid=6df7442815404def91d9196515fa0768)

## Emulation: Mobile

- Mobile emulation
- Throttling

![screen capture](https://github.com/hgonzago/DevSummit-presentations/blob/gh-pages/Dev-Summit-2017/Dev-debug-tips/images/screencapture.png?raw=true)

## Remote Debugging - iOS and Android

More accurate, but requires physical device

## Lighthouse

TODO

## Lighthouse: Accessibility

- axe
- Audits
- Color Contrast
- Extensions
- Axe Coconut (similar to Chrome Canary or Firefox nightly)
- Axe a11y extension
- ChromeVox screen reader

## View events

- [Handling Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events)

[![event explorer](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/event-explorer.png)](hhttps://developers.arcgis.com/javascript/latest/sample-code/event-explorer/)

## Constrain visible extent

> notes: go over this quickly as it was mentioned recently

Use constraint geometry to

- Restrict map area
- Limit search results

[Demo](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/demos/restrict_extent.html)

## Request interceptor

> notes: go over this quickly as it was mentioned recently

- [RequestInterceptor](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#RequestInterceptor)
  - Add headers
  - Changes before request is sent
  - Changes after request is sent but before returned to caller
  - Log error info for specfic layer errors

[Real World Example](https://community.esri.com/t5/arcgis-api-for-javascript/how-to-use-a-key-in-an-esrirequest-call/m-p/298401)

## Snippet

- Create code snippets to run in browser dev tools

![Code snippet to get lat and long](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/coords-snippet.png)

## Create Live Expression

- Get coordinates as you navigate the map

![Code snippet to get lat and long](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/live-expression.png)

## Other Sessions Worth Seeing

TODO

## Q&A

- [Documentation & Samples](https://developers.arcgis.com/javascript/)
- Slides & Notes:
  [https://bit.ly/esri-2024-debugging-tips-and-tricks](https://bit.ly/esri-2024-debugging-tips-and-tricks)
- [https://developers.arcgis.com/javascript/latest/guide/typescript-setup/](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/)
- [odoenet (Rene's blog)](https://odoe.net/blog)
- [Esri Community](https://community.esri.com/t5/arcgis-api-for-javascript/ct-p/arcgis-api-for-javascript)
- Mention CanIUse.com

## Please take our survey

1. Download the Esri Events app and go to DevSummit
2. Select the session you attended
3. Scroll down to the "Feedback" section
4. Complete Answers, add a Comment, and Select "Submit"
