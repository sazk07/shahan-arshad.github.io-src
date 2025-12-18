<script setup lang="ts">
import NavItem from "./NavItem.vue";
import MoreComponent from "./MoreComponent.vue";
import { ref } from "vue";

let id = 0;
const links = [
  { id: id++, txt: "Home", path: "/" },
  { id: id++, txt: "My Skills", path: "/skills" },
  { id: id++, txt: "My Projects", path: "/projects" },
  { id: id++, txt: "Work Experience", path: "/work-experience" },
];

const mq = window.matchMedia("(width >= 768px)");

const isLargeScr = ref(mq.matches);
</script>

<template>
  <NavItem :class="{ 'desk-nav-style': isLargeScr }">
    <template #list>
      <li v-for="link in links" :key="link.id">
        <a :to="link.path">
          {{ link.txt }}
        </a>
      </li>
      <li id="dropdown-parent">
        <div>
          More
          <font-awesome-icon icon="fa-solid fa-angles-down" />
          <MoreComponent />
        </div>
      </li>
    </template>
  </NavItem>
</template>

<style scoped>
.router-link-active {
  border-bottom: 5px solid var(--usr-clr-border);
}

.desk-nav-style {
  width: 100%;
  font-size: 1.2rem;
}

@media (width >=768px) {
  #dropdown-parent:hover ul {
    opacity: 1;
    width: auto;
    height: auto;
    clip-path: none;
    overflow: visible;
    white-space: normal;
    background-color: var(--usr-clr-background);
  }
}
</style>
