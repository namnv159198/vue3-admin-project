<script lang="ts" setup>
const options = [
  {
    label: "Profile",
    key: "profile",
  },
  {
    label: "Edit Profile",
    key: "editProfile",
  },
  {
    label: "Logout",
    key: "logout",
  },
];
</script>

<template>
  <n-dropdown :options="options">
    <n-icon class="cursor-pointer" size="20">
      <div class="i-carbon:user"></div>
    </n-icon>
  </n-dropdown>
</template>
