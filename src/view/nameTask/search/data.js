import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
export default function Minxter() {
  const formSize = ref("default");
  const ruleFormRef = ref();
  const isChangeIcon = ref(false);
  const selectList = ref([]);
  const ruleForm = reactive({
    name: "",
    address: "",
    codeNum: "",
    startTime: "",
    endTime: "",
  });
  // tabs数组
  const citylist = ref([
    {
      value: 1,
      lable: "上海",
    },
    {
      value: 2,
      lable: "北京",
    },
  ]);
  const typelist = ref([
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
  const tableInfo = ref([
    {
      id: 0,
      prop: "date",
      label: "日期",
    },
    {
      id: 1,
      prop: "name",
      label: "姓名",
    },
    {
      id: 2,
      prop: "fileName",
      label: "文件名称",
    },
    {
      id: 3,
      prop: "codeNum",
      label: "批准号",
    },
    {
      id: 4,
      prop: "address",
      label: "地址",
    },
    {
      id: 5,
      prop: "status",
      label: "状态",
      isSlot: true,
    },
  ]);
  //tab表格数据
  const tableData = ref([
    {
      id: 1,
      name: "王刚",
      address: "北京",
      fileName: "监督文件",
      codeNum: "豫Q123",
      date: "2023-10-1",
      status: "待签收",
    },
    {
      id: 2,
      name: "黎明",
      address: "上海",
      fileName: "文明文件",
      codeNum: "豫Q456",
      date: "2023-1-1",
      status: "签收中",
    },
    {
      id: 3,
      name: "里斯",
      address: "上恩镇",
      fileName: "小说文件",
      codeNum: "豫Q999",
      date: "2023-5-1",
      status: "已签收",
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
  // 删除table单行数据
  function deleteRow(index) {
    tableData.value.splice(index, 1);
  }
  // 选择table选择框
  function handleSelectionChange(value) {
    selectList.value = value;
    console.log(selectList.value);
  }
  function delGroub() {
    if (selectList.value.length < 1) {
      ElMessage.info("请选择要批量删除的数据");
    } else {
      ElMessageBox.confirm("确认批量删除选中数据吗?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "成功删除",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "取消批量删除",
          });
        });
    }
  }
  return {
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
  };
}
