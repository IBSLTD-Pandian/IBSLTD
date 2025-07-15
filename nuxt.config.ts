// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  // Disable shadcn-nuxt module temporarily
  // modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/color-mode"],

  // Simple components configuration
  components: true,

  // Improved imports (important for case sensitivity issues)
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },

  // Nitro configuration for static site generation
  nitro: {
    preset: "static",
  },

  // Global metadata
  app: {
    head: {
      title: "International Business Synergies (IBS) - Global Trading Company",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "International Business Synergies Trading FZCO (IBS) is a global trading company specializing in energy, agriculture, and aquaculture commodities.",
        },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  // Color mode configuration
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.js",
    exposeConfig: false,
    viewer: false,
  },
});
