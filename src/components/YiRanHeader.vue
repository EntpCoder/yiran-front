<template>
    <!-- 头部开始-->
    <div class="top">
        <!-- ==============头部=============== -->
        <div class="head">
            <div class="head-center">

                <div class="user">
                    <ul class="user-nav">
                        <template v-if="!isLogin">
                            <li class="user-cart">
                                <i class="user-img"></i>
                                <router-link to="/login">登录</router-link>
                                <div class="user-list">
                                    <!-- 上方登录片段-->
                                    <div class="user-hedar">
                                        <img src="/images/tx.png">
                                        <a href="pages/login.html">欢迎回来[请登录]</a>
                                    </div>
                                    <div class="user-uzi">
                                        <ul class="user-uzi-a">
                                            <li><a href="#">我的账户</a></li>
                                            <li><a href="#">零钱</a></li>
                                            <li><a href="#">我的唯品币</a></li>
                                        </ul>
                                    </div>
                                    <div class="user-uzi">
                                        <ul class="user-uzi-a">
                                            <li><a href="#">我的订单</a></li>
                                            <li><a href="#">我的优惠券</a></li>
                                            <li><a href="#">唯品金融</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>

                <a href="javascript:;" class="zhuce" @click="quitLogin" v-if="isLogin">
                        <i class="zhuce-img"></i>
                        <span class="zhuce-name">退出登录</span>
                    </a>
                <template v-if="!isLogin">
                    <a href="/register" class="zhuce">
                        <i class="zhuce-img"></i>
                        <span class="zhuce-name">注册</span>
                    </a>
                </template>
                <a href="" class="qiandao">
                    <i class="qiandao-img"></i>
                    <span class="qiandao-name">签到有礼</span>
                </a>
                <router-link to="/memberInfo" class="order">我的订单</router-link>
                <router-link to="/collection" class="TeMai">
                    <span class="temai">我的收藏</span>
                </router-link>
                <a href="" class="club">会员俱乐部</a>
                <a href="" class="kefu">客户服务</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
import cookie from "js-cookie"
const isLogin = ref(false)
onMounted(() => {
    if (cookie.get('user_token')) {
        isLogin.value = true
    }
})
function quitLogin(){
    cookie.remove('user_token')
    isLogin.value = false
}
</script>
<style scoped>
/*头部开始 */
.head {
    width: 100%;
    height: 28px;
    background-color: rgb(245, 245, 245);
}

/*======================================================================*/
.head-right {
    z-index: 980;
    position: fixed;
    right: 0;
    top: 0;
    width: 40px;
    height: 100%;
    text-align: center;
    background-color: #383530;
}

.head-weap {
    height: 60%;
    margin-top: 123px;
    /*background-color: #f6f6f6;*/
}

.head-nav {
    width: 100%;
    height: 50px;
}

.head-top {
    width: 100%;
    height: 50px;
    text-align: center;
}

.head-top a {
    font-size: 16px;
    height: 60px;
    color: rgb(253, 253, 253);
}

.head-top .right-img {
    width: 40px;
    height: 40px;
}


/*===============================================*/
.head .head-center {
    display: block;
    font-size: 12px;
    width: 100%;
    height: 28px;
    margin: 0 auto;
    line-height: 27px;
}

.head .head-center .user {
    width: 70px;
    height: 27px;
    margin-left: 450px;
    float: left;
    margin-right: 32px;
}

/*登录开始框架*/
.user-cart {
    position: relative;
    width: 70px;
    height: 27px;
    margin-left: 25px;
    cursor: pointer;
}

.user-cart:hover {
    color: #f10180;
}

.user-cart:hover>a {
    color: #f10180;
}

.user-list {
    z-index: 950;
    position: absolute;
    left: 0;
    top: 27px;
    width: 250px;
    /* 隐藏元素的高度设置为0 */
    height: 0;
    /*垂直居中*/
    line-height: 100px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    color: #424242;
    font-size: 12px;
    transition: all .3s;
    /*高度为0时 隐藏溢出的文字*/
    overflow: hidden;
}

.user-hedar {
    width: 100%;
    height: 70px;
    /*Text-align:left;*/
}

