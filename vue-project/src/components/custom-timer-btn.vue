<template>
  <button
    class="timer-btn"
    :class="{ 'timer-btn--disabled': isTime }"
    :disabled="isTime"
    @click="handleTimeClick"
  >
    {{ timeInfo }}
  </button>
</template>

<script setup>
import { ref, onUnmounted } from "vue";

const isTime = ref(false);
const timeInfo = ref("开始计时");
let timer = null;

// 处理点击事件
const handleTimeClick = () => {
  if (timer) return; // 防止重复点击

  let count = 5;
  isTime.value = true;

  timer = setInterval(() => {
    if (count < 1) {
      clearTimer();
      return;
    }
    timeInfo.value = `${count}s`;
    count--;
  }, 1000);
};

// 清理定时器
const clearTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  isTime.value = false;
  timeInfo.value = "开始计时";
};

// 组件卸载时清理定时器
onUnmounted(() => {
  clearTimer();
});
</script>

<style lang="scss" scoped>
.timer-btn {
  padding: 12px 24px;
  border: 2px solid #409eff;
  border-radius: 8px;
  background: linear-gradient(135deg, #409eff, #67c23a);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
  outline: none;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(64, 158, 255, 0.4);
    background: linear-gradient(135deg, #67c23a, #409eff);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(64, 158, 255, 0.3);
  }

  &--disabled {
    background: linear-gradient(135deg, #909399, #c0c4cc);
    border-color: #dcdfe6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 6px rgba(144, 147, 153, 0.2);

    &:hover {
      transform: none;
      box-shadow: 0 2px 6px rgba(144, 147, 153, 0.2);
    }
  }
}
</style>
