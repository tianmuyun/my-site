<template>
  <p>
    X: <span class="num">{{ mouseX }}</span
    >px
  </p>
  <p>
    Y: <span class="num">{{ mouseY }}</span
    >px
  </p>
</template>

<script setup>
import { onMounted, ref } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

// 监听鼠标移动事件
onMounted(() => {
  window.addEventListener("mousemove", updateMousePosition);
});
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
  background-color: antiquewhite;
  font-family: monospace;
  font-size: 20px;
}
.num {
  display: inline-block; /* 确保 span 元素能够设置宽度 */
  min-width: 60px; /* 确保数字占据固定宽度，调整这个值来适应不同长度的数字 */
  text-align: right; /* 让数字右对齐 */
}
</style>
