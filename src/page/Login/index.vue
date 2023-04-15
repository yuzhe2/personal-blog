<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import instance from '@/api/index'
import { useUser } from '@/store/index'
import { login } from '@/api/user/index'

const router = useRouter()
const user = useUser()

const form = reactive({
  username: '',
  password: ''
})

function onSubmit () {
  login({
    username: form.username,
    password: form.password
  }).then(({ data }) => {
    let token = data.token
    localStorage.setItem('token', 'Bearer' + ' ' + token)
    user.setUserInfo(data)  
    router.push('/home')
  })
}
</script>

<template>
  <div class="login">
    <h3 class="title">个人博客系统</h3>
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login {
  margin: 150px 430px;
  text-align: center;
  .title {
    margin-bottom: 10px;
  }
  .btn {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
</style>