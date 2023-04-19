<script setup>
import { ref } from 'vue';
import emoji from '../emoji/index.vue'

const isActive = ref(false)
const keepActive = ref(false)
const editorStr = ref('')
const richEditor = ref(null)
// 事件的触发顺序 --- mousedown->（other）blur-> mouseup -> click
function handleBlurEditor () {
  if (keepActive.value) return
  isActive.value = false
  keepActive.value = false
}

function handleGetEmoji (emojiChar) {
  editorStr.value = richEditor.value.innerText + emojiChar
}

function handleKeepStatus () {
  keepActive.value = true
}
</script>

<template>
  <div class="editor-body" :class="isActive ? 'active' : ''">
    <div 
      ref="richEditor" 
      class="rich-editor" 
      contenteditable="true"  
      @focus="isActive = true" 
      @blur="handleBlurEditor" 
      v-html="editorStr"
    >
    </div>
  </div>
  <div class="pin-editor-bottom">
    <emoji @emoji="handleGetEmoji" @mousedown.native="handleKeepStatus"></emoji>
    <el-button type="primary" class="dialog-footer" @click="moveEnd">发布</el-button>
  </div>
</template>

<style lang="scss" scoped>
.editor-body {
  padding: 5px 12px;
  background-color: #f2f3f5;
  border: 1px solid #f2f3f5;
  border-radius: 4px;
  &.active {
    border-color: #1e80ff;
    background-color: #fff;
  }
  .rich-editor {
    color: #252933;
    outline: none;
    min-height: 80px;
  }
}
.pin-editor-bottom {
  display: flex;
  justify-content: space-between;
  padding: 19px 20px 20px;
  align-items: center;
}
</style>