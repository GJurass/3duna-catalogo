export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', '~/assets/css/catalog-real.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: '3 Duna — Catálogo de peças 3D',
      meta: [
        { name: 'description', content: 'Catálogo de peças impressas em 3D da 3 Duna.' },
        { name: 'theme-color', content: '#f5f0e7' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap' }
      ]
    }
  }
})
