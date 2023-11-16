<template>
  <FillingFarme :sliderList="list" :title="title"></FillingFarme>
</template>

<script setup>
import { ref, reactive } from "vue";
import FillingFarme from "@/components/fillingFarme/index.vue";
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
</script>

<style lang="scss" scoped>
</style>