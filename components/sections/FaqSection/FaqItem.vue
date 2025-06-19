<template>
  <article class="faq-item">
    <h4 class="faq-item__question">{{ title }}</h4>
    <p class="faq-item__answer">{{ content }}</p>
  </article>
</template>

<script setup lang="ts">
const _props = withDefaults(defineProps<{
  title?: string
  content?: string
}>(), {
  title: '',
  content: ''
})
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.faq-item {
  margin-bottom: 1.5rem;
}

.faq-item__question {
  font-size: var(--font-size-p);
  font-weight: 700;
}

.faq-item__answer {
  font-size: var(--font-size-p);
}
</style>
