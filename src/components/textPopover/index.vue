<template>
  <div>
    <el-popover
      placement="top-start"
      :width="200"
      trigger="hover"
      :content="objList[props.contant]"
    >
      <template #reference>
        <el-icon>
          <InfoFilled />
        </el-icon>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const demo = ref(0);
const objList = ref({
  textName: "测试标题",
  popoverValue: "健康值数据",
  enterpriseName: "企业名称"
});
let props = defineProps({
  contant: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
</style>