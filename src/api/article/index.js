import instance from "../index"

function addArticle (article) {
  return instance.post('/article/addArticle', article)
}

export {
  addArticle
}