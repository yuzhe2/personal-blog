import router from "./index"
import { useUser } from '../store/index'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from "../utils/auth"

NProgress.configure({ showSpinner: false })

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const user = useUser()
  NProgress.start()
  if (whiteList.includes(to.fullPath)) {
    next()
  } else {
    // 如果token存在, 不考虑token是否过期的事情
    if (getToken()) {
      // 如果用户信息不存在, 获取用户信息之后再跳转
      if (!user.existUser) {
        await user.getUserInfo()
        next()
      }
      next()
    } else {
      ElMessage({
        type: 'warning',
        message: '请先登录'
      })
      next({ name: 'login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})