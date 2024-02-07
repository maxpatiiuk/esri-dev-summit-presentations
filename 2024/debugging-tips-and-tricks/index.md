# Overview

- Setting up your dev environment 🧑‍💻
- Troubleshoot web applications 💥
  - DevTools intro
  - AI-based tools and helpers
  - Tips & Tricks
- Maps SDK resources 📍

> speaker notes:
>
> TODO: trim it down to 45 minutes
>
> (Max) We will begin this session with a guide to setting up your development
> environment for productivity.
>
> Then, would dive deep into Developer Tools available in the browser, try out
> debugging an application and examine helpful AI-based tools.
>
> Finally, we would conclude with a list of resources available for the Maps SDK
> for JavaScript for further learning.
>
> (Noah) There is a lot to cover today, so let's get started.

## Code Editor

- VS Code
  - Syntax highlighting
  - Code Hinting
  - Git integration
  - Theming
  - Task integration

> speaker notes:
>
> (Noah) As a developer, you would be spending a lot of time in the code editor.
>
> If you already know which code editor or IDE you prefer, that is awesome! If
> you are just getting started and aren't sure, VS Code is a great choice.
>
> Lets look at some useful tools that a good editor provides:

## Code Editor: Prettier

![Prettier takes care of formatting code consistently automatically](https://hgonzago.github.io/tips-tricks-webinar/images/pretty.gif)

[VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

> speaker notes:
>
> (Noah) The most helpful tool for improving developer productivity, is a code
> formatter. Prettier is the most popular choice and comes installed by default
> in many editors. If you have a formatter configured to run on save, you can
> write code without worrying about formatting, and Prettier will take care of
> making the code look good for you.

## Code Editor: ESLint

- ESLint flat config
- Calcite rules
- React/Vue/Jest/etc rules
- LintLens VS Code extensions

> speaker notes:
>
> (Noah) Code Quality becomes very important as the project grows. Good code is
> hard to define, but in general it makes it easier for your teammates and the
> future you to understand what the code is doing, and to make modifications as
> necessary.

## VS Code Live Server

VS Code extensions:

- Browser Lite
- LiveServer
- entire Edge browser with DevTools inside of VS Code

> speaker notes:
>
> (Noah)

## Code Editor: GitLens

VS Code extensions:

- Github Pull Requests & Issues
- GitLens

> speaker notes:
>
> (Noah)

## TypeScript/Vite

- Code assist
- ES6
- Webpack/Vite/Rollup/ESBuild
- [TypeScript setup](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/)
  - Use TypeScript to catch typos, and have better autocomplete, and
    maintainable apps - would be useful down the line too
- [ArcGIS API JS Template App](https://github.com/odoe/jsapi-cli-template-app)
- VS Code extension:
  - Pretty TypeScript Errors

> speaker notes:
>
> (Max)

## Good practice

- Check Maps SDK release notes
- Update to new version regularly
- Use GitHub Dependabot to receive alerts of new versions and security fixes
- Write Unit tests and other types of tests for your code - will give you
  confidence that changes to the app in one place didn't break something else

> speaker notes:
>
> (Max)

## DevTools

Debugging tools === Productive programmers

Browser based tools to track down issues, inspect css, analyze performance and
more.

- Firefox Developer Edition
- Chrome and/or Chrome Canary
  - [Comprehensive Official Documentation](https://developer.chrome.com/docs/devtools/)
  - [Summary of advanced, lesser-known tools and tips](https://github.com/maxpatiiuk/code_share/blob/main/misc/notes/Chrome%20DevTools.md)
- Edge
- Safari

> speaker notes:
>
> (Max) Suggest learning devtools well - will be very helpful in the long term
>
> Official docs are long, but very comprehensive and super helpful

## DevTools: Outline

- Console
- Breakpoints
- CSS inspection
- Snippets
- Network Traffic
- and much more!

> speaker notes:
>
> (Max)

## Debugging: Breakpoints

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/debugger.png)

- Various ways to pause code
- `debugger;`
- Blackboxing (from context menu)
- stop on (un)caught exceptions

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/breakpoints.gif)
[Debugging demo](https://developers.arcgis.com/javascript/latest/sample-code/widgets-search-3d/live/index.html)

> speaker notes:
>
> (Max)

## Debugging: Network requests

- Records all network requests
- Tip: Hold refresh button - empty cash and hard reload
- Inspect network traffic, e.g.
  - Search widget not displaying properly
  - Print task not executing as expected
  - Querying layer features

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/network.png)
![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/network.png)

[Network demo](https://developers.arcgis.com/javascript/latest/sample-code/widgets-search-3d/live/index.html)

> speaker notes:
>
> (Max)

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

Use version control like Git, and make regular small commits to see a history of
changes. This also allows to see what needs to be rolled back if things broke
suddenly.

[Detailed guide](https://ntietz.com/blog/how-i-debug-2023/)

> speaker notes:
>
> (Max)

## Debugging: AI helpers and extensions

- ChatGPT/Bard/Bing AI/Claude
- VS Code Chat ("Explain this error")
- GitHub Copilot/InteliiSence/Tabnine AI
- Code Spell Checker (helps catch typos)
- Whatever tool/library you use, search for VS Code extensions that could
  improve integration with it:
  - Jest
  - Webpack
  - Vite
  - React

> speaker notes:
>
> (Max)

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

> speaker notes:
>
> (Noah)

## Console: Log Messages

- Log your own messages
- Warning message logged by Maps SDK

[![](https://hgonzago.github.io/tips-tricks-webinar/images/consoleerror.png)](https://hgonzago.github.io/tips-tricks-webinar/Demos/js-demo/index.html)

> speaker notes:
>
> (Noah)

## Console: Custom formatters

[Controls how object values display](https://github.com/ycabon/arcgis-js-api-devtools)

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/formatters.png)

> speaker notes:
>
> (Noah)

## CSS: Color Themes

- Detect user color scheme preferences
  - CSS media feature (light, dark, no-preference)
- Emulate via dev tools

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/theme-prefs.png)

> speaker notes:
>
> (Noah)

## CSS: Inspect Styles

- Inspect element css
- View/toggle classes
- Edit styles applies to element
- Color picker (change color, color contrast)

![](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2020/Dev-debug-tips/images/computed-css.png)

> speaker notes:
>
> (Noah)

## Elements: Inspect Web Component

- Web-component specific debugging (i.e shadow dom)
  - The Properties tab in devtools

> speaker notes:
>
> (Noah)

## Application

- Cookies
- Local Storage
- App Cache

> speaker notes:
>
> (Noah)

## Emulation: Sensors

- Modify current location and locale

[![View map in japanese](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/map-locale.png)](https://www.arcgis.com/apps/instant/media/index.html?appid=6df7442815404def91d9196515fa0768)

> speaker notes:
>
> (Noah)

## Emulation: Mobile

- Mobile emulation
- Throttling

![screen capture](https://github.com/hgonzago/DevSummit-presentations/blob/gh-pages/Dev-Summit-2017/Dev-debug-tips/images/screencapture.png?raw=true)

> speaker notes:
>
> (Noah)

## Remote Debugging - iOS and Android

More accurate, but requires physical device

> speaker notes:
>
> (Max)

## Lighthouse

TODO

> speaker notes:
>
> (Max)

## Lighthouse: Accessibility

- axe
- Audits
- Color Contrast
- Extensions
- Axe Coconut (similar to Chrome Canary or Firefox nightly)
- Axe a11y extension
- ChromeVox screen reader

- Other Dev Summit sessions on accessibility:
  - TODO

> speaker notes:
>
> (Max) mention importance of Accessibility

## View events

- [Handling Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events)

[![event explorer](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/event-explorer.png)](hhttps://developers.arcgis.com/javascript/latest/sample-code/event-explorer/)

> speaker notes:
>
> (Max)

## Constrain visible extent

Use constraint geometry to

- Restrict map area
- Limit search results

[Demo](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/demos/restrict_extent.html)

> speaker notes:
>
> (Max) go over this quickly as it was mentioned recently

## Request interceptor

- [RequestInterceptor](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#RequestInterceptor)
  - Add headers
  - Changes before request is sent
  - Changes after request is sent but before returned to caller
  - Log error info for specfic layer errors

[Real World Example](https://community.esri.com/t5/arcgis-api-for-javascript/how-to-use-a-key-in-an-esrirequest-call/m-p/298401)

> speaker notes:
>
> (Max) go over this quickly as it was mentioned recently

## Snippet

- Create code snippets to run in browser dev tools

![Code snippet to get lat and long](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/coords-snippet.png)

> speaker notes:
>
> (Max)

## Create Live Expression

- Get coordinates as you navigate the map

![Code snippet to get lat and long](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/live-expression.png)

> speaker notes:
>
> (Max)

## Maps SDK Resources

[![Maps SDK Resources](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2018/Dev-debug-tips/images/jsapiResources.png)](https://github.com/Esri/jsapi-resources)

- TypeScript definition file
- Build tools, e.g. Webpack
- OAuth Callback

> speaker notes:
>
> (Max)

## ArcGIS API for JavaScript - next

Github repository for feedback:
[Esri/feedback-js-api-next](https://github.com/Esri/feedback-js-api-next)

Npm:

```sh
npm install arcgis-js-api@next
```

CDN:

```html
<link
  rel="stylesheet"
  href="https://js.arcgis.com/next/esri/themes/light/main.css"
/>
<script src="https://js.arcgis.com/next/"></script>
```

> speaker notes:
>
> (Noah)

## Other Sessions Worth Seeing

TODO

> speaker notes:
>
> (Noah)

## Questions?

Slides & Notes:
[bit.ly/esri-2024-debugging-tips-and-tricks](https://bit.ly/esri-2024-debugging-tips-and-tricks)

![](./qr-code.svg)

> speaker notes:
>
> If you wish to dive deeper, you can find our slides and additional resources
> at the URL above, or you can scan the QR code.
