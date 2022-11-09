<template>
    <!-- ===========头部导航============ -->
    <div class="nav">
        <router-link to="/" class="nav-index">
            <img class="logo" src="/images/logo.png"/>
        </router-link>
        <i class="nav-san"></i>
    </div>
    <!-- =============注册====================== -->
    <div class="regist-bg">
        <div class="regist-panel">
            <div class="regist-head">
                <div class="regist-acc">会员注册</div>
                <div class="already-acc">
                    <span>已注册</span>
                    <span class="todenglu"><router-link to="/login">可直接登录</router-link ></span>
                </div>
            </div>
            <!-- =============注册form====================== -->
            <div class="login-form">
                <div class="error"></div>
                <div class="login-user">
                    <i class="user-img"><img src="/svg/regist-user.svg" alt=""></i>
                    <input type="text" class="user" placeholder="请输入手机号码" v-model="phoneNum">
                </div>
                <div class="login-pwd">
                    <i class="pwd-img"><img src="/svg/login-pwd.svg" alt=""></i>
                    <input type="password" class="pwd" placeholder="密码" v-model="password">
                </div>
                <div class="row-2">
                    <div class="code">
                        <i class="code-img"><img src="/svg/code.svg" alt=""></i>
                        <input type="password" v-model="message" class="pwd" placeholder="请输入验证码">
                    </div>
                    <span v-if="data.second <= 0" @click="sendMsm">获取验证码</span>
                    <span v-if="data.second > 0">{{data.second}}秒</span>
                </div>
                <div class="pwd-none"></div>
                <!-- ===============底部 -->
                <div class="login-tiaokuan">
                    <input type="checkbox">
                    <strong>我已阅读并接受以下条款：</strong>
                    <a href="">《依然服务条款》</a>
                    <a href="">《依然隐私政策》</a>
                    <a href="">《依然支付用户服务协议》</a>
                </div>
                <div class="no-agree"></div>
                <span class="zhuce"  @click="toRegister">立即注册</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import registerApi from '@/api/register.js'
import { reactive,computed,ref, onBeforeUnmount} from 'vue'
const phoneNum = ref()
const message = ref()
const password =ref()
//输入的验证码
let timeDifference = ref(0)
const data = reactive({
    second:-1,timmer:{}
})
onBeforeUnmount(()=>{
    // 销毁定时器
    clearInterval(data.timmer)
})

//获取验证码
function sendMsm(){
    if(phoneNum.value.length == 11){
        registerApi.sendMsm(phoneNum.value).then(        
            response => {
                if(response.code === 200){
                    //倒计时开始
                    sendMsgSeconds()
                    alert("验证码发送成功")
                }
                else{
                    alert("获取验证码失败,请一分钟后再试")
                }                
            }
        )
    }
    else{
        phoneNum.value = ''
        alert("请输入正确的手机号码")
    }    
}

function toRegister(){
    registerApi.toRegister(phoneNum.value,password.value,message.value).then(
        response => {
            //如果对比结果为true
            if(response.code === 200) {
                window.location.href ="./login/mobile"
            }
            else{
                phoneNum.value = ''
                password.value = ''
                message.value = ''
                alert("验证码错误，或手机号已被注册")
            }
        }
    )
}

//倒计时60s
function sendMsgSeconds(){
    let beginDate = new Date()
    let endDate = new Date()
    endDate.setSeconds(beginDate.getSeconds()+60)
    timeDifference.value = endDate.getTime() - beginDate.getTime()
    data.timmer = setInterval(()=>{
        if(timeDifference.value < 0){
            clearInterval(data.timmer)
        }
        timeDifference.value = timeDifference.value - 1000
    },1000)
}
// 计算秒
data.second = computed({
    get(){
        let i = Math.floor(timeDifference.value)/1000
        return i
    },
    set(){

    }
})





</script>

<style scoped>
/* ===============头部导航================== */
.regist-bg .login-form .row-2 {
    width: 300px;
    height: 40px;
}
a, body {
  color: #e3219b;
}
.regist-bg .login-form .row-2 .code {
    padding-left: 40px;
    margin-left: 40px;
    position: relative;
    top: 100px;
    width: 150px;
    height: 40px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;
    float: left;
}

.regist-bg .login-form .row-2 .code .code-img {
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    position: absolute;
    top: 5px;
    left: 11px;
    float: left;

}

.regist-bg .login-form .row-2 .code input[type=password] {
    width: 120px;
    height: 20px;
    position: absolute;
    /* background-color: rgb(137, 102, 102); */
    background-color: #fff;
    top: 13px;
    left: 40px;
    float: left;
    outline: none;
    border: none;
    padding: 0 10px;
}

.regist-bg .login-form .row-2 span {
    float: left;
    padding: 0;
    width: 80px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    color: #e00078;
    background-color: #fcedf2;
    border: 1px solid #ffbee0;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 58px;
    margin-left: 250px;
    text-decoration: none;
}
.nav {
    position: relative;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    width: 1000px;
    height: 100px;
    zoom: 1;
    /* border: 1px solid; */
}


