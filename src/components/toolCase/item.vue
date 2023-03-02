<script setup>

</script>

<template>
  <div class="util-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.util-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
}
</style>