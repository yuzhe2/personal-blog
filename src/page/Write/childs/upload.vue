<script setup>
import { ref } from "vue";
import { Delete, Plus, ZoomIn } from "@element-plus/icons-vue";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const uploadCover = ref(null)

const handleRemove = (file) => {
  uploadCover.value.handleRemove(file)
};

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
}
</script>

<template>
  <el-upload
    ref="uploadCover"
    action="#" 
    list-type="picture-card" 
    :auto-upload="false"
    class="no-radius"
  >
    <el-icon><Plus /></el-icon>

    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<style lang="scss" scoped>
[w-full=""] {
    width: 100%;
}
</style>
