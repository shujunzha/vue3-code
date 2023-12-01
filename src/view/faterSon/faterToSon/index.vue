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
    </SonFive>---------------------
    <SonSix>
      <!-- 向具名插槽提供内容 -->
      <template v-slot:cardTitle>博客</template>

      <template #cardSubtitle>
        <i>百万博主分享经验</i>
      </template>

      <!-- 向子组件默认插槽中提供内容 -->
      <!-- <button>关闭</button> -->

      <template #default>
        <button>关闭</button>
      </template>
      <!-- 访问插槽中提供的数据 -->
      <template #cardContent="dataProps">
        <ul>
          <li>{{ dataProps }}</li>
          <li>博客的标题：{{ dataProps.cardBlog.title }}</li>
          <li>博客的时间：{{ dataProps.cardBlog.time }}</li>
          <li>博主：{{ dataProps.cardAuthor }}</li>
        </ul>
      </template>
    </SonSix>
    <CheckRadio :checkList="checkList" :radioList="radioList" :isMultipleSelection="true"></CheckRadio>
  </div>
</template>

<script setup>
import { ref, reactive, provide } from "vue";
import Son from "./component/son.vue";
import SonTwo from "./component/sonTwo.vue";
import SonThree from "./component/sonThree.vue";
import SonFoure from "./component/sonFoure.vue";
import SonFive from "./component/sonFive.vue";
import SonSix from "./component/SonSix.vue";
import CheckRadio from "@/components/checkRadio/index.vue";
const demo = ref(2);
const sonthree = ref();
const text = ref("text字符串");
const state = ref(true);
const checkList = ref([
  { id: 1, name: "选项1", value: "1" },
  { id: 2, name: "选项2", value: "2" },
  { id: 3, name: "选项3", value: "3" },
  { id: 4, name: "选项4", value: "4" }
]);
const radioList = ref([
  { id: 5, name: "选项5", value: "5" },
  { id: 6, name: "选项6", value: "6" },
  { id: 7, name: "选项7", value: "7" },
  { id: 8, name: "选项8", value: "8" }
]);
provide("qqq", text);
function handelClick(num) {
  demo.value += num;
}
function refure() {
  demo.value = 0;
}
const handelSend = () => {
  text.value = "字符串";
  console.log("=====6666===============================");
  console.log(sonthree.value.firstMsg);
  console.log("====================================");
  sonthree.value.open("传参");
};
function say() {
  console.log("我是 paper");
}
</script>

<style lang="scss" scoped>
</style>