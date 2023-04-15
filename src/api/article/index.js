import instance from "../index"

// 添加文章
function addArticle (article) {
  return instance.post('/article/addArticle', article)
}

// 首页获取文章列表
function getArticleList () {
  return instance.get('/article/getList')
}

// 获取文章详情
function getArticleDetail (articleId) {
  return instance.get('/article/getDetail', { params: { articleId } })
}

function addView (articleId) {
  return instance.post('/article/addView', { articleId })
}

export {
  addArticle,
  getArticleList,
  getArticleDetail,
  addView
}