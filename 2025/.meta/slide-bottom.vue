<template>
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025.1/img/2025/dev/3.png?raw=true"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025.1/img/2025/dev/1.png?raw=true"
    v-show="$nav.currentPage === 1"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025.1/img/2025/dev/4.png?raw=true"
    v-show="$frontmatter.layout === 'intro'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025.1/img/2025/dev/6.png?raw=true"
    v-show="$frontmatter.is === 'feedback'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025.1/img/2025/dev/7.png?raw=true"
    v-show="$frontmatter.is === 'social'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025.1/img/2025/dev/8.png?raw=true"
    v-show="$frontmatter.is === 'esri'"
  />
</template>

<style>
@import './styles.css';
</style>
