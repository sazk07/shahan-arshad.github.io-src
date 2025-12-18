<script setup lang="ts">
import { workExperience } from "@/assets/bio.json";
import WorkxpComponent from "@/components/WorkxpComponent.vue";
</script>

<template>
  <main>
    <WorkxpComponent :workExperience="workExperience" />
  </main>
</template>

<style scoped>
main {
  grid-area: body;
  display: grid;
  width: var(--u-content-w);
  min-height: var(--u-main-h);
  justify-self: center;
  --no-of-gaps: 5;
  gap: calc(var(--u-main-gap) / var(--no-of-gaps));
  align-items: center;

  @media (width >=768px) {
    width: var(--u-desktop-content-w);
  }
}
</style>
