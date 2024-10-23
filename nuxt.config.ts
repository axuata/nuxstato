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
  app:{
    head: {
      title: "Your website name here",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/your/favicon/path" },
      ],
    },
  },
})