<template>
  <div>
    <button
      class="send-sms"
      :class="isStatus"
      @click="handleClick"
      ref="btnDom"
      :disabled="isClick"
    >
      {{ btnValue }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
// 实现一个发送短信的按钮控制逻辑 send click
// 效果是：一个按钮，text为发送，点击后置灰，text为10->0的倒计时，归0后，text重新变为发送，并且可再次点击

//判断当前的状态
const isStatus = ref("");
const btnValue = ref("发送");
const isClick = ref(false);
const btnDom = ref("");

//点击发送短信
let timer;
let handleClick = () => {
  isStatus.value = "btn-click";
  isClick.value = true;
  btnValue.value = 10;
  timer = setInterval(() => {
    btnValue.value--;
  }, 1000);
};

watch(btnValue, (newValue) => {
  if (newValue === 0) {
    clearInterval(timer);
    btnValue.value = "发送";
    isStatus.value = "";
    isClick.value = false;
  }
});
</script>

<style lang="scss" scoped>
.send-sms {
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  margin-top: 10px;
  background-color: pink;
}
.btn-click {
  background-color: gray;
}
</style>
