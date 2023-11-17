<template>
  <div style="height: 100%;">
    <div class="title" v-if="isShowTitle">
      <h2 v-if="title" class="title_text">{{title}}</h2>
      <div class="btn_group">
        <slot name="operateBtn">
          <el-button type="primary" @click="handelSubmit">提交信息</el-button>
        </slot>
      </div>
    </div>

    <div class="contant">
      <div class="left_contant" v-if="isShowLeft">
        <el-steps :active="activeStep" direction="vertical" :space="60" process-status="success">
          <el-step
            v-for="(item,index) in sliderList"
            :key="item.id"
            :title="item.name"
            @click="changeSteps(index)"
          ></el-step>
        </el-steps>
      </div>
      <div class="center_contant">
        <slot name="contantForm">
          <div v-for="item in sliderList" :key="item.formField">
            <slot :name="item.components"></slot>
          </div>
        </slot>
      </div>
      <div class="right_contant" v-if="isShowRight"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  title: {
    type: String
  },
  sliderList: {
    type: Object,
    default: () => []
  },
  isShowTitle: {
    type: Boolean,
    default: true
  },
  isShowLeft: {
    type: Boolean,
    default: true
  },
  isShowRight: {
    type: Boolean,
    default: true
  },
  sliderList: {
    type: Object,
    default: () => []
  }
});
const demo = ref(0);
// 提交信息
const handelSubmit = () => {};
const activeStep = ref(0);
const changeSteps = index => {
  activeStep.value = index;
};
</script>

<style lang="scss" scoped>
$headerHeight: 38px;
.title {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: $headerHeight;
  padding-right: 12px;

  .title_text {
    flex: 1;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .btn_group {
    padding-right: 20px;
  }
}
.contant {
  display: flex;
  height: 100%;
  .left_contant {
    width: 200px;
    padding: 0 20px;
    font-weight: bold;
    color: #000;
    border-right: 1px solid #ccc;
  }
  .el-steps {
    .el-step {
      cursor: pointer;
    }
  }
  .center_contant {
    flex: 1;
    padding: 0 20px;
    .title_text {
      margin: 0 0 10px 0;
      &::before {
        content: "";
        display: block;
        width: 2px;
        height: 18px;
        float: left;
        background-color: #409eff;
        margin: 3px 5px 0 0;
      }
    }
  }
}
</style>