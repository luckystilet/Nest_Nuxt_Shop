<script lang="ts" setup>
import { useToast } from 'vue-toastification'

import type { SignupDto } from '~/stores/authDto'
import { useAuthStore } from '~/stores/authStore'

definePageMeta({
  layout: 'center',
})

const authStore = useAuthStore()
const { signup } = authStore

const toast = useToast()

const router = useRouter()

const form = ref({
  email: '',
  password: '',
  confirmPassword: '',
})

const isValid = computed(() => {
  return !!form.value.email && !!form.value.email
})

const onSubmit = async() => {
  if (!isValid.value) return
  const payload: SignupDto = {
    email: form.value.email,
    password: form.value.password,
  }
  const { status } = await signup(payload)
  if (status === 'success') {
    toast.success('You successfully registered')
    router.push('/')
  }
  else {
    toast.error('Something went wrong')
  }
}
</script>

<template>
  <QForm
    class="shadow-xl flex flex-col gap-2 w-96 rounded p-12"
    @submit="onSubmit"
  >
    <h1 class="h1">Signup</h1>
    
    <QInput
      v-model="form.email"
      type="email"
      label="email"
      name="email"
      autofocus
      outlined
    />
    <QInput
      v-model="form.password"
      type="password"
      label="password"
      name="password"
      outlined
    />
    <QBtn
      color="primary"
      class="mt-6"
      type="submit"
      size="lg"
    >
      Signup
    </QBtn>
  </QForm>
</template>
