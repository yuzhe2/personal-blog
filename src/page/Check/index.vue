<script setup>
import { onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import commentList from '@/components/commentList/index.vue'
import { addComment } from '@/api/comment/index'
import { getArticleDetail, addView, likeArticle } from '@/api/article/index'
import { useUser } from '@/store/index'
import { ElMessage } from 'element-plus'
import { ChatLineSquare, Star, Reading } from '@element-plus/icons-vue'
const user = useUser()
const { nickname, portrait: userPort } = user

const text = ref('')
const replyVal = ref('')

const route = useRoute()
let articleId = route.params.articleId

// 当在页面上停留了5秒钟的话才算一次阅读量
let viewTimer = setTimeout(() => {
  addView(articleId)
}, 3000)
onUnmounted(() => {
  clearTimeout(viewCount)
})

let commentNum = ref(0) // 文章的评论量
let title = ref('') // 文章的标题
let createTime = ref('') // 文章的创建时间
let viewCount = ref(0) // 文章的游览量
let portrait = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png') // 文章作者的头像
let authorName = ref('') // 作者名称
let likeCount = ref('') // 点赞量
let isLike = ref(false) // 是否已经点赞
let isComment = ref(false) // 是否已经评论
const comment = ref(null) // 评论列表组件
getArticleDetail(articleId).then(({ data: articleDetail }) => {
  commentNum.value = articleDetail.commentNum
  text.value = articleDetail.content
  title.value = articleDetail.title
  createTime.value = new Date(articleDetail.createTime).toLocaleString()
  viewCount.value = articleDetail.viewCount
  portrait.value = articleDetail.portrait
  authorName.value = articleDetail.nickname
  likeCount.value = articleDetail.likeCount
  isLike.value = articleDetail.isLike
  isComment.value = articleDetail.isComment
})

// 评论
async function handlePublishComment () {
  let { success, data } = await addComment({
    accordId: null,
    parentId: null,
    article: articleId,
    content: replyVal.value
  })
  comment.value.handleAddTop({ ...data, nickname, children: [] })
  replyVal.value = ''
  handleCommentSuccess()
}

// 点赞
async function handleLikeArticle () {
  if (!isLike.value) {
    let { success } = await likeArticle(articleId)
    if (!success) return
    isLike.value = true
    likeCount.value++
  }
}

// 评论成功
function handleCommentSuccess () {
  ElMessage.success('评论成功')
  commentNum.value++
  isComment.value = true
}
</script>

<template>
  <div class="view">
    <main class="container">
      <div class="article-panel">
        <ul class="panel-wrap">
          <li class="panel-item" :class="isLike ? 'active' : ''" :badge="likeCount" @click="handleLikeArticle">
            <el-icon class="icon"><Reading /></el-icon>
          </li>
          <li class="panel-item" :class="isComment  ? 'active' : ''" :badge="commentNum">
            <el-icon class="icon"><ChatLineSquare /></el-icon>
          </li>
          <li class="panel-item" :badge="22">
            <el-icon class="icon"><Star /></el-icon>
          </li>
        </ul>
      </div>
      <div class="article-area">
        <div class="article-header">
          <h2 class="title">{{ title }}</h2>
          <div class="author-info-block">
            <el-avatar :src="portrait" />
            <div class="author-info-box">
              <div class="author-name">
                <span class="name">{{ authorName }}</span>
              </div>
              <div class="meta-box">
                <span class="time">{{ createTime }}</span>
                <span class="views-count">{{ '阅读量&nbsp;' + viewCount }}</span>
              </div>
            </div>
          </div>
        </div>
        <article class="article-content">
          <v-md-preview :text="text"></v-md-preview>
        </article>
        <div class="comment-container">
          <div class="user-comment">
            <div class="title">评论</div>
            <div class="content">
              <el-avatar :src="userPort" />
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
          <div class="title" v-if="commentNum">
            <span class="num">全部评论&nbsp;{{ commentNum }}</span>
            <div class="sort">
              <span class="item active">最新</span>
              <span class="item">最热</span>
            </div>
          </div>
          <suspense>
            <comment-list ref="comment" :articleId="articleId" :commentSuccess="handleCommentSuccess"></comment-list>
          </suspense>
        </div>
      </div>
      <div class="sidebar">
        <div class="author-block">
          <div class="user-wrap">
            <div class="user-item">
              <el-avatar :src="portrait" />
              <span class="info-box">{{ authorName }}</span>
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
          position: relative;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          margin-bottom: 20px;
          border-radius: 24px;
          background-color: #fff;
          &.active {
            .icon {
              color: #1e80ff;
            }
            &::after {
              background-color: #1e80ff;
            }
          }
          &::after {
            content: attr(badge);
            position: absolute;
            top: 0;
            left: 75%;
            height: 17px;
            line-height: 17px;
            padding: 0 5px;
            border-radius: 9px;
            font-size: 11px;
            text-align: center;
            white-space: nowrap;
            background-color: #c2c8d1;
            color: #fff;
          }
          .icon {
            font-size: 24px;
            color: #8a919f;
          }
        }
      }
    }
    .article-area {
      flex: 1;
      margin: 0px 30px;
      .article-header {
        padding: 0px 32px;
        background-color: #fff;
        padding-top: 32px;
        .title {
          margin-bottom: 20px;
        }
        .author-info-block {
          display: flex;
          .author-info-box{
            margin-left: 20px;
            .author-name {
              color: #515767;
            }
            .meta-box {
              font-size: 14px;
              color: #8a919f;
              margin-top: 6px;
              .time {
                margin-right: 10px;
              }
            }
          }
        }
      }
      .article-content {
        background-color: #fff;
        caret-color: transparent;
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
      caret-color: transparent;
      .user-wrap {
        border-bottom: 1px solid #e4e6eb;
        .user-item {
          display: flex;
          align-items: center;
          .info-box {
            margin-left: 12px;
          }
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