<template>
  <article class="card">
    <blockquote class="card__quote">“</blockquote>
    <main class="card__content-wrapper">
      <p class="card__text">{{ testimonial.content }}</p>
      <p class="card__text">{{ testimonial.content2 }}</p>
    </main>
    <footer class="card__footer">
      <p class="card__author">{{ testimonial.author }}</p>
      <p class="card__position">{{ testimonial.title }}</p>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/types/testimonial'

defineProps<{
  testimonial: Testimonial;
}>();
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.card {
  padding: 2.5rem;
  padding-right: 7rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  width: 100%;
  max-width: 32rem;
  flex-shrink: 0;
}

.card__quote {
  font-family: 'Amethysta', sans-serif;
  font-size: 12.5rem;
  line-height: 1;
  margin-bottom: -5rem;
  opacity: 0.15;
}

.card__content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card__text {
  margin-bottom: 1rem;
  font-style: italic;
  font-size: calc(var(--font-size-p) * 0.8);
}

.card__footer {
  margin-top: 2rem;
}

.card__author {
  font-size: calc(var(--font-size-p) * 1.2);
  font-family: var(--font-family-heading);
  font-weight: 700;
}

.card__position {
  font-size: calc(var(--font-size-p) * 0.7);
  font-family: var(--font-family-body);
}

@media (width <= 768px) {
  .card {
    width: 100%;      
    max-width: none;  
    padding-right: 2rem;
  }
}
</style>
