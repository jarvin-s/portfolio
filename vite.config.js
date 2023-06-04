import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// const { VuetifyPlugin } = require('webpack-plugin-vuetify')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  // new VuetifyPlugin({ autoImport: true }), // Enabled by default
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
