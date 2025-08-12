import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: { plugins: [tailwindcss()] },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxt/ui", "@vite-pwa/nuxt"],

  // Keep / as SSG, run /pwa/** as SPA (no SSR overhead)
  routeRules: {
    "/": { prerender: true },
    "/legal/**": { prerender: true },
    "/pwa/**": { ssr: false },
  },

  pwa: {
    registerType: "autoUpdate",

    // Enable SW in dev and scope interception to /pwa/**
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/pwa(\/.*)?$/],
    },

    manifest: {
      id: "/pwa",
      start_url: "/pwa",
      name: "Rad-PWA",
      short_name: "Rad-PWA",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#000000",
      icons: [
        {
          src: "/pwa/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/pwa/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },

    // In production, route navigations inside /pwa/** through the app shell
    workbox: {
      navigateFallback: "/pwa",
    },

    // Keep your install prompt handling
    client: {
      installPrompt: true,
    },
  },
});
