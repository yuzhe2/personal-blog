<script setup>
import articleList from './childs/Main.vue'
import minorList from './childs/Aside.vue'
import cartList from './childs/cartList.vue'

import { getArticleList } from '@/api/article/index'
import { reactive, ref } from 'vue';

let articleData = ref([])

getArticleList().then(({ data }) => {
  articleData.value = data
})
</script>

<template>
  <div class="home">
    <aside>
      <cart-list></cart-list>
    </aside>
    <main class="main">
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
  .main {
    width: 720px;
  }
}
</style>