<template>
  <n-menu :options="options"> </n-menu>
</template>

<script setup lang="tsx">
import { MenuOption } from "naive-ui";
import { menus, routesMap } from "@/router";
import { NMenu, NTooltip } from "naive-ui";


function addMenuLabel(item) {
  const children = item.children?.map(addMenuLabel);

  return {
    ...item,
    label: item.label,
    icon: () => (
      <NTooltip>
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
  const labeledMenus = menus.map((item) => addMenuLabel(item));
  return labeledMenus;
});
</script>
