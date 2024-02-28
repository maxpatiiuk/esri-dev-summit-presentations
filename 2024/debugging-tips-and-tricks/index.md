# Overview

- Setting up your dev environment 🧑‍💻

- Troubleshoot web applications 💥
  - DevTools intro ️⚙️
  - AI-based tools and helpers 🤖
- ArcGIS Maps SDK for JavaScript 🗺️
  - Tips & Tricks 🎯
  - Resources 📍

> speaker notes:
>
> TODO: trim it down to 45 minutes
>
> (Max) We will begin this session with a guide to setting up your development
> environment for productivity.
>
> Then, we would dive deep into Developer Tools available in the browser, try
> out debugging an application and examine helpful AI-based tools.
>
> Finally, we would conclude with a list of resources available for the Maps SDK
> for JavaScript for further learning.
>
> Besides what is covered in this presentation, we have great supplemental
> resources for those who wish to dive deeper. We will share a link to all these
> resources at the end of the presentation.
>
> There's a wealth of knowledge we're eager to share, so let's get started.

## Setting up your dev environment

## Setting up your dev environment

## Code Editor

VS Code (other options available)

- Syntax highlighting 🏳️‍🌈
- Code Hinting 💬
- Git integration 🌳
- Theming 😎
- Task integration ⛑️

> speaker notes:
>
> (Max) As a developer, you would be spending a lot of time in the code editor,
> so picking the right one and configuring it to your liking can save you hours
> down the road.
>
> If you already know which code editor or IDE you prefer, that is awesome! If
> you are just getting started and aren't sure, VS Code is a great choice.
>
> Lets look at some useful tools that you should configure in your editor:

## Code Editor: Prettier 💅

![Prettier takes care of formatting code consistently automatically. Before Prettier, you might have an unformatted HTML code snippet with inconsistent spacing and alignment. After running Prettier, the same HTML code snippet is now uniformly formatted with consistent spacing and alignment](./demos/prettier/prettier.webp)

> speaker notes:
>
> (Max) The most helpful tool for improving developer productivity, is a code
> formatter. Prettier is the most popular choice and comes installed by default
> in many editors. If you have a formatter configured to run on save, you can
> write code without worrying about formatting, and Prettier will take care of
> making the code look good for you.
>
> Take a look at these before and after images to show how much clear formatting
> helps, and Prettier can do that for you automatically.

## Code Editor: ESLint 🚩

![](./demos/eslint/eslint.webp)

> speaker notes:
>
> (Max) Code Quality becomes very important as the project grows. Good code is
> hard to define, but in general it makes it easier for your teammates and the
> future you to understand what the code is doing, and to make modifications as
> necessary.
>
> ESLint is a popular choice for enforcing code quality. It's like having an
> experienced developer behind your back, reviewing every line you type, giving
> you advice and mentoring you on how to improve the code.
>
> In this small example, ESLint suggests we define our variable as "const"
> rather than "let" given that we don't modify it anywhere else in the code.
> Later, ESLint also notices that we are comparing the variable to itself, which
> is a potential bug.

## Code Editor: Live reload

LiveServer VS Code extension:

![LiveServer for live-reloading an HTML file](./assets/live-server.webp)

> speaker notes:
>
> (Max) While developing your app, you probably are making a lot of small
> changes, checking if the app works, and changing things again if it doesn't.
> Normally, you would have to reload the page after every change to see the
> effect, but with an IDE extension like LiveServer in VS Code, the page reloads
> automatically as soon as you hit save.
>
> Modern web frameworks like React come with even more advanced tools available,
> that can update only the necessary parts of the webpage, without reloading the
> whole page.

## Code Editor: Git 🌳

VS Code extensions: GitLens, Github Pull Requests & Issues

![](./assets/gitlens.webp)

> speaker notes:
>
> (Max) Whether you are working alone, or in a group of developers, tracking the
> code changes is important as that makes it easy to see who changed what, when,
> and why. It also makes it easy to roll back changes if something goes wrong.
> And even more importantly, it prevents you from accidentally loosing your
> work.
>
> Git is the most popular version control system. And it's often paired with
> GitHub for hosting Git repositories. However, using Git from the command line
> is not the most approachable for beginners. Fortunately, VS Code comes with
> two great extensions for Git built in.
>
> The image on this slide shows GitLens in action. It visualizes the recent Git
> commit history, and summarizes the changes from you and your peers.
>
> The other extension, GitHub Pull Requests & Issues, lets you interact with
> GitHub without leaving your IDE.

## TypeScript 🦾

> TypeScript: catch your bugs before your users do

- Helps with refactoring
- Self-documenting code
- Better autocomplete

> speaker notes:
>
> (Max) As soon as you start working on a larger application, you will find
> TypeScript very helpful for keeping the app maintainable. It's a superset of
> JavaScript that introduces type-safety into the code.
>
> This helps with catching typos and other errors before the user does. It also
> makes refactoring apps much easier as TypeScript will point out if a new
> feature you added requires code changes in other parts of the app.
>
> Finally, TypeScript gives the editor more understanding of how your app works,
> which in turns makes for much better autocomplete when typing.
>
> ArcGIS Maps SDK for JavaScript has quick start guides for TypeScript, as well
> as sample apps

