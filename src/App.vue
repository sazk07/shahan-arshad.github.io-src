<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import { name, profession, aboutMe } from "@/assets/bio.json";
</script>

<template>
  <HeaderComponent />
  <main>
    <HeroComponent :cvName="name" :profession="profession" :summary="aboutMe" />
  </main>
  <FooterComponent />
</template>
