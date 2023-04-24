<script lang="ts" setup>
// import BreadCrumb from "./components/BreadCrumb.vue";
import MenuCollapse from "./components/MenuCollapse.vue";
import FullScreen from "./components/FullScreen.vue";
import UserLogin from "./components/UserLogin.vue";
// import GithubSite from "./components/GithubSite.vue";
import ThemeMode from "./components/ThemeMode.vue";
</script>
<template>
  <n-card>
    <div class="flex justify-between">
      <div class="flex items-center">
        <MenuCollapse />
        <!-- 
    <BreadCrumb ml-15 hidden sm:block /> -->
      </div>
      <div class="ml-auto flex items-center gap-20px">
        <ThemeMode />
        <FullScreen />
        <UserLogin />
      </div>
    </div>
  </n-card>
</template>
