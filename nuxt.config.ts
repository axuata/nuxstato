// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [ "@/assets/styles/global.scss" ],
  modules: [ "@nuxtjs/google-fonts" ],
  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
    },
    display: 'swap',
  },
})