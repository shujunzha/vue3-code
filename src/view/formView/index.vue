
<template>
  <el-row :gutter="15">
    <el-col>
      <div class="searchTitle">生产许可证信息</div>
      <el-form ref="formRef" :model="form" v-bind="$attrs" size="small" label-width="120px">
        <my-form-item :form-opts="formOpts" :curForm="form">
          <template #licenseNumber1>
            <div class="flexInput">
              <el-cascader
                clearable
                filterable
                ref="cascader"
                v-model="form.registrationAddress"
                :options="fourOptions"
                :props="props"
                :style="{ width: '26%' }"
              ></el-cascader>
              <el-input
                v-model="form.residenceAddress"
                placeholder="请输入详细地址"
                clearable
                :style="{ width: '80%' }"
                class="inputMargin"
              ></el-input>
            </div>
          </template>
        </my-form-item>
      </el-form>
      <el-tooltip class="box-item" effect="dark" :content="value" placement="top-start">
        <span>{{ textLength(value,5) }}</span>
      </el-tooltip>
      <el-button @click="handelClick">防抖按钮</el-button>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, reactive } from "vue";
import myFormItem from "@/components/myFormItem/myFormItem.vue";
import { textLength, debounce } from "@/utils/common.js";
const form = ref({});
const value = ref("popoverValue");
const formOpts = ref([
  {
    label: "企业名称",
    prop: "enterpriseName",
    required: true,
    textPopover: "enterpriseName"
  },
  {
    label: "信用代码",
    prop: "uscc",
    required: true
  },
  {
    label: "许可证编号",
    prop: "licenseNumber",
    required: true
  },
  {
    label: "许可证编号1",
    prop: "licenseNumber1",
    required: true,
    flotSlot: "licenseNumber1",
    textPopover: "enterpriseName"
  }
]);
const handelClick = debounce(() => {
  console.log("====================================");
  console.log(6666);
  console.log(debounce);
  console.log("====================================");
}, 1000);
</script>

<style lang="scss" scoped>
.flexInput {
  display: flex;
}
</style>