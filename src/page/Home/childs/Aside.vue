<script setup>
import userCard from '@/components/userCard/index.vue'
import webStat from '@/components/webStat/index.vue'
</script>

<template>
  <div class="minor-area">
    <user-card></user-card>
    <web-stat></web-stat>
  </div>
</template>

<style scoped lang="scss">
.minor-area {
  width: 240px;
  margin-left: 20px;
}
</style>