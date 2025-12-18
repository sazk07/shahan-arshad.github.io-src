<script setup lang="ts">
import { publications } from "@/assets/bio.json";
import PublicationsComponent from "@/components/PublicationsComponent.vue";
</script>

<template>
  <main>
    <PublicationsComponent :publications="publications" />
  </main>
</template>

<style scoped>
main {
  grid-area: body;
  display: grid;
  width: var(--u-content-w);
  min-height: var(--u-main-h);
  justify-self: center;
  align-items: center;

  @media (width >=768px) {
    width: var(--u-desktop-content-w);
  }
}
</style>
