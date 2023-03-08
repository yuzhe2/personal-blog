import router from '../router/index'

const errorMsg = {
  10031: { 
    msg: '登录状态已过期, 请重新登录',
    callback: function () {
      router.push('/login')
    }
  },
  10032: {
    msg: '用户名不存在'
  },
  10033: {
    msg: '密码错误, 请重新输入'
  }
}

export function getErrorMsg (code) {
  code = code + ''
  if (Object.keys(errorMsg).includes(code)) {
    return errorMsg[code]
  } else { 
    return false
  }
}



