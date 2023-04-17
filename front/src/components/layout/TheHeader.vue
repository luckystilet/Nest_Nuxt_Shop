<script lang="ts" setup>
import { computed } from 'vue'
const route = useRoute()
const userId = computed(() => {
  return route.params.id ?? 'dummy-id'
})
</script>
<template>
  <VAppBar
    absolute
    color="#111111"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-3"
    elevation="2"
  >
    <VBtn
      class="ml-16"
      icon="mdi-nuxt"
      size="x-large"
      href="https://nuxt.com/"
      color="#00DC82"
      target="_blank"
      title="Open Nuxt-3 Docs in the New Tab"
    />
    <VBtn
      icon="mdi-language-typescript"
      size="x-large"
      href="https://www.typescriptlang.org/"
      color="#3178C6"
      target="_blank"
      title="Open TypeScript Docs in the New Tab"
    />
    <VBtn
      icon="mdi-vuetify"
      size="x-large"
      color="#1867C0"
      href="https://vuetifyjs.com/en/getting-started/installation/"
      target="_blank"
      title="Open Vuetify-3 Docs in the New Tab"
    />
    <VBtn
      icon="mdi-tailwind"
      size="x-large"
      href="https://tailwindcss.com/docs/installation"
      color="#38BDF8"
      target="_blank"
      title="Open Tailwind Docs in the New Tab"
      class="-mr-12"
    />
  </VAppBar>
</template>
<style lang="scss">
  .header_link {
    color: var(--c-accent);
    font-weight: bold;
    font-size: 22px;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
    -webkit-user-drag: none;
    padding: 4px 12px;
    transition: all .2s;
    &:not(.router-link-exact-active):hover {
      color: #ff99cc;
    }
  }
</style>
