<template>
  <div>{{info}}</div>
</template>

<script setup>
import { ref } from "vue";
defineExpose({
  open(info) {
    console.log(info);
  }
});
</script>

<style lang="scss" scoped>
</style>