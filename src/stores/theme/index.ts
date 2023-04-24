import { defaultThemeSetting } from '@/settings';
import type { ThemeSettings } from '@/interface'
import type { GlobalThemeOverrides } from 'naive-ui'
import { getThemeColors } from './helpers';
type ThemeState = ThemeSettings

export const useThemeStore = defineStore('theme-store', () => {
    const themeState = reactive<ThemeState>({
        ...defaultThemeSetting,
    })

    const themeOverrides = computed<GlobalThemeOverrides>(() => {
        const {
          themeColor,
          otherColor: { info, success, warning, error },
        } = themeState
    
        const themeColors = getThemeColors([
          ['primary', themeColor],
          ['info', info],
          ['success', success],
          ['warning', warning],
          ['error', error],
        ])
    
        const colorLoading = themeColor
    
        return {
          common: {
            ...themeColors,
            fontFamily: 'Nunito',
          },
          LoadingBar: {
            colorLoading,
          },
        }
      })
    
    return { ...toRefs(themeState) , themeOverrides }
})