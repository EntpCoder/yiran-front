<template>
    <p id="m-title">
        <a href="my-info.html">我的依然</a>
        &nbsp;>&nbsp;收货地址
    </p>
    <div class="m-address">
        <div class="m-address-title">
            <a href="javascript:;" role="button" mars_sead="235|2|1|3"
                class="u-address-a ui-btn-medium J-btn-add-address ui-btn-primary">新增收货地址</a>
            <strong>已经保存的收货地址</strong>
            &nbsp;&nbsp;您已经创建
            <em class="u-address-num" id="J-own-address-num">2</em>
            个收货地址，最多可创建
            <em class="u-address-num" id="J-max-address-num">20</em>
            个
        </div>
        <div class="m-own-address-boxs">
            <div data_id="547928193" data-hover="m-address-info-hover"
                class="m-address-info J-address-info m-address-info-default J-address-info-default">
                <p class="u-set-address-default J-set-address-default u-address-major">默认地址</p>
                <p class="u-name">吕俊龙</p>
                <p class="u-address u-address-type-home" title="江苏省苏州市苏州工业园区斜塘街道  松泽家园八区">江苏省苏州市苏州工业园区斜塘街道
                    松泽家园八区<br>
                    <span class="u-unsupport-COD">（不支持货到付款）</span>
                </p>
                <p class="u-contact">
                    <span class="u-mobile">159*****974</span>
                    <span class="u-telephone"></span>
                </p>
                <div class="u-address-buttom J-address-buttom">
                    <a href="javascript:;" role="button"
                        class="u-address-a ui-btn-mini  ui-btn-default u-btn-delete J-btn-delete"
                        data_id="547928193">删除</a>
                    <a href="javascript:;" mars_sead="235|2|1|5" role="button"
                        class="u-address-a ui-btn-mini  ui-btn-default J-btn-modify" data_id="547928193">修改</a>
                </div>
            </div>
            <div data_id="548441729" data-hover="m-address-info-hover" class="m-address-info J-address-info">
                <p class="u-set-address-default J-set-address-default u-address-major" mars_sead="235|2|1|4">设为默认地址
                </p>
                <p class="u-name">吕俊龙</p>
                <p class="u-address u-address-type-home" title="江苏省苏州市常熟市琴川街道  听枫园3幢601">江苏省苏州市常熟市琴川街道 听枫园3幢601<br>
                    <span class="u-unsupport-COD">（不支持货到付款）</span>
                </p>
                <p class="u-contact"><span class="u-mobile">159*****974</span>
                    <span class="u-telephone"></span>
                </p>
                <div class="u-address-buttom J-address-buttom">
                    <a href="javascript:;" role="button"
                        class="u-address-a ui-btn-mini  ui-btn-default u-btn-delete J-btn-delete"
                        data_id="548441729">删除</a>
                    <a href="javascript:;" mars_sead="235|2|1|5" role="button"
                        class="u-address-a ui-btn-mini  ui-btn-default J-btn-modify" data_id="548441729">修改</a>
                </div>
            </div>
        </div>
    </div>
    <div class="m-address-form m-modify-address">
        <h3 class="u-add-title">新增收货地址</h3>
        <h3 class="u-modify-title">修改收货地址</h3>
        <div class="address-tips">
            <i class="layui-icon" style="font-size: 15px; color: rgb(97,137,248); margin-left: 50px;">&#xe672;</i>
            为便于向您交付商品或服务，您需提供收货人姓名、收货地址、收货人手机号码，如您不提供，我们将无法为您提供配送服务。
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input style="width:200px"></el-input>
  </el-form-item>
  <el-form-item label="手机号码" prop="tel">
    <el-input style="width:200px"></el-input>
  </el-form-item>
  <el-form-item label="收货时间" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择收货时间">
      <el-option label="周一至周日均可收货" value="shanghai"></el-option>
      <el-option label="周六、日节假日收货" value="beijing"></el-option>
      <el-option label="周一至周五收货" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="所在地区" prop="region">
    <el-col :span="8">
    <el-select v-model="ruleForm.region" placeholder="请选择省">
      <el-option label="周一至周日均可收货" value="shanghai"></el-option>
      <el-option label="周六、日节假日收货" value="beijing"></el-option>
      <el-option label="周一至周五收货" value="beijing"></el-option>
    </el-select>
    </el-col>
    <el-col :span="8">
    <el-select v-model="ruleForm.region" placeholder="请选择市">
      <el-option label="周一至周日均可收货" value="shanghai"></el-option>
      <el-option label="周六、日节假日收货" value="beijing"></el-option>
      <el-option label="周一至周五收货" value="beijing"></el-option>
    </el-select>
    </el-col>
    <el-col :span="8">
    <el-select v-model="ruleForm.region" placeholder="请选择区/县">
      <el-option label="周一至周日均可收货" value="shanghai"></el-option>
      <el-option label="周六、日节假日收货" value="beijing"></el-option>
      <el-option label="周一至周五收货" value="beijing"></el-option>
    </el-select>
    </el-col>
  </el-form-item>
  <el-form-item label="详细地址" prop="address">
    <el-input style="width:600px"></el-input>
  </el-form-item>
  <el-form-item label="地址类型" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="家庭"></el-radio>
      <el-radio label="公司"></el-radio>
      <el-radio label="其他"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
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
.m-address {
    background: #fff;
    margin: 10px 0;
}

