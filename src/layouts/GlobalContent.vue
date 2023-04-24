<script setup lang="ts">
import BasicLayout from './BasicLayout.vue';

const route = useRoute()
const router = useRouter()
</script>

<style scoped>

</style>

<template>
   <component :is="BasicLayout">
    <router-view v-slot="{ Component }">
      <!-- <transition :key="app.reloadFlag" name="fade-slide" mode="out-in" appear> -->
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
      <!-- </transition> -->
    </router-view>
  </component>
</template>

