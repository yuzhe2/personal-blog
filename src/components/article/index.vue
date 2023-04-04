<script setup>
const props = defineProps({
  createTime: String,
  type: Array,
  title: String,
  descriptor: String,
  visitNum: Number,
  likeNum: Number
})
</script>

<template>
  <div class="article">
    <div class="header">
      <span>一个好鹅</span>
      <span class="date">{{ props.createTime }}</span>
      <div class="type">
        <el-tag
          v-for="(item, index) in props.type"
          :key="index"
          class="tag"
        >
          {{ item }}
        </el-tag>
      </div>
    </div>
    <div class="main">
      <h3 class="title">{{ props.title }}</h3>
      <p class="descriptor">{{ props.descriptor }}</p>
    </div>
    <ul class="action-list">
      <li class="item view">
        <i></i>
        <span>{{ props.visitNum }}</span>
      </li>
      <li class="item like">
        <i></i>
        <span>{{ props.likeNum }}</span>
      </li>
      <li class="item comment">
        <i></i>
        <span>评论</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.article {
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  background-color: #fff;

  .header {
    display: flex;
    align-items: center;
    .date {
      padding: 0px 10px;
      margin: 0px 10px;
      position: relative;

      &::before,
      &::after {
        content: " ";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 1px;
        height: 14px;
        background: red;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }
    }

    .tag {
      margin-right: 5px;
      cursor: pointer;
    }
  }

  .main {
    .descriptor{
      margin: 10px 0px;
      display: -webkit-box;
      color: #86909c;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .title {
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
        background-image: url('@/assets/comps/articles/view.png');
      }
    }

    .like {
      i {
        background-image: url('@/assets/comps/articles/like.png');
      }
    }

    .comment {
      i {
        background-image: url('@/assets/comps/articles/comment.png');
      }
    }
  }
}
</style>