<template>
  <section class="carousel">
    <button
      aria-label="Précédent"
      class="carousel__nav-btn carousel__nav-btn--prev carousel__nav-btn--desktop"
      @click="prevSlide"
    >
      <img
        src="@/assets/icons/ArrowLeft.svg"
        class="carousel__arrow"
      >
    </button>
    <article class="carousel__container">
      <section
        class="carousel__track"
        :style="trackTransformStyle"
        >
        <article
          v-for="(item, index) in items"
          :key="index"
          class="carousel__slide"
        >
          <figure class="carousel__card">
            <figcaption class="carousel__content">
              <p class="carousel__title">{{ item.title }}</p>
            </figcaption>
            <div class="carousel__image-wrapper">
              <img
                :src="item.image"
                class="carousel__image"
                loading="lazy"
              >
            </div>
          </figure>
        </article>
      </section>
    </article>
    <button
      aria-label="Suivant"
      class="carousel__nav-btn carousel__nav-btn--next carousel__nav-btn--desktop"
      @click="nextSlide"
    >
      <img
        src="@/assets/icons/ArrowRight.svg"
        class="carousel__arrow"
      >
    </button>
    <nav class="carousel__mobile-controls">
      <div class="carousel__mobile-nav">
        <button
          aria-label="Précédent"
          class="carousel__nav-btn carousel__nav-btn--prev"
          @click="prevSlide"
        >
          <img
            src="@/assets/icons/ArrowLeft.svg"
            class="carousel__arrow"
          >
        </button>
        <button
          aria-label="Suivant"
          class="carousel__nav-btn carousel__nav-btn--next"
          @click="nextSlide"
        >
          <img
            src="@/assets/icons/ArrowRight.svg"
            class="carousel__arrow"
          >
        </button>
      </div>
      <div class="carousel__separator-wrapper">
        <BaseSeparator
          firstwidth="20%"
          secondwidth="90%"
          firstthickness="0.1rem"
          top-width="0rem"
        />
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BaseSeparator from "@/components/base/BaseSeparator.vue";
import type { NewsItem } from '@/types/news'

const trackTransformStyle = computed(() => {
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`
  };
});

const props = defineProps<{
  items: NewsItem[];
}>();

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
};
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.carousel {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
}

.carousel__container {
  position: relative;
  overflow: hidden;
  flex: 1;
}

.carousel__track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel__slide {
  flex: 0 0 100%;
  width: 100%;
}

.carousel__card {
  display: flex;
  flex-direction: column-reverse;
  background-color: var(--color-primary);
  overflow: hidden;
}

.carousel__content {
  padding: 2rem;
  color: var(--color-white);
  justify-content: end;
  display: flex;
  flex-direction: column;
}

.carousel__title {
  font-family: var(--font-family-body);
  font-size: var(--font-size-p);
  margin-bottom: 1rem;
}

.carousel__image-wrapper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.carousel__nav-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s;
}

.carousel__nav-btn:hover {
  transform: scale(1.1);
}

.carousel__arrow {
  width: 2.5rem;
  height: 2.5rem;
}

.carousel__nav-btn--desktop {
  display: none;
}

.carousel__mobile-controls {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
}

.carousel__mobile-nav {
  display: flex;
  gap: 1rem;
  margin-right: 1.5rem;
}

.carousel__separator-wrapper {
  flex: 1;
  width: 100%;
}

@media (width >= 769px) {
  .carousel__card {
    flex-direction: row;
  }

  .carousel__content {
    width: 30%;
  }

  .carousel__image-wrapper {
    width: 70%;
    height: 400px;
  }

  .carousel__nav-btn--desktop {
    display: block;
  }

  .carousel__mobile-controls {
    display: none;
  }
}

@media (width <= 768px) {
  .carousel {
    flex-direction: column;
    gap: 0;
    padding: 0 1.5rem;
  }
  
  .carousel__container {
    width: 100%;
    margin: 0;
  }

  .carousel__image-wrapper {
    height: 300px;
  }
  
  .carousel__mobile-controls {
    margin: 1rem 0;
    padding: 0 1rem;
  }
}

@media (width <= 425px) {
  .carousel {
    padding: 0 1rem;
  }

  .carousel__image-wrapper {
    height: 250px;
  }

  .carousel__content {
    padding: 1.5rem;
  }
}

@media (width <= 320px) {
  .carousel {
    padding: 0 0.75rem;
  }

  .carousel__image-wrapper {
    height: 200px;
  }

  .carousel__content {
    padding: 1rem;
  }
}
</style>
