<script lang="ts" setup>
import type { SignupDto } from '~/stores/authDto'
import { useAuthStore } from '~/stores/authStore'

definePageMeta({
  layout: 'empty',
})

const authStore = useAuthStore()
const { signup } = authStore

const body: SignupDto = {
  email: 'test11@gmail.com',
  password: '123',
}

signup(body)
</script>

<template>
  <div class="flex-center h-full">
    <h1>Signup</h1>
  </div>
</template>
