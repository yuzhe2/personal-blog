<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/store'
import { storeToRefs } from 'pinia'

import trends from '@/components/trends/index.vue'

const router = useRouter()
const user = useUser()
const { nickname, portrait } = storeToRefs(user)

const searchVal = ref('')
const dialogVisible = ref(true)

function goHome () {
  console.log(33333333)
  router.push('/home')
}

const moreList = reactive([
  {
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/69704c654798bb27cffca68e5a79976e.svg',
    title: '写文章',
    fn: function () {
      router.push('/write')
    }
  },
  {
    icon: '	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/c225c20007c699a48fe9aa8a32be2ee6.svg',
    title: '发沸点',
    fn: function () {
      dialogVisible.value = true
    }
  },
  {
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/92ff1e17678887b64c952833d9d0dd0b.svg',
    title: '写笔记'
  },
  {
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/cf3f3dbcd5a32a7a4de5c7b834402cef.svg',
    title: '写代码'
  },
  {
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e1f3be67d18df501d0972acfed06c4d6.svg',
    title: '草稿箱'
  }
])
</script>

<template>
  <div class="header-wrap">
    <header class="header-box">
      <div class="container">
        <a href="javascript:;" class="logo" @click="goHome">个人博客系统</a>
        <nav class="header-nav">
          <ul class="nav-list">
            <li class="nav-item" @click="goHome">首页</li>
            <li class="nav-item">沸点</li>
          </ul>
          <div class="side-nav">
            <el-button class="creator-center" type="primary">
              <span class="content">创作者中心</span>
              <div class="more-mask"></div>
              <div class="more-list">
                <ul class="menu">
                  <li class="creator-item" v-for="(item, index) in moreList" :key="index" @click="item.fn() || null">
                    <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
                    <div class="title">{{ item.title }}</div>
                  </li>
                </ul>
              </div>
            </el-button>
            <el-input v-model="searchVal" placeholder="探索个人博客系统"></el-input>
            <div class="person-center">
              <el-avatar :src="portrait" />
            </div>
          </div>
        </nav>
      </div>
    </header>
    <el-dialog
      v-model="dialogVisible"
      title="发沸点"
      width="40%"
      custom-class="trend-dialog"
      :before-close="handleClose"
    >
      <trends></trends>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.header-wrap {
  height: 60px;
  .header-box {
    position: fixed;
    background-color: #fff;
    left: 0px;
    right: 0px;
    z-index: 999;
    .container {
      display: flex;
      align-items: center;
      .logo {
        margin: 0px 12px 0px 24px;
        padding: 16px 0px;
        font-size: 22px;
        color: #000;
        font-weight: bold;
        caret-color: transparent;
      }
      .header-nav {
        display: flex;
        justify-content: space-between;
        flex: 1;
        .nav-list {
          display: flex;
          align-items: center;
          margin: 0px;
          caret-color: transparent;
          .nav-item {
            padding: 0px 12px;
            cursor: pointer;
          }
        }
        .side-nav {
          display: flex;
          .creator-center {
            position: relative;
            height: 100%;
            border-radius: 3px;
            margin-right: 30px;
            .more-mask {
              transition: width .1s linear .5s;
              position: absolute;
              right: 0;
              top: 100%;
              width: 0;
              height: 30px;
              z-index: 9;
              opacity: 0;
            }
            &:hover {
              .more-mask {
                width: 100%;
                transition-delay: 0s;
              }
              .more-list {
                display: block;
              }
            }
            .more-list {
              display: none;
              position: absolute;
              background-color: #fff;
              border: 1px solid #e4e6eb;
              box-shadow: 0 0 24px rgba(81,87,103,.16);
              padding: 20px;
              top: 49.8px;
              right: 0px;
              .menu {
                display: flex;
                .creator-item {
                  width: 72px;
                  height: 72px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-wrap: wrap;
                  .icon {
                    width: 40px;
                    height: 40px;
                    background-position-x: center;
                    background-position-y: center;
                  }
                  .title {
                    font-size: 14px;
                    line-height: 24px;
                    color: #515767;
                  }
                }
              }
            }
          }
          .person-center {
            margin: 0px 20px 0px 10px;
          }
        }
      }
    }
  }
}
::v-deep .trend-dialog {
  .el-dialog__body {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .dialog-footer {
    width: 92px
  }
}
</style>