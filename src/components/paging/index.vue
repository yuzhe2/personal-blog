<script setup>
import { computed, ref, watch } from 'vue';

const emit = defineEmits(['changePage'])

const total = 20,
  currentNum = ref(1)

const pageList = computed(() => {
  if (total < 3) return []
  if (total < 7) {
    let arr = new Array(total).fill(0).map((val, idx) => idx + 1)
    arr.splice(0, 1)
    arr.splice(arr.length - 1, 1)
    return arr
  }
  if (currentNum.value - 1 < 5) {
    return [2, 3, 4, 5, 6]
  } else if (total - currentNum.value <= 5) {
    return [total - 5, total - 4, total - 3, total - 2, total - 1]
  } else {
    let cur = currentNum.value
    return [cur - 2, cur - 1, cur, cur + 1, cur + 2]
  }
})

const firstShow = computed(() => {
  if (total <= 7) return false
  return currentNum.value - 1 >= 5
})

const endShow = computed(() => {
  if (total <= 7) return false
  if (total > 7 && total <= 10) {
    return currentNum.value < 6
  } 
  return total - currentNum.value > 5
})

watch(currentNum, (newVal) => {
  emit('changePage', newVal)
})

function handleClickPage (pageNum) {
  currentNum.value = pageNum
}
</script>

<template>
  <div class="page-wrap">
    <ul class="pages">
      <li class="page-item prev" v-show="currentNum !== 1">
        <button @click="currentNum--">上一页</button>
      </li>
      <li
        class="page-item first"
        :class="currentNum === 1 ? 'active' : ''"
        @click="handleClickPage(1)"
        v-show="!(total < 2)"
      >
        <button>1</button>
      </li>
      <strong v-show="firstShow">...</strong>
      <li
        v-for="(item, index) in pageList"
        :key="index"
        class="page-item"
        :class="currentNum === item ? 'active' : ''"
        @click="handleClickPage(item)"
      >
        <button>{{ item }}</button>
      </li>
      <strong v-show="endShow">...</strong>
      <li class="page-item last" :class="currentNum === total ? 'active' : ''" @click="handleClickPage(total)">
        <button>{{ total }}</button>
      </li>
      <li class="page-item next" v-show="currentNum !== total">
        <button @click="currentNum++">下一页</button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.page-wrap {
  .page-item {
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 700;
    vertical-align: middle;

    button {
      min-width: 17px;
      height: 40px;
      cursor: pointer;
      outline: none;
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #ddd;
      transition: all .2s;
      padding: 0 13px;
    }
  }

  .active button,
  button:hover {
    background: #00a1d6;
    color: #fff;
    border: 1px solid #00a1d6;
  }


  strong {
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    margin: 0 2px;
    padding: 0 10px;
  }
}
</style>