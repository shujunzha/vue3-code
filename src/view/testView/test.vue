<template>
  <div class="box">
    <div class="left theme-bg">
      <el-steps direction="vertical" :active="activeIndex" :space="60">
        <el-step
          v-for="(item,index) in items"
          :key="item.id"
          :title="item.label"
          @click="changeSteps(index)"
          class="stepColor"
        ></el-step>
      </el-steps>
    </div>
    <div class="right">
      <div class="contant">
        1
        <el-button
          v-for="(item,index) in themeArr"
          :key="index"
          :style="{color:item.color,backgroundColor:item.bgcColor}"
          @click="handelClick(index)"
          class="themeBtnColor"
        >{{item.text}}</el-button>
      </div>
      <el-button @click="handelMax">最多出现字母</el-button>
      <div class="contant">
        2
        <editor v-model="value" style="height: 600px" />
      </div>
      <div class="contant">
        3
        <el-row :gutter="15">
          <el-col>
            <div class="searchTitle">生产许可证信息</div>
            <el-form ref="formRef" :model="form" label-width="120px">
              <my-form-item :formOpts="formOpts" :curForm="form">
                <template #licenseNumber1>
                  <el-select
                    v-model="form.licenseNumber1"
                    placeholder="请选择"
                    :style="{ width: '100%' }"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </template>
              </my-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
//vue3里面ref的值和model绑定的值相同时(ref="form" :model="form")，会导致输入框无法输入，无法赋值，选择框无法选择
<script setup>
import editor from "@/components/editor/index.vue";
import myFormItem from "@/components/myFormItem/myFormItem.vue";
import { ref, reactive, toRef } from "vue";
const activeIndex = ref(0);
const value = ref("初始化内容");
const items = ref([
  {
    id: 1,
    label: "第一步"
  },
  {
    id: 2,
    label: "第二步"
  },
  {
    id: 3,
    label: "第三步"
  }
]);
const themeArr = reactive([
  {
    id: 0,
    text: "主题1",
    color: "#fff",
    bgcColor: "blue"
  },
  {
    id: 1,
    text: "主题2",
    color: "#fff",
    bgcColor: "green"
  },
  {
    id: 2,
    text: "主题3",
    color: "#fff",
    bgcColor: "red"
  }
]);
const formRef = ref();
const form = ref({
  // name: "",
  // licenseNumber1: "",
  // enterpriseName: "",
  // uscc: "",
  // licenseNumber: ""
});
const formOpts = ref([
  {
    label: "企业名称",
    prop: "enterpriseName",
    required: true
  },
  {
    label: "信用代码",
    prop: "uscc",
    required: true
  },
  {
    label: "许可证编号",
    prop: "licenseNumber",
    required: true
  },
  {
    label: "进口商家",
    prop: "licenseNumber1",
    required: true,
    flotSlot: "licenseNumber1",
    type: "select"
  }
]);
const options = ref([
  {
    label: "京东",
    value: "1"
  },
  {
    label: "淘宝",
    value: "2"
  },
  {
    label: "品喜喜",
    value: "3"
  }
]);
const changeSteps = index => {
  activeIndex.value = index;
  const rightList = document.querySelectorAll(".contant");
  //   setTimeout(() => scrollIntoView(rightList[index - 1]), 300);
  rightList[index].scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

const handelClick = index => {
  window.document.documentElement.setAttribute(
    "current-theme",
    `theme${index + 1}`
  );
  // const leftTem = document.querySelector(".left");
  // console.log("=========666===========================");
  // console.log(window.document.documentElement);
  // console.log("====================================");
  // leftTem.setAttribute("class", `bgc`);
};
//计算字母出现次数，并算出出现最多的字母
var string = ref("sdgfiujwfujhwsabvfyasfdihasvchgafdygsahgv");
let codde = ref({});
const handelMax = () => {
  for (var i = 0; i < string.value.length; i++) {
    let findStr = string.value.charAt(i);
    if (codde[findStr]) {
      codde[findStr]++;
    } else {
      codde[findStr] = 1;
    }
  }
  var max = 0;
  var ch = "";
  for (var k in codde) {
    if (codde[k] > max) {
      max = codde[k];
      ch = k;
    }
  }
};
</script>

<style  scoped>
.el-step .el-step__title .is-process {
  color: green !important;
}

.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.left {
  width: 300px;
  height: 100%;
  border-right: 2px solid #ccc;
  background-color: #ccc;
}
.box .right {
  flex: 1;
  overflow: auto;
}
.box .right .contant {
  height: 1000px;
  overflow-x: hidden;
}

.bgc {
  width: 300px;
  height: 100%;
  color: blueviolet;
  background-color: cyan;
}
.boo {
  display: flex;
  flex-direction: row;
  width: 400px;
}
.fx {
  display: block;
  width: 50px;
  height: 50px;
  background-color: blue;
  margin-left: 20px;
}
.fx:nth-child(2) {
  flex: 2 1 20px;
}
.grind {
  display: grid;
}
</style> 