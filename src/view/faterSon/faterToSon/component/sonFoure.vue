<template>
  <div>{{ qqq }}</div>
</template>

<script setup>
import { ref, inject } from "vue";
defineExpose({
  open(info) {
    console.log(info);
  }
});
const qqq = inject("qqq");
</script>

<style lang="scss" scoped>
</style>