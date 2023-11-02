<template>
  <div>{{ demo}}{{ attres.text }}{{attres.state}}</div>
</template>

<script setup>
import { ref, reactive, useAttrs } from "vue";
const demo = ref(0);
const attres = useAttrs();
</script>

<style lang="scss" scoped>
</style>