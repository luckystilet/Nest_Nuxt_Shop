import { fileURLToPath } from 'url'

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  rootDir: './src',
  alias: {
    '@': fileURLToPath(new URL('./src/', import.meta.url)),
  },
  modules: ['@pinia/nuxt'],
  routeRules: {},
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/scss/index.scss',
    'vue-toastification/dist/index.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
