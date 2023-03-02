<script setup>
import utilItem from "../item.vue";
</script>

<template>
  <util-item title="写文章">
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
