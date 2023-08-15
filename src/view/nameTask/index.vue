<script setup>
import Minxter from "./search/data";
import { ArrowLeft } from "@element-plus/icons-vue";
import Tabs from "@/components/tabs/index.vue";
const {
  ruleForm,
  rules,
  formSize,
  ruleFormRef,
  isChangeIcon,
  citylist,
  typelist,
  reachInfo,
  resetInfo,
  searchInfo,
  handelChange,
} = Minxter();
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
            <el-button
              type="primary"
              plain
              @click="searchInfo"
              :icon="isChangeIcon ? 'ArrowDown' : 'ArrowLeft'"
              >更多搜索</el-button
            >
          </div>
        </el-col>
      </el-row>
      <transition>
        <div v-show="isChangeIcon">
          <el-row gutter="20">
            <el-col :span="6">
              <el-form-item label="开始时间" prop="startTime">
                <el-input v-model="ruleForm.startTime" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="结束时间" prop="endTime">
                <el-input v-model="ruleForm.endTime" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="城市">
              <Tabs
                :lists="citylist"
                @change="handelChange"
                :isMultiple="false"
              />
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="类别">
              <Tabs :lists="typelist" @change="handelChange" />
            </el-form-item>
          </el-row>
        </div>
      </transition>
    </el-form>
  </div>
</template>
<style scoped></style>
