<script setup lang="ts">
import NavItem from "./NavItem.vue";

let id = 0;
const links = [
  { id: id++, txt: "Home", path: "/" },
  { id: id++, txt: "My Skills", path: "/skills" },
  { id: id++, txt: "My Projects", path: "/projects" },
  { id: id++, txt: "Work Experience", path: "/work-experience" },
  { id: id++, txt: "Education", path: "/education" },
  { id: id++, txt: "Honors & Awards", path: "/honors-and-awards" },
  { id: id++, txt: "Certifications", path: "/certifications" },
  { id: id++, txt: "Publications", path: "/publications" },
];
</script>

<template>
  <NavItem>
    <template #list>
      <li v-for="link in links" :key="link.id">
        <a :to="link.path">
          {{ link.txt }}
        </a>
      </li>
    </template>
  </NavItem>
</template>

<style scoped>
nav {
  display: none;
}

.show-menu {
  position: absolute;
  left: 0;
  display: grid;
  width: 100%;
  background-color: var(--usr-clr-background);
  font-size: 1.2rem;

  & li {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid var(--usr-clr-border);
  }
}
</style>
