<template>
  <div>
    <div>3.{{infoS}}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const infoS = ref("666");
defineExpose({
  open(info) {
    infoS.value = info;
    console.log(infoS.value);
  }
});
</script>

<style lang="scss" scoped>
</style>