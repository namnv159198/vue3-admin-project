<script lang="ts" setup>
import { useAppStore } from "@/stores";
const appStore = useAppStore();

function toggleCollapseMenu (){
  appStore.siderCollapse = !appStore.siderCollapse
}
</script>

<template>
  <n-icon size="20" cursor-pointer @click="toggleCollapseMenu()">
    <div class="i-carbon:text-indent-more" v-if="appStore.siderCollapse"></div>
    <div class="i-carbon:text-indent-less" v-else></div>
  </n-icon>
</template>
