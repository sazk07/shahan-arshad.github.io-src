<script setup lang="ts">
import SkillsComponent from "@/components/SkillsComponent.vue";
</script>

<template>
  <main>
    <SkillsComponent />
  </main>
</template>

<style scoped>
main {
  grid-area: body;
  display: grid;
  width: var(--u-content-w);
  min-height: var(--u-main-h);
  justify-self: center;
  justify-items: center;
  --no-of-gaps: 2;
  gap: calc(var(--u-main-gap) / var(--no-of-gaps));
  align-items: center;

  @media (width >=768px) {
    width: var(--u-desktop-content-w);
  }
}
</style>
