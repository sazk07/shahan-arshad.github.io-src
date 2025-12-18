<script setup lang="ts">
import { ref } from "vue";
import CardItem from "./CardItem.vue";

defineProps<{
  link: string | undefined;
  projectName: string;
  description: string;
}>();

const cardStyle = ref({
  border: "1px solid var(--usr-clr-border)",
  padding: "0.5rem 1rem 0.5rem",
  borderRadius: "10px",
  textAlign: "center",
});
</script>

<template>
  <CardItem :style="cardStyle">
    <template #heading>
      {{ projectName }}
    </template>
    <template #content>
      <article>{{ description }}</article>
      <a v-if="link" :href="link" target="_blank" class="highlight-color"
        >Click here to view</a
      >
      <font-awesome-icon
        v-if="link"
        icon="fa-solid fa-arrow-up-right-from-square"
        style="font-size: 12px"
      />
    </template>
  </CardItem>
</template>
