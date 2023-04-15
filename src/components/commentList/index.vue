<script setup>
import { reactive, ref } from 'vue';
import commentItem from './child/commentItem.vue';
import { getCommentList, addComment } from '@/api/comment/index'
import { useUser } from '@/store/index'
import { ElMessage } from "element-plus";
const user = useUser()
const { nickname } = user

const props = defineProps({
  articleId: String
})
const emits = defineEmits(['commentSuccess'])
defineExpose({ handleAddTop })

let { data: commentData } = await getCommentList(props.articleId)


// 用来激活回复框 --- 一次评论及其子评论只能有一个回复框
const activeId = ref('')
const commentDataList = reactive(commentData)

// 激活回复框
function handleActiveArea (commentId) {
  activeId.value = commentId
}

function handleAddTop (data) {
  commentDataList.unshift(data)
}

// 添加评论
async function handleAddComment (payload) {
  let data = { ...payload, article: props.articleId }
  let { data: commentData, success } = await addComment(data)
  if (!success) return ElMessage.warning('自己不能回复自己的评论')
  let comment = {
    userId: commentData.userId,
    content: commentData.content,
    nickname,
    commentId: commentData.commentId,
    parentId: commentData.parentId,
    accordContent: commentData.accordId ? payload.accordContent : null,
  }
  commentDataList.find(val => val.commentId === comment.parentId).children.push({ ...comment, children: null })
  activeId.value = '' // 添加评论完成之后把回复框隐藏
  emits('commentSuccess')
}
</script>

<template>
  <div class="comment-list">
    <div class="comment" v-for="item in commentDataList" :key="item.commentId">
      <comment-item v-bind="item" :activeId="activeId" @activeReply="handleActiveArea" @publishComment="handleAddComment"></comment-item>
      <div class="sub-comment-list" v-if="item.children.length">
        <comment-item 
          class="sub-item"
          v-for="child in item.children"
          :key="child.commentId"
          :activeId="activeId"
          v-bind="child"
          @activeReply="handleActiveArea"
          @publishComment="handleAddComment"
        ></comment-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-list {
  padding-bottom: 8px;
  caret-color: transparent;
  .comment {
    margin-bottom: 20px;
  }
  .sub-comment-list {
    margin-top: 16px;
    padding: 16px;
    margin-left: 56px;
    background-color: rgba(247,248,250,.7);
    .sub-item:not(:first-child) {
      margin-top: 24px;
    }
  }
}
</style>