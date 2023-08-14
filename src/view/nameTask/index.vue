<script setup>
import Minxter from "./search/data";
const { ruleForm, rules, formSize, ruleFormRef, reachInfo, resetInfo } =
  Minxter();
</script>
<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-row gutter="20">
        <el-col :span="6">
          <el-form-item label="文件名称" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="所属区域" prop="address">
            <el-input v-model="ruleForm.address" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="批准号" prop="codeNum">
            <el-input v-model="ruleForm.codeNum" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <div>
            <el-button type="primary" @click="reachInfo(ruleFormRef)"
              >搜索</el-button
            >
            <el-button plain @click="resetInfo(ruleFormRef)">重置</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<style scoped></style>
