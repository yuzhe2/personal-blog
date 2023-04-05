<script setup>
import { ref } from 'vue'
import commentList from '@/components/commentList/index.vue'

const text = ref('22222222222')
</script>

<template>
  <div class="view">
    <main class="container">
      <div class="article-panel">
        <ul class="panel-wrap">
          <li class="panel-item">
            <span>点赞</span>
          </li>
          <li class="panel-item">
            <span>评论</span>
          </li>
          <li class="panel-item">
            <span>收藏</span>
          </li>
        </ul>
      </div>
      <div class="article-area">
        <article class="article-content">
          <v-md-preview :text="text"></v-md-preview>
        </article>
        <div class="comment-container">
          <div class="title">
            <span class="num">全部评论&nbsp;104</span>
            <div class="sort">
              <span class="item active">最新</span>
              <span class="item">最热</span>
            </div>
          </div>
          <comment-list></comment-list>
        </div>
      </div>
      <div class="sidebar">
        <div class="author-block">
          <div class="user-wrap">
            <div class="user-item">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <span class="info-box">来自风平浪静</span>
            </div>
            <div class="operate-btn">
              <el-button type="primary" class="btn-item">关注</el-button>
              <el-button class="btn-item">私信</el-button>
            </div>
          </div>
          <div class="stat-wrap">
            <div class="stat-item">
              <span>获得点赞&nbsp;5</span>
            </div>
            <div class="stat-item">
              <span>文章被阅读&nbsp;5</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.view {
  height: calc(100vh - 60px);
  padding-top: 20px;
  box-sizing: border-box;
  background-color: #f1f1f1;
  .container {
    display: flex;
    width: 100%;
    margin: 0px auto;
    max-width: 1140px;
    justify-content: space-between;
    align-items: flex-start;
    .article-panel {
      width: 48px;
      .panel-wrap {
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        width: 48px;
        top: 134px;
        .panel-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          margin-bottom: 20px;
          border-radius: 24px;
          background-color: #fff;
        }
      }
    }
    .article-area {
      flex: 1;
      padding-top: 10px;
      margin: 0px 30px;
      .article-content {
        background-color: #fff;
      }
      
      .comment-container {
        margin-top: 20px;
        padding: 0px 32px;
        background-color: #fff;
        .title {
          display: flex;
          justify-content: space-between;
          .num {
            font-size: 18px;
            font-weight: bold;
          }
          .sort {
            background-color: #f1f1f1;
            padding: 3px;
            .item {
              padding: 2px 12px;
              cursor: pointer;
              &.active {
                color: #1e80ff;
                background-color: #fff;
              }
            }
          }
        }
      }
    }
    .sidebar {
      background-color: #fff;
      padding: 20px;
      .user-wrap {
        border-bottom: 1px solid #e4e6eb;
        .user-item {
          display: flex;
          align-items: center;
        }
        .operate-btn {
          margin: 17px 0px;
          .btn-item {
            width: 122px;
          }
        }
      }
      .stat-wrap {
        .stat-item {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>