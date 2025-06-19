<template>
  <div class="info-block">
    <h4 class="info-block__title">{{ title }}</h4>
    <p class="info-block__text">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
const _props = withDefaults(defineProps<{
  title?: string
  text?: string
}>(), {
  title: '',
  text: ''
})
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.info-block {
  flex: 0 1 clamp(150px, 40%, 300px);
}

.info-block__title {
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: lowercase;
}

.info-block__text {
  color: var(--color-primary);
  font-size: 0.8rem;
}
</style> 