## Troubleshoot web applications

## DevTools ⚙️

> Debugging tools === Productive programmers

- Breakpoints 🔴
- Network Traffic 🌐
- Console 📃
- CSS inspection 💎
- and much more! 🛠️

> speaker notes:
>
> (Max) Each browser ships with extremely powerful debugging and inspector
> tools. These should be developer's best friend as they help you diagnose even
> complex issues quickly.
>
> Browser based tools allow you to debug the application, inspect page styles,
> monitor network traffic, test accessibility and many more. In the next section
> of this presentation we will go over some of the most important capabilities
> of DevTools.

## Debugging: Breakpoints 🔴

![A simple breakpoint for stopping code execution on a given line](./demos/breakpoints/breakpoint.webp)

> speaker notes:
>
> (Max) First, let's talk about debugging. As far as the basics of debugging
> goes, DevTools lets you set a breakpoint on some line of code, and when the
> browser reaches that line, it will pause the code execution, and let you
> inspect the values of all variables at that point.
>
> For example, in this small code snippet, we set a breakpoint for when the view
> is ready. When the browser reaches that line, it will pause the code
> execution. At which point you can inspect the values of all the variables, as
> well as execute arbitrary JavaScript code in the console below.

## Debugging: Logpoints

![Logpoint prints result of a small statement upon reaching the breakpoint](./demos/breakpoints/logpoint.webp)

> speaker notes:
>
> (Max) After creating a simple breakpoint, you can turn it into a logpoint like
> on this video. Then, you enter some small statement, and that statement will
> be printed to the console automatically when the code behind the breakpoint
> executes. In this sample, the logpoint is inside a function that computes
> popup content for a given feature, and logpoint tells us what feature was
> clicked on.
>
> This is like adding `console.log` statements in your code, except you can add
> and modify these on the fly, without modifying code or reloading the page.

## Debugging: Conditional Breakpoints

![Conditional breakpoint for stopping only if a condition is mer](./demos/breakpoints/conditional.webp)

> speaker notes:
>
> (Max) Similarly, you can create a conditional breakpoint, that stops only when
> a certain condition is met. For example, you can stop the code execution only
> for a specific feature that you know causes your code to misbehave.

## Debugging: Stop on exceptions

![DevTools let you stop on any caught/uncaught exception](./demos/breakpoints/exceptions.webp)

> speaker notes:
>
> (Max) Even better, you can make DevTools stop automatically on any uncaught
> exception. This makes it easier to diagnose an issue, because you can see what
> was the state of your application when an error occurred.

## Debugging: Network requests 🌐

![Network](./assets/network.webp)

> speaker notes:
>
> (Max) Any web application relies on a back-end service to provide data and
> power features like search and querying. The Network tab in DevTools is
> perfect for inspecting network requests like that. In this example, I put
> "query" in the search box, letting me see all the network requests that
> contained query in the URL, and I can inspect what parameters the browser sent
> and what response it got back.
>
> This is also useful for diagnosing performance issues, as you can see how long
> each request took to complete.

## Debugging: Philosophy 🤔

- **Initial Assessment:** Determine if the issue is app-specific, API-specific,
  server-side, or involves third-party resources.
- **Isolation Techniques:** Narrow down the issue by isolating it to a smallest
  reproducible case:
  - Is the problem with how the code is written?
  - Is the issue on the client (API) or server?
  - Is there a performance issue?
  - Is the issue with the data?
- **Version Control:** Utilize Git for tracking changes and facilitating
  rollbacks

> speaker notes:
>
> (Max) That brings us to a very important tips for debugging your apps
> effectively. When the program misbehaves, it's hard to figure out what's going
> on among many moving parts. That's why, ruling out possible causes one by one
> get's you closer to the solution. And not just any solution, but a solution
> where you understand what went wrong and what's the best way to fix it.
>
> Like I mentioned on the previous slide, you can inspect network requests to
> see if the issue is with your browser sending wrong data, or the server
> responding with bad data - just like that, you narrowed down the scope of
> possibilities in half.
>
> For other errors, like state management, or performance issues, you can also
> try temporary disabling some parts of your application so that they don't
> interfere with the debugging process and to rule them out as a possible cause.
> You can keep removing the parts, until you discovered the part that causes the
> problem.
>
> In the process, it's important to use a version control system like Git to
> keep track of the recent changes, so that you can see what change could have
> caused the issue to appear, but also so that you can rollback your application
> once you are done with the debugging.

## Debugging: AI helpers and extensions

- ChatGPT / Bard / Bing AI / Claude
- VS Code Chat ("Explain this error")
- GitHub Copilot/InteliiSence/Tabnine AI
- Code Spell Checker (helps catch typos)
- Whatever tool / library you use, search for VS Code extensions that could
  improve integration with it:
  - Jest
  - Webpack
  - Vite
  - React

