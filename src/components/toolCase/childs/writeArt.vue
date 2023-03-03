<script setup>
import utilItem from "../item.vue";
import { useRouter } from 'vue-router'
const router = useRouter()

function goToWrite () {
  router.push('/write')
}
</script>

<template>
  <util-item title="写文章" @click="goToWrite">
    <span class="svg"></span>
  </util-item>
</template>

<style scoped>
.svg {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(@/assets/comps/utilcase/write.svg);
  background-position: center;
}
</style>
