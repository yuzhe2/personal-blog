<script setup>
import articleItem from '@/components/article/index.vue'
const props = defineProps({
  list: Array
})
</script>

<template>
  <div class="main">
    <article-item
      v-for="(item, index) in props.list"
      :key="index"
      v-bind="item"
    ></article-item>
  </div>
</template>

<style scoped>

</style>