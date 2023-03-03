<script setup>
import { ref, reactive } from 'vue';
import uploadCover from './childs/upload.vue'

const text = ref('')
const dialogVisible = ref(false)
const ruleForm = reactive({
  sort: '',
  tags: [],
  remark: ''
})

const sortOpts = [
  {
    value: 'Option1',
    label: '前端',
  },
  {
    value: 'Option2',
    label: '后端'
  },
  {
    value: 'Option3',
    label: 'Android'
  },
  {
    value: 'Option4',
    label: 'IOS',
  }
]

const tagOpts = [
  {
    value: 'Option1',
    label: '前端',
  },
  {
    value: 'Option2',
    label: '后端',
  },
  {
    value: 'Option3',
    label: '架构',
  },
  {
    value: 'Option4',
    label: '算法',
  },
  {
    value: 'Option3',
    label: 'Vue.js',
  },
  {
    value: 'Option4',
    label: 'Java',
  },
]

function handleClick () {
  dialogVisible.value = true
  console.log(text.value)
}
</script>

<template>
  <div class="write">

    <div class="editor-header">
      <input type="text" class="title-input" />
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
          <el-button type="primary" @click="dialogVisible = false">确认并发布</el-button>
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
