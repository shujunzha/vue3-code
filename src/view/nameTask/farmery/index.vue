<template>
  <FillingFarme :sliderList="list" :title="title">
    <template #operateBtn>
      <el-button type="primary" @click="saveForm">暂存</el-button>
      <el-button type="primary" plain @click="back">返回</el-button>
    </template>
    <template #contantForm>
      <div v-for="item in list" :key="item.name" class="wow">
        <component :is="components[item.components]"></component>
      </div>
    </template>
  </FillingFarme>
</template>

<script setup>
import { ref, reactive } from "vue";
import FillingFarme from "@/components/fillingFarme/index.vue";
import { renderComponents } from "@/utils/common.js";
const moudel = import.meta.glob("./compontent/*.vue");
const components = renderComponents(moudel);

const title = ref("新建文件");
const list = reactive([
  {
    name: "基础信息",
    components: "basicInfo",
    formField: "basicInfo"
  },
  {
    name: "关联计划详情",
    components: "associatedPlanDetails",
    formField: "associatedPlanDetails",
    isExpand: true,
    isShowExpand: false
  },
  {
    name: "任务描述",
    components: "taskDescription",
    formField: "taskDescription"
  },
  {
    name: "被检查企业/机构名称",
    components: "checkedEnterprise",
    formField: "checkedEnterprise"
  }
]);
const saveForm = () => {};
const back = () => {};
</script>

<style lang="scss" scoped>
</style>