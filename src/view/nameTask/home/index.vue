<script setup>
import { storeToRefs } from "pinia";
import { useCount } from "@/store/index.js";
const store = useCount();
//使用storeToRefs解构赋值，保持数据响应式
const { count, firstName } = storeToRefs(store);
const handelAdd = () => {
  count.value++;
};
const handelCel = () => {
  store.$patch({
    count: store.count - 1,
    firstName: store.firstName + " Dave"
  });
};
const handelSet = () => {
  store.randomizeCounter();
};
</script>
<template>
  <div>
    首页{{ count}}{{ firstName }}
    <p>{{ store.getStateCount }}</p>
    <p>{{ store.doubleCount }}</p>
    <el-button @click="handelAdd">按钮+</el-button>
    <el-button @click="handelCel">按钮-</el-button>
    <el-button @click="handelSet">按钮*</el-button>
  </div>
</template>