<script setup lang="ts">
type Props = {
  url: string;
  extendedIframe?: boolean;
  codeBase?: string;
  scale?: number;
};

defineProps<Props>();
</script>

<template>
  <div class="slidev-layout iframe h-full w-full flex flex-col">
    <div>
      <slot />
    </div>

    <div class="flex-1 mt-6">
      <IframeScreen
        :url="url"
        :scale="scale"
        class="h-full"
      />
    </div>
  </div>
</template>
