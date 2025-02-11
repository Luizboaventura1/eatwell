// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['vuetify/lib/styles/main.css','./assets/css/main.css'],
  build: {
    transpile: ['vuetify']
  }
})
