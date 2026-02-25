<script setup lang="ts">
type Props = {
  url?: string;
  image?: string;
  fit?: 'contain' | 'cover';
  extendedIframe?: boolean;
  scale?: number;
};

withDefaults(defineProps<Props>(), {
  fit: 'cover',
  extendedIframe: false,
});
</script>

<template>
  <div class="slidev-layout media-right h-full w-full grid grid-cols-2 gap-10">
    <div>
      <slot />
    </div>

    <div class="h-full min-h-0 mt-8">
      <FramedIframe
        v-if="url"
        :url="url"
        :scale="scale"
        :aspect="extendedIframe ? 'fill' : 'screen'"
        class="h-full"
      />

      <div
        v-else
        class="h-full rounded-lg overflow-hidden border border-white/10 bg-black/20"
      >
        <template v-if="$slots.media">
          <div class="w-full h-full">
            <slot name="media" />
          </div>
        </template>
        <template v-else>
          <img
            v-if="image"
            :src="image"
            :class="[
              'w-full h-full',
              fit === 'contain' ? 'object-contain' : 'object-cover',
            ]"
          />
          <div v-else class="w-full h-full grid place-items-center opacity-70">
            Missing media
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
