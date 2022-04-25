import { defineNuxtConfig } from 'nuxt'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false, // TODO enable it in future
  css: [
    "@/assets/layer-base.css",

    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "@/assets/layer-components.css",
    
    "uno.css",
    
    "@/assets/layer-utilities.css"
  ],

  modules: [
    "@pinia/nuxt",
    "@unocss/nuxt"
  ],

  unocss: {
    // Presets
    uno: true, // enabled `@unocss/preset-uno`
    //icons: true, // enabled `@unocss/preset-icons`
    //attributify: true, // enabled `@unocss/preset-attributify`,

    // Core options
    shortcuts: [],
    rules: [],
    transformers: [
      transformerDirective()
    ]
  },

  vite: {
    // This is a workaround for immidiate page reloading.
    // https://github.com/nuxt/framework/issues/1796
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    }
  },

  typescript: {
    strict: true
  }
});
