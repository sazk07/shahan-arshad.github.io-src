<script setup lang="ts">
import { ref } from "vue";
import CardItem from "./CardItem.vue";

defineProps<{
  skill: {
    id: number;
    name: string;
  }[];
  heading: string;
}>();

const cardStyle = ref({
  textAlign: "center",
});
</script>

<template>
  <CardItem :style="cardStyle">
    <template #heading>
      {{ heading }}
    </template>
    <template #content>
      <ul>
        <li v-for="item in skill" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </template>
  </CardItem>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

li {
  border: 1px solid var(--usr-clr-border);
  border-radius: 100px;
  padding: 0.5rem 1.2rem 0.5rem;
}

li:hover {
  border-color: var(--usr-clr-border-hover);
}

@media (width >=768px) {
  ul {
    justify-content: center;
  }
}
</style>
