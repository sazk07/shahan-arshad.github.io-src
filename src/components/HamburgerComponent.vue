<script setup lang="ts">
import { ref } from "vue";
import MobileNavComponent from "./MobileNavComponent.vue";
import CheckboxItem from "./CheckboxItem.vue";

const isSmallNavVisible = ref(false);

document.documentElement.addEventListener("click", (e) => {
  const menuToggleLabel = document.querySelector("#menu-toggle-label");
  const menuToggle = document.querySelector("#menu-toggle");
  const target = e.target as HTMLElement;
  if (
    menuToggleLabel instanceof HTMLLabelElement &&
    menuToggle instanceof HTMLInputElement
  ) {
    if (!menuToggleLabel.contains(target)) {
      isSmallNavVisible.value = false;
    } else {
      menuToggle.checked = false;
    }
  }
});
</script>

<template>
  <div>
    <CheckboxItem
      :chkboxName="'menu-toggle'"
      v-model="isSmallNavVisible"
      :aria-label="'Toggle Mobile Navigation'"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-bars" />
      </template>
    </CheckboxItem>
    <MobileNavComponent :class="{ 'show-menu': isSmallNavVisible }" />
  </div>
</template>
