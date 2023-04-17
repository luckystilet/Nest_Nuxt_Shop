<script lang="ts" setup>
import PageContainer from '@/components/layout/PageContainer.vue'

import { useAuthStore } from '@/stores/authStore'
import type { SignupDto } from '~/stores/authDto'

const authStore = useAuthStore()
const { signup } = authStore

const body: SignupDto = {
  email: 'test11@gmail.com',
  password: '123',
}

signup(body)
</script>

<template>
  <PageContainer class="items-center">
    <template #h1>
      Home page
    </template>
    <template #default>
      <div class="flex flex-col gap-4">
        <h2>This is Home page content</h2>
      </div>
    </template>
  </Pagecontainer>
</template>