.m-address .u-address-a {
    position: relative;
    float: right;
    margin-top: -4px;
    font-size: 12px;
}

.ui-btn-primary {
    background-color: #f10180;
    border: 1px solid #f10180;
}

.ui-btn-primary {
    color: #fff;
}

.m-address-title {
    padding: 16px 20px 18px;
    border-bottom: 1px solid #ebebeb;
    color: grey;
}

.ui-btn-medium {
    min-width: 60px;
    padding: 0 19px;
    font: 15px/30px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei, '\5FAE\8F6F\96C5\9ED1', '\5B8B\4F53', sans-serif;
    height: 30px;
    display: inline-block;
    border-radius: 3px;
    text-decoration: none;
    text-align: center;
    vertical-align: top;
    transition: .3s;
    cursor: pointer;
}

.m-address-title .u-address-num {
    color: #f10180;
    font-size: 14px;
    margin: 0 5px;
}

.m-own-address-boxs {
    padding: 20px 0 10px 3px;
}

/* 地址块 */
.m-address-info-default {
    background: url(../images/address-bg-selected.png) no-repeat;
}

.m-address-info {
    width: 227px;
    height: 122px;
    position: relative;
    background: url(../images/address-bg.png) no-repeat;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    zoom: 1;
    margin: 0 0 10px 10px;
    padding: 14px;
    overflow: hidden;
}

.m-address-info-default .u-address-major {
    top: 0;
    background: #ee3495 none repeat;
    display: inline;
}

.m-address-info .u-address-major {
    background: #f974ba none repeat;
    border-radius: 0 0 5px 5px;
    color: #fff;
    padding: 0 10px;
    position: absolute;
    cursor: pointer;
    right: 10px;
    top: -18px;
    -webkit-transition: top .2s ease 0s;
    transition: top .2s ease 0s;
}

.m-address-info .u-name {
    font-size: 14px;
    background: url(../images/i-addr-user.png) no-repeat 1px 4px;
    padding: 0 0 3px 20px;
    border-bottom: 1px dotted #dcdcdc;
}

.m-address-info .u-address-type-home {
    background: url(../images/i-addr-home.png) no-repeat 1px 8px;
}

.m-address-info .u-address {
    padding: 6px 0 3px 20px;
    border-bottom: 1px dotted #dcdcdc;
    height: 54px;
    font-size: 12px;
}

.m-address-info .u-unsupport-COD {
    color: #999;
    float: right;
    font-size: 12px;
}

.m-address-info .u-contact {
    background: url(../images/i-addr-phone.png) no-repeat 1px 8px;
    padding: 6px 0 3px 20px;
}

.m-address-info .u-contact .u-mobile {
    font-size: 12px;
}

.m-address-info .u-contact .u-telephone {
    margin-left: 15px;
}

.m-address-info-default .u-address-buttom {
    height: 20px;
    display: block;
    margin-right: 10px;
}

.m-address-info .u-address-buttom {
    position: absolute;
    right: 10px;
    display: none;
    margin-top: -10px;
}

.m-address-info-default .u-btn-delete {
    display: none;
}

.m-own-address .u-address-a {
    position: relative;
    float: right;
    margin-top: -4px;
    font-size: 12px;
}

.m-address-info a {
    margin-left: 5px;
}

.ui-btn-default,
.ui-btn3 {
    background-color: #fafafa;
    border: 1px solid #c2c2c2;
}

.ui-btn-default,
.ui-btn-default:active,
.ui-btn-default:hover,
.ui-btn3,
.ui-btn3:active,
.ui-btn3:hover {
    color: #333;
}

.ui-btn-mini {
    min-width: 24px;
    _width: 24px;
    padding: 0 5px;
    font: 12px/20px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei, '\5FAE\8F6F\96C5\9ED1', '\5B8B\4F53', sans-serif;
    _line-height: 22px;
    height: 20px;
}

.ui-btn-big,
.ui-btn-large,
.ui-btn-medium,
.ui-btn-mini,
.ui-btn-nor,
.ui-btn-small {
    display: inline-block;
    border-radius: 3px;
    text-decoration: none;
    text-align: center;
    vertical-align: top;
    -webkit-transition: .3s;
    transition: .3s;
    cursor: pointer;
    *white-space: nowrap;
    _overflow-y: hidden;
}

.ui-btn-medium:hover {
    color: #fff;
}

/* 新增地址 */
.m-address-form {
    color: #333;
    font-size: 12px;
    border-top: 1px solid #ef50a3;
    margin-top: 25px;
    background: #fff none repeat;
}

.m-modify-address .u-add-title {
    display: none;
}

.m-address-form h3 {
    color: #333;
    font-size: 14px;
    font-weight: bolder;
    padding: 18px 0 12px 20px;
}

form {
    font-size: 14px;
}

.address-tips {
    height: 30px;
    background-color: rgb(230, 232, 244);
    margin-bottom: 2%;
    margin-top: 2%;
    line-height: 30px;
    color: rgb(152, 152, 152);
    font-size: smaller;
}
</style>