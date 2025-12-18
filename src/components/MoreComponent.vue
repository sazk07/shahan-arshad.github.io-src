<script setup lang="ts">

let id = 0;
const links = [
  { id: id++, txt: "Education", path: "/education" },
  { id: id++, txt: "Honors & Awards", path: "/honors-and-awards" },
  { id: id++, txt: "Certifications", path: "/certifications" },
  { id: id++, txt: "Publications", path: "/publications" },
];
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <a :to="link.path">
        {{ link.txt }}
      </a>
    </li>
  </ul>
</template>

<style scoped>
@media (width >=768px) {
  ul {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  li {
    padding: 1rem 0 1rem;
  }
}
</style>
