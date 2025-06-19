<template>
  <section class="carousel">
    <section
      ref="carousel"
      class="carousel__track"
    >
      <slot />
    </section>
    <nav class="carousel__controls">
      <div class="carousel__nav">
        <button class="carousel__btn carousel__btn--prev" @click="scrollLeft" aria-label="Précédent">
          <img
            src="@/assets/icons/ArrowLeft.svg"
            class="carousel__arrow"
          >
        </button>
        <button class="carousel__btn carousel__btn--next" @click="scrollRight" aria-label="Suivant">
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
          class="carousel__separator"
        />
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import BaseSeparator from "@/components/base/BaseSeparator.vue";
import type { NewsItem } from '@/types/testimonial'

const carousel = ref<HTMLElement | null>(null);

const _trackTransformStyle = computed(() => {
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`
  };
});

const _props = defineProps<{
  items: NewsItem[];
}>();

const currentIndex = ref(0);

// Mise à jour du layout pour centrer la carte sur mobile
const updateCarouselLayout = () => {
  if (!carousel.value) return;
  
  const carouselWidth = carousel.value.offsetWidth;
  
  if (window.innerWidth < 768) {
    const desiredCardWidth = carouselWidth * 0.9;
    const containerPadding = (carouselWidth - desiredCardWidth) / 2;
    carousel.value.style.paddingLeft = `${containerPadding}px`;
    carousel.value.style.paddingRight = `${containerPadding}px`;
  } else {
    carousel.value.style.paddingLeft = '0';
    carousel.value.style.paddingRight = '0';
  }
};

// Fonction utilitaire pour obtenir la largeur de la première carte
const getCardWidth = (): number => {
  if (!carousel.value) return 0;
  const firstCard = carousel.value.firstElementChild as HTMLElement;
  return firstCard ? firstCard.offsetWidth : 0;
};

// Fonction utilitaire pour récupérer le gap entre les cartes
const getCardGap = (): number => {
  if (!carousel.value) return 0;
  const gap = parseFloat(getComputedStyle(carousel.value).gap);
  return isNaN(gap) ? 0 : gap;
};

const scrollLeft = () => {
  if (!carousel.value) return;
  const currentCardWidth = getCardWidth();
  const currentGap = getCardGap();
  carousel.value.scrollBy({ 
    left: -(currentCardWidth + currentGap), 
    behavior: "smooth" 
  });
};

const scrollRight = () => {
  if (!carousel.value) return;
  const currentCardWidth = getCardWidth();
  const currentGap = getCardGap();
  carousel.value.scrollBy({ 
    left: currentCardWidth + currentGap, 
    behavior: "smooth" 
  });
};

onMounted(() => {
  updateCarouselLayout();
  window.addEventListener('resize', updateCarouselLayout);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCarouselLayout);
});
</script>


<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.carousel__track {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 2rem;
  padding: 1rem 0;
}

.carousel__track::-webkit-scrollbar {
  display: none;
}

.carousel__controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
}

.carousel__nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

.carousel__separator-wrapper {
  flex-grow: 1;
  margin-left: 1.5rem;
}

.carousel__btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s;
}

.carousel__btn:hover {
  transform: scale(1.1);
}

.carousel__arrow {
  width: 2.5rem;
  height: 2.5rem;
}

.carousel__separator {
  width: 100%;
}

@media (width <= 768px) {
  .carousel__track {
    gap: 2.3rem;
    margin: 2rem;       
  }
  
  .carousel__nav {
    padding-left: 10%;
  }
}
</style>
