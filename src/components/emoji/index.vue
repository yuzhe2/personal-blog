<script setup>
import emojiJson from './emoji.json'

const emits = defineEmits(['emoji'])

function handleEmitChar (char) {
  emits('emoji', char)
}
</script>

<template>
  <div class="emoji-container">
    <el-popover
      placement="bottom-start"
      :width="194"
      trigger="click"
    >
      <div class="picker">
        <div class="picker-body">
          <div 
            class="picker-item" 
            v-for="(item, index) in emojiJson" 
            :key="index"
            @click="handleEmitChar(item.char)"
          >
          <el-tooltip :content="item.name" placement="top">
              <span class="char">{{ item.char }}</span>
          </el-tooltip>
          </div>
        </div>
      </div>
      <template #reference>
        <span class="title">表情</span>
      </template>
    </el-popover>
  </div>
</template>

<style scoped lang="scss">
.picker-body {
  display: flex;
  flex-wrap: wrap;
  caret-color: transparent;
  .picker-item {
    cursor: pointer;
    margin-right: 12px;
    margin-bottom: 8px;
    .char {
      font-size: 24px;
    }
  }
  .picker-item:nth-child(4n) {
    margin-right: 0px;
  }
}
.title {
  cursor: pointer;
  caret-color: transparent;
}
</style>