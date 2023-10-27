# ArcGIS Maps SDK for JavaScript: Tips and Tricks for Developing and Debugging Apps

## Previous Years (for reference and inspiration)

### 2017

- https://www.youtube.com/watch?v=nVMeu65qnc4
- https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2017/Dev-debug-tips
- Impressions:
  - Nice coverage of Overview, Code Editor
  - Dated of course
  - Demos don't do enough to show how bug was detected - jump straight to error
  - Suggest using ChatGPT today. Also VS Code Chat, and "Explain this error"
  - Heather is pretty disorganized and not conscientious. Tabs should be opened
    ahead of time and everything setup
  - Show off local overrides or editing local folder or web browser inside of
    ide
  - A lot of DevTools tips to show
    - Snippets
    - Breakpoints
    - Console
    - Network Traffic
    - Lighthouse - Accessibility! axe?
  - Zoom in to increase font size, console size, window size
  - Remote debugging - ios and android
  - CanIUse.com
  - Link to other sessions worth seeing
  - Include more things that weren't shown last years
  - Try to join several features together into a single flow? i.e create a story
    that feels natural rather than jump from feature to feature. Tthough jumping
    from thing to thin, and telling but not showing is quicker. A compromise -
    post links and research futher topics?

### 2018

- https://www.youtube.com/watch?v=LyUVh4MVYQw
  - First few minutes - copy that structure (or 2019, or 2017)
  - LiveServer extension for VS Code
  - jsapi-resources repository
  - ESLint flat config, Calcite rules
  - Prettier!!!
  - how do we switch between displays when presenting? one person has slides and
    another demos? or all from single laptop?
  - debugger; blackbox a script. stop on (un)caugh exceptions
  - format my devtools README
  - DevTools mobile emulation. Throttling. Sensors
- https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2018/Dev-debug-tips
- https://github.com/kellyhutchins/DS2018-TipsAndTricks

### 2019

- https://www.youtube.com/watch?v=o30MBicJmNo
  - Instead of JSON viewer extension, could copy paste into devtools
  - Hold refresh button - empty cash and hard reload (useful tip)
  - Network tab
  - Suggest learning devtools well - will be very helful in the long term
  - DevTools - color picker (change color, color contrast). toggle class names,
    edit styles
  - Consider leaving footnotes with more links on each slider for people to go
    over afterward (or in sepate file, but they may be too lazy to open that)
  - Check release notes. Update regularly. dependabot?
  - Web-component specific debugging (i.e shadow dom)
    - The Properties tab in devtools
  - We need to improve the error message for geolocation to help devs with
    http/https errors - no point in pointing this out 4 years in a row without
    improving DX
- https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2019/Dev-debug-tips

### 2020

- https://github.com/hgonzago/tips-tricks-webinar
  - Look over my chrome extensions, vs code extensions, vs code settings, and
    other useful things I use often
  - https://github.com/odoe/jsapi-cli-template-app - something like this as a
    base
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
  - Embeed lots of small videos in slides so that don't have to do as many
    things live?
- https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2020/Dev-debug-tips

### 2020 (2)

- https://www.youtube.com/watch?v=12jo1RafMIY&t=3s

### 2021

- Done by Heather and Kelly
- https://www.youtube.com/watch?v=5_NQ_dSKp8w
  - odoe.net
  - esri community - get help, send help, feedback
  - JS API Docs event visualizer (Event explorer)
  - Snippets/Live Expressions
- https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2021/Debugging-tips-tricks

### 2022

- https://github.com/hgonzago/DevSummit-presentations/tree/gh-pages/Dev-Summit-2022/debugging
- Not recorded? And slides not completed?

### 2023

- Done by Jose and Emily last year in Demo Theatre - not recorded
- https://github.com/banuelosj/DevSummit-presentation/tree/main/2023/debugging-tips-and-tricks
  - Have slides url at the bottom of each slide?

## TODOs

- https://github.com/Esri/reveal.js

---

Presenters: [Noah Sager](https://github.com/NoashX) &
[Max Patiiuk](https://github.com/maxxxxxdlp)

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
