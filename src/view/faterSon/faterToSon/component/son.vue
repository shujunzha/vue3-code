<template>
  <div>
    {{ text}}、 父改值{{demo }}、 子重新赋值{{demo1 }}
    <el-button @click="handelAction">按钮+</el-button>
    <el-button @click="handelRefure">重置</el-button>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
const text = ref("子组建");
const num = ref(20);
let demo1 = ref(1);
let props = defineProps({
  demo: {
    type: Number
  }
});

const emit = defineEmits(["action", "reful"]);
function handelAction() {
  //父传子，需要通过props接收，赋值给新的数据，在进行修改
  demo1.value += props.demo;
  //常用方式是传值给父，修改
  emit("action", num.value);
}
function handelRefure() {
  emit("reful");
}
</script>

<style lang="scss" scoped>
</style>