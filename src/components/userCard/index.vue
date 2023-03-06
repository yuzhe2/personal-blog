<script setup>
import { ref } from 'vue';

const userAvatar = ref('https://p3-passport.byteimg.com/img/user-avatar/e73713ffe8002ab9958732cdd3df17af~180x180.awebp')
</script>

<template>
  <div class="user-card">
    <div class="user-info">
      <el-avatar :size="70" :src="userAvatar" class="avatar" />
      <div class="nickname">闷头学计算机</div>
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
    <el-button class="link">Follow Me</el-button>
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