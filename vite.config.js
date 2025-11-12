// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // French pages
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        who: resolve(__dirname, 'who.html'),
        services: resolve(__dirname, 'services.html'),
        equipe: resolve(__dirname, 'equipe.html'),
        contact: resolve(__dirname, 'contact.html'),

        // English pages
        en_index: resolve(__dirname, 'en/index.html'),
        en_about: resolve(__dirname, 'en/about.html'),
        en_who: resolve(__dirname, 'en/who.html'),
        en_services: resolve(__dirname, 'en/services.html'),
        en_team: resolve(__dirname, 'en/team.html'),
        en_contact: resolve(__dirname, 'en/contact.html')
      }
    }
  }
})

