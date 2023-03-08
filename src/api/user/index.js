import instance from "../index"

function getUserInfo () {
  return instance.get('/user/get')
}

function login (data) {
  return instance.post('/user/login', data)
}

export {
  getUserInfo,
  login
}