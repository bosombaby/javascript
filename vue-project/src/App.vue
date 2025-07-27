<template>
  <div>
    <custom-timer-btn></custom-timer-btn>
    <span>X：{{ position.x }}</span>
    <span>Y：{{ position.y }}</span>
  </div>
</template>

<script setup>
import customTimerBtn from "./components/custom-timer-btn.vue";

import useMouseMove from "./hooks/useMouseMove";

const { position } = useMouseMove();
</script>
