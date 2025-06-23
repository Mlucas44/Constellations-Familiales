export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  nitro: {
    preset: 'vercel-static'
  },
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/recaptcha'
  ],

  css: ['@/assets/styles/main.css'],
  compatibilityDate: '2025-04-01',

  recaptcha: {
    siteKey: '6LekpmorAAAAADu1muwobn3no6DOoKS9sJDI9U2B', // ✅ ta vraie clé publique
    version: 2,
    hideBadge: false,
    language: 'fr'
  },

  app: {
    head: {
      script: [
        {
          src: 'https://www.google.com/recaptcha/api.js',
          async: true,
          defer: true
        }
      ]
    }
  }
})
