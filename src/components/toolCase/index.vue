<script setup>
import toTop from './childs/toTop.vue'
import writeArt from './childs/writeArt.vue'
import { useShow } from './show'

const isShow = useShow()
</script>

<template>
  <Transition>
    <div class="util-case" v-show="isShow">
      <write-art></write-art>
      <to-top></to-top>
    </div>
  </Transition>
</template>

<style scoped>
.util-case {
  position: fixed;
  right: 25px;
  bottom: 30px;
}

.v-enter-active,
.v-leave-active {
  transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100px);
}
</style>
