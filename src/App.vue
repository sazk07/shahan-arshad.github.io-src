<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { computed, ref } from "vue";
import HomeView from "./views/HomeView.vue";
import SkillsView from "./views/SkillsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import WorkxpView from "./views/WorkxpView.vue";
import EducationView from "./views/EducationView.vue";
import HonorsAwardsView from "./views/HonorsAwardsView.vue";
import CertificationsView from "./views/CertificationsView.vue";
import PublicationsView from "./views/PublicationsView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const routes = {
  "/": HomeView,
  "/skills": SkillsView,
  "/projects": ProjectsView,
  "/work-experience": WorkxpView,
  "/education": EducationView,
  "/honors-and-awards": HonorsAwardsView,
  "/certifications": CertificationsView,
  "/publications": PublicationsView,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] ?? NotFoundView;
});
</script>

<template>
  <HeaderComponent />
  <component :is="currentView" />
  <FooterComponent />
</template>
