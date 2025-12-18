<script setup lang="ts">
import { certifications } from "@/assets/bio.json";
import CertificationsComponent from "@/components/CertificationsComponent.vue";
</script>

<template>
  <main>
    <CertificationsComponent :certifications="certifications" />
  </main>
</template>

<style scoped>
main {
  grid-area: body;
  display: grid;
  width: var(--u-content-w);
  min-height: var(--u-main-h);
  justify-self: center;
  align-items: center;

  @media (width >=768px) {
    width: var(--u-desktop-content-w);
  }
}
</style>
