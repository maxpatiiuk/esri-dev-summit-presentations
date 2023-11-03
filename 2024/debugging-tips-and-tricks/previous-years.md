# Previous Years (for reference and inspiration)

Notes from this session during previous DevSummits

## 2017

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

## 2018

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

## 2019

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

## 2020

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

## 2020 (2)

[Recording](https://www.youtube.com/watch?v=12jo1RafMIY)

## 2021

[Recording](https://www.youtube.com/watch?v=5_NQ_dSKp8w),
[Repository](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2021/Debugging-tips-tricks)

Material:

- odoe.net
- esri community - get help, send help, feedback
- JS API Docs event visualizer (Event explorer)
- Snippets/Live Expressions

## 2022

[Repository](https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2022/debugging)
(slides incomplete)

## 2023

[Repository](https://github.com/banuelosj/DevSummit-presentation/tree/main/2023/debugging-tips-and-tricks)

Ideas:

- Have slides url at the bottom of each slide?
