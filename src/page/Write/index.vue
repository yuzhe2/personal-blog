<script setup>
import { ref, reactive } from 'vue';
import uploadCover from './childs/upload.vue'
import { addArticle } from '@/api/article/index'

const text = ref('')
const title = ref('')
const dialogVisible = ref(false)
const ruleForm = reactive({
  sort: '',
  tags: [],
  remark: ''
})

const sortOpts = [
  {
    value: '1002001',
    label: '前端',
  },
  {
    value: '1002002',
    label: '后端'
  },
  {
    value: '1002003',
    label: 'Android'
  },
  {
    value: '1002004',
    label: 'IOS',
  }
]

const tagOpts = [
  {
    value: '1001001',
    label: '前端',
  },
  {
    value: '1001002',
    label: '后端',
  },
  {
    value: '1001003',
    label: '架构',
  },
  {
    value: '1001004',
    label: '算法',
  },
  {
    value: '1001005',
    label: 'Vue.js',
  },
  {
    value: '1001006',
    label: 'Java',
  },
]

function handleClick () {
  dialogVisible.value = true
}

// 确定并发布
function handleConfirmSubmit () {
  let data = {}
  data.title = title.value
  data.content = text.value
  data.sort = ruleForm.tags
  data.type = ruleForm.sort
  data.description = ruleForm.remark
  addArticle(data).then((res) => {
    console.log(res)
  })
}
</script>

<template>
  <div class="write">

    <div class="editor-header">
      <input type="text" class="title-input" v-model="title" />
      <el-button type="primary" class="publish-btn" @click="handleClick">发布</el-button>
    </div>

    <v-md-editor
      v-model="text"
      height="calc(100vh - 60px)"
    ></v-md-editor>

    <el-dialog
      v-model="dialogVisible"
      title="发布文章"
      width="50%"
    >
      <el-form :model="ruleForm" label-width="120px">
        <el-form-item label="分类：" prop="sort">
          <el-select v-model="ruleForm.sort" placeholder="请选择分类">
            <el-option
              v-for="item in sortOpts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="添加标签：" prop="tag">
          <el-select
            v-model="ruleForm.tags"
            multiple
            placeholder="请添加标签"
            style="width: 240px"
          >
            <el-option
              v-for="item in tagOpts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="文章封面：">
          <upload-cover></upload-cover>
        </el-form-item>
        <el-form-item label="编辑摘要：" prop="remark">
          <el-input
            v-model="ruleForm.remark"
            maxlength="100"
            show-word-limit
            type="textarea"
            :rows="4"
            :input-style="{ 'width': '400px' }"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmSubmit">确认并发布</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.write {
  .editor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0px 30px;
    box-sizing: border-box;
    overflow: hidden;
    .title-input {
      height: 100%;
      border: none;
      outline: none;
      font-size: 24px;
      font-weight: 500;
      color: #1d2129;
      caret-color:#666;
    }
  }
}
</style>
