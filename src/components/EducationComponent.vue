<script setup lang="ts">
import { ref } from "vue";
import CardItem from "./CardItem.vue";

defineProps<{
  education: {
    id: number;
    school: string;
    degreeName: string;
    date: string;
    honors?: string[];
  }[];
}>();

const desktopCardStyle = ref({
  textAlign: "start",
  width: "60%",
});

const mobileCardStyle = ref({
  textAlign: "center",
});

const mq = window.matchMedia("(width >= 768px)");
</script>

<template>
  <h2><span class="highlight-color">Edu</span>cation</h2>
  <CardItem
    v-for="entry in education"
    :key="entry.id"
    :style="mq.matches ? desktopCardStyle : mobileCardStyle"
  >
    <template #heading>
      {{ entry.degreeName }}
    </template>
    <template #content>
      <div class="education-details">
        <p>
          {{ entry.school }}
        </p>
        <p>
          {{ entry.date }}
        </p>
      </div>
      <ul v-if="entry.honors">
        <li>
          {{ entry.honors[0] }}, {{ entry.honors[1] }}, {{ entry.honors[2] }}
        </li>
      </ul>
    </template>
  </CardItem>
</template>

<style scoped>
h2 {
  text-align: center;
}

.education-details {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 0.5rem;
}

@media (width >=768px) {
  .education-details {
    flex-direction: row;
    justify-content: space-between;
  }

  ul {
    list-style: initial;
    text-align: start;
  }
}
</style>
