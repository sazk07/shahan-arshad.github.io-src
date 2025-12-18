<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  publications: {
    id: number;
    title: string;
    link: string;
    publisher: string;
    author: string;
    year: string;
  }[];
}>();

const mq = window.matchMedia("(width >= 768px)");

const isLargeScr = ref(mq.matches);
</script>

<template>
  <h2><span class="highlight-color">Pub</span>lications</h2>
  <ul>
    <li v-for="publication in publications" :key="publication.id">
      <div :class="{ 'pub-details': isLargeScr }">
        <p>
          <a :href="publication.link" target="_blank">
            {{ publication.title }}
          </a>
          <font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            style="font-size: 12px"
          />
        </p>
        <p style="padding-top: 0.2rem" class="highlight-color">
          {{ publication.publisher }}
        </p>
      </div>
      <div class="pub-details" style="font-size: 0.9rem">
        <p>
          {{ publication.author }}
        </p>
        <p>
          {{ publication.year }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
h2 {
  text-align: center;
}

ul {
  list-style: none;
}

li {
  margin: 1rem 0;
}

a {
  padding-left: 0;
}

.pub-details {
  display: flex;
  justify-content: space-between;
}
</style>
