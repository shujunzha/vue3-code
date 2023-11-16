
<template>
  <div @scroll="handelScoll">
    首页{{ count}}{{ firstName }}
    <p>{{ store.getStateCount }}</p>
    <p>{{ store.doubleCount }}</p>
    <el-button @click="handelAdd">按钮+</el-button>
    <el-button @click="handelCel">按钮-</el-button>
    <el-button @click="handelSet">按钮*</el-button>
    <!-- <Schart :options="options"></Schart> -->
    <!-- <schart class="schart" canvasId="bar" :options="options"></schart> -->
    <premiss></premiss>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Schart from "vue-schart";
import { storeToRefs } from "pinia";
import { useCount } from "@/store/index.js";
import Premiss from "../premiss/index.vue";

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
const options = {
  type: "bar",
  title: {
    text: "最近一周各品类销售图"
  },
  bgColor: "#fbfbfb",
  labels: ["周一", "周二", "周三", "周四", "周五"],
  datasets: [
    {
      label: "家电",
      fillColor: "rgba(241, 49, 74, 0.5)",
      data: [234, 278, 270, 190, 230]
    },
    {
      label: "百货",
      data: [164, 178, 190, 135, 160]
    },
    {
      label: "食品",
      data: [144, 198, 150, 235, 120]
    }
  ]
};
onMounted(() => {
  window.addEventListener("scroll", handelScoll);
});
const handelScoll = () => {
  let n =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  console.log(n.toFixed(), "11111");
};
</script>
<style lang="scss">
.schart {
  width: 600px;
  height: 400px;
}
</style>