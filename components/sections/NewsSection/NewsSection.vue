<template>
  <section class="news">
    <article class="news__container">
      <header class="news__header">
        <h2 class="news__title">TOUTE L'ACTUALITÉ</h2>
        <h3 class="news__subtitle">du moment</h3>
      </header>
      <main class="news__content">
        <p class="news__description">
          Ellorem aut fugia que pelit harciis explibus, quis quost am nihicil
          iciasint. Ni tem ressimentio cusapernam qui te nes venihit aut quia a
          nonseque con consequibero tem.
        </p>
        <section class="news__carousel-wrapper">
          <Carousel :items="newsItems" />
        </section>
      </main>
      <footer class="news__action">
        <BaseButton label="En savoir +" />
      </footer>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import Carousel from "@/components/sections/NewsSection/Carousel.vue";
import type { NewsItem } from '@/types/news'
import landscapeImage from '@/assets/images/Landscape.png';

const newsItems = ref<NewsItem[]>([
  {
    title: "Ce sont les répétitions dans ma vie, qui en me ",
    image: landscapeImage,
  },
  {
    title: "Ce sont les répétitions dans ma vie, qui en me ",
    image: landscapeImage,
  },
  {
    title: "Ce sont les répétitions dans ma vie, qui en me ",
    image: landscapeImage,
  },
  {
    title: "Ce sont les répétitions dans ma vie, qui en me ",
    image: landscapeImage,
  },
]);
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.news {
  padding: 4rem 2rem;
  background-color: var(--color-background);
}

.news__container {
  margin: 0 auto;
}

.news__header {
  text-align: center;
  margin-bottom: 2rem;
}

.news__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  color: var(--color-primary);
}

.news__subtitle {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h2);
  color: var(--color-primary);
  margin-bottom: 0;
}

.news__content {
  margin-bottom: 3rem;
}

.news__description {
  font-family: var(--font-family-body);
  font-size: var(--font-size-p);
  color: var(--color-text);
  text-align: center;
  max-width: 42rem;
  margin: 0 auto 3rem;
}

.news__carousel-wrapper {
  max-width: 1200px;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
}

.news__action {
  text-align: center;
  margin-top: 2rem;
}

@media (width >= 1024px) {
  .news__container {
    padding-left: 10%;
    padding-right: 10%;
  }
  
  .news__subtitle {
    margin-bottom: 1rem;
  }
}

@media (width <= 768px) {
  .news__subtitle {
    font-family: var(--font-family-base);
    margin-bottom: 0;
  }
  
  .news__description {
    margin: 4rem auto 2rem;
  }
}
</style>
