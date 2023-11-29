<template>输入框C：<input type="text" v-model="inputValue" /></template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

// 使用store
import { useInputStore } from "./../store/index";
const inputStore = useInputStore();

const { inputValue } = storeToRefs(inputStore);

console.log(inputValue.value);
</script>

<style lang="scss" scoped></style>
