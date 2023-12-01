<template>
  <div>{{info}}</div>
</template>

<script setup>
import { ref } from "vue";
const firstMsg = ref("第一信息");
const info = ref("m母鸡");
function open(info) {
  console.log(info, "1111");
}
defineExpose({
  open,
  firstMsg
});
</script>

<style lang="scss" scoped>
</style>