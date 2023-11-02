<template>
  <div>
    关于
    <el-select v-model="value" multiple placeholder="请选择">
      <el-option v-for="city in citys" :key="city.id" :value="city.value" :label="city.label"></el-option>
    </el-select>
    <span>{{addNum}}</span>
    <br />
    <span>{{ num }}</span>

    <br />
    <el-text style="width: 200px;" truncated>就大赛呼呼呼打的否撒谎大哥佛教爱上地方就是啊都不放假</el-text>
    <br />
    <el-button @click="addNums">按钮+</el-button>
    <el-cascader v-model="listList" :options="options" @change="handleChange" ref="cascader"></el-cascader>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入" @keyup.enter="search" v-model="valueSearch"></el-input>
      </el-col>
    </el-row>
    <el-button @click="handelAction">调接口</el-button>
    <el-table :data="tableData" style="width: 100%" border :height="tabHeight">
      <el-table-column prop="Region" label="省份" width="180" />
      <el-table-column prop="Gasoline92" label="92价格" />
      <el-table-column prop="Gasoline95" label="95价格" />
      <el-table-column prop="Gasoline98" label="98价格" />
      <el-table-column prop="Diesel0" label="0号柴油价格" />
      <el-table-column prop="UpdateTime" label="更新时间" />
    </el-table>
    <div class="page">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[20, 30, 40, 50]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="scrImg">
      <img :src="src" alt="二维码" />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { getList, getEncode } from "./api.js";
import { formatDate } from "@/utils/common.js";
const value = ref([]);
const valueSearch = ref("");
const listList = ref([]);
const cascader = ref();
const num = ref(3);
const tableData = ref([]);
const currentPage = ref(1);
const pageSize = ref(20);
const total = ref(0);
const tabHeight = ref("600px");
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const src = ref("");
const source = ref();
const citys = [
  {
    id: 1,
    value: "1",
    label: "北京"
  },
  {
    id: 2,
    value: "2",
    label: "上海"
  },
  {
    id: 3,
    value: "3",
    label: "深圳"
  }
];
const options = [
  {
    value: "zhinan",
    label: "指南",
    children: [
      {
        value: "shejiyuanze",
        label: "设计原则",
        children: [
          {
            value: "yizhi",
            label: "一致"
          },
          {
            value: "fankui",
            label: "反馈"
          },
          {
            value: "xiaolv",
            label: "效率"
          },
          {
            value: "kekong",
            label: "可控"
          }
        ]
      },
      {
        value: "daohang",
        label: "导航",
        children: [
          {
            value: "cexiangdaohang",
            label: "侧向导航"
          },
          {
            value: "dingbudaohang",
            label: "顶部导航"
          }
        ]
      }
    ]
  },
  {
    value: "zujian",
    label: "组件",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout 布局"
          },
          {
            value: "color",
            label: "Color 色彩"
          },
          {
            value: "typography",
            label: "Typography 字体"
          },
          {
            value: "icon",
            label: "Icon 图标"
          },
          {
            value: "button",
            label: "Button 按钮"
          }
        ]
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio 单选框"
          },
          {
            value: "checkbox",
            label: "Checkbox 多选框"
          },
          {
            value: "input",
            label: "Input 输入框"
          },
          {
            value: "input-number",
            label: "InputNumber 计数器"
          },
          {
            value: "select",
            label: "Select 选择器"
          },
          {
            value: "cascader",
            label: "Cascader 级联选择器"
          },
          {
            value: "switch",
            label: "Switch 开关"
          },
          {
            value: "slider",
            label: "Slider 滑块"
          },
          {
            value: "time-picker",
            label: "TimePicker 时间选择器"
          },
          {
            value: "date-picker",
            label: "DatePicker 日期选择器"
          },
          {
            value: "datetime-picker",
            label: "DateTimePicker 日期时间选择器"
          },
          {
            value: "upload",
            label: "Upload 上传"
          },
          {
            value: "rate",
            label: "Rate 评分"
          },
          {
            value: "form",
            label: "Form 表单"
          }
        ]
      },
      {
        value: "data",
        label: "Data",
        children: [
          {
            value: "table",
            label: "Table 表格"
          },
          {
            value: "tag",
            label: "Tag 标签"
          },
          {
            value: "progress",
            label: "Progress 进度条"
          },
          {
            value: "tree",
            label: "Tree 树形控件"
          },
          {
            value: "pagination",
            label: "Pagination 分页"
          },
          {
            value: "badge",
            label: "Badge 标记"
          }
        ]
      },
      {
        value: "notice",
        label: "Notice",
        children: [
          {
            value: "alert",
            label: "Alert 警告"
          },
          {
            value: "loading",
            label: "Loading 加载"
          },
          {
            value: "message",
            label: "Message 消息提示"
          },
          {
            value: "message-box",
            label: "MessageBox 弹框"
          },
          {
            value: "notification",
            label: "Notification 通知"
          }
        ]
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "menu",
            label: "NavMenu 导航菜单"
          },
          {
            value: "tabs",
            label: "Tabs 标签页"
          },
          {
            value: "breadcrumb",
            label: "Breadcrumb 面包屑"
          },
          {
            value: "dropdown",
            label: "Dropdown 下拉菜单"
          },
          {
            value: "steps",
            label: "Steps 步骤条"
          }
        ]
      },
      {
        value: "others",
        label: "Others",
        children: [
          {
            value: "dialog",
            label: "Dialog 对话框"
          },
          {
            value: "tooltip",
            label: "Tooltip 文字提示"
          },
          {
            value: "popover",
            label: "Popover 弹出框"
          },
          {
            value: "card",
            label: "Card 卡片"
          },
          {
            value: "carousel",
            label: "Carousel 走马灯"
          },
          {
            value: "collapse",
            label: "Collapse 折叠面板"
          }
        ]
      }
    ]
  },
  {
    value: "ziyuan",
    label: "资源",
    children: [
      {
        value: "axure",
        label: "Axure Components"
      },
      {
        value: "sketch",
        label: "Sketch Templates"
      },
      {
        value: "jiaohu",
        label: "组件交互文档"
      }
    ]
  }
];
const addNum = computed(() => num.value * 2);
const addNums = () => {
  num.value += 5;
  function1();
};
watch(num, (newVlue, oldValue) => {});
const function1 = async () => {
  await console.log("111");
  console.log("222");
  console.log("333");
};
onMounted(() => {
  handelAction();
  const dataValue = formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
  console.log("=====dataValue===============================");
  console.log(dataValue);
  console.log("====================================");
  const params = {
    text: "能看到文字吗",
    m: 2,
    type: "svg",
    size: 5
  };
  getEncode(params).then(res => {
    src.value = window.URL.createObjectURL(res);
  });
});
const handleChange = value => {
  let aaa = cascader.value.getCheckedNodes(true);
  console.log(aaa);
};
const search = () => {
  console.log("====================================");
  console.log(valueSearch.value);
  console.log("====================================");
};
const handelAction = () => {
  getList().then(res => {
    tableData.value = res.result;
    total.value = res.result.length - 1;
    res.result;
  });
};
const handleSizeChange = val => {
  pageSize.value = val;
  handelAction();
};
const handleCurrentChange = val => {
  currentPage.value = val;
  handelAction();
};
</script>
<style lang="scss" scoped>
.page {
  text-align: right;
  margin-top: 20px;
}
.scrImg {
  width: 100px;
  height: 100px;
}
</style>