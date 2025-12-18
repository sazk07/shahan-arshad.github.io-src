<script setup lang="ts">
defineProps<{
  link_to: string;
  desc: string;
}>();
</script>

<template>
  <a
    :href="link_to"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="desc"
  >
    <slot name="faIcon">FALLBACK SOCIAL MEDIA ICON VALUE</slot>
  </a>
</template>
