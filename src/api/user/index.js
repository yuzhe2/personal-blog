import instance from "../index"

function getUserInfo () {
  return instance.get('/user/info')
}

export {
  getUserInfo
}