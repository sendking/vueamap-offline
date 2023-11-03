import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueAmapResolver } from '@vuemap/unplugin-resolver'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VueAmapResolver()],
    }),
    Components({
      resolvers: [VueAmapResolver()],
    }),
    mkcert(),
  ],
  server: {
    https: true, // 需要开启https服务
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
