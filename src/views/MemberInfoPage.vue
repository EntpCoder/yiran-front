<template>
    <YiRanHeader></YiRanHeader>
    <SecondHeader></SecondHeader>
    <RightNavigation></RightNavigation>
    <!-- 头部 -->
    <nav class="main-nav">
        <div class="layui-row">
            <div class="layui-col-md8 layui-col-md-offset2">
                <ul class="grid-demo">
                    <li class="nav-myvip">
                        <router-link to="/">我的依然</router-link>
                    </li>
                    <li class="nav-comingsoon"><a href="collection.html">我的特卖</a></li>
                    <li class="nav-category">
                        <router-link to="/">首页</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="m-body">
        <div class="m-content">
            <ul class="g-sidebar layui-nav layui-nav-tree layui-inline " lay-filter="demo" style="margin-right: 10px;">
                <li class="layui-nav-item layui-nav-itemed">
                    <a id="aa" href="javascript:;">我的交易</a>
                    <dl class="layui-nav-child">
                        <dd><router-link to="/memberInfo/orderManagement">订单管理</router-link></dd>
                        <dd><router-link to="/memberInfo/addressManagement">收获地址</router-link></dd>
                    </dl>
                </li>
                <li class="layui-nav-item layui-nav-itemed">
                    <a href="javascript:;">我的资产</a>
                    <dl class="layui-nav-child">
                        <dd><router-link to="/memberInfo/couponsManagement">优惠券</router-link></dd>
                    </dl>
                </li>
                <li class="layui-nav-item layui-nav-itemed">
                    <a href="javascript:;">我的账户</a>
                    <dl class="layui-nav-child">
                        <dd><router-link to="/memberInfo/infoManagement">我的资料</router-link></dd>
                    </dl>
                </li>
            </ul>
            <div class="g-content">
                <RouterView></RouterView>
            </div>
        </div>


    </div>
</template>

<script setup>
import YiRanHeader from '@/components/YiRanHeader.vue'
import SecondHeader from '@/components/SecondHeader.vue'
</script>

<style scoped>
/* ==============top================ */
.top {
    text-align: center;
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}

.main-nav {
    height: 40px;
    background-color: #f10180;
}

.grid-demo li {
    display: block;
    position: relative;
    z-index: 8;
}

.nav-myvip {
    width: 108px;
    float: left;
}

.nav-comingsoon {
    width: 92px;
    float: right;
}

.nav-category {
    width: 60px;
    float: right;
}

.grid-demo {
    display: block;
    height: 100%;
    line-height: 40px;
}

.grid-demo a {
    display: block;
    height: 100%;
    font-size: 16px;
    color: white;
    font-weight: 700;
    text-align: center;
}

.main-nav .layui-row {
    display: block;
    height: 100%;
}

.main-nav .layui-row div {
    display: block;
    height: 100%;
}

/* ==============m-body================ */
.m-body {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 24px;
    padding-bottom: 24px;
    background: rgb(245,246,248) url(/images/myInfo-layout-bg.png) center 0 no-repeat;
    height: 600px;
}
.m-content {
    margin-left: 250px;
}

/* 左侧导航栏 */
.g-sidebar {
    float: left;
}

.g-sidebar>* {
    /* 主题背景颜色 */
    background-color: #f10180;
}

.m-body .g-sidebar {
    width: 107px;
}

.layui-nav-tree .layui-nav-child dd.layui-this,
.layui-nav-tree .layui-nav-child dd.layui-this a,
.layui-nav-tree .layui-this,
.layui-nav-tree .layui-this>a,
.layui-nav-tree .layui-this>a:hover {
    /* 子标题时框框颜色 */
    background-color: #fd5ab1;
    /* 选择子标题时字体颜色  */
    color: #fff;
}

.layui-nav-tree {
    width: 100px;
}

.layui-nav-tree .layui-nav-bar {
    width: 5px;
    height: 0;
    /* 鼠标悬浮的颜色 */
    background-color: #f10180;
}

.layui-nav .layui-nav-item a:hover,
.layui-nav .layui-this a {
    /* 展开导航栏时颜色 */
    color: #fff;
}
.g-content {
    display: block;
    float: left;
    margin-left: 10px;
    width: 820px;
    min-height: 600px;

}
</style>