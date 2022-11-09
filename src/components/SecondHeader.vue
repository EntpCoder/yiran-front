<template>
    <div class="fu-header">
        <div class="center-header">
            <router-link to="/">
                <img src="/images/logo.png" alt="" class="viplogo">
            </router-link>
            <div class="zhengpin">
                <img src="/svg/zhengpin.svg" alt="" class="zhengpin-img">
                <span class="zhengpin-name">100%正品</span>
            </div>
            <div class="baoyou">
                <img src="/svg/baoyou.svg" alt="" class="baoyou-img">
                <span class="baoyou-name">88元包邮</span>
            </div>
            <div class="tuihuan">
                <img src="/svg/tuihuan.svg" alt="" class="tuihuan-img">
                <span class="tuihuan-name">退换无忧</span>
            </div>
            <div class="search">
                <div class="sousuo">
                    <input type="text" v-model="search">
                </div>
                <router-link :to="`/search?s=${search}`" @click="search = ''">
                    <img src="/svg/sousuo.svg" alt="" class="sousuo-img" />
                </router-link>
                <div class="gouwuche">
                    <router-link to="/cart">
                        <ul class="header-right">
                            <li class="cart">
                                <img src="/svg/gouwuche.svg" class="gouwu-img">
                                购物车
                            </li>
                        </ul>
                    </router-link>
                </div>
                <div class="sousuo-a">
                    <ul class="sousuo-lift">
                        <li><router-link to="/search?s=牛仔裙">牛仔裙</router-link><span>|</span></li>
                        <li><router-link to="/search?s=复古">复古</router-link><span>|</span></li>
                        <li><router-link to="/search?s=牛仔裤">牛仔裤</router-link><span>|</span></li>
                        <li><router-link to="/search?s=毛衣">毛衣</router-link><span>|</span></li>
                        <li><router-link to="/search?s=2022">2022</router-link><span>|</span></li>
                        <li><router-link to="/search?s=百褶裙">百褶裙</router-link></li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const search = ref('')
</script>

<style scoped>
/* ====================副头部==================================== */
.fu-header {
    width: 100%;
    height: 100px;
    /* border: 1px solid; */

}

.fu-header .center-header {
    width: 1170px;
    height: 100px;
    margin: 0 auto;
    /* border: 1px solid; */
}

.fu-header .viplogo {
    display: block;
    width: 160px;
    height: 100px;
    margin-left: -20px;
    min-width: 160px;
    overflow: hidden;
    /* border: 1px solid; */
    float: left;
}

.fu-header .zhengpin {
    width: 100px;
    height: 100px;
    float: left;
}

.fu-header .zhengpin .zhengpin-img {
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    margin-top: 30px;
    float: left;
}

.fu-header .zhengpin .zhengpin-name {

    width: 60px;
    height: 20px;
    /* border: 1px solid; */
    font-size: 12px;
    color: rgb(112, 113, 114);
    line-height: 20px;
    margin-top: 33px;
    margin-left: 5px;
    float: left;
}

/* 88元包邮 */
.fu-header .baoyou {
    width: 100px;
    height: 100px;
    float: left;
}

.fu-header .baoyou .baoyou-img {
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    margin-top: 30px;
    float: left;
}

.fu-header .baoyou .baoyou-name {
    width: 60px;
    height: 20px;
    /* border: 1px solid; */
    font-size: 12px;
    color: rgb(112, 113, 114);
    line-height: 20px;
    margin-top: 33px;
    margin-left: 5px;
    float: left;
}

/* 退换无忧 */
.fu-header .tuihuan {
    width: 100px;
    height: 100px;
    float: left;
    /* border: 1px solid; */
}

.fu-header .tuihuan .tuihuan-img {
    width: 20px;
    height: 20px;
    /* border: 1px solid; */
    margin-top: 30px;
    float: left;
}

.fu-header .tuihuan .tuihuan-name {
    width: 50px;
    height: 20px;
    /* border: 1px solid; */
    font-size: 12px;
    color: rgb(112, 113, 114);
    line-height: 20px;
    margin-top: 33px;
    margin-left: 5px;
    float: left;
}

/* ==============头部搜索框====================== */
.fu-header .search {
    width: auto;
    height: 33px;
    float: left;
    margin-top: 33px;
    margin-left: 160px;
}

.fu-header .sousuo {
    width: 340px;
    height: 32px;
    float: left;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: 2px solid #f10180;
}

.sousuo-a {
    position: absolute;
    width: 400px;
    height: 25px;
    margin-top: 40px;
}

.sousuo-lift li {
    float: left;
}

.sousuo-lift a {
    color: #b0b0b0;
    font-size: 13px;
    padding: 5px;
}

.sousuo-lift span {
    color: #b0b0b0;
    margin: 0 3.6px;
    font-size: 12px;
}

/*购物车开始*/
.gouwuche {
    float: left;
    margin: 0;
}

.gouwuche a {
    text-align: left;
    font-size: 15px;
}

.cart {
    position: relative;
    width: 120px;
    height: 40px;
    margin-left: 25px;
    cursor: pointer;
}

.cart:hover {
    background-color: #FFF;
    color: #424242;
}
/* 购物车结束 */
.fu-header .sousuo input[type=text] {
    margin-top: 5px;
    margin-left: 10px;
    width: 300px;
    height: 26px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    border: none;
    /* background-color: rgb(246, 221, 221); */
    border-radius: 4px;
    outline: none;
    padding: 0 10px;

}

.fu-header .search .sousuo-img {
    position: relative;
    /*display: block;*/
    width: 30px;
    height: 32px;
    border: 2px solid #f10180;
    background-color: #f10180;
    float: left;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
}
</style>