import axios from 'axios'
import { getToken } from '../utils/auth'
import { getErrorMsg } from './errorCode'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

instance.interceptors.request.use(function (config) {
  // 这里不判断token是否存在, 因为在vue-router中的路由守卫中已经进行了判断
  const token = getToken()
  if (token) config.headers.Authorization = token
  return config
})

instance.interceptors.response.use(function (response) {
  const code = response.data.code
  let errorMsg = getErrorMsg()
  if (errorMsg) {
    const { msg, callback } = errorMsg
    ElMessage({ type: 'warning', message: msg })
    if (callback) callback()
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default instance