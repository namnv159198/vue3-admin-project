<template>
  <n-menu :options="options"> </n-menu>
</template>

<script setup lang="tsx">
import { menus } from "@/router";
import { useAppStore } from "@/stores";
import { NMenu, NTooltip } from "naive-ui";

const appStore = useAppStore()

function addMenuLabel(item, menuCollapse?: boolean) {
  const children = item.children?.map(addMenuLabel);

  return {
    ...item,
    label: item.label,
    icon: () => (
      <NTooltip disabled={!menuCollapse}>
        {{
          trigger: item.icon,
          default: () => item.label,
        }}
      </NTooltip>
    ),
    children,
  };
}

const options = computed(() => {
  const isMenuCollapse = appStore.siderCollapse
  const labeledMenus = menus.map((item) => addMenuLabel(item, isMenuCollapse))
  return labeledMenus;
});
</script>
