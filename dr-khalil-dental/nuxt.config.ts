export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: 'vercel',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false,
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Tajawal: [400, 500, 700],
    },
    display: 'swap',
    preload: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Dr. Ahmad Khalil Dental Clinic | Beirut, Lebanon',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Premium dental care in Beirut. Dr. Ahmad Khalil offers implants, whitening, veneers, braces, and more. 15+ years of experience. Book your appointment today.' },
        { name: 'theme-color', content: '#0F172A' },
        { name: 'author', content: 'Dr. Ahmad Khalil Dental Clinic' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Dr. Ahmad Khalil Dental Clinic' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://dr-khalil-dental.vercel.app' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/about': { prerender: true },
    '/reviews': { prerender: true },
    '/contact': { prerender: true },
  },
})
