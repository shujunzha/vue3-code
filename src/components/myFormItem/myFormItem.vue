
<template>
  <div class="myForm">
    <template v-for="(item,index) of formOpts">
      <slot v-if="item.slot" :name="item.slot" :item="item" :index="index"></slot>
      <el-col v-else :span="item.span||8">
        <el-form-item v-bind="item" :label="item.label" :prop="item.prop">
          <textPopover
            v-if="item.textPopover"
            :label="item.label || item.textPopover"
            :contant="item.textPopover"
          ></textPopover>

          <slot v-if="item.flotSlot" :name="item.flotSlot" :item="item" :index="index"></slot>
          <el-input
            v-else
            :type="item.type"
            :disabled="item.disabled"
            :maxlength="item.maxLength"
            :show-word-limit="item.showNum"
            v-model="curForm[item.prop]"
            :placeholder="`请输入${item.label}`"
            clearable
          />
        </el-form-item>
      </el-col>
    </template>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import textPopover from "@/components/textPopover/index.vue";
const demo = ref(0);
const props = defineProps({
  span: {
    type: Number || String
  },
  curForm: {
    type: Object
  },
  formOpts: {
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.myForm {
  display: flex;
  flex-wrap: wrap;
}
</style>