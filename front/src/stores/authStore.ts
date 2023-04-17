import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

import type { SignupDto } from '~/stores/authDto'

export const useAuthStore = defineStore('authStore', () => {
  /** State */
  const token = useStorage('token', '')
  /** Actions_mutations */
  const setToken = (newToken: string) => token.value = newToken
  /** Actions_async */
  const signup = async(credentials: SignupDto) => {
    try {
      const { access_token } = await $fetch<{ access_token: string }>('http://localhost:3333/auth/signup', {
        method: 'POST',
        body: credentials,
      })
      token.value = access_token
      console.log('[Signup]: Success === ', access_token)
    }
    catch (error) {
      console.log('failed signup')
    }
  }
  
  /** Getters */
  const getToken = computed(() => {
    return token.value
  })
  
  return {
    token,
    //
    setToken,
    //
    signup,
    //
    getToken,
  }
})