> speaker notes:
>
> (Max) Finally, a very recent development is the proliferation of AI-based
> helpers. These are great for explaining errors and suggesting solutions. If
> your organization permits these, you should definitely give them a try as they
> can enhance your productivity and abilities.
>
> Similarly, there are extensions for VS Code and other IDEs for better
> integration with development toolkits and libraries. These would improve
> developer experience and productivity.
>
> Now I will hand it over to my colleague, Noah, to give you even more helpful
> tips and tricks for debugging your applications.

## Console

- Log diagnostic info
- Execute JavaScript
- Check values of objects at an app breakpoint
- Tip: to pretty-print JSON, paste it into the console, then right-click on it
  and press "Copy object"

```js
const webMercatorUtils = await $arcgis.import(
  'esri/geometry/support/webMercatorUtils',
);
const extent = this.view.extent;
const geoExtent = webMercatorUtils.webMercatorToGeographic(extent);
console.log(JSON.stringify(geoExtent));
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

## Remote Debugging - iOS and Android

More accurate, but requires physical device

> speaker notes:
>
> (Noah)

## Lighthouse

TODO

> speaker notes:
>
> (Noah)

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
> (Noah) mention importance of Accessibility

## Maps SDK Tips & Tricks

## Emulation: Sensors

- Modify current location and locale

[![View map in japanese](https://hgonzago.github.io/DevSummit-presentations/Dev-Summit-2021/Debugging-tips-tricks/images/map-locale.png)](https://www.arcgis.com/apps/instant/media/index.html?appid=6df7442815404def91d9196515fa0768)

> speaker notes:
>
> (Noah)

## Emulation: Mobile

- Mobile emulation
- Throttling

![screen capture](./assets/throttle.webp)

## Emulation: Mobile

![screen capture](./assets/toggle.webp)

![screen capture](./assets/emulation.webp)

## View events

- [Handling Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events)

[![event explorer](./assets/events.webp)](https://developers.arcgis.com/javascript/latest/sample-code/event-explorer/)

> speaker notes:
>
> (Noah)

## Request interceptor

  - Add headers
  - Make changes before request is sent
  - Make changes after request is sent, but before returned to caller
  - Log error info for specfic layer errors

[https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#RequestInterceptor](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#RequestInterceptor)

## Request interceptor

```js
esriConfig.request.interceptors.push({
  urls: featureLayerUrl,
  before: function(params) {
    if (params.requestOptions.query.maxAllowableOffset) {
      params.requestOptions.query.maxAllowableOffset = 0;
    }
  }
});
```

## Create Live Expression

Example: get coordinates as you navigate the map

![](./assets/liveExpression.webp)

> speaker notes:
>
> (Noah)
> - require("esri/views/View").views.items[0].extent.center.latitude
> - require("esri/views/View").views.items[0].extent.center.longitude

## Maps SDK Resources

## Maps SDK Resources

![](./assets/jsapi-resources2.webp)

A collection of resources for developers using the ArcGIS Maps SDK for JavaScript
[https://github.com/Esri/jsapi-resources](https://github.com/Esri/jsapi-resources)

> speaker notes:
>
> (Max)

## Maps SDK Resources

![](./assets/Blogs.webp)

[https://developers.arcgis.com/javascript/latest/blogs/](https://developers.arcgis.com/javascript/latest/blogs/)

## Maps SDK Resources

![](./assets/Compare.webp)

[https://developers.arcgis.com/javascript/latest/tooling-intro/](https://developers.arcgis.com/javascript/latest/tooling-intro/)

## Maps SDK Resources

![](./assets/Additional.webp)

[https://developers.arcgis.com/javascript/latest/community/](https://developers.arcgis.com/javascript/latest/community/)

## Github repository for testing & feedback

[https://github.com/Esri/feedback-js-api-next](https://github.com/Esri/feedback-js-api-next)

![](./assets/arcgis-next.webp)

## ArcGIS Maps SDK for JavaScript - next

[https://github.com/Esri/feedback-js-api-next](https://github.com/Esri/feedback-js-api-next)

CDN:

```html
<link
  rel="stylesheet"
  href="https://js.arcgis.com/next/esri/themes/light/main.css"
/>
<script src="https://js.arcgis.com/next/"></script>
```

NPM:

```sh
npm install arcgis-js-api@next
```

> speaker notes:
>
> (Noah)

## Related Sessions

![](./assets/building-apps.webp)

![](./assets/performance.webp)

> speaker notes:
>
> (Noah)

## Questions?

Slides & Notes:
[bit.ly/esri-2024-debugging-tips-and-tricks](https://bit.ly/esri-2024-debugging-tips-and-tricks)

![](./assets/qr-code.svg)

> speaker notes:
>
> TODO: mention where we are at the expo
>
> NOTE: remember to repeat the question
>
> NOTE: remember to admit if you don't know the answer - instead point to people
> who know the answer
>
> (Noah) If you wish to dive deeper, you can find our slides and additional
> resources at the URL above, or you can scan the QR code.
