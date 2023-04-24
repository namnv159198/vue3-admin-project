<script setup lang="ts">
import { dateEnUS, dateViVN, enUS, viVN } from "naive-ui";
import GlobalContent from "@/layouts/GlobalContent.vue";
import { useThemeStore } from "./stores";
import { useDarkMode } from "./composables";

const theme = useThemeStore();
const { naiveTheme } = useDarkMode();
</script>

<template>
  <n-config-provider
    :theme="naiveTheme"
    :locale="viVN"
    :date-locale="dateViVN"
    :theme-overrides="theme.themeOverrides"
    class="h-100vh"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <GlobalContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
