<template>
  <nav>
    <ul>
      <slot name="list">FALLBACK NAV VALUE</slot>
    </ul>
  </nav>
</template>

<style scoped>
@media (width >=768px) {
  ul {
    display: grid;
    grid-auto-flow: column;
  }
}
</style>
