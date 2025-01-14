<template>
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025/img/2025/dev/1.png?raw=true"
    v-if="$nav.currentPage === 1"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025/img/2025/dev/4.png?raw=true"
    v-else-if="$nav.currentSlideRoute.meta.slide.frontmatter.is === 'intro'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025/img/2025/dev/6.png?raw=true"
    v-else-if="$nav.currentSlideRoute.meta.slide.frontmatter.is === 'feedback'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025/img/2025/dev/7.png?raw=true"
    v-else-if="$nav.currentSlideRoute.meta.slide.frontmatter.is === 'social'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025/img/2025/dev/8.png?raw=true"
    v-else-if="$nav.currentSlideRoute.meta.slide.frontmatter.is === 'esri'"
  />
  <img
    alt=""
    src="https://github.com/Esri/reveal.js/blob/dev-summit-2025/img/2025/dev/3.png?raw=true"
    v-else
  />
</template>

<style>
@import './global.css';
</style>
