<script setup>
import { ref } from 'vue';

const text = ref('## 1111111111')
</script>

<template>
  <div class="check">
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<style scoped>

</style>