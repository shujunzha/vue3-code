<script setup>
import { ref } from "vue";
import src from "@/assets/select.png";
const props = defineProps({
  lists: Array,
  isMultiple: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(["change"]);
const dateList = ref([]);
function changeInput(val) {
  emit("change", val);
}
</script>
<template>
  <div class="all-tabs">
    <el-checkbox-group v-model="dateList" @change="changeInput" v-if="isMultiple">
      <el-checkbox v-for="list in lists" :key="list.value" :label="list.value" border>
        <span>{{ list.lable }}</span>
        <img class="select-icon" :src="src" alt v-if="dateList.indexOf(list.value) > -1" />
      </el-checkbox>
    </el-checkbox-group>

    <el-radio-group v-model="dateList" @change="changeInput" v-else>
      <el-radio v-for="list in lists" :key="list.value" :label="list.value" border>
        <span>{{ list.lable }}</span>
        <img class="select-icon" :src="src" alt v-if="dateList == list.value" />
      </el-radio>
    </el-radio-group>
  </div>
</template>
<style>
.all-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
}

.all-tabs .select-icon {
  position: absolute;
  right: 0;
  bottom: 0;
}
.all-tabs .el-checkbox-group,
.all-tabs .el-radio-group {
  line-height: initial;
}
.all-tabs .el-checkbox__input,
.all-tabs .el-radio__input {
  display: none;
}
.all-tabs .el-checkbox__label,
.all-tabs .el-radio__label {
  padding-left: 0;
}

.all-tabs .el-checkbox,
.all-tabs .el-radio {
  margin-right: 10px;
}
.all-tabs .el-form-item--small .el-form-item__label {
  line-height: 28px;
}
.el-radio.is-bordered,
.el-checkbox.is-bordered {
  padding: 0 15px !important;
}
</style>
