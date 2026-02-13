<script setup lang="ts">
import { ref } from 'vue';

const el = ref<HTMLElement | null>(null);

defineExpose({ el });
</script>

<template>
  <div ref="el" class="rounded-lg overflow-hidden border border-white/10 bg-black/20">
    <slot />
  </div>
</template>
