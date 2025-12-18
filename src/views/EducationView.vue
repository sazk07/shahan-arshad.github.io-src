<script setup lang="ts">
import { education } from "@/assets/bio.json";
import EducationComponent from "@/components/EducationComponent.vue";
</script>

<template>
  <main>
    <EducationComponent :education="education" />
  </main>
</template>

<style scoped>
main {
  grid-area: body;
  display: grid;
  width: var(--u-content-w);
  min-height: var(--u-main-h);
  justify-self: center;
  --no-of-gaps: 3;
  gap: calc(var(--u-main-gap) / var(--no-of-gaps));
  align-items: center;

  @media (width >=768px) {
    width: var(--u-desktop-content-w);
    justify-items: center;
  }
}
</style>
