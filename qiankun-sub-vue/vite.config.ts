import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

const port = 8082
// https://vitejs.dev/config/
export default defineConfig({
  base: `./`,
  plugins: [
    vue(),
    qiankun('qiankun-sub-vue', {
      useDevMode: true,
    }),
  ],
  server: {
    port: port,
    open: true,
  },
})
