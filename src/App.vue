<script setup>
import toolCase from "@/components/toolCase/index.vue";
import headerNav from '@/layout/HeadNavBar/index.vue'
</script>

<template>
  <header-nav></header-nav>
  <router-view></router-view>
  <tool-case></tool-case>
</template>

<style scoped></style>
