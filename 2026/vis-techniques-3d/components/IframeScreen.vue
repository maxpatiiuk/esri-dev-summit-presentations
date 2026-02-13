<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

type Props = {
  url: string;
  title?: string;
  scale?: number;
  aspect?: 'screen' | 'fill';
};

const props = defineProps<Props>();

const iframeRef = ref<HTMLIFrameElement | null>(null);
const screenFrameRef = ref<{ el: HTMLElement | null } | null>(null);

const normalizedUrl = computed(() => props.url?.trim());
const aspect = computed(() => props.aspect ?? 'screen');
const contentScale = computed(() => {
  const raw = props.scale ?? 0.85;
  // Keep in a sane range.
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

  // Fit a 16:9 "screen" inside the available box.
  return {
    aspectRatio: '16 / 9',
    height: '100%',
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  } as const;
});

function syncIframeSrc() {
  const iframe = iframeRef.value;
  const url = normalizedUrl.value;
  if (!iframe || !url) return;

  // Avoid re-assigning the same src (can cause reloads).
  if (iframe.getAttribute('src') !== url) iframe.setAttribute('src', url);
}

onMounted(syncIframeSrc);
watch(normalizedUrl, syncIframeSrc);

function requestFullscreen(el: any) {
  return (
    el?.requestFullscreen?.() ??
    el?.webkitRequestFullscreen?.() ??
    el?.msRequestFullscreen?.()
  );
}

async function onFullscreen() {
  const iframe = iframeRef.value;
  const screen = screenFrameRef.value?.el ?? null;

  try {
    // Prefer full-screening the iframe itself, fall back to the container.
    await requestFullscreen(iframe) ?? (await requestFullscreen(screen));
  } catch {
    // If fullscreen is blocked (e.g., browser policy), open in a new tab.
    if (normalizedUrl.value)
      window.open(normalizedUrl.value, '_blank', 'noopener,noreferrer');
  }
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex-1 min-h-0 flex items-center justify-center">
      <div :style="frameHostStyle" class="max-w-full max-h-full">
        <ScreenFrame ref="screenFrameRef" class="w-full h-full">
          <iframe
            v-if="normalizedUrl"
            ref="iframeRef"
            class="w-full h-full"
            :style="iframeStyle"
            :title="title ?? 'Embedded content'"
            allow="fullscreen; geolocation; clipboard-read; clipboard-write"
            allowfullscreen
          />
          <div v-else class="w-full h-full grid place-items-center opacity-70">
            Missing iframe URL
          </div>
        </ScreenFrame>
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
        v-if="normalizedUrl"
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
