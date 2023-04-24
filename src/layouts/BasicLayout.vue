<script lang="ts" setup>
import { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import AppHeader from "./common/GlobalHeader/index.vue";
import AppSiderbar from "./common/GlobalSidebar/index.vue";
import { useAppStore } from "@/stores";
const scrollbarContentStyle = computed(() => {
  // const { fullPage } = routeProps.value
  // const height = fullPage ? '100%' : 'auto'
  return `display:flex;flex-direction:column;height:100%;min-height:100%;`;
});

const appStore = useAppStore()

</script>
<template>
  <n-layout has-sider class="w-full h-full">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :native-scrollbar="false"
      :collapsed="appStore.siderCollapse"
    >
      <AppSiderbar />
    </n-layout-sider>
    <article flex-1 flex-col overflow-hidden>
      <header
        class="bg-white border-b bc-eee flex items-center"
        dark="bg-dark border-0"
        :style="`height: 60px`"
      >
        <AppHeader />
      </header>
      <!-- <section v-if="tags.visible" border-b bc-eee dark:border-0 hidden sm:block>
        <AppTags :style="{ height: `${tags.height}px` }" />
      </section>
       -->
      <section flex-1 overflow-hidden bg-hex-f5f6fb dark:bg-hex-101014>
        <slot></slot>
      </section>
    </article>
  </n-layout>
</template>
