import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({

  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      // sassVariables: 'src/assets/styles/quasar-variables.sass'
    })
    
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  },
  optimizeDeps:{
    esbuildOptions:{
      target: 'esnext'
    }
  }
})
