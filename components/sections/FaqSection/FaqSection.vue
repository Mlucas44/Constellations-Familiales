<template>
  <section class="faq">
    <article class="faq__container">
      <header class="faq__header">
        <h2 class="faq__title">FOIRE AUX QUESTIONS</h2>
        <BaseSeparator 
          firstwidth="10%" 
          secondwidth="30%" 
          class="faq__separator" 
        />
      </header>

      <main class="faq__list">
        <FaqItem
          v-for="(item, index) in faqItems"
          :key="index"
          :title="item.title"
          :content="item.content"
        />
      </main>
      
      <footer class="faq__button-wrapper">
        <BaseButton label="Lire la suite" />
      </footer>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FaqItem from "@/components/sections/FaqSection/FaqItem.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseSeparator from "@/components/base/BaseSeparator.vue";
import type { FaqItemData } from '@/types/faq'

const faqItems = ref<FaqItemData[]>([
  {
    title: "Ullorum ex entotas il id eum quoste maxim qui nimilitam re parumquiam faccum aligend aepedignatia eumquatur?",
    content: "Nam rerit ariosam, nestrum, expellam quo minctur, te sum hillita epudica tendaep uditatat."
  },
  {
    title: "Ullorum ex entotas il id eum quoste maxim qui nimilitam re parumquiam faccum aligend aepedignatia eumquatur?",
    content: "Nam rerit ariosam, nestrum, expellam quo minctur, te sum hillita epudica tendaep uditatat."
  },
  {
    title: "Ullorum ex entotas il id eum quoste maxim qui nimilitam re parumquiam faccum aligend aepedignatia eumquatur?",
    content: "Nam rerit ariosam, nestrum, expellam quo minctur, te sum hillita epudica tendaep uditatat."
  },
  {
    title: "Ullorum ex entotas il id eum quoste maxim qui nimilitam re parumquiam faccum aligend aepedignatia eumquatur?",
    content: "Nam rerit ariosam, nestrum, expellam quo minctur, te sum hillita epudica tendaep uditatat."
  },
]);
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.faq {
  padding: 4rem 2rem;
}

.faq__container {
  padding: var(--nav-menu-padding);
}

.faq__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.faq__separator {
  margin-bottom: 2rem;
}

.faq__list {
  margin-bottom: 2rem;
}

.faq__button-wrapper {
  margin-top: 1.5rem;
}

@media (width >= 768px) {
  .faq__container {
    padding-left: 10%;
  }
}

@media (width >= 1024px) {
  .faq__container {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
