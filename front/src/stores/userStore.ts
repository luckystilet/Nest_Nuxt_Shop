import type { Ref } from 'vue'

import { useRouteParams } from '@vueuse/router'
import { defineStore } from 'pinia'

interface IUserStore {
  userId: Ref<string>
}

export const useUserStore = defineStore('userStore', {
  state: (): IUserStore => ({
    userId: useRouteParams('id', ''),
  }),
  actions: {},
  getters: {},
})
