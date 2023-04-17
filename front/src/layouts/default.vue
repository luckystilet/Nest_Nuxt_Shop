<script lang="ts" setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
</script>
<template>
  <LayoutContainer>
    <TheHeader />
    <VContainer id="app_container">
      <VMain>
        <slot />
      </VMain>
    </VContainer>
  </LayoutContainer>
</template>
