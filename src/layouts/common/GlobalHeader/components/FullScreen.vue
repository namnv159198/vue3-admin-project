<script lang="ts" setup>
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, toggle } = useFullscreen();
</script>
<template>
  <hover-container class="w-40px text-center" tooltip-content="Fullscreen">
    <n-icon size="20" style="cursor: pointer" @click="toggle">
      <div class="i-ant-design:fullscreen-exit-outlined" v-if="isFullscreen"></div>
      <div class="i-ant-design:fullscreen-outlined" v-else></div>
    </n-icon>
  </hover-container>
</template>
