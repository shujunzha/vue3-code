<template>
  <div>
    <el-select v-model="role" size="large" @change="selectChange">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-row>
      <el-col :span="12">
        <el-tree
          :data="data"
          ref="treeRef"
          show-checkbox
          node-key="id"
          default-expand-all
          :default-checked-keys="checkedKeys"
        />
        <el-button type="primary" @click="submitPremiss">提交</el-button>
      </el-col>
      <el-col :span="12">
        <el-table :data="tabList">
          <el-table-column width="40">
            <template #default="scope">
              <el-checkbox v-model="scope.row.status"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column>
            <template #default="scope">{{ scope.row.title }}</template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { usePermissStore } from "@/store/premiss.js";
const premiss = usePermissStore();
const checkedKeys = ref([]);
const data = [
  {
    id: "1",
    label: "系统首页"
  },
  {
    id: "2",
    label: "基础表格",
    children: [
      {
        id: "15",
        label: "编辑"
      },
      {
        id: "16",
        label: "删除"
      }
    ]
  },
  {
    id: "3",
    label: "tab选项卡"
  },
  {
    id: "4",
    label: "表单相关",
    children: [
      {
        id: "5",
        label: "基本表单"
      },
      {
        id: "6",
        label: "文件上传"
      },
      {
        id: "7",
        label: "三级菜单",
        children: [
          {
            id: "8",
            label: "富文本编辑器"
          },
          {
            id: "9",
            label: "markdown编辑器"
          }
        ]
      }
    ]
  },
  {
    id: "10",
    label: "自定义图标"
  },
  {
    id: "11",
    label: "schart图表"
  },

  {
    id: "13",
    label: "权限管理"
  },
  {
    id: "14",
    label: "支持作者"
  }
];
const role = ref("admin");
const options = [
  {
    value: "admin",
    label: "超级管理员"
  },
  {
    value: "user",
    label: "运营"
  }
];
const getPremiss = () => {
  checkedKeys.value = premiss.defaultList[role.value];
};
getPremiss();
const treeRef = ref();
const selectChange = val => {
  treeRef.value.setCheckedKeys(premiss.defaultList[role.value]);
};
const submitPremiss = () => {
  premiss.defaultList[role.value] = treeRef.value.getCheckedKeys(false);
};
const tabList = reactive([
  {
    title: "今天要修复100个bug",
    status: false
  },
  {
    title: "今天要修复100个bug",
    status: false
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: false
  },
  {
    title: "今天要修复100个bug",
    status: false
  },
  {
    title: "今天要修复100个bug",
    status: true
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: true
  }
]);
</script>

<style lang="scss" scoped>
</style>