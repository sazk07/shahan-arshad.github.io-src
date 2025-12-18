<script setup lang="ts">
import HamburgerComponent from "./HamburgerComponent.vue";
import DesktopNavComponent from "./DesktopNavComponent.vue";
import ThemeComponent from "./ThemeComponent.vue";
</script>

<template>
  <header>
    <HamburgerComponent class="mobile" />
    <DesktopNavComponent class="desktop" />
    <ThemeComponent />
  </header>
</template>

<style scoped>
header {
  grid-area: header;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto min-content;
  justify-items: end;
  min-height: var(--u-header-h);
  gap: 1rem;
  align-items: center;
}

.desktop {
  display: none;
}

@media (width >=768px) {
  header {
    width: var(--u-header-w);
    justify-self: center;
    justify-items: center;
    align-items: center;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }
}
</style>
