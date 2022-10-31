<template>
                  <p id="m-title">
                    <a href="my-info.html">我的唯品会</a>
                    &nbsp;>&nbsp;我的资料
                </p>
                <div class="account">
                    <div class="accountContent">
                        <div class="itemContent hide" style="display:block;">
                            <div class="userInfo">
                                <div class="touxiang">
                                    <div class="layer">
                                        <strong class="userName">唯品会会员（159*****974）</strong>
                                    </div>
                                    <el-upload
                                        class="avatar-uploader"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </div>
                            <form class="layui-form" action="">
                                <div class="layui-form-item">
                                    <label class="layui-form-label">*登录名:</label>
                                    <div class="layui-inline">
                                        <input type="text" name="title" required lay-verify="required"
                                            placeholder="为账号打上个人标记" autocomplete="off" class="layui-input">
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">*昵称:</label>
                                    <div class="layui-inline">
                                        <input type="text" name="title" required lay-verify="required"
                                            placeholder="唯品会会员" autocomplete="off" class="layui-input">
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">*性别</label>
                                    <div class="layui-input-block">
                                        <input type="radio" name="gender" value="男" title="男" checked>
                                        <input type="radio" name="gender" value="女" title="女">
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">*生日</label>
                                    <div class="layui-input-inline">
                                        <select name="quiz1">
                                            <option value="">请选择</option>
                                            <option value="2022">2022年</option>
                                            <option value="2021">2021年</option>
                                            <option value="2020">2020年</option>
                                        </select>
                                    </div>
                                    <div class="layui-input-inline">
                                        <select name="quiz2">
                                            <option value="">请选择</option>
                                            <option value="1">1月</option>
                                            <option value="2">2月</option>
                                            <option value="3">3月</option>
                                            <option value="4">4月</option>
                                            <option value="5">5月</option>
                                        </select>
                                    </div>
                                    <div class="layui-input-inline">
                                        <select name="quiz3">
                                            <option value="">请选择</option>
                                            <option value="1">1号</option>
                                            <option value="2">2号</option>
                                            <option value="3">3号</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">*手机号:</label>
                                    <div class="layui-inline">
                                        <input type="text" name="title" required lay-verify="required"
                                            placeholder="请输入手机号" autocomplete="off" class="layui-input">
                                    </div>
                                </div>

                                <div class="layui-form-item">
                                    <div class="layui-input-block">
                                        <button class="layui-btn" style="background-color: rgb(241,1,128);" lay-submit
                                            lay-filter="formDemo">保存</button>
                                        <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
/* 右侧内容栏 */
#m-title {
    font-size: 12px;
}
.account {
    background-color: #fff;
    border: 1px #ececec solid;
    margin-top: 10px;
    color: #666;
    font-size: 14px;
    font-family: 'Microsoft Yahei',Arial,Helvetica,sans-serif;
}
.account .accountContent {
    width: 100%;
    min-height: 163px;
}
.account .accountContent .itemContent .userInfo{
    position: relative;
    height: 120px;

}
.touxiang button{
    background-color: #df147f;
}
.touxiang{
    display: block;
    margin-left: 20px;
}
.userName{
    display: block;
    float: left;
    margin-top: 10px;
}
.layer{
    height: 10px;
}
.layui-form{
    display: block;
    margin-top: 80px;
    font-size: 12px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #df147f;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>