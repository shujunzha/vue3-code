<template>
  <div>
    <el-button type="primary" @click="handelSlider">开关侧边栏</el-button>
    <SliderTab />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { sliderDef } from "../../store/sliderBar.js";
import SliderTab from "./sliderTab.vue";

const slider = sliderDef();
const handelSlider = () => {
  slider.handelSliderbar();
};
</script>

<style lang="scss" scoped>
</style>