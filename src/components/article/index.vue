<script setup>
const props = defineProps({
  createTime: String,
  type: Array,
  title: String,
  descriptor: String,
  visitNum: Number,
  likeNum: Number,
  commentNum: Number
})
</script>

<template>
  <div class="article">
    <div class="header">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item>一只好鹅</el-breadcrumb-item>
        <el-breadcrumb-item>2022-12-13 09:13:04</el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-tag
            v-for="(item, index) in props.type"
            :key="index"
          >
            {{ item }}
          </el-tag>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <h3 class="title">{{ props.title }}</h3>
      <p class="descriptor">{{ props.descriptor }}</p>
    </div>
    <ul class="action-list">
      <li class="item view">
        <i></i>
        <span>{{ props.visitNum }}</span>
      </li>
      <li class="item like">
        <i></i>
        <span>{{ props.likeNum }}</span>
      </li>
      <li class="item comment">
        <i></i>
        <span>{{ props.commentNum }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>