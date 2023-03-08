<script setup>
import { useRouter } from 'vue-router'
import { useUser } from '@/store/index'
const user = useUser()
const { nickname, portrait } = user

const router = useRouter()

function handleOutLogin () {
  localStorage.removeItem('token')
  user.clearUserInfo()
  router.push('/login')
}
</script>

<template>
  <div class="user-card">
    <div class="user-info">
      <el-avatar :size="70" :src="portrait" class="avatar" />
      <div class="nickname">{{ nickname }}</div>
    </div>
    <div class="count">
      <li>
        <div>文章</div>
        <div>3</div>
      </li>
      <li>
        <div class="headline">标签</div>
        <div>0</div>
      </li>
      <li>
        <div class="headline">分类</div>
        <div>0</div>
      </li>
    </div>
    <el-button class="link" @click="handleOutLogin">Log out</el-button>
  </div>
</template>

<style scoped lang="scss">
.user-card {
  padding: 10px;
  border: 1px solid #000;
  margin-bottom: 20px;

  .user-info {
    text-align: center;
    .nickname {
      margin: 8px 0px;
    }
  }

  .count {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 10px 0px;
  }

  .link {
    width: 100%;
  }
}
</style>