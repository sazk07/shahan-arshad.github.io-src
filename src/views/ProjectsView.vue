<script setup lang="ts">
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import { projects } from "@/assets/bio.json";
import { provide } from "vue";
import { projectsKey } from "@/assets/data.types";

provide(projectsKey, projects);
</script>

<template>
  <main>
    <ProjectsComponent />
  </main>
</template>

<style scoped>
main {
  grid-area: body;
  display: grid;
  width: var(--u-content-w);
  min-height: var(--u-main-h);
  justify-self: center;
  gap: clamp(1rem, 2vw, 2rem);
  align-items: center;

  @media (width >=768px) {
    width: var(--u-desktop-content-w);
  }
}
</style>
