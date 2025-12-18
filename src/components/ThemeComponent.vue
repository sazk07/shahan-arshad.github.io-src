<script setup lang="ts">
import CheckboxItem from "./CheckboxItem.vue";
import { ref, onMounted, watchEffect } from "vue";

const localStorageTheme = localStorage.getItem("theme");
const sysSettingsDark = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = ref(false);

onMounted(() => {
  const currTheme =
    localStorageTheme ?? (sysSettingsDark.matches ? "dark" : "light");
  isDark.value = currTheme === "dark";
  document.documentElement.setAttribute("data-theme", currTheme);
});

function toggleTheme() {
  const theme = isDark.value ? "dark" : "light";
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}

watchEffect(toggleTheme);
</script>

<template>
  <CheckboxItem
    v-model="isDark"
    :chkboxName="'theme-toggle'"
    :aria-label="`Toggle ${isDark ? 'Light' : 'Dark'} Mode`"
  >
    <template #icon v-if="isDark">
      <font-awesome-icon icon="fa-solid fa-sun" />
    </template>
    <template #icon v-else>
      <font-awesome-icon icon="fa-solid fa-moon" />
    </template>
  </CheckboxItem>
</template>
