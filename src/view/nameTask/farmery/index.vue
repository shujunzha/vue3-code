<template>
  <div style="height: 100%;">
    <FillingFarme :sliderList="list" :title="title">
      <template #operateBtn>
        <el-button type="primary" size="small" @click="saveForm()">暂存</el-button>
        <el-button type="primary" size="small" plain @click="back()">返回</el-button>
      </template>
      <template #contantForm>
        <div v-for="(item,index) in list" :key="index" class="wow">
          <template v-if="item.isShow">
            <component :is="components[item.components]"></component>
          </template>
        </div>
      </template>
    </FillingFarme>
  </div>
</template>

<script setup>
import { ref, reactive, markRaw, defineAsyncComponent } from "vue";
import FillingFarme from "@/components/fillingFarme/index.vue";
import { renderComponents } from "@/utils/common.js";
const modules = import.meta.glob("./compontent/*.vue");

const components = renderComponents(modules);
// const components = ref({});
// Object.entries(modules).forEach(([path, asyncCom]) => {
//   const name = path.replace(/\.\/compontent\/(.*)\.vue/, "$1");
//   components.value[name] = markRaw(defineAsyncComponent(asyncCom));
// });

const title = ref("新建文件");
const list = reactive([
  {
    name: "基础信息",
    components: "basicInfo",
    formField: "basicInfo",
    isShow: true
  },
  {
    name: "关联计划详情",
    components: "associatedPlanDetails",
    formField: "associatedPlanDetails",
    isExpand: true,
    isShowExpand: false,
    isShow: true
  },
  {
    name: "任务描述",
    components: "taskDescription",
    formField: "taskDescription",
    isShow: true
  },
  {
    name: "被检查企业/机构名称",
    components: "checkedEnterprise",
    formField: "checkedEnterprise",
    isShow: true
  }
]);
</script>

<style lang="scss" scoped>
</style>