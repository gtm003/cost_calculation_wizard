import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cost_calculation_wizard/', 
  plugins: [vue()]
})
