<script setup>
import toolCase from "@/components/toolCase/index.vue";
import headerNav from '@/layout/HeadNavBar/index.vue'
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()
const showHeader = ref(true)

watch(route, (newVal) => {
  let hidden = newVal.meta.hidden
  if (hidden) showHeader.value = false
  else showHeader.value = true
})
</script>

<template>
  <header-nav v-if="showHeader"></header-nav>
  <router-view></router-view>
  <tool-case></tool-case>
</template>

<style scoped></style>
