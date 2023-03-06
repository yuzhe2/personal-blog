function getToken () {
  const token = localStorage.getItem('token')
  return token
}

export {
  getToken
}