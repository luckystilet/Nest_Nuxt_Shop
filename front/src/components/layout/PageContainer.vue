<script lang="ts" setup>
const props = defineProps({
  h1: { type: String },
})
</script>

<template>
  <div class="page_container container">
    <h1 v-if="$slots.h1 || h1">
      <slot name="h1">
        {{ h1 }}
      </slot>
    </h1>
    <slot />
  </div>
</template>
