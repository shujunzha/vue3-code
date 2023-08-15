import { ref, reactive } from "vue";

export default function Minxter() {
  const formSize = ref("default");
  const ruleFormRef = ref();
  const isChangeIcon = ref(false);
  const ruleForm = reactive({
    name: "",
    address: "",
    codeNum: "",
    startTime: "",
    endTime: "",
  });
  // tabs数组
  const citylist = reactive([
    {
      value: 1,
      lable: "上海",
    },
    {
      value: 2,
      lable: "北京",
    },
  ]);
  const typelist = reactive([
    {
      value: 1,
      lable: "待签收",
    },
    {
      value: 2,
      lable: "签收中",
    },
    {
      value: 3,
      lable: "已签收",
    },
  ]);
  // 校验规则
  const rules = reactive({
    name: [
      {
        required: true,
        message: "Please input Activity name",
        trigger: "blur",
      },
      { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
    address: [
      {
        required: true,
        message: "Please input Activity name",
        trigger: "blur",
      },
      { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
    codeNum: [
      {
        required: true,
        message: "Please input Activity name",
        trigger: "blur",
      },
      { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
  });
  // 搜索
  const reachInfo = async (formEl) => {
    console.log(formEl);
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log("submit!");
      } else {
        console.log("error submit!", fields);
      }
    });
  };
  // 重置
  const resetInfo = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
  };
  // 展开更多搜索事件
  function searchInfo() {
    isChangeIcon.value = !isChangeIcon.value;
  }
  //切换tabs更新数据
  function handelChange() {
    getDateList();
  }
  //更新数据
  function getDateList() {
    console.log("666");
  }
  return {
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
  };
}
