<template>
    <!-- -======================导航2========================== -->
    <div class="nav">
        <div class="nav-center">
            <div class="caidan">
                <a href="" class="caidan-a">
                    <span class="fenlei">商品分类</span>
                    <ul class="fenlei-item">
                        <li class="a-li">女装/男装/内衣</li>
                        <li class="a-li">女鞋/男鞋/箱包</li>
                        <li class="a-li">护肤/彩妆/个护</li>
                        <li class="a-li">运动户外</li>
                        <li class="a-li">家电数码</li>
                        <li class="a-li">母婴童装</li>
                        <li class="a-li">手表配饰</li>
                    </ul>
                </a>
            </div>
            <a href="" class="nav-b tuijian">推荐</a>
            <a href="" class="nav-b">3折疯抢</a>
            <a href="" class="nav-b">唯品快抢</a>
            <a href="" class="nav-b">唯品奢</a>
            <a href="" class="nav-b">女装</a>
            <a href="" class="nav-b">运动</a>
            <a href="" class="nav-b">鞋包</a>
            <a href="" class="nav-b">美妆</a>
            <a href="" class="nav-b">母婴</a>
            <a href="" class="nav-b">电器</a>
            <a href="" class="nav-b">男装</a>
            <a href="" class="nav-b">首饰</a>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* =====================导航2============================ */
.nav {
    width: 100%;
    height: 43px;
    border-bottom: 2px solid rgb(200, 198, 198);
}

.nav .nav-center {
    width: 1170px;
    height: 43px;
    margin: 0 auto;
    /* border: 1px solid; */
}

.nav .nav-center .caidan {
    background-color: #f10180;
    width: 156px;
    height: 43px;
    margin-right: 20px;
    line-height: 43px;
    float: left;
}

.nav .nav-center .caidan .caidan-a {
    text-decoration: none;
    font-size: 16px;
    color: rgb(255, 253, 253);
}

.nav .nav-center .caidan .caidan-a .fenlei {
    display: block;
    width: 70px;
    height: 43px;
    margin: auto 42px;
    font-size: 16px;
    color: rgb(253, 253, 253);
    /* border: 1px solid; */
}

/* 商品分类子标签不显示 */
.nav .nav-center .caidan .caidan-a .fenlei-item {
    display: none;
    width: 156px;
    height: 310px;
    position: absolute;
    background-color: #f10180;
    top: 170px;
    list-style: none;
    font-size: 10px;
    z-index: 20;

}

/* 商品子菜单显示 */
.nav .nav-center .caidan .caidan-a:hover .fenlei-item {
    display: block;
}

/* 商品li标签样式 */
.nav .nav-center .caidan .caidan-a .fenlei-item li {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    top: 20px;
    color: rgb(252, 252, 252);

}

/* 商品li标签点击样式改变 */
.nav .nav-center .caidan .caidan-a .fenlei-item li:hover {
    background-color: aliceblue;
    color: #f10180;
}

/* ============导航推荐，三者疯抢 唯品快抢======================= */
.nav .nav-center .nav-b {
    display: block;
    width: auto;
    height: 43px;
    /* border: 1px solid; */
    color: rgb(107, 104, 104);
    font-size: 13px;
    float: left;
    margin: 0 20px;
    line-height: 43px;
    text-align: center;
    font-weight: bolder;
    text-decoration: none;
}

.nav .nav-center .nav-b:hover {
    color: #f10180;
}

.nav .nav-center .tuijian {
    margin-left: 30px;
    display: block;
    color: #f10180;
    font-size: 14px;

}

.wrap {
    width: 1226px;
    margin: 0 auto;
}

/* 轮播图开始  */
.banner {
    width: 100%;
    height: 460px;
}

.banner-box {
    position: relative;
    margin-top: 50px;
    width: 100%;
    height: 460px;
    /*background-color: aqua;*/
}
</style>