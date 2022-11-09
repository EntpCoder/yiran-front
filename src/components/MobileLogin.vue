<template>
    <!-- 短信验证登录 -->
    <div class="login-form2">
        <!-- ====短信登录=== -->
        <div class="login-user">
            <i class="user-img"><img src="/svg/phone.svg" alt=""></i>
            <input type="text" class="user" v-model="user.phone"  placeholder="请输入要验证的手机号码">
        </div>
        <div class="user-none"></div>
        <div class="row-2">
            <div class="code">
                <i class="code-img"><img src="/svg/code.svg" alt=""></i>
                <input type="password" v-model="message" class="pwd" placeholder="请输入验证码">
            </div>
            <span @click="sendMsm()" v-if="data.second <= 0">获取验证码</span>
            <span v-if="data.second > 0">{{data.second}}秒</span>
        </div>
        <div class="code-none"></div>
        <div class="login-tiaokuan">
            <input type="checkbox">
            <strong>我已阅读并接受以下条款：</strong>
            <a href="">《依然服务条款》</a>
            <a href="">《依然隐私政策》</a>
            <a href="">《依然支付用户服务协议》</a>
        </div>
        <div class="no-agree"></div>
        <span class="denglu" @click="toDengLu">登录</span>
        <div class="fooder">
            <div class="wechat">
                <i class="i1"></i>
                <span class="weixin-img"></span>
                <i class="i2"></i>
            </div>
            <router-link to="/register" class="register" >免费注册</router-link>
        </div>
    </div>
</template>

<script setup>
import mobilLoginApi from '@/api/mobilLogin.js'
import cookie from "js-cookie"
import { reactive,computed,ref, onBeforeUnmount} from 'vue'
let user = reactive({ phone: ''})

//输入的验证码
const message = ref()
let timeDifference = ref(0)
const data = reactive({
    second:-1,timmer:{}
})
//页面加载
onBeforeUnmount(()=>{
    // 销毁定时器
    clearInterval(data.timmer)
})

//获取验证码
function sendMsm(){
    if(user.phone.length == 11){
        mobilLoginApi.sendMsm(user.phone).then(        
            response => {
                if(response.data.result){
                    //倒计时开始
                    sendMsgSeconds()
                }
                else{
                    alert("获取验证码失败,请一分钟后再试")
                }                
            }
        )
    }
    else{
        user.phone=''
        alert("手机号码格式错误，请重新输入")
    }
}
//点击登录，验证验证码是否失效，是否正确
function toDengLu(){
    mobilLoginApi.getMsg(user.phone,message.value).then(
        response => {
            console.log(user.phone,message.value)
            //如果对比结果为true
            if(response.code === 200) {
                //根据user手机号返回token
                mobilLoginApi.phoneLogin(user)
                .then(response => {
                    if (response.code === 200) {
                        cookie.set('user_token', response.data.token, { domain: 'localhost' })
                        window.location.href = "/";
                    }else{
                        user.phone = ''
                        alert("手机号码未注册")
                    }
                })
            }
            else{
                alert("登陆失败可能是验证码或者手机号错误")
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
/* =========================短信登陆 ============================ */
/* =========用户区 */
.login-bg .login-panel .login-form2 {
    width: 300px;
    height: 450px;  
    /* background-color: rgb(245, 229, 229); */
    margin: 0 auto;
    /* border :1px solid; */
}
.login-bg .login-panel .login-form2 .login-user {
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


.login-bg .login-panel .login-form2 .login-user .user-img {
    display: block;
    width: 25px;
    height: 25px;
    /* border: 1px solid; */
    position: absolute;
    top: 5px;
    left: 11px;
    float: left;

}

/* 用户名输入框 */
.login-bg .login-panel .login-form2 .login-user input[type=text] {
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
.login-bg .login-panel .login-form2 .user-none {
    /* display: none; */
    width: 150px;
    height: 20px;
    float: left;
    /* border: 1px solid; */

    font-size: 10px;
    line-height: 20px;
    margin-top: 50px;
    color: rgb(206, 27, 27);
    font-weight: bolder;
    margin-left: 15px;
}

/* ====验证码=== */
.login-bg .login-panel .login-form2 .row-2 {
    width: 300px;
    height: 40px;
}

.login-bg .login-panel .login-form2 .row-2 .code {
    padding-left: 40px;
    margin-left: 5px;
    position: relative;
    top: 20px;
    width: 150px;
    height: 40px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;
    float: left;
}

.login-bg .login-panel .login-form2 .row-2 .code .code-img {
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    position: absolute;
    top: 5px;
    left: 11px;
    float: left;

}

.login-bg .login-panel .login-form2 .row-2 .code input[type=password] {
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

.login-bg .login-panel .login-form2 .row-2 span {
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
    margin-top: 20px;
    margin-left: 8px;
    text-decoration: none;
}

.login-bg .login-panel .login-form2 .code-none {
    width: 285px;
    height: 20px;
    /* border: 1px solid; */

    font-size: 10px;
    line-height: 20px;
    margin-top: 10px;
    color: rgb(206, 27, 27);
    font-weight: bolder;
    margin-left: 15px;
    float: left;
}

.login-bg .login-panel .login-form2 .login-tiaokuan {
    width: 280px;
    float: left;
    height: 40px;
    /* border: 1px solid; */
    margin-top: 20px;
    margin-left: 10px;
}

.login-bg .login-panel .login-form2 .login-tiaokuan input[type=checkbox] {
    float: left;
    margin-right: 5px;
}

.login-bg .login-panel .login-form2 .login-tiaokuan strong {
    float: left;
    font-size: 12px;
}

.login-bg .login-panel .login-form2 .login-tiaokuan a {
    float: left;
    font-size: 10px;
    color: #f10180;
    text-decoration: none;
}

.login-bg .login-panel .login-form2 .no-agree {
    float: left;
    width: 280px;
    height: 20px;
    /* border: 1px solid; */
    margin-top: 10px;
    margin-left: 10px;
    font-size: 10px;
    line-height: 20px;
    color: rgb(206, 27, 27);
    font-weight: bolder;
    text-align: left;

}

.login-bg .login-panel .login-form2 .denglu {
    float: left;
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
    margin-bottom: 20px;

}

/* ========微信登陆================== */
.login-bg .login-panel .login-form2 .fooder {
    width: 100%;
    height: 130px;
    /* background-color: rgb(244, 210, 210); */
    margin-top: 25px;
}

.login-bg .login-panel .login-form2 .fooder .wechat {
    width: 100%;
    height: 40px;
    /* border: 1px solid; */
}

.login-bg .login-panel .login-form2 .fooder .wechat .i1,
.i2 {
    display: block;
    width: 120px;
    float: left;
    margin-top: 20px;
    border-top: 1px solid #cac9c9;
}

.login-bg .login-panel .login-form2 .fooder .wechat .weixin-img {
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

.login-bg .login-panel .login-form2 .fooder .register {
    height: 14px;
    color: #333;
    line-height: 24px;
    font-size: 14px;
    float: left;
    padding-left: 75%;
    text-decoration: none;
}
.login-bg .login-panel .login-form2 .fooder .register[data-v-65e1816a]{
    color: #ea097e;
}
</style>