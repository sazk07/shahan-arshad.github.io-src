<script setup lang="ts">
import NotFoundComponent from "@/components/NotFoundComponent.vue";
</script>

<template>
  <main>
    <NotFoundComponent />
  </main>
</template>

<style scoped>
main {
  grid-area: body;
  display: flex;
  flex-direction: column;
  width: var(--u-content-w);
  min-height: var(--u-main-h);
  justify-self: center;
  justify-content: center;
  --no-of-gaps: 1;
  gap: calc(var(--u-main-gap) / var(--no-of-gaps));
  align-items: center;

  @media (width >=768px) {
    width: var(--u-desktop-content-w);
  }
}
</style>
