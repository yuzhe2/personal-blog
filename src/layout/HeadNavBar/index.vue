<script setup>
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'

const searchVal = ref('')
</script>

<template>
  <div class="header-wrap">
    <header class="header-box">
      <div class="container">
        <a href="javascript:;" class="logo">个人博客系统</a>
        <nav class="header-nav">
          <ul class="nav-list">
            <li class="nav-item">首页</li>
            <li class="nav-item">沸点</li>
          </ul>
          <div class="side-nav">
            <el-input v-model="searchVal" placeholder="探索个人博客系统"></el-input>
            <div class="person-center">
              <el-avatar :icon="UserFilled" />
            </div>
          </div>
        </nav>
      </div>
    </header>
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
      }
      .header-nav {
        display: flex;
        justify-content: space-between;
        flex: 1;
        .nav-list {
          display: flex;
          align-items: center;
          margin: 0px;
          .nav-item {
            padding: 0px 12px;
            cursor: pointer;
          }
        }
        .side-nav {
          display: flex;
          .person-center {
            margin: 0px 20px 0px 10px;
          }
        }
      }
    }
  }
}
</style>