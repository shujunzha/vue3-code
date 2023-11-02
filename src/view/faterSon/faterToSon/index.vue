<template>
  <div>
    <Son :demo="demo" @action="handelClick" @reful="refure" />
    <SonTwo :text="text" :state="state" />
    <SonThree ref="sonthree" />
    <el-button @click="handelSend">传参</el-button>
    <SonFoure />---------------------
    <SonFive>
      1-1.测试插槽
      <template #header>标题</template>
    </SonFive>
  </div>
</template>

<script setup>
import { ref, reactive, provide } from "vue";
import Son from "./component/son.vue";
import SonTwo from "./component/sonTwo.vue";
import SonThree from "./component/sonThree.vue";
import SonFoure from "./component/sonFoure.vue";
import SonFive from "./component/sonFive.vue";
const demo = ref(2);
const sonthree = ref();
const text = ref("text字符串");
const state = ref(true);
provide("qqq", text);
function handelClick(num) {
  demo.value += num;
}
function refure() {
  demo.value = 0;
}
const handelSend = () => {
  text.value = "字符串";
  sonthree.value.open("传参");
};
</script>

<style lang="scss" scoped>
</style>