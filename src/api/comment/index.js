import instance from "../index"

function getCommentList (articleId) {
  return instance.get(`/comment/getComment?articleId=${articleId}`)
}

function addComment (comment) {
  return instance.post('/comment/addComment', comment)
}

export {
  getCommentList,
  addComment
}