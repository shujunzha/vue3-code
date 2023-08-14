import { ref, reactive } from "vue";

export default function Minxter() {
  const formSize = ref("default");
  const ruleFormRef = ref();

  const ruleForm = reactive({
    name: "",
    address: "",
    codeNum: "",
  });
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
  const resetInfo = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
  };
  return {
    ruleForm,
    rules,
    formSize,
    ruleFormRef,
    reachInfo,
    resetInfo,
  };
}
