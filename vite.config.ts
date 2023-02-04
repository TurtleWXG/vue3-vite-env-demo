import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createChecker from './vite/vite-plugin-checker'
import createVueJsx from './vite/vite-plugin-vue-jsx'
import createEslint from './vite/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createVueJsx(), createChecker(), createEslint()]
})