.user-uzi {
    float: left;
    width: 50%;
    height: 70px;
}

.user-uzi-a {
    float: left;
    font-size: 10px;
    Line-height: 20px;
    Text-align: left;
    margin: 5px 0px 0px 30px;
}

.user-cart:hover>.user-list {
    height: 140px;
}

/*登录结束框架*/
/*购物车单独悬停*/
.user-list {
    z-index: 950;
    position: absolute;
    left: 0;
    top: 27px;
    width: 250px;
    /* 隐藏元素的高度设置为0 */
    height: 0;
    /*垂直居中*/
    line-height: 100px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    color: #424242;
    font-size: 12px;
    transition: all .3s;
    /*高度为0时 隐藏溢出的文字*/
    overflow: hidden;
}

.user-cart:hover>.user-list {
    height: 190px;
}

/*登录结束框架*/
.head .head-center .user:hover .user-img {
    background-image: url("./svg/user-img-hover.svg");
}

.head .head-center .user-img {
    float: left;
    width: 20px;
    height: 20px;
    background: url("/svg/user-img.svg");
    margin-right: 5px;
    margin-top: 3px;
}

.head .head-center .user-ul {
    list-style: none;
    display: none;
}

/* 注册 */
.head .head-center .zhuce {
    display: block;
    width: 80px;
    height: 27px;
    float: left;
    /* border: 1px solid; */
    margin: 0 32px;
}

.head .head-center .zhuce .zhuce-img {
    width: 20px;
    height: 20px;
    background-image: url("/svg/zuce.svg");
    float: left;
    margin-top: 3px;
}

.head .head-center .zhuce:hover .zhuce-img {
    background-image: url("/svg/zuce-hover.svg");
}

.head .head-center .zhuce:hover .zhuce-name {
    color: #f10180;
}

.head .head-center .zhuce .zhuce-name {
    width: 50px;
    height: 27px;
    float: left;
    line-height: 27px;
    text-align: center;
    /* border: 1px solid; */
    color: rgb(112, 113, 114);
    margin-left: 5px;
}

.head .head-center .qiandao {
    display: block;
    width: 80px;
    height: 27px;
    float: left;
    /* border: 1px solid; */
    margin: 0 32px;
}

.head .head-center .qiandao .qiandao-img {
    width: 20px;
    height: 20px;
    background-image: url("/svg/qiandao-img.svg");
    float: left;
    margin-top: 3px;
}

.head .head-center .qiandao:hover .qiandao-img {
    background-image: url("/svg/qiandao-img-hover.svg");
}

.head .head-center .qiandao:hover .qiandao-name {
    color: #f10180;
}

.head .head-center .qiandao .qiandao-name {
    width: 50px;
    height: 27px;
    float: left;
    line-height: 27px;
    text-align: center;
    /* border: 1px solid; */
    color: rgb(112, 113, 114);
    margin-left: 5px;
}

.head .head-center .order {
    color: rgb(112, 113, 114);
    display: block;
    text-decoration: none;
    width: 50px;
    height: 27px;
    float: left;
    margin: 0 32px;
    /* border: 1px solid; */
}

.head .head-center .order:hover {
    color: #f10180;
}

.head .head-center .TeMai {
    color: rgb(112, 113, 114);
    display: block;
    text-decoration: none;
    width: 50px;
    height: 27px;
    float: left;
    margin: 0 32px;
    /* border: 1px solid; */
}

.head .head-center .TeMai:hover {
    color: #f10180;
}

.head .head-center .club {
    color: rgb(112, 113, 114);
    display: block;
    text-decoration: none;
    width: 60px;
    height: 27px;
    float: left;
    margin: 0 32px;
    /* border: 1px solid; */
}

.head .head-center .club:hover {
    color: #f10180;
}

.head .head-center .kefu {
    color: rgb(112, 113, 114);
    display: block;
    text-decoration: none;
    width: 50px;
    height: 27px;
    float: left;
    margin-left: 32px;
    /* border: 1px solid; */
}

.head .head-center .kefu:hover {
    color: #f10180;
}
</style>