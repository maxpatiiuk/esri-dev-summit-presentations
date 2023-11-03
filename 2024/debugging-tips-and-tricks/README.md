# ArcGIS Maps SDK for JavaScript: Tips and Tricks for Developing and Debugging Apps

## Outline

Extracting material from all previous years into a single outline to see a one
page view of everything. Then, can add new ideas to this outline, and then trim
it down to fit into 45 minutes.

### Overview

- Setting up your dev environment
- Troubleshoot web application
  - Dev tools intro
  - Tips & Tricks
- JS Api resources and tips

### Code Editor or IDE

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

### Extensions

- Prettier
- EsLint
- GitLens
- GitHub Copilot, IntelliSence

![](https://hgonzago.github.io/tips-tricks-webinar/images/pretty.gif)

### **JSAPI Resources**

[![JS API Resources](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/jsapiResources.png)](https://github.com/Esri/jsapi-resources)

- ESLint file
- TypeScript definition file
- Build tools, e.g. Webpack
- OAuth Callback

### TypeScript/Babel

- Code assist
- ES6
- Webpack/Vite/Rollup/ESBuild
- [TypeScript setup](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/)
- [ArcGIS API JS Template App](https://github.com/odoe/jsapi-cli-template-app)

### Dev Tools Intro

Debugging tools === Productive programmers

Browser based tools to track down issues, inspect css, analyze performance and
more.

- Firefox Developer Edition
- Chrome and/or Chrome Canary
- Edge
- Safari

### Dev Tools

- Console
- Debugging
- Network traffic
- Css inspection ... and much more

### Debugging: Breakpoints

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/debugger.png)

- Various ways to pause code
- Debugger
- Blackboxing

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/breakpoints.gif)

### Debugging: Network requests

- Records all network requests
- Inspect network traffic, e.g.
  - Search widget not displaying properly
  - Print task not executing as expected
  - Querying layer features

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/network.png)
![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/network.png)

### Console

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

### Console: Log Messages

- Log your own messages
- Warning message logged by JSAPI

[![](https://hgonzago.github.io/tips-tricks-webinar/images/consoleerror.png)](https://hgonzago.github.io/tips-tricks-webinar/Demos/js-demo/index.html)

### Custom formatters

[Controls how object values display](https://github.com/ycabon/arcgis-js-api-devtools)

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/formatters.png)

### CSS: Color Themes

- Detect user color scheme preferences
  - CSS media feature (light, dark, no-preference)
- Emulate via dev tools

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/theme-prefs.png)

### CSS: Inspect Styles

- Inspect element css
- View classes applied to selected element

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/computed-css.png)

### ArcGIS API for JavaScript - next

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

### Network

- Inspect network traffic

