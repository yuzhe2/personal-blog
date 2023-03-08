import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/user'

export const useUser = defineStore('user', {
  state: () => {
    return {
      nickname: '',
      portrait: '',
      existUser: false // 用户信息是否存在的标识
    }
  },
  actions: {
    // 退出登录时清除用户信息
    clearUserInfo () {
      this.nickname = ''
      this.portrait = ''
      this.existUser = false
    },
    // 设置用户信息
    setUserInfo (data) {
      this.nickname = data.nickname
      this.portrait = data.portrait
      this.existUser = true
    },
    // 用于刷新页面时重新请求用户信息
    async getUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.setUserInfo(data)
      } catch (error) {
        
      }
    }
  }
})