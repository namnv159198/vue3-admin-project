<script lang="ts" setup>
import { useAppStore } from '@/stores'
import logo from "@/assets/images/logo-mu.png"

const appStore = useAppStore()
</script>

<template>
  <router-link h-60 f-c-c to="/">
    <div class="flex-center gap-2 p-3">
      <n-image width="40" :src="logo" />
      <div class="text-16px" v-if="!appStore.siderCollapse">Manchester United</div>
    </div>
  </router-link>
</template>
