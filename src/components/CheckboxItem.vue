<script setup lang="ts">
defineProps<{
  chkboxName: string;
}>();

const updateParent = defineModel();
</script>

<template>
  <div>
    <input
      type="checkbox"
      name="toggle"
      class="visually-hidden"
      :id="chkboxName"
      v-model="updateParent"
      aria-label="toggle"
    />
    <label :for="chkboxName" :id="`${chkboxName}-label`">
      <slot name="icon">FALLBACK SVG VALUE</slot>
    </label>
  </div>
</template>

<style scoped>
input + label {
  cursor: pointer;
}

label {
  font-size: 1.5rem;
}
</style>
