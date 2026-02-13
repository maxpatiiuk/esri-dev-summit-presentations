<script setup lang="ts">
type Props = {
  image: string;
  fit?: 'contain' | 'cover';
};

const props = withDefaults(defineProps<Props>(), {
  fit: 'cover',
});
</script>

<template>
  <div class="slidev-layout image-right h-full w-full grid grid-cols-2 gap-10">
    <div>
      <slot />
    </div>

    <div class="h-full mt-8">
      <ScreenFrame class="h-full">
        <img
          :src="image"
          :class="[
            'w-full h-full',
            props.fit === 'contain' ? 'object-contain' : 'object-cover',
          ]"
        />
      </ScreenFrame>
    </div>
  </div>
</template>
