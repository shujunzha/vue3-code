<template>
  <div>
    1.默认插槽
    <br />
    <slot></slot>
    <br />
    <slot name="header"></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
</style>