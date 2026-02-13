<script setup lang="ts">
type Props = {
  url: string;
  extendedIframe?: boolean;
  codeBase?: string;
  scale?: number;
  showTitle?: boolean;
};

withDefaults(defineProps<Props>(), {
  extendedIframe: false,
  showTitle: false,
});
</script>

<template>
  <div class="slidev-layout iframe h-full w-full flex flex-col">
    <div :class="{ 'iframe-hide-title': !showTitle }">
      <slot />

      <div v-if="codeBase" class="mt-2 flex items-center justify-center">
        <a
          class="text-xs px-2 py-0.5 rounded border border-white/20 hover:border-white/40"
          :href="codeBase"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
    </div>

    <div class="flex-1 min-h-0 mt-2">
      <FramedIframe
        :url="url"
        :scale="scale"
        :aspect="extendedIframe ? 'fill' : 'screen'"
        class="h-full"
      />
    </div>
  </div>
</template>

<style scoped>
.iframe-hide-title :deep(h1),
.iframe-hide-title :deep(h2) {
  display: none;
}

:global(.slidev-layout.iframe) {
  padding: 0.75rem;
}
</style>
