<script setup>
import { ref } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: undefined
  },
  value: {
    type: String,
    default: undefined
  },
  type: {
    type: String,
    default: "default"
  }
});
</script>
<template>
  <div
    class="flex status-dot justfity-between justfity-between"
    :class="type"
  >{{ text }} {{ value }}</div>
</template>
<style scoped>
.flex {
  display: flex;
}
.status-dot {
  position: relative;
}
.status-dot ::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 5px;
}
.justfity-between {
  justify-content: start;
}
.align-center {
  align-items: center;
}
</style>
