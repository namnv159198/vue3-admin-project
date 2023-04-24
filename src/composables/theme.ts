import { computed, watch } from 'vue'
import { darkTheme } from 'naive-ui'
import { useThemeStore } from '@/stores'
import { __IS_DARK__ } from '@/constants'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)
syncRef(isDark, __IS_DARK__, { direction: 'both', immediate: true })

export function useDarkMode() {
  const theme = useThemeStore()
  const naiveTheme = computed(() => (theme.darkMode ? darkTheme : undefined))

  watch(
    isDark,
    (newValue) => {
      theme.darkMode = newValue
    },
    {
      immediate: true,
    },
  )

  return {
    naiveTheme,
  }
}
