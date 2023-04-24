<script lang="ts" setup>
import { toggleDark } from '@/composables'
import { useThemeStore } from '@/stores'
const theme = useThemeStore()
function toggleDarkMode() {
  toggleDark()
}
</script>

<template>
  <hover-container class="w-40px text-center" tooltip-content="Theme mode">
    <n-icon class="cursor-pointer" size="20" @click="toggleDarkMode()">
      <div class="i-carbon:moon color-white" v-if="theme.darkMode"></div>
      <div class="i-carbon:sun" v-else></div>
    </n-icon>
  </hover-container>
</template>
