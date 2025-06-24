<template>
  <section class="contact">
    <article class="contact__container">
      <aside class="contact__left">
        <header class="contact__header">
          <h2 class="contact__title">Contact</h2>
          <BaseSeparator
            variant="background"
            firstwidth="20%"
            secondwidth="70%"
            class="contact__separator"
          />
        </header>
        <address class="contact__info">
          <p class="contact__name">Michel Nicolay</p>
          <p>Adresse lorem ipsum</p>
          <p>Téléphone</p>
          <p>Mail</p>
          <p>Réseaux sociaux</p>
        </address>
      </aside>
      <main class="contact__right">
        <form class="contact__form" @submit.prevent="handleSubmit">
          <BaseInput v-model="formData.name" placeholder="Nom" />
          <BaseInput v-model="formData.email" placeholder="Email" type="email" />
          <BaseInput v-model="formData.subject" placeholder="Objet" />
          <BaseTextarea v-model="formData.message" placeholder="Message" />
          
          <!-- reCAPTCHA -->
     
           <Recaptcha
  sitekey="6LekpmorAAAAADu1muwobn3no6DOoKS9sJDI9U2B"
  @verify="onVerify"
  theme="light"
  size="normal"
/>
<div ref="recaptchaContainer"></div>

          <div class="contact__btn-wrapper">
            <BaseButton label="Envoyer" :inverted="true" type="submit" />
          </div>
        </form>
      </main>
    </article>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const recaptchaContainer = ref<HTMLDivElement | null>(null)
const token = ref('')

// remplace par ta propre clé publique
const siteKey = '6LekpmorAAAAADu1muwobn3no6DOoKS9sJDI9U2B'

onMounted(() => {
  if (window.grecaptcha) {
    window.grecaptcha.ready(() => {
      window.grecaptcha.render(recaptchaContainer.value!, {
        sitekey: siteKey,
        callback: (responseToken: string) => {
          token.value = responseToken
        }
      })
    })
  } else {
    console.error('reCAPTCHA non chargé')
  }
})

import BaseInput from "@/components/base/BaseInput.vue";
import BaseTextarea from "@/components/base/BaseTextarea.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseSeparator from "@/components/base/BaseSeparator.vue";
import type { FormData } from '@/types/form'

const formData = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})



const onVerify = (newToken: string) => {
  token.value = newToken
}
const handleSubmit = async () => {
  if (!token.value) {
    alert('Veuillez valider le reCAPTCHA')
    return
  }

  try {
    const response = await $fetch('/api/send', {
      method: 'POST',
      body: {
        ...formData.value,
        token: token.value
      }
    })

    if (response.success) {
      alert('Message envoyé avec succès ✅')
      formData.value = { name: '', email: '', subject: '', message: '' }
      token.value = ''
    } else {
      alert('Erreur ❌')
    }
  } catch (err) {
    console.error(err)
    alert("Erreur lors de l'envoi")
  }
}

</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.contact {
  padding: var(--nav-menu-padding);
  background-color: var(--color-primary);
  color: var(--color-white);
}

.contact__container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 0 auto;
}

.contact__left {
  padding: 0 var(--nav-menu-padding);
}

.contact__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  color: var(--color-white);
}

.contact__separator {
  margin: 2rem 0;
}

.contact__info {
  font-size: var(--font-size-p);
  font-family: var(--font-family-body);
}

.contact__name {
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact__right {
  padding: 2rem var(--nav-menu-padding);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact__btn-wrapper {
  padding: 1.5rem 0;
}

@media (width >= 768px) {
  .contact__container {
    flex-direction: row;
  }

  .contact__left,
  .contact__right {
    width: 50%;
  }

  .contact__left {
    padding-left: 10%;
  }

  .contact__right {
    padding-right: calc(var(--nav-menu-padding) * 2);
  }
}

@media (width >= 1024px) {
  .contact__left {
    padding-left: 10%;
  }

  .contact__right {
    padding-right: 10%;
  }
}
</style> 