<script setup lang="ts">
type Props = {
  url: string;
  extendedIframe?: boolean;
  codeBase?: string;
  scale?: number;
  showTitle?: boolean;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="slidev-layout iframe h-full w-full flex flex-col">
    <div :class="{ 'iframe-hide-title': !props.showTitle }">
      <slot />
    </div>

    <div class="flex-1 mt-2">
      <IframeScreen
        :url="url"
        :scale="scale"
        aspect="screen"
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
