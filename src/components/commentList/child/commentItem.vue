<script setup>
import { Pointer, ChatDotSquare } from "@element-plus/icons-vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  userId: String,
  content: String,
  nickname: String,
  commentId: String,
  parentId: String,
  accordContent: String,
  children: Array,
  activeId: String,
});

const emits = defineEmits(["activeReply", "publishComment"]);

// 回复的值
const replyVal = ref("");

const handleReplyStatus = function () {
  emits("activeReply", props.commentId);
};

const handlePublishComment = function () {
  let reply = replyVal.value.trim();
  if (reply.length === 0) {
    return ElMessage.warning("请不要输入空值");
  } else {
    emits("publishComment", {
      content: reply,
      parentId: props.children === null ? props.parentId : props.commentId,
      accordId: props.children === null ? props.commentId : null,
      accordContent: props.content,
    });
  }
};
</script>

<template>
  <div class="comment">
    <div class="user-popover">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <div class="comment-main">
      <div class="comment-box">
        <div class="user-box">
          <span class="name">{{ props.nickname }}</span>
        </div>
        <div class="content">{{ props.content }}</div>
        <div class="parent-content" v-if="props.accordContent">
          {{ props.accordContent }}
        </div>
        <div class="action-box">
          <div class="item">
            <Pointer class="icon" />
            <span class="num">点赞</span>
          </div>
          <div class="item" @click="handleReplyStatus">
            <ChatDotSquare class="icon" />
            <span class="num">3</span>
          </div>
        </div>
      </div>
      <div class="comment-form" v-if="props.activeId === props.commentId">
        <el-input
          v-model="replyVal"
          :rows="2"
          type="textarea"
          :placeholder="`回复${props.nickname}`"
        />
        <div class="submit">
          <el-button
            type="primary"
            class="submit-btn"
            @click="handlePublishComment"
            >发布</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  display: flex;
  .comment-main {
    flex: 1;
    margin-left: 16px;
    .content {
      font-size: 14px;
      color: #515767;
      margin: 8px 0px;
    }
    .parent-content {
      padding: 0px 12px;
      font-size: 14px;
      color: #8a919f;
      background-color: #f2f3f5;
      border: 1px solid #e4e6eb;
      line-height: 36px;
      margin-bottom: 8px;
    }
    .comment-form {
      margin-top: 12px;
      .submit {
        margin-top: 8px;
        text-align: right;
      }
    }
    .action-box {
      display: flex;
      .item {
        display: flex;
        align-items: center;
        margin-right: 16px;
        cursor: pointer;
        .icon {
          width: 16px;
          height: 16px;
          margin-right: 3px;
        }
        .num {
          width: 40px;
        }
      }
    }
  }
}
</style>
