<template>
  <div>4.{{ qqq }}</div>
</template>

<script setup>
import { ref, inject } from "vue";
const qqq = inject("qqq");
</script>

<style lang="scss" scoped>
</style>