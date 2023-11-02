<template>
  <div>
    {{ demo}}
    <!-- <p class="text-rose-600">故事会</p>
    <p class="text-lime-500">唐诗三百首</p>
    <p class="text-xl">唐诗三百首</p>
    <div class="w-48 h-48 border-solid border-2 border-amber-600">111</div>
    <div class="title" data-v-7ab6df900>hello world!</div>-->
    <el-button @click="primes(add,true)">回调函数</el-button>
    <el-button @click="handelAdd">函数</el-button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { getList } from "./api.js";
import { log } from "util";
const demo = ref("jdsifohdsapogijbfdsijng");
const primes = (fun, params) => {
  if (params) {
    return fun.apply();
  }
};
const handelAdd = () => {
  getList().then(res => {
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  });
};
async function testFun() {
  await Promise.reject()
    .then(res => {
      console.log("3");
    })
    .catch(err => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
  await Promise.resolve().then(res => {
    console.log("4");
  });
  Promise.resolve().then(res => {
    console.log("5");
  });
  Promise.resolve().then(res => {
    console.log("1");
  });
  await Promise.resolve().then(res => {
    console.log("2");
  });
}
testFun();
</script>

<style lang="scss" scoped>
.title[data-v-7ab6df900] {
  font-size: 100px;
  color: red;
}
</style>