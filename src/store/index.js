import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/user'

export const useUser = defineStore('user', {
  state: () => {
    return {
      nickName: '',
      portrait: '',
      existUser: false // 用户信息是否存在的标识
    }
  },
  actions: {
    async getUserInfo () {
      try {
        const { nickName, portrait } = await getUserInfo()
        this.nickName = nickName
        this.portrait = portrait
        this.existUser = true
      } catch (error) {
        
      }
    }
  }
})