<template>
  <section class="testimonial">
    <article class="testimonial__container">
      <header class="testimonial__header">
        <h2 class="testimonial__title">ILS TÉMOIGNENT</h2>
        <h3 class="testimonial__subtitle">de leur expérience de</h3>
        <h3 class="testimonial__subtitle">
          la constellation familiale
        </h3>
        <BaseSeparator 
          firstwidth="10%" 
          secondwidth="30%" 
          top-width="0.15rem" 
          class="testimonial__separator" 
        />
      </header>
      <main class="testimonial__content">
        <p class="testimonial__description">
          Ullorum ex entotas il id eum quoste maxim qui nimilitam re 
          parumquiam faccum aligend aepedignatia eumquatur?
          Nam rerit ariosam, nestrum, expellam quo minctur, te sum hillita
          epudica tendaep uditatat.
        </p>
        <section class="testimonial__carousel">
          <Carousel :items="testimonials">
            <Card
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :testimonial="testimonial"
            />
          </Carousel>
        </section>
      </main>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Carousel from "@/components/sections/TestimonialSection/Carousel.vue";
import Card from "@/components/sections/TestimonialSection/Card.vue";
import BaseSeparator from "@/components/base/BaseSeparator.vue";
import type { Testimonial } from '@/types/testimonial'

const testimonials = ref<Testimonial[]>([
  {
    content: "Is minctent, cuptaquam facese sunt ea dit eatur aut ulpa dolorer ionsequi tectas aspieniti ut eaquaspit quis dolorem ut aut exped endae ea ne nobitatet arum sit faccusanto videl il miliquis ma doluptus remporr ovitas consent.",
    content2: "Aximin rerum eatiate poressenda sitatem porpori cusam untiand itatur molo beribus reici volor mo dolest et, cus am aut parchit iasitatiis enderiatur ratio modia sed quunte molupta quidebitatis voles rerit que occum estrumqui volo explit, nesti commolorem a delique praecep tatque landanis dolupta volupta ectaturecab issum hit et quid que estio vel intum.",
    author: "Rodolphe",
    title: "Fabricant de menuiseries"
  },
  {
    content: "Is minctent, cuptaquam facese sunt ea dit eatur aut ulpa dolorer ionsequi tectas aspieniti ut eaquaspit quis dolorem ut aut exped endae ea ne nobitatet arum sit faccusanto videl il miliquis ma doluptus remporr ovitas consent.",
    content2: "Aximin rerum eatiate poressenda sitatem porpori cusam untiand itatur molo beribus reici volor mo dolest et, cus am aut parchit iasitatiis enderiatur ratio modia sed quunte molupta quidebitatis voles rerit que occum estrumqui volo explit, nesti commolorem a delique praecep tatque landanis dolupta volupta ectaturecab issum hit et quid que estio vel intum.",
    author: "Rodolphe",
    title: "Fabricant de menuiseries"
  },
  {
    content: "Is minctent, cuptaquam facese sunt ea dit eatur aut ulpa dolorer ionsequi tectas aspieniti ut eaquaspit quis dolorem ut aut exped endae ea ne nobitatet arum sit faccusanto videl il miliquis ma doluptus remporr ovitas consent.",
    content2: "Aximin rerum eatiate poressenda sitatem porpori cusam untiand itatur molo beribus reici volor mo dolest et, cus am aut parchit iasitatiis enderiatur ratio modia sed quunte molupta quidebitatis voles rerit que occum estrumqui volo explit, nesti commolorem a delique praecep tatque landanis dolupta volupta ectaturecab issum hit et quid que estio vel intum.",
    author: "Rodolphe",
    title: "Fabricant de menuiseries"
  },
  {
    content: "Is minctent, cuptaquam facese sunt ea dit eatur aut ulpa dolorer ionsequi tectas aspieniti ut eaquaspit quis dolorem ut aut exped endae ea ne nobitatet arum sit faccusanto videl il miliquis ma doluptus remporr ovitas consent.",
    content2: "Aximin rerum eatiate poressenda sitatem porpori cusam untiand itatur molo beribus reici volor mo dolest et, cus am aut parchit iasitatiis enderiatur ratio modia sed quunte molupta quidebitatis voles rerit que occum estrumqui volo explit, nesti commolorem a delique praecep tatque landanis dolupta volupta ectaturecab issum hit et quid que estio vel intum.",
    author: "Rodolphe",
    title: "Fabricant de menuiseries"
  },
  {
    content: "Is minctent, cuptaquam facese sunt ea dit eatur aut ulpa dolorer ionsequi tectas aspieniti ut eaquaspit quis dolorem ut aut exped endae ea ne nobitatet arum sit faccusanto videl il miliquis ma doluptus remporr ovitas consent.",
    content2: "Aximin rerum eatiate poressenda sitatem porpori cusam untiand itatur molo beribus reici volor mo dolest et, cus am aut parchit iasitatiis enderiatur ratio modia sed quunte molupta quidebitatis voles rerit que occum estrumqui volo explit, nesti commolorem a delique praecep tatque landanis dolupta volupta ectaturecab issum hit et quid que estio vel intum.",
    author: "Rodolphe",
    title: "Fabricant de menuiseries"
  },
  {
    content: "Is minctent, cuptaquam facese sunt ea dit eatur aut ulpa dolorer ionsequi tectas aspieniti ut eaquaspit quis dolorem ut aut exped endae ea ne nobitatet arum sit faccusanto videl il miliquis ma doluptus remporr ovitas consent.",
    content2: "Aximin rerum eatiate poressenda sitatem porpori cusam untiand itatur molo beribus reici volor mo dolest et, cus am aut parchit iasitatiis enderiatur ratio modia sed quunte molupta quidebitatis voles rerit que occum estrumqui volo explit, nesti commolorem a delique praecep tatque landanis dolupta volupta ectaturecab issum hit et quid que estio vel intum.",
    author: "Rodolphe",
    title: "Fabricant de menuiseries"
  }
]);
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.testimonial {
  padding: 2rem 0 2rem 2rem;
  background-image: url('@/assets/images/Fog.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.testimonial__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.testimonial__subtitle {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h2);
  color: var(--color-primary);
}

.testimonial__separator {
  margin-top: 2.5rem;
}

.testimonial__description {
  font-family: var(--font-family-body);
  font-size: var(--font-size-p);
  color: var(--color-primary);
  margin-top: 3rem;
  margin-bottom: 3rem;
  max-width: 42rem;
}

@media (width >= 768px) {
  .testimonial__container {
    padding-left: 10%;
  }
}

@media (width <= 768px) {
  .testimonial {
    padding: 0;
  }

  .testimonial__title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0;
  }

  .testimonial__subtitle {
    text-align: center;
    font-family: var(--font-family-base);
  }

  .testimonial__separator {
    display: none;
  }

  .testimonial__description {
    text-align: center;
    margin: 2rem;
  }
}
</style>
