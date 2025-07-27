<template>
  <div v-if="visible" class="custom-loading-mask">
    <div class="custom-loading-spinner"></div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
const visible = ref(false);

function show() {
  visible.value = true;
}
function hide() {
  visible.value = false;
}

defineExpose({ show, hide });
</script>

<style scoped>
.custom-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.custom-loading-spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-top: 5px solid #409eff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
