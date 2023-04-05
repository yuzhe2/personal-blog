<script setup>
import articleList from './childs/Main.vue'
import minorList from './childs/Aside.vue'
import cartList from './childs/cartList.vue'

const articleData = [
  {
    createTime: '2023-02-28 19:18:01',
    type: ['前端', '架构'],
    title: '微前端MicroApp的基本使用',
    descriptor: '微前端的概念相信大家都有了解过，微前端就是将一个大型的前端应用拆分成一个基座应用和几个子应用，这种架构在企业中应用的非常广泛，因为企业中的业务往往比较繁多，并且每个业务点需要的功能都比较庞大',
    visitNum: 15,
    likeNum: 1
  },
  {
    createTime: '2023-02-28 19:18:01',
    type: ['前端', '架构'],
    title: '微前端MicroApp的基本使用',
    descriptor: '微前端的概念相信大家都有了解过，微前端就是将一个大型的前端应用拆分成一个基座应用和几个子应用，这种架构在企业中应用的非常广泛，因为企业中的业务往往比较繁多，并且每个业务点需要的功能都比较庞大',
    visitNum: 15,
    likeNum: 1
  },
  {
    createTime: '2023-02-28 19:18:01',
    type: ['前端', '架构'],
    title: '微前端MicroApp的基本使用',
    descriptor: '微前端的概念相信大家都有了解过，微前端就是将一个大型的前端应用拆分成一个基座应用和几个子应用，这种架构在企业中应用的非常广泛，因为企业中的业务往往比较繁多，并且每个业务点需要的功能都比较庞大',
    visitNum: 15,
    likeNum: 1
  },
  {
    createTime: '2023-02-28 19:18:01',
    type: ['前端', '架构'],
    title: '微前端MicroApp的基本使用',
    descriptor: '微前端的概念相信大家都有了解过，微前端就是将一个大型的前端应用拆分成一个基座应用和几个子应用，这种架构在企业中应用的非常广泛，因为企业中的业务往往比较繁多，并且每个业务点需要的功能都比较庞大',
    visitNum: 15,
    likeNum: 1
  }
]

function handlePageChange (num) {
  console.log(num)
}
</script>

<template>
  <div class="home">
    <aside>
      <cart-list></cart-list>
    </aside>
    <main>
      <article-list :list="articleData"></article-list>
    </main>
    <aside>
      <minor-list></minor-list>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding-top: 20px;
  padding: 20px 150px 0px;
  display: flex;
  background-color: #f1f1f1;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  .page{
    text-align: center;
  }
}
</style>