[Network demo](https://developers.arcgis.com/javascript/latest/sample-code/widgets-search-3d/live/index.html)

### Debugging

- Breakpoints

[Debugging demo](https://developers.arcgis.com/javascript/latest/sample-code/widgets-search-3d/live/index.html)

### Debugging: Philosophy

- Narrow the problem down

  - App specific
  - API specific
  - Server-side issue
  - Are any 3rd party resources involved?

- Is the problem with how the code is written?
- Is the issue on the client (API) or server?
- Is there a performance issue?
- Is the issue with the data?

![](https://hgonzago.github.io/tips-tricks-webinar/images/onion.jpg)

### CSS

- View and edit CSS

[CSS](https://developers.arcgis.com/javascript/)

# Application

- Cookies
- Local Storage
- App Cache

[Resources](http://html5demos.com/storage)

### Responsive

- Emulate
- Geolocation and touch overrides
- Debug remotely

[Resources](http://html5demos.com/storage)

### Mobile emulation

- Mobile emulation
- Throttling
- Sensors - geolocation

![screen capture](https://github.com/hgonzago/DevSummit-presentations/blob/gh-pages/Dev-Summit-2017/Dev-debug-tips/images/screencapture.png?raw=true)

### Accessibility

- Audits
- Color Contrast
- Extensions
- Axe Coconut (similar to Chrome Canary or Firefox nightly)
- Axe a11y extension
- ChromeVox screen reader

### View events

- [Handling Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events)

[![event explorer](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/event-explorer.png)](hhttps://developers.arcgis.com/javascript/latest/sample-code/event-explorer/)

### Constrain visible extent

- Use constraint geometry to
- Restrict map area
- Limit search results

[Demo](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/demos/restrict_extent.html)

### Request interceptor

- [RequestInterceptor](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#RequestInterceptor)
  - Add headers
  - Changes before request is sent
  - Changes after request is sent but before returned to caller
  - Log error info for specfic layer errors

[Real World Example](https://community.esri.com/t5/arcgis-api-for-javascript/how-to-use-a-key-in-an-esrirequest-call/m-p/298401)

### Snippet

- Create code snippets to run in browser dev tools

![Code snippet to get lat and long](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/coords-snippet.png)

### Create Live Expression

- Get coordinates as you navigate the map

![Code snippet to get lat and long](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/live-expression.png)

### Sensors

- Modify current location and locale

[![View map in japanese](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/map-locale.png)](https://www.arcgis.com/apps/instant/media/index.html?appid=6df7442815404def91d9196515fa0768)

### Other Sessions Worth Seeing

TODO

### Q&A

- [Documentation & Samples](https://developers.arcgis.com/javascript/)
- Slides & Notes:
  [https://bit.ly/esri-2024-debugging-tips-and-tricks](https://bit.ly/esri-2024-debugging-tips-and-tricks)
- [https://developers.arcgis.com/javascript/latest/guide/typescript-setup/](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/)
- [odoenet (Rene's blog)](https://odoe.net/blog)
- [Esri Community](https://community.esri.com/t5/arcgis-api-for-javascript/ct-p/arcgis-api-for-javascript)

### Please take our survey

1. Download the Esri Events app and go to DevSummit
2. Select the session you attended
3. Scroll down to the "Feedback" section
4. Complete Answers, add a Comment, and Select "Submit"

## Previous Years (for reference and inspiration)

### 2017

[Recording](https://www.youtube.com/watch?v=nVMeu65qnc4),
[Repository](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2017/Dev-debug-tips)

Impressions:

- The introductions in the 2017, 2018, and 2019 sessions are nice - would like
  to copy that structure
- Dated of course, but still good video
- Demos don't do enough to show how bug was detected - jump straight to error.
  Of course, there is time presume, but should be able to do better
- Heather is pretty disorganized and not conscientious. Tabs should be opened.
  Before the session, make sure to have everything opened and located
  conveniently
- Zoom in to increase font size, console size, window size (maybe change display
  settings to reduce pixel size - will make everything look larger)
- Create separate VS Code profile for presenting - larger font size, less noise,
  ...

Material:

- Suggest using ChatGPT today. Also VS Code Chat, and "Explain this error" ahead
  of time and everything setup
- Show off local overrides or editing local folder or web browser inside of ide
- A lot of DevTools tips to show
  - Snippets
  - Breakpoints
  - Console
  - Network Traffic
  - Lighthouse - Accessibility! axe?
- Would be cool to mention remote debugging - iOS and Android
- Mention CanIUse.com
- Link to other sessions worth seeing (both this year and past years)

Ideas:

- Try to join several features together into a single flow? i.e create a story
  that feels natural rather than jump from feature to feature - create a mini
  app during the demo, and in the process of making the app, show off as many
  development tools and debug tools as you can. Though jumping from thing to
  thin, and telling but not showing is quicker. A compromise - post links and
  research further topics?
- Use light IDE theme as it's easier to read off projector (based on user
  feedback)

Todos:

- Brainstorm things that were't shown in recent years, but would still be useful
  to both new and intermediate developers

### 2018

[Recording](https://www.youtube.com/watch?v=LyUVh4MVYQw),
[Repository](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2018/Dev-debug-tips),
[Repository 2](https://github.com/kellyhutchins/DS2018-TipsAndTricks)

Material:

- LiveServer extension for VS Code. And web browser inside of VS Code (simple
  web browser, or entire Edge with DevTools)
- jsapi-resources repository
- ESLint flat config, Calcite rules
- Prettier!!!
- mention `debugger;`. show how to blackbox a script (from context menu, not
  though typing out file url like in the recording). stop on (un)caught
  exceptions
- Suggest learning devtools well - will be very helful in the long term
  - Official docs are long, but very comprehensive and super helpful -
    https://developer.chrome.com/docs/devtools/
  - Based on those docs, I have shorter
    [notes with DevTools features I found useful](https://github.com/maxxxxxdlp/code_share/blob/main/misc/notes/Chrome%20DevTools.md).
    Maybe mention some of them?
- DevTools mobile emulation. Throttling. Sensors
  - But was mentioned a lot previously so maybe just mention briefly that this
    exists

Todos:

- how do we switch between displays when presenting? one person has slides and
  another demos? or all from single laptop?

### 2019

[Recording](https://www.youtube.com/watch?v=o30MBicJmNo),
[Repository](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2019/Dev-debug-tips)

Material:

- Instead of JSON viewer extension, could copy paste into devtools
- Hold refresh button - empty cash and hard reload
- Network tab
- DevTools - color picker (change color, color contrast). toggle class names,
  edit styles
- suggest people check release notes. Update regularly. Use dependabot?
- Web-component specific debugging (i.e shadow dom)
  - The Properties tab in devtools

Ideas:

- Consider leaving footnotes with more links on each slide for people to go over
  afterward (or in spate file, but they may be too lazy to open that)
- We need to improve the error message for geolocation when not on https to help
  Devs with http/https errors - no point in pointing this out at dev summit 4
  years in a row without improving DX

### 2020

[Repository](https://github.com/hgonzago/tips-tricks-webinar),
[Repository 2](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2020/Dev-debug-tips)

Material:

- https://github.com/odoe/jsapi-cli-template-app - something like this as a base
  - newer example -
    https://developers.arcgis.com/javascript/latest/typescript-setup/
  - Use TypeScript to catch typos, and have better autocomplete, and
    maintainable apps - would be useful down the line too
- When debugging, isolate the issue to smaller and smaller reproducable case
  until figured out what is the cause
  - Is the problem with how the code is written?
  - Is the issue on the client (API) or server?
  - Is there a performance issue?
  - Is the issue with the data?

Ideas:

- Embed lots of small videos in slides so that don't have to do as many things
  live?

Todos:

- Look over my chrome extensions, vs code extensions, vs code settings, and
  other useful things I use often

### 2020 (2)

[Recording](https://www.youtube.com/watch?v=12jo1RafMIY)

### 2021

[Recording](https://www.youtube.com/watch?v=5_NQ_dSKp8w),
[Repository](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2021/Debugging-tips-tricks)

Material:

- odoe.net
- esri community - get help, send help, feedback
- JS API Docs event visualizer (Event explorer)
- Snippets/Live Expressions

### 2022

[Repository](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2022/debugging)
(slides incomplete)

### 2023

[Repository](https://github.com/banuelosj/DevSummit-presentation/tree/main/2023/debugging-tips-and-tricks)

Ideas:

- Have slides url at the bottom of each slide?

## TODOs

- [ ] Go over repositories and slides from previous years more and see what can
      be reused or improved
- [ ] https://github.com/Esri/reveal.js

---

Presenters: [Max Patiiuk](https://github.com/maxxxxxdlp) &
[Noah Sager](https://github.com/NoashX)

Length: 45 minutes

---

[![Debugging Tips and Tricks Title Slide](./header-slide.png)](https://github.com/banuelosj/DevSummit-presentation/blob/main/2024/debugging-tips-and-tricks/slides.pdf?raw=true)

[Download Slides](https://github.com/banuelosj/DevSummit-presentation/blob/main/2024/debugging-tips-and-tricks/slides.pdf?raw=true)

Learn how to quickly and easily find and fix problems in your web mapping
applications. You will learn how to setup your dev environment to use plug-ins
like linters and beautifiers to write cleaner code. We'll show you how to use
the power of browser-based debugging tools to debug, style, and optimize your
apps. We will also cover how to resolve common issues you may run into when
working with the ArcGIS Maps SDK for JavaScript.

# Demo Live Links:

- [Breakpoints: FeatureTable Edits](https://banuelosj.github.io/DevSummit-presentation/2023/debugging-tips-and-tricks/demos/feature-table-edits)
- [Developer Tools as IDE: Sketch Symbology override](https://banuelosj.github.io/DevSummit-presentation/2023/debugging-tips-and-tricks/demos/sketch-geometries-custom)
