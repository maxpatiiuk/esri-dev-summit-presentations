<script setup lang="ts">
type Props = {
  url: string;
  extendedIframe?: boolean;
  scale?: number;
};

defineProps<Props>();
</script>

<template>
  <div class="slidev-layout iframe-right h-full w-full grid grid-cols-2 gap-10">
    <div>
      <slot />
    </div>

    <div class="h-full mt-8">
      <IframeScreen
        :url="url"
        :scale="scale"
        class="h-full"
      />
    </div>
  </div>
</template>
