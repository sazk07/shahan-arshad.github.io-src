<script setup lang="ts">
import CardItem from "./CardItem.vue";

defineProps<{
  honorsAndAwards: {
    id: number;
    name: string;
    organization: string;
    participation: string;
  }[];
}>();
</script>

<template>
  <h2><span class="highlight-color">Hon</span>ors & Awards</h2>
  <CardItem
    v-for="honor in honorsAndAwards"
    :key="honor.id"
    style="text-align: center"
  >
    <template #heading>
      {{ honor.name }}
    </template>
    <template #content>
      <div>
        <p>
          {{ honor.participation }}
        </p>
        <p class="highlight-color">
          {{ honor.organization }}
        </p>
      </div>
    </template>
  </CardItem>
</template>

<style scoped>
h2 {
  text-align: center;
}

div {
  display: flex;
  flex-direction: column;
}

@media (width >=768px) {
  div {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
