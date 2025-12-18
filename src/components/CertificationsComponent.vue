<script setup lang="ts">
defineProps<{
  certifications: {
    id: number;
    link?: string;
    certName: string;
    issuer: string;
  }[];
}>();
</script>

<template>
  <h2><span class="highlight-color">Cer</span>tificates</h2>
  <ul>
    <li v-for="certification in certifications" :key="certification.id">
      <div>
        <a :href="certification.link" target="_blank">
          {{ certification.certName }}
        </a>
        <font-awesome-icon
          icon="fa-solid fa-arrow-up-right-from-square"
          style="font-size: 12px"
        />
      </div>
      <div>
        {{ certification.issuer }}
      </div>
    </li>
  </ul>
</template>

<style scoped>
h2 {
  text-align: center;
}

li {
  padding: 0.5rem 0;
}

a {
  padding-left: 0;
}

@media (width >=768px) {
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
