import { defineConfig } from 'vite'

export default defineConfig({
  // Configurazione del server di sviluppo
  server: {
    port: 5173,
    open: true,
    cors: true,
    historyApiFallback: true
  },

  // Configurazione della build per produzione
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2015'
  },

  // Alias per import più puliti
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  // Configurazione CSS
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },

  // Ottimizzazione delle dipendenze
  optimizeDeps: {
    include: ['src/BookService.js']
  }
})
