<template>
    <!--右侧边栏-->
    <div class="head-right">
        <div class="head-weap">
            <div class="head-nav">
                <!--           右边登录-->
                <div class="head-top">
                    <img src="/svg/right-img.svg" class="head-img">
                    <a href="">账号</a>
                </div>
            </div>
            <!--        右边购物袋-->
            <div class="right-gouwu">
                <img src="/svg/gouwudai.svg" class="gouwu-img">
                <span class="gouwu">购物袋</span>
            </div>
            <!--        优惠券-->
            <div class="youhui">
                <img src="/svg/youhui.svg" class="youhui-img">
                <div class="youhui-name">
                    我的优惠券
                </div>
            </div>
            <!--        品牌收藏-->
            <div class="youhui">
                <img src="/svg/souchang.svg" class="youhui-img">
                <div class="youhui-name">
                    品牌收藏
                </div>
            </div>
            <!--        商品收藏-->
            <div class="youhui">
                <img src="/svg/psouc.svg" class="youhui-img">
                <div class="youhui-name">
                    商品收藏
                </div>
            </div>
        </div>
        <!--    返回顶部-->
        <div class="youhui">
            <img src="/svg/db.svg" class="youhui-img">
            <div class="youhui-name">
                返回顶部
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
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

/*右边购物袋*/
.right-gouwu {
    width: 100%;
    height: 130px;
    background-color: #e042b3;
    text-align: center;
}

.gouwu {
    font-size: 16px;
    height: 60px;
    writing-mode: vertical-lr;
    color: rgb(253, 253, 253);
}

.gouwu-img {
    width: 30px;
    height: 30px;
    margin-top: 3px;
}

/*优惠券*/
.youhui {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    position: relative;
    display: block;
    line-height: 36px;
}

.youhui-img {
    width: 30px;
    height: 30px;
    margin-top: 3px;
}

/*悬停动画*/
.youhui-name {
    z-index: 950;
    position: absolute;
    right: 40px;
    top: 0;
    width: 105px;
    /* 隐藏元素的高度设置为0 */
    height: 0;
    /*垂直居中*/
    line-height: 40px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    color: #424242;
    font-size: 12px;
    transition: margin-right 2s ease-in-out .5s;
    /*高度为0时 隐藏溢出的文字*/
    overflow: hidden;
}

.youhui:hover>.youhui-name {
    height: 40px;
}
</style>