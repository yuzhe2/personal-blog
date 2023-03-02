<script setup>
import articleList from './childs/Main.vue'
import minorList from './childs/Aside.vue'
import pageList from '@/components/paging/index.vue'

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
    <main>
      <article-list :list="articleData"></article-list>
      <page-list class="page" @changePage="handlePageChange"></page-list>
    </main>
    <aside>
      <minor-list></minor-list>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.home {
  margin: 0px 150px;
  display: flex;
  .page{
    text-align: center;
  }
}
</style>