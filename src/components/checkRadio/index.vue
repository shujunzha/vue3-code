<template>
  <div>
    <el-checkbox-group v-model="checkValue" v-if="isMultipleSelection">
      <el-checkbox
        v-for="item in checkList"
        :key="item.id"
        :label="item.name"
        @change="changeCheck(item.value)"
      >{{ item.name }}</el-checkbox>
    </el-checkbox-group>
    <el-radio-group v-model="radioValue" v-else>
      <el-radio
        v-for="item in radioList"
        :key="item.value"
        :label="item.value"
        @click.native.prevent="clickitemdataType(item.value)"
      >{{ item.name }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const porps = defineProps({
  isMultipleSelection: {
    type: Boolean,
    default: false
  },
  radioList: {
    type: Array,
    default() {
      return [];
    }
  },
  checkList: {
    type: Array,
    default() {
      return [];
    }
  }
});
const radioValue = ref("");
const checkValue = ref([]);
const clickitemdataType = val => {
  console.log("======val==============================");
  console.log(val);
  console.log("====================================");
  radioValue.value = val;
};
const changeCheck = val => {
  console.log("==============val======================");
  console.log(checkValue.value);
  console.log(val);
  console.log("====================================");
};
</script>

<style lang="scss" scoped>
</style>