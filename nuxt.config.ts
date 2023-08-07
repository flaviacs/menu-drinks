// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-bootstrap-icons"],
  // bootstrapIcons: {
  //   renderType: "component", // or 'inline' (which is the default)
  // },
});
