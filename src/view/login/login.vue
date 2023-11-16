<template>
  <div>
    <div class="login-container">
      <div class="login-title">欢迎登陆后台管理系统</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名">
            <template #prepend>
              <el-button :icon="User"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            placeholder="请输入密码"
            @keyup.enter="submitForm(ruleFormRef)"
          >
            <template #prepend>
              <el-button :icon="Lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登陆</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, reactive } from "vue";
import { Lock, User } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const formSize = ref("default");
const ruleFormRef = ref();
const router = useRouter();
const ruleForm = reactive({
  name: "admin",
  password: "123456"
});
const rules = reactive({
  name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 9, message: "Length should be 3 to 9", trigger: "blur" }
  ]
});
const submitForm = async formEl => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success("登陆成功");
      localStorage.setItem("login_user", ruleForm.name);
      router.push("/farmery");
    } else {
      ElMessage.error("登陆失败");
      return false;
    }
  });
};
const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
  
  <style lang="scss" scoped>
</style>