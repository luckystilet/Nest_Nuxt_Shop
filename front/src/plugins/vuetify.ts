import type { DefaultsInstance, ThemeDefinition } from 'vuetify'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as directives from 'vuetify/directives'

import { defineNuxtPlugin } from '#app'
const myCustomLightTheme = {
  dark: false,
  colors: {
    'background': '#FFFFFF',
    'surface': '#FFFFFF',
    'secondary': '#6200EE',
    'secondary-darken-1': '#3700B3',
    'primary': '#42B883',
    'primary-darken-1': '#018786',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
    'accent': '#ffd859',
  },
}

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    'background': '#FFFFFF',
    'surface': '#FFFFFF',
    'secondary': '#6200EE',
    'secondary-darken-1': '#3700B3',
    'primary': '#42B883',
    'primary-darken-1': '#018786',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
    'accent': '#ffd859',
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      ...components,
      VDataTable,
    },
    directives,
    theme: {
      defaultTheme: 'myCustomDarkTheme',
      themes: {
        myCustomLightTheme,
        myCustomDarkTheme,
      },
    },
    defaults: {
      VBtn: {
        color: 'primary',
        variant: 'elevated',
        ripple: true,
        rounded: 'rounded-lg',
        size: 'large',
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
