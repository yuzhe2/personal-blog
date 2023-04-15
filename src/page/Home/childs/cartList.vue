<script setup>
import { reactive, ref } from 'vue'

const sortList = reactive([
  {
    text: '关注',
    type: 'following'
  },
  {
    text: '前端',
    type: 'frontend'
  },
  {
    text: '后端',
    type: 'backend'
  },
  {
    text: '阅读人生',
    type: 'article'
  }
])

const activeNav = ref('')

const handleActiveType = function (type) {
  activeNav.value = type
}
</script>

<template>
  <div class="side-cart">
    <div 
      class="nav-item-wrap" 
      :class="activeNav === item.type ? 'active' : ''" 
      v-for="(item, index) in sortList" 
      :key="index"
      @click="handleActiveType(item.type)"
    >
      <span class="nav-item-text">{{ item.text }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-cart {
  margin-right: 20px;
  padding: 8px;
  width: 180px;
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  caret-color: transparent;
  .nav-item-wrap {
    padding: 10px 17px;
    text-align: center;
    cursor: pointer;
  }
  .nav-item-wrap.active {
    background-color: #eaf2ff;
    color: #1e80ff;
  }
  .nav-item-wrap:hover {
    background-color: #f7f8fa;
  }
}
</style>