.nav .nav-san {
    background-image: url("../images/maodian.png");
    background-position: 0 0;
    width: 304px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}

/* ===========================登录背景========================= */

.regist-bg {
    /* border: 1px solid; */
    width: 100%;
    height: 650px;
    background-image: url("../images/login-bg.jpg");
    background-position: top center;
    background-repeat: no-repeat;
}

/* =====================注册框=================== */
.regist-bg .regist-panel {
    width: 360px;
    height: 510px;
    background-color: #fff;
    margin-top: 50px;
    margin-left: 900px;
    position: absolute;
}

.regist-bg .regist-panel .regist-head {
    width: 360px;
    height: 50px;
    border-bottom: 1px solid #ccc;
}

.regist-bg .regist-panel .regist-acc {
    width: 178px;
    vertical-align: top;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 50px;
    overflow: hidden;
    color: #575557;
    cursor: default;
    float: left;
    cursor: pointer;
}

.regist-bg .regist-panel .already-acc {
    width: 140px;
    height: 50px;
    float: left;
    font-family: "微软雅黑";
    float: right;
    font-size: 14px;
    position: relative;
    top: 15px;
    right: 20px;
}

.regist-bg .regist-panel .already-acc a {
    text-decoration: none;
}

/* ===================注册表单区============================ */
.login-bg .login-panel .login-form {
    width: 300px;
    height: 400px;
    /* background: white; */
    margin-left: 30px;
}

/* ======提示用户手机号码输入有误 */
.regist-bg .regist-panel .login-form .error {
    /* display: none; */
    width: 200px;
    margin-left: 50px;
    height: 15px;
    float: left;
    /* border: 1px solid; */
    font-size: 10px;
    line-height: 15px;
    position: relative;
    top: 20px;
    text-align: left;
    padding-left: 40px;
    color: rgb(206, 27, 27);
    font-weight: bolder;

}

/* =========用户区 */
.regist-bg .regist-panel .login-form .login-user {
    padding-left: 40px;
    margin-left: 40px;
    position: relative;
    top: 40px;
    width: 248px;
    height: 40px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 10px;

}

.regist-bg .regist-panel .login-form .login-user .user-img {
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    position: absolute;
    top: 10px;
    left: 11px;
    float: left;

}

/* 用户名输入框 */
.regist-bg .regist-panel .login-form .login-user input[type=text] {
    width: 220px;
    height: 20px;
    position: absolute;
    top: 13px;
    left: 40px;
    float: left;
    outline: none;
    border: none;
    padding: 0 10px;
    background-color: #fff;
    ;


}

/* ==========密码区 */
.regist-bg .regist-panel .login-form .login-pwd {
    padding-left: 40px;
    margin-left: 40px;
    position: relative;
    top: 75px;
    width: 248px;
    height: 40px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 10px;
}



.regist-bg .regist-panel .login-form .login-pwd .pwd-img {
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    position: absolute;
    top: 10px;
    left: 11px;
    float: left;

}


.regist-bg .regist-panel .login-form .login-pwd input[type=password] {
    width: 220px;
    height: 20px;
    position: absolute;
    top: 13px;
    left: 40px;
    float: left;
    outline: none;
    border: none;
    padding: 0 10px;
    background-color: #fff;
    ;
}


/* 两次密码输入不一致 */
.regist-bg .regist-panel .login-form .pwd-none {
    /* display: none; */
    width: 200px;
    height: 15px;
    margin-left: 50px;
    /* border: 1px solid; */
    font-size: 10px;
    line-height: 20px;
    margin-top: 120px;
    text-align: center;
    color: rgb(206, 27, 27);
    font-weight: bolder;

}

/* ===========底部条款================== */
.regist-bg .regist-panel .login-form .login-tiaokuan {
    width: 280px;
    height: 40px;
    /* border: 1px solid; */
    margin-top: 10px;
    margin-left: 40px;
}

.regist-bg .regist-panel .login-form .login-tiaokuan strong {
    font-size: 12px;
}

.regist-bg .regist-panel .login-form .login-tiaokuan a {
    font-size: 10px;
    color: #f10180;
    text-decoration: none;
}

.regist-bg .regist-panel .login-form .zhuce {
    display: block;
    width: 280px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    font-size: 20px;
    background-color: #f10180;
    color: #fff;
    font-weight: bolder;
    margin-left: 40px;
    margin-top: 15px;
    border: none;

}

.regist-bg .regist-panel .login-form .no-agree {
    width: 200px;
    margin-left: 50px;
    height: 15px;
    /* border: 1px solid; */
    margin-top: 10px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: rgb(206, 27, 27);
    font-weight: bolder;
    text-align: left;

}
.logo {
    width: 200px;
    height: 100px;
}
</style>