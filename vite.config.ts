import { defineConfig } from 'vite'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'

declare var __dirname: string
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      mode: 'shadow-dom',
      include: ['*/**.ce.vue'],
    }),
    UnoCSS(),
    vueJsx(),
    Pages({
      extensions: ['vue'],
      exclude: ['**/components/*.vue'],
      dirs: 'src/pages',
      importMode(filepath: string, options) {
        // default resolver
        for (const page of options.dirs) {
          if (page.baseRoute === '' && filepath.startsWith(`/${page.dir}/index`))
            return 'sync'
        }
        // return 'async'

        // Load about page synchronously, all other pages are async.
        return filepath.includes('about') ? 'sync' : 'async'
      },
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
      ],
      dts: './src/typings/components.d.ts',
      dirs: ['src/components'],
    }),
    AutoImport({ 
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          'naive-ui': [ 'useDialog', 'useMessage', 'useNotification', 'useLoadingBar' ],
          'vue-query': ['useInfiniteQuery', 'useIsFetching', 'useIsMutating', 'useMutation', 'useQueries', 'useQuery', 'useQueryClient', 'useQueryProvider'],
        }
      ],
      dts: './src/typings/auto-imports.d.ts',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~/': `${resolve(__dirname)}/`,
    },
  },
  server: {
    port: 4000,
    open: true,
  }
})
