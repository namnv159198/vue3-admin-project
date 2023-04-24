// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
const safelistMenuIcon = [
 'i-carbon:dashboard'
]
export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['flex-col-center', 'flex-center flex-col'],
    ['flex-x-center', 'flex justify-center'],
    ['flex-y-center', 'flex items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify({ strict: true }),
    presetIcons({ 
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        // mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      }
     }),
     presetWebFonts({
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  safelist: [...safelistMenuIcon],
  transformers: [
    transformerDirectives(), // @apply, @screen and theme() directive (@unocss/transformer-directives)
    transformerVariantGroup(), // nhóm CSS lại với nhau => hover:(bg-gray-400 font-medium) (@unocss/transformer-variant-group)
  ],
})
