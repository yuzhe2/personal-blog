import router from '../router/index'

const errorMsg = {
  10031: { 
    msg: '登录状态已过期, 请重新登录',
    callback: function () {
      router.push('/login')
    }
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



