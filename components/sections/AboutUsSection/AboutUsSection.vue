<template>
  <section class="career">
    <article class="career__container">
      <main class="career__content">
        <figure class="career__image-wrapper">
          <img 
            src="@/assets/images/ForestPortrait.png" 
            class="career__image"
          >
        </figure>
        <article class="career__text-block">
          <section class="career__text-top">
            <article class="career__primary-block">
              <h2 class="career__title">MON PARCOURS</h2>
              <h3 class="career__subtitle">
                <span>et mon approche de</span>
                <span>la constellation familiale</span>
              </h3>
              <Separator
                variant="background"
                firstwidth="20%"
                secondwidth="70%"
                class="career__separator"
              />
              <div class="career__text-content">
                <p class="career__text">
                  <strong>Ce sont les répétitions dans ma vie, qui en me faisant rencontrer toujours les mêmes problèmes, m'ont incité à d'abord étudier la psycho généalogie, puis à participer aux séances de Constellations Familiales.</strong>
                </p>
                <p class="career__text">
                  C'était il y a plus de vingt ans. En étant représentant, ou en faisant une constellation pour mon compte, j'ai découvert cette manière de traiter les problèmes d'aujourd'hui en se référençant au passé des ancêtres.
                  <span class="career__text--hidden" :class="{ 'career__text--visible-inline': isExpanded }">
                    Après avoir trouvé les réponses à mon vécu personnel, j'ai senti le besoin d'aider les autres en devenant animateur en Constellations Familiales. C'est Bernard FADDA à Caen qui m'a formé de 2013 à 2018. De retour en Lorraine, je propose mon savoir-faire soit chez moi, soit à domicile pour tous les groupes constitués (N'hésitez pas à me contacter pour plus de renseignements).
                  </span>
                </p>
                <div class="career__button-wrapper" v-if="!hasBeenExpanded">
                  <BaseButton 
                    label="Voir plus"
                    @click="toggleExpand"
                    :inverted="true"
                  />
                </div>
              </div>
            </article>          
          </section>
          <aside class="career__text-bottom">
            <nav class="career__grid">
              <InfoBlock
                title="psycho-généalogie"
                text="Ullorum ex entotasi il id eum quoste maxim qui"
              />
              <InfoBlock
                title="constellations"
                text="Ullorum ex entotasi il id eum quoste maxim qui"
              />
            </nav>
          </aside>
        </article>
      </main>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Separator from "@/components/base/BaseSeparator.vue";
import InfoBlock from "@/components/sections/AboutUsSection/InfoBlock.vue";
import BaseButton from "@/components/base/BaseButton.vue";

const isExpanded = ref(false);
const hasBeenExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
  if (isExpanded.value) {
    hasBeenExpanded.value = true;
  }
};
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.career {
  box-sizing: border-box;
}

.career__container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;
}

.career__content {
  display: flex;
}

.career__image-wrapper {
  flex: 0.8;
  z-index: 1;
  position: relative;
}

.career__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.career__text-block {
  flex: 1.2;
  display: flex;
  flex-direction: column; 
}

.career__text-top {
  margin-top: 5%;
  flex: 6;               
  box-sizing: border-box;
  min-height: 0;
  position: relative;
  z-index: 2;
  margin-left: -30%;
  width: 130%;
}

.career__primary-block {
  background-color: var(--color-mycareer);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: clamp(0.5rem, calc((100vw - 1024px) * 0.05), 2.5rem) clamp(0.7rem, calc((100vw - 1024px) * 0.0714286), 4rem);
}

.career__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  color: var(--color-white);
  margin: 0 0 8px;
}

.career__subtitle {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h2);
  color: var(--color-white);
  margin: 0 0 16px;
}

.career__subtitle span {
  display: block;
}

.career__separator {
  margin-block: clamp(0.5rem, calc((100vw - 1024px) * 0.02), 1.5rem);
}

.career__text {
  margin: clamp(4px, 1.5vw, 10px) 0;
  font-family: var(--font-family-body);
  font-size: var(--font-size-p);
  color: var(--color-white);
  hyphens: auto;
}

.career__text-bottom {
  flex: 1;              
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.career__grid {
  display: flex;
  flex-direction: row;              
  justify-content: center;         
  align-items: center;              
  gap: clamp(1rem, 2vw, 2rem);      
}

.career__text-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.career__button-wrapper {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
}

.career__text--hidden {
  display: none;
}

.career__text--visible-inline {
  display: inline;
}

@media (width <= 425px) {
  .career__grid {
    flex-direction: column;
  }
}

@media (width <= 1024px) {
  
  .career__content {
    flex-direction: column;
  }
  
  .career__container {
    padding: 0;           
  }
  
  .career__image {
    height: 50vh;
  }
  
  .career__text-block {
    height: auto;  
  }
  
  .career__primary-block {
    height: auto;
    padding: 5rem 2rem;
  }
  
  .career__subtitle {
    margin-bottom: 3rem;
    font-family: var(--font-family-base);
  }
  
  .career__text-top {
    margin-left: 0;     
    width: 100%;          
    margin-top: 0;
    flex: none;
    height: auto;    
    text-align: center; 
    align-items: center;  
  }
  
  .career__text-bottom {
    flex: none;
    height: auto;
    padding-block: 2rem;
  }
  
  .career__separator {
    display: none;
  }
}
</style>
