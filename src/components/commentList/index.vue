<script setup>
import { ref } from 'vue';
import commentItem from './child/commentItem.vue';
import commentData from './data/mock'

// 用来激活回复框 --- 一次评论及其子评论只能有一个回复框
const activeId = ref('')

// 激活回复框
function handleActiveArea (commentId) {
  activeId.value = commentId
}
</script>

<template>
  <div class="comment-list">
    <div class="comment" v-for="item in commentData" :key="item.commentId">
      <comment-item v-bind="item" :activeId="activeId" @activeReply="handleActiveArea"></comment-item>
      <div class="sub-comment-list">
        <comment-item 
          class="sub-item"
          v-for="child in item.children"
          :key="child.commentId"
          :activeId="activeId"
          v-bind="child"
          @activeReply="handleActiveArea"
        ></comment-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-list {
  padding-bottom: 8px;
  .sub-comment-list {
    margin-top: 16px;
    padding: 16px;
    margin-left: 56px;
    background-color: #f1f1f1;
    .sub-item:not(:first-child) {
      margin-top: 24px;
    }
  }
}
</style>