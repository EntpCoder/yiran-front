<template>
    <!--右侧边栏-->
    <div class="head-right">
        <div class="head-weap">
            <div class="head-nav">
                <!--           右边登录-->
                <div class="head-top">
                    <router-link to="/memberInfo">
                        <img src="/svg/right-img.svg" class="head-img">
                        信息
                    </router-link>
                </div>
            </div>
            <!--        右边购物袋-->
            <div class="right-gouwu">
                <router-link to="/cart">
                    <img src="/svg/gouwudai.svg" class="gouwu-img">
                    <span class="gouwu">购物袋</span>
                </router-link>
            </div>
            <!--        优惠券-->
            <div class="youhui">
                <router-link to="/memberInfo/couponsManagement/couponInfo?type=0">
                    <img src="/svg/youhui.svg" class="youhui-img">
                </router-link>
            </div>
            <!--        商品收藏-->
            <div class="youhui">
                <router-link to="/collection">
                    <img src="/svg/psouc.svg" class="youhui-img">
                </router-link>
            </div>
        </div>
        <!--    返回顶部-->
        <div class="goTop">
            <a href="javascript:window.scrollTo(0,0)" title="回到顶端">
                <img src="/svg/db.svg" class="youhui-img">
                <div class="goTop-fanhui">
                    回到顶端
                </div>
            </a>
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

.goTop-fanhui {
    color: rgb(255, 255, 255);
}
</style>