<script setup lang="ts">
defineProps<{
  cvName: string;
  profession: string;
  summary: string;
}>();
</script>

<template>
  <h1>{{ cvName }}</h1>
  <h2 class="highlight-color">{{ profession }}</h2>
  <p>{{ summary }}</p>
</template>

<style scoped>
@media (width >=768px) {
  p {
    text-align: center;
  }
}
</style>
