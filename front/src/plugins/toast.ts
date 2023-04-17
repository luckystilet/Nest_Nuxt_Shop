import Toast from 'vue-toastification'

import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  const toastOptions: any = {
    maxToasts: 3,
    newestOnTop: true,
  }
  nuxtApp.vueApp.use(Toast, toastOptions)
})
