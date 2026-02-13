<script setup lang="ts">
import { computed, ref } from 'vue';

type Props = {
  url: string;
  title?: string;
  scale?: number;
  aspect?: 'screen' | 'fill';
};

const props = defineProps<Props>();

const iframeRef = ref<HTMLIFrameElement | null>(null);
const frameRef = ref<HTMLElement | null>(null);

const normalizedUrl = computed(() => props.url.trim());
const aspect = computed(() => props.aspect ?? 'screen');
const contentScale = computed(() => {
  const raw = props.scale ?? 0.85;
  return Math.min(1, Math.max(0.5, raw));
});

const iframeStyle = computed(() => {
  const scale = contentScale.value;
  const size = `${100 / scale}%`;
  return {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: size,
    height: size,
  } as const;
});

const frameHostStyle = computed(() => {
  if (aspect.value === 'fill') {
    return {
      width: '100%',
      height: '100%',
    } as const;
  }

  return {
    aspectRatio: '16 / 9',
    height: '100%',
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  } as const;
});

function requestFullscreen(el: unknown): Promise<unknown> | null {
  const anyEl = el as any;
  const fn =
    anyEl?.requestFullscreen ??
    anyEl?.webkitRequestFullscreen ??
    anyEl?.msRequestFullscreen;

  if (!fn) return null;
  return fn.call(anyEl);
}

async function onFullscreen() {
  try {
    const p = requestFullscreen(iframeRef.value) ?? requestFullscreen(frameRef.value);
    if (!p) throw new Error('Fullscreen not available');
    await p;
  } catch {
    window.open(normalizedUrl.value, '_blank', 'noopener,noreferrer');
  }
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex-1 min-h-0 flex items-center justify-center">
      <div :style="frameHostStyle" class="max-w-full max-h-full">
        <div
          ref="frameRef"
          class="w-full h-full rounded-lg overflow-hidden border border-white/10 bg-black/20"
        >
          <iframe
            ref="iframeRef"
            class="w-full h-full"
            :style="iframeStyle"
            :src="normalizedUrl"
            :title="title ?? 'Embedded content'"
            allow="fullscreen; geolocation; clipboard-read; clipboard-write"
            allowfullscreen
          />
        </div>
      </div>
    </div>

    <div class="mt-2 flex items-center justify-center gap-1.5">
      <button
        class="text-xs px-2 py-0.5 rounded border border-white/20 hover:border-white/40"
        type="button"
        @click="onFullscreen"
      >
        Fullscreen
      </button>

      <a
        class="text-xs px-2 py-0.5 rounded border border-white/20 hover:border-white/40"
        :href="normalizedUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open link
      </a>
    </div>
  </div>
</template>
