<script setup>
import Minxter from "./search/data";
import {
  ArrowLeft,
  ArrowDown,
  Plus,
  Upload,
  Close,
} from "@element-plus/icons-vue";
import Tabs from "@/components/tabs/index.vue";
import StatusDot from "@/components/StatusDot/index.vue";
const {
  ruleForm,
  rules,
  formSize,
  ruleFormRef,
  isChangeIcon,
  citylist,
  typelist,
  tableData,
  tableInfo,
  reachInfo,
  resetInfo,
  searchInfo,
  handelChange,
  deleteRow,
  handleSelectionChange,
  delGroub,
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
    <div class="btnGroub">
      <div class="leftBtn">
        <el-button type="primary" :icon="Plus">新增</el-button>
        <el-button type="danger" :icon="Close" @click="delGroub"
          >批量删除</el-button
        >
      </div>
      <div class="rightBtn">
        <el-button plain :icon="Upload">导出</el-button>
      </div>
    </div>
    <div class="tab">
      <el-table
        :data="tableData"
        height="250"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column type="index" label="序号" width="60" />
        <!-- <el-table-column prop="date" label="日期" /> -->
        <template v-for="item in tableInfo" :key="item.id">
          <el-table-column :prop="item.prop" :label="item.label">
            <template #default="scope">
              <div v-if="item.isSlot && item.prop === 'status'">
                <StatusDot :text="scope.row.status" :value="'123'"></StatusDot>
              </div>
              <div v-else>{{ scope.row[item.prop] }}</div>
            </template>
          </el-table-column>
        </template>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" plain>查看</el-button>
            <el-button size="small" type="primary">编辑</el-button>
            <el-button
              plain
              type="danger"
              size="small"
              @click.prevent="deleteRow(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped>
.btnGroub {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
