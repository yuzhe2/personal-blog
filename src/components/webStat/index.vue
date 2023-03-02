<script setup>

</script>

<template>
  <div class="web-stat">
    <el-descriptions title="网站咨询" :column="1">
      <el-descriptions-item label="文章数目:" label-align="right" label-class-name="my-label">
        <span class="item">3</span>
      </el-descriptions-item>
      <el-descriptions-item label="已运行时间:">
        <span class="item">0 天</span>
      </el-descriptions-item>
      <el-descriptions-item label="本站访客数:">
        <span class="item">3</span>
      </el-descriptions-item>
      <el-descriptions-item label="本站总访问量:">
        <span class="item">94</span>
      </el-descriptions-item>
      <el-descriptions-item label="最后更新时间:">
        <span class="item">5 小时前</span>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped lang="scss">
.web-stat {
  border: 1px solid #000;
  padding: 10px;

  .item {
    float: right;
    text-align: right;
  }

  :deep(.el-descriptions__cell)  {
    padding: 0px 10px;
    padding-bottom: 8px !important;
  }
}
</style>