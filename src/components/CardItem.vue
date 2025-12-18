<template>
  <article>
    <h3>
      <slot name="heading"> FALLBACK HEADING VALUE </slot>
    </h3>
    <slot name="content"> FALLBACK CONTENT VALUE </slot>
  </article>
</template>

<style scoped>
h3 {
  padding-bottom: 1rem;
}
</style>
