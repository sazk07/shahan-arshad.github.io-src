<script setup lang="ts">
import ProjectsCardComponent from "./ProjectsCardComponent.vue";
import { projects } from "@/assets/bio.json";
</script>

<template>
  <h2><span class="highlight-color">Pro</span>jects</h2>
  <ProjectsCardComponent
    v-for="project in projects"
    :key="project.id"
    :link="project.link"
    :projectName="project.projectName"
    :description="project.description"
  />
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
