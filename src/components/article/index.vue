<script setup>
import { formatDate } from '@/utils/format'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  createTime: String,
  type: Array,
  title: String,
  description: String,
  viewCount: Number,
  likeCount: Number,
  articleId: String,
  commentCount: Number,
  sortList: Array,
  author: String
});

function jumpArticleDetail () {
  router.push(`/check/${props.articleId}`)
}
</script>

<template>
  <div class="article" @click="jumpArticleDetail">
    <div class="container">
      <div class="header">
        <span class="author">{{ author }}</span>
        <div class="date">{{ formatDate(props.createTime) }}</div>
        <div class="type">
          <el-tag v-for="(item, index) in props.sortList" :key="index" class="tag">
            {{ item.text }}
          </el-tag>
        </div>
      </div>
      <div class="main">
        <h3 class="title">{{ props.title }}</h3>
        <p class="descriptor">{{ props.description }}</p>
      </div>
      <ul class="action-list">
        <li class="item view">
          <i></i>
          <span>{{ props.viewCount }}</span>
        </li>
        <li class="item like">
          <i></i>
          <span>{{ props.likeCount }}</span>
        </li>
        <li class="item comment">
          <i></i>
          <span>评论{{ commentCount }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article {
  padding: 10px 20px 0px;
  box-sizing: border-box;
  background-color: #fff;
  caret-color: transparent;
  cursor: pointer;

  .container {
    border-bottom: 1px solid #e5e6eb;
  }

  .header {
    display: flex;
    align-items: center;
    .author {
      color: #515767;
      font-size: 13px;
    }
    .date {
      padding: 0px 10px;
      margin: 0px 10px;
      position: relative;
      font-size: 13px;
      color: #8a919f;

      &::before,
      &::after {
        content: " ";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 1px;
        height: 14px;
        background: #e5e6eb;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }
    }

    .tag {
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .main {
    .descriptor {
      margin: 10px 0px;
      display: -webkit-box;
      color: #86909c;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .title {
      font-size: 16px;
      color: #1d2129;
      margin: 10px 0px;
    }
  }

  .action-list {
    display: flex;
    margin: 10px 0px;

    .item {
      margin-right: 20px;
      display: flex;
      align-items: center;

      i {
        display: block;
        width: 16px;
        height: 16px;
        background-size: 100%;
        margin-right: 4px;
      }
    }

    .view {
      i {
        background-image: url("@/assets/comps/articles/view.png");
      }
    }

    .like {
      i {
        background-image: url("@/assets/comps/articles/like.png");
      }
    }

    .comment {
      i {
        background-image: url("@/assets/comps/articles/comment.png");
      }
    }
  }
}
</style>
