<script setup>
import { ref } from 'vue'
import commentList from '@/components/commentList/index.vue'
import { addComment } from '@/api/comment/index'
import { useUser } from '@/store/index'
import { ElMessage } from "element-plus";
const user = useUser()
const { nickname } = user

const text = ref('22222222222')
const replyVal = ref('')

async function handlePublishComment () {
  let { success, data } = await addComment({
    accordId: null,
    parentId: null,
    article: '1',
    content: replyVal.value
  })
  comment.value.handleAddTop({ ...data, nickname, children: [] })
  replyVal.value = ''
}

const comment = ref(null)
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
          <div class="user-comment">
            <div class="title">评论</div>
            <div class="content">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <div class="form-box">
                <el-input
                  v-model="replyVal"
                  :rows="2"
                  type="textarea"
                />
                <div class="submit">
                  <el-button
                    type="primary"
                    class="submit-btn"
                    @click="handlePublishComment"
                  >
                    发布
                  </el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="title">
            <span class="num">全部评论&nbsp;104</span>
            <div class="sort">
              <span class="item active">最新</span>
              <span class="item">最热</span>
            </div>
          </div>
          <suspense>
            <comment-list ref="comment"></comment-list>
          </suspense>
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
  overflow: auto;
  padding-top: 20px;
  padding-bottom: 20px;
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
        .user-comment {
          margin-bottom: 20px;
          .title {
            font-size: 18px;
            line-height: 30px;
            font-weight: 600;
            color: #252933
          }
          .content {
            display: flex;
            .form-box {
              flex: 1;
              margin-left: 20px;
              .submit {
                margin-top: 10px;
                text-align: right;
              }
            }
          }
        }
        .title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
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