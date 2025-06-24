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
    '@nuxt/ui'
  ],

  css: ['@/assets/styles/main.css'],
  compatibilityDate: '2025-04-01',



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
