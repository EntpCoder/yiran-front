<template>
    <div class="login-form">
        <!-- ====账户登录=== -->
        <div class="error"></div>
        <div class="login-user">
            <i class="user-img"><img src="/svg/login-user.svg" alt=""></i>
            <input type="text" class="user" placeholder="手机号/用户名/绑定邮箱" v-model="user.username">
        </div>
        <div class="user-none"></div>
        <div class="login-pwd">
            <i class="pwd-img"><img src="/svg/login-pwd.svg" alt=""></i>
            <input type="password" class="pwd" placeholder="密码" v-model="user.password">
        </div>
        <div class="pwd-none"></div>

        <div class="login-other-item">

            <a href="#" class="b">忘记密码</a>
        </div>

        <div class="login-tiaokuan">
            <input type="checkbox">
            <strong>我已阅读并接受以下条款：</strong>
            <a href="">《依然服务条款》</a>
            <a href="">《依然隐私政策》</a>
            <a href="">《依然支付用户服务协议》</a>
        </div>
        <div class="no-agree"></div>
        <a href="javascript:;" class="denglu" @click="login">登录</a>
        <div class="fooder">
            <div class="wechat">
                <i class="i1"></i>
                <span class="weixin-img"></span>
                <i class="i2"></i>
            </div>
            <router-link to="/register" class="register">免费注册</router-link>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import userApi from '@/api/user.js'
import cookie from "js-cookie"
let user = reactive({ username: '', password: '' })
// 登录 如果成功存储cookie
function login() {
    userApi.accountLogin(user)
        .then(response => {
            if (response.code === 200) {
                cookie.set('user_token', response.data.token, { domain: 'localhost' })
                window.location.href = "/";
            }else{
                user.username = ''
                user.password =  ''
                alert("用户名或密码错误")
            }
        })
}
</script>
<style scoped>
/* ==============登录表单============== */
.login-bg .login-panel .login-form {
    width: 300px;
    height: 450px;
    /* background-color: rgb(245, 229, 229); */
    margin: 0 auto;
    /* border :1px solid; */
}

/* ============账户登录====== */
/* ======提示用户名或者密码错误 */
.login-bg .login-panel .login-form .error {
    /* display: none; */
    width: 200px;
    height: 20px;
    margin-left: 25px;
    float: left;
    /* border: 1px solid; */
    font-size: 10px;
    line-height: 15px;
    position: relative;
    top: 8px;
    text-align: left;
    padding-left: 15px;
    color: rgb(206, 27, 27);
    font-weight: bolder;

}

/* =========用户区 */
.login-bg .login-panel .login-form .login-user {
    padding-left: 40px;
    margin-left: 5px;
    position: relative;
    top: 40px;
    width: 248px;
    height: 40px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;

}

.login-bg .login-panel .login-form .login-user .user-img {
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    position: absolute;
    top: 5px;
    left: 11px;
    float: left;

}

/* 用户名输入框 */
.login-bg .login-panel .login-form .login-user input[type=text] {
    width: 220px;
    height: 20px;
    position: absolute;
    background-color: #fff;
    top: 13px;
    left: 40px;
    float: left;
    outline: none;
    border: none;
    padding: 0 10px;


}

/* 提示用户名为空 */
.login-bg .login-panel .login-form .user-none {
    /* display: none; */
    width: 200px;
    height: 20px;
    margin-left: 25px;
    float: left;
    /* border: 1px solid; */

    font-size: 10px;
    line-height: 20px;
    margin-top: 45px;

    color: rgb(206, 27, 27);
    font-weight: bolder;
}

/* ==========密码区 */
.login-bg .login-panel .login-form .login-pwd {
    padding-left: 40px;
    margin-left: 5px;
    position: relative;
    top: 75px;
    width: 248px;
    height: 40px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-bg .login-panel .login-form .login-pwd .pwd-img {
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    position: absolute;
    top: 5px;
    left: 11px;
    float: left;

}

.login-bg .login-panel .login-form .login-pwd input[type=password] {
    width: 220px;
    height: 20px;
    position: absolute;
    background-color: #fff;
    top: 13px;
    left: 40px;
    float: left;
    outline: none;
    border: none;
    padding: 0 10px;
}

/* 提示密码为空 */
.login-bg .login-panel .login-form .pwd-none {
    /* display: none; */
    width: 200px;
    height: 20px;
    margin-left: 25px;
    /* border: 1px solid; */
    font-size: 10px;
    line-height: 20px;
    margin-top: 80px;
    color: rgb(206, 27, 27);
    font-weight: bolder;
}

/* ==========忘记密码区================== */
.login-bg .login-panel .login-other-item {
    width: 300px;
    height: 20px;
    /* border: 1px solid; */
    margin-top: 10px;
}

/* ================================账户登录============================== */
.login-bg .login-panel .login-other-item .b {
    float: right;
    font-size: 13px;
    margin-right: 20px;
    text-decoration: none;
    color: #575557;
}

.login-bg .login-panel .login-form .login-tiaokuan {
    width: 280px;
    height: 40px;
    /* border: 1px solid; */
    margin-top: 10px;
    margin-left: 10px;
}

.login-bg .login-panel .login-form .login-tiaokuan strong {
    font-size: 12px;
}

.login-bg .login-panel .login-form .login-tiaokuan a {
    font-size: 10px;
    color: #f10180;
    text-decoration: none;
}

.login-bg .login-panel .login-form .no-agree {
    width: 280px;
    height: 20px;
    /* border: 1px solid; */
    margin-top: 10px;
    margin-left: 10px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: rgb(206, 27, 27);
    font-weight: bolder;
    text-align: left;

}

.login-bg .login-panel .login-form .denglu {
    text-decoration: none;
    display: block;
    width: 280px;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    margin-top: 5px;
    background-color: #f10180;
    color: #fff;
    font-weight: bolder;
    margin-left: 10px;
    border: none;
    cursor: pointer;

}

/* ========微信登陆================== */
.login-bg .login-panel .login-form .fooder {
    width: 100%;
    height: 130px;
    /* background-color: rgb(244, 210, 210); */
    margin-top: 25px;
}

.login-bg .login-panel .login-form .fooder .wechat {
    width: 100%;
    height: 40px;
    /* border: 1px solid; */
}

.login-bg .login-panel .login-form .fooder .wechat .i1,
.i2 {
    display: block;
    width: 120px;
    float: left;
    margin-top: 20px;
    border-top: 1px solid #cac9c9;
}

.login-bg .login-panel .login-form .fooder .wechat .weixin-img {
    width: 40px;
    float: left;
    height: 40px;
    background-image: url("../images/maodian.png");
    background-position: -580px -161px;
    position: relative;
    z-index: 3;
    margin: 0 10px;
    cursor: pointer;
}

.login-bg .login-panel .login-form .fooder .register {
    height: 14px;
    color: #333;
    line-height: 24px;
    font-size: 14px;
    float: left;
    padding-left: 75%;
    text-decoration: none;
}
</style>