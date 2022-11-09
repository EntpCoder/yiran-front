<template>
  <p id="m-title">
    <a href="my-info.html">我的依然</a>
    我的资料
  </p>
  <div class="account">
    <div class="accountContent">
      <div class="itemContent hide" style="display: block">
        <div class="userInfo">
          <div class="touxiang">
            <div class="layer">
              <strong class="userName">依然会员（159*****974）</strong>
            </div>
            <el-upload
              class="avatar-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </div>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="登录名" prop="name">
    <el-input style="width:200px"></el-input>
  </el-form-item>
  <el-form-item label="昵称" prop="nicheng">
    <el-input style="width:200px"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="生日" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="手机号码" prop="tel">
    <el-input style="width:200px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
      </div>
    </div>
  </div>
</template>


<script>
 export default {
    data() {
      return {
        ruleForm: {
          name: '',
          nicheng: '',
          date1: '',
          type: [],
          resource: '',
          tel:''
        },
        rules: {
          name: [
            { required: true, message: '请输入登录名名称', trigger: 'blur' },
          ],
          nicheng: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          tel: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
/* 右侧内容栏 */
.account {
  background-color: #fff;
  border: 1px #ececec solid;
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}
.account .accountContent {
  width: 100%;
  min-height: 163px;
}
.account .accountContent .itemContent .userInfo {
  position: relative;
  height: 120px;
}
.touxiang button {
  background-color: #df147f;
}
.touxiang {
  display: block;
  margin-left: 20px;
}
.userName {
  display: block;
  float: left;
  margin-top: 10px;
}
.layer {
  height: 10px;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

</style>