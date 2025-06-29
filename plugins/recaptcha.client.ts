// plugins/recaptcha.client.ts
import { defineNuxtPlugin } from '#app'
import VueRecaptcha from 'vue-recaptcha'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Recaptcha', VueRecaptcha)
})
