<template>
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2026/images/2026/dev/02.jpg?raw=true"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2026/images/2026/dev/01.jpg?raw=true"
    v-show="$nav.currentPage === 1"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2026/images/2026/dev/03.jpg?raw=true"
    v-show="$frontmatter.layout === 'intro'"
  />
  <img
    alt='Please share your feedback in the app: 1. Select "My Event" in the event app main menu. 2. Select "My Surveys". 3. Select the desired survey. 4. Complete the survey'
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2026/images/2026/dev/05.jpg?raw=true"
    v-show="$frontmatter.is === 'feedback'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2026/images/2026/dev/06.jpg?raw=true"
    v-show="$frontmatter.is === 'social'"
  />
  <img
    alt="Esri logo"
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2026/images/2026/dev/07.jpg?raw=true"
    v-show="$frontmatter.is === 'esri'"
  />
</template>

<style>
@import './styles.css';
</style>
