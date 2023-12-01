<template>
  <div>
    <h2 class="title">
      <!-- 带有 name 的属性的插槽，称为具名插槽 -->
      <slot name="cardTitle"></slot>
    </h2>
    <div class="subtitle">
      <slot name="cardSubtitle"></slot>
    </div>
    <!-- <div class="content">
      <slot name="cardContent"></slot>
    </div>-->
    <div class="action">
      <!-- 定义一个插槽 -->
      <!-- 插槽的默认内容，只有没有提供内容时，才会显示 -->
      <!-- 没有 name 属性的插槽称为默认插槽，会有一个隐含的名字：default -->
      <slot>卡片功能区域</slot>
    </div>
    <div class="content">
      <!-- 带有数据的插槽称之为作用域插槽 -->
      <!-- <slot>插槽上的 name 是一个Vue特别保留的属性，不会在作用域插槽中访问到 -->
      <slot name="cardContent" :cardBlog="blog" :cardAuthor="author"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const demo = ref(0);
let blog = reactive({
  title: "Java 如何实现上传文件",
  time: "2021-12-25 15:33:25"
});
let author = ref("爱思考的飞飞");
</script>

<style lang="scss" scoped>
.chip {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  /* border-radius: 4px;
  color: #606266;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  height: 24px;
  line-height: 24px; */
}
</style>