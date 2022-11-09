<template>
    <!-- 页头 -->
    <div class="g-hd layui-container">
        <div class="layui-row">
            <div class="carlogo layui-col-md2">
                <router-link to="/">
                    <img class="toplogo" src="/images/cartlogo.png" />
                </router-link>
            </div>
            <div class="layui-col-md7 layui-col-md-offset3">
                <ul class="top-item layui-row">
                    <li>
                        <span class="welcome-text">你好,152****1014</span>
                        <a class="member-actions-link" href="#">[退出]</a>
                        <a class="member-actions-link" href="#">[订单管理]</a>
                    </li>
                    <li>
                        <span>
                            <embed width="12px" height="12px" src="/svg/seckill.svg" />
                        </span>
                        <a href="#">秒杀专场</a>
                    </li>
                    <li>
                        <span>
                            <embed width="12px" height="12px" src="/svg/no-collect.svg" />
                        </span>
                        <a href="#">我的收藏</a>
                    </li>
                </ul>
                <ul class="promise-item layui-row">
                    <li>
                        <span>
                            <embed width="12px" height="12px" src="/svg/dui.svg" />
                        </span>
                        <span>100%正品保证</span>
                    </li>
                    <li>
                        <span>
                            <embed width="12px" height="12px" src="/svg/7day.svg" />
                        </span>
                        <span>7天无理由放心退</span>
                    </li>
                    <li>
                        <span>
                            <embed width="12px" height="12px" src="/svg/xianshi.svg" />
                        </span>
                        <span>限时抢购</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="border-pink">
    <div class="layui-container">
        <!-- 步骤条 -->
        <div class="step layui-row">
            <ol class="ui-step ui-step-blue ui-step-3">
                <li class="ui-step-start ui-step-done">
                    <div class="ui-step-line">-</div>
                    <div class="ui-step-icon">
                        <embed class="iconfont" width="25px" height="25px" src="/svg/step-ok.svg" />
                        <!-- <i class="ui-step-number">1</i> -->
                        <router-link to="/cart" class="ui-step-text">查看购物袋</router-link>
                    </div>
                </li>
                <li class="ui-step-active ui-step-done">
                    <div class="ui-step-line">-</div>
                    <div class="ui-step-icon">
                        <embed class="iconfont" width="25px" height="25px" src="/svg/step-ok.svg" />
                        <!-- <i class="ui-step-number">2</i> -->
                        <a class="ui-step-text">第二步</a>
                    </div>
                </li>
                <li class="ui-step-end">
                    <div class="ui-step-line">-</div>
                    <div class="ui-step-icon">
                        <embed class="iconfont" width="25px" height="25px" src="/svg/steping-3.svg" />
                        <a class="ui-step-text">第三步</a>
                    </div>
                </li>
            </ol>
        </div>
        <!-- 提示信息 -->
        <div class="channel-tips layui-row">
            <span class="area-delivery-info">
                配送至
                <strong class="area-delivery-province">苏州工业园区 驰星教育</strong>
            </span>
            <div class="shop-tips inline-block-item" v-if="data.minute < 0">
                <span class="countdown-num countdown-num-min">订单已超时，请重新下单</span>
            </div>
            <!-- 订单倒计时 -->
            <div class="shop-tips inline-block-item" v-if="data.minute >= 0">
                请在
                <span class="countdown">
                    <span class="countdown-num countdown-num-min">{{data.minute}}</span>分
                    <span class="countdown-num countdown-num-sec">{{data.second}}</span>秒
                </span>
                内支付
                <i class="st-tips layui-icon"
                    style="font-size: 15px; color: rgb(97,137,248); margin-right: 20px; margin-left: 10px;">&#xe607;</i>
            </div>
        </div>
        <!-- 信息盒子 -->
        <div class="m-box layui-row">
            <!-- 商品清单 -->
            <div class="box-hd layui-col-md12">
                <span class="box-hd-title">商品清单
                    <!-- <a href="car.html" class="go-car layui-inline">返回购物袋修改商品</a> -->
                </span>
            </div>
            <div class="box-bd">
                <table class="product-info-talbe layui-table" style="table-layout:fixed" lay-skin="nob">
                    <colgroup>
                        <col width="500">
                        <col width="100">
                        <col width="300">
                        <col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th><strong>依然-- 发货清单</strong></th>
                            <th>尺码</th>
                            <th>单价</th>
                            <th>数量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="goods-item" v-for="o in data.orderInfo.orderDetails" :key="o.orderDetailsId">
                            <td class="product-item">
                                <div class="product-img">
                                    <img width="70px" height="70px" :src="o.proMainImageAddress">
                                </div>
                                <div class="product-info">
                                    <div class="title">{{ o.proName }}</div>
                                </div>
                            </td>
                            <td>
                                <span class="product-size">{{ o.sizeType }}</span>
                            </td>
                            <td>
                                <span class="product-price">￥{{ o.proPrice }}</span>
                            </td>
                            <td>
                                <span class="product-num">{{ o.proNum }}</span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="m-toot">
                        <tr class="price-sum">
                            <td></td>
                            <td></td>
                            <td colspan="2">
                                <span class="freight-text">运费:
                                    <span class="freight-price">免运费</span>
                                </span>
                                <span class="this-grop-price-text">本组商品金额:
                                    <span class="this-grop-price">￥{{ data.sumPrice }}</span>
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <!-- 订单 -->
        <div class="orders-total">
            <div class="outer-div">
                <div>
                    <span class="dis-text layui-inline">优惠金额:</span>
                    <span class="layui-inline">￥{{ data.discountAmount }}</span>
                </div>
            </div>
            <div class="outer-div">
                <div>
                    <span class="dis-text pay-price-text layui-inline">待支付:</span>
                    <span class="pay-price layui-inline">￥{{ data.payAmounts }}</span>
                </div>
            </div>
            <div class="delivery outer-div">
                <div>
                    <span class="dis-text layui-inline">送货至：
                        <span class="delivery-info layui-inline">苏州工业园区 东方文荟苑3区，洋，152*****014</span>
                    </span>
                </div>
            </div>
            <!-- 结算 -->
            <div class="orders-settlement layui-row">
                <div class="orders-tips layui-col-md8">
                    <span id="st-tips-text">请在倒计时结束前支付</span>
                    <i class="st-tips layui-icon"
                        style="font-size: 15px; color: rgb(97,137,248); margin-right: 20px; margin-left: 10px;">&#xe607;</i>
                </div>
                <a :href="`http://localhost:2177/pay/goAliPay/${orderId}`"
                    class="settlement-button layui-btn layui-col-md4" v-if="data.minute >= 0">支付</a>
                <span class="timeout-button layui-btn layui-col-md4" v-if="data.minute < 0">已超时</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive, onBeforeMount, computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import orderApi from '@/api/order.js'
const route = useRoute()
// 订单id
const orderId = route.query.orderId
// 订单结束时间和现在的时间差
let timeDifference = ref(0)
const data = reactive({
    sumPrice: 0.0, payAmounts: 0.0, discountAmount: 0.0,minute:0,second:0,timmer:{},
    orderInfo: { discountAmount: 0.0, orderAmount: 0.0, orderDetails: [] }
})
// 剩余时间
onBeforeMount(() => {
    // 加载订单信息
    loadOrderInfo()
})
onBeforeUnmount(()=>{
    // 销毁定时器
    clearInterval(data.timmer)
})
// 查询订单详情
function loadOrderInfo() {
    orderApi.getOrderInfo(orderId)
        .then(response => {
            data.orderInfo = response.data.order
            // 计算超时时间方法
            orderTime(response.data.order.placeTime)
        })
}
// 计算剩余支付时间
function orderTime(placeTime) {
    let endDate = new Date(placeTime)
    endDate.setMinutes(endDate.getMinutes() + 2)
    let beginDate = new Date()
    timeDifference.value = endDate.getTime() - beginDate.getTime()
    data.timmer = setInterval(()=>{
        if(timeDifference.value < 0){
            clearInterval(data.timmer)
        }
        timeDifference.value = timeDifference.value - 1000
    },1000)
}
// 计算分钟
data.minute = computed({
    get(){
        return Math.floor(timeDifference.value / (1000 * 60))
    },
    set(){

    }
})
// 计算秒
data.second = computed({
    get(){
        return Math.floor(timeDifference.value / (1000)-(data.minute * 60))
    },
    set(){

    }
})
// 计算商品总金额
data.sumPrice = computed({
    get() {
        let sum = 0.0
        data.orderInfo.orderDetails.forEach((o) => {
            sum += o.proPrice * o.proNum
        })
        return sum.toFixed(2)
    },
    set() {

    }
})
// 支付金额
data.payAmounts = computed({
    get() {
        return data.orderInfo.orderAmount.toFixed(2)
    },
    set() {

    }
})
// 优惠金额
data.discountAmount = computed({
    get() {
        return data.orderInfo.discountAmount.toFixed(2)
    },
    set() {

    }
})


</script>
<style scoped>
/* head css */
* {
    margin: 0;
    padding: 0;
}

.toplogo {
    width: 216px;
    height: 50px;
    padding-top: 10px;
}

.layui-container {
    width: 70%;
    margin: 0 auto;
}

.top-item {
    margin-top: 15px;
}

.top-item li {
    float: left;
    margin-right: 20px;
    color: rgb(144, 144, 144);
    font-size: smaller;
}

.promise-item {
    margin-top: 15px;
}

.promise-item li {
    float: left;
    margin-right: 20px;
    color: rgb(22, 22, 22);
    font-size: smaller;
}

.member-actions-link {
    color: rgb(144, 144, 144);
    margin-left: 16px;
}

.border-pink {
    background-color: rgb(250, 42, 131);
    height: 2px;
    border: none;
}

.inline-block-item {
    display: inline;
}

.top-item li::after {
    content: "|";
    margin-left: 10px;
}

/* step css */
.ui-step {
    padding: 0 40px;
    margin: 5% auto;
    font-size: 14px;
    list-style: none;
    zoom: 1;
    position: relative;
    color: #b7b7b7;
    overflow: hidden;
}

.ui-step:after {
    clear: both;
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    visibility: hidden;
}

.ui-step li {
    float: left;
    height: 54px;
    margin: 0;
    width: 50%;
    position: relative;
}

.ui-step li .ui-step-icon {
    height: 50px;
    position: absolute;
    top: 0;
    width: 150px;
    text-align: center;
    left: -25px;
    font-family: tahoma;
}

.ui-step-icon .iconfont {
    font-size: 30px;
    margin: 0;
    color: #b7b7b7;
    color: rgba(0, 0, 0, 0.25);
    *color: #b7b7b7;
    line-height: 30px;
    background: #fff;
    padding: 0 10px;
    position: absolute;
    top: 0;
    left: 0;
    text-shadow: 1px 1px 2px #fff, 0 0 0 #ccc, 1px 1px 2px #fff;
}

.ui-step-icon .ui-step-number {
    line-height: 14px;
    font-style: normal;
    position: absolute;
    top: 7px;
    left: 0;
    padding: 0 20px;
    font-weight: bold;
    color: #fff;
}

.ui-step .ui-step-active i.ui-step-number {
    color: #FFF;
}

.ui-step-end .ui-step-number {
    background: transparent;
    font-size: 12px;
    font-style: normal;
    left: 17px;
    line-height: 12px;
    padding: 0;
    text-shadow: none;
    top: 9px;
}

.ui-step-icon .ui-step-text {
    height: 20px;
    line-height: 20px;
    position: relative;
    text-shadow: 0 1px 0 white;
    top: 34px;
    left: -50px;
    color: #707070;
}

.ui-step-icon .ui-step-text:hover {
    color: #cdcdcd;
}

.ui-step li .ui-step-line {
    height: 3px;
    background: #b9b9b9;
    display: block;
    margin-top: 14px;
    line-height: 1;
    overflow: hidden;
}

.ui-step li.ui-step-end {
    position: absolute;
    top: 0;
    right: -110px;
    width: 150px;
    zoom: 1;
    _clear: both;
    /* 修复ie6下最后一步莫名其妙显示不出来的问题 */
}

.ui-step li.ui-step-end .ui-step-line {
    display: none;
}

/* 步骤长度 */

.ui-step-2 li {
    width: 100%;
}

.ui-step-3 li {
    width: 50%;
}

.ui-step-4 li {
    width: 33%;
}

.ui-step-5 li {
    width: 25%;
}

/* 修改颜色 */

.ui-step .ui-step-active {
    color: #f16f20;
}

.ui-step .ui-step-active .ui-step-icon .ui-step-text {
    color: #000000;
}

.ui-step .ui-step-active .iconfont {
    color: #ff7001;
}

.ui-step .ui-step-done .iconfont {
    color: #ff9a00;
}

.ui-step .ui-step-done .ui-step-line {
    background: #fc9c27;
}

.ui-step-blue .ui-step-active {
    color: #3b7cb8;
}

.ui-step-blue .ui-step-active .iconfont {
    color: #1e6bb3;
}

.ui-step-blue .ui-step-done .iconfont {
    color: #428fd6;
}

.ui-step-blue .ui-step-done .ui-step-line {
    background: #418cd6;
}

.step {
    width: 50%;
    margin: 0 auto;
}

.channel-tips {
    margin-top: 2%;
    margin-bottom: 2%;
}

.area-delivery-info {
    font-size: medium;
}

.area-delivery-info .area-delivery-province {
    margin-left: 5px;
    font-weight: bold;
    font-size: larger;
}

.shop-tips {
    color: #707070;
    font-weight: lighter;
}

.shop-tips::before {
    content: "|";
    margin-left: 10px;
    color: #c4c4c4;
    font-size: large;
    width: 1px;
}

.channel-tips .shop-tips .countdown {
    color: rgb(244, 52, 153);
    font-size: large;
}

.m-box .box-hd {
    width: 100;
    height: 40px;
    border: 1px solid rgb(226, 226, 226);
    border-left-color: rgb(243, 22, 138);
    border-left-width: 3px;
    font-weight: lighter;
    font-size: larger;
    line-height: 40px;
    background-color: rgb(249, 249, 249);
}

.m-box .box-hd .box-hd-title {
    margin-left: 2%;
}

.m-box .box-bd .m-address ul li {
    height: 190px;
}

.box-hd-title .go-car {
    float: right;
    margin-right: 3%;
    font-size: x-small;
    color: rgb(29, 148, 209);
}

.box-hd-title .go-car:hover {
    color: rgb(60, 189, 255);
}

.address-ul li .address-inner {
    position: relative;
    height: 140px;
    width: 80%;
    border: 1px solid rgb(160, 160, 160);
    margin-top: 25px;
    margin-left: 10%;
}

.address-ul li .address-inner div:not(.stripe-top) {
    margin-top: 10px;
}

.box-bd .m-address .address-ul li .address-inner .stripe-top {
    position: absolute;
    top: 0px;
    height: 3px;
    width: 100%;
    background: repeating-linear-gradient(-45deg, #F9F9F9 0%, #F9F9F9 5%, #ff6c6c 5%, #ff6c6c 10%, #F9F9F9 10%, #F9F9F9 15%, #1989fa 10%, #1989fa 20%);
}

.box-bd .m-address .address-ul li .address-inner .stripe-bottom {
    position: absolute;
    bottom: 0px;
    height: 3px;
    width: 100%;
    background: repeating-linear-gradient(-45deg, #F9F9F9 0%, #F9F9F9 5%, #ff6c6c 5%, #ff6c6c 10%, #F9F9F9 10%, #F9F9F9 15%, #1989fa 10%, #1989fa 20%);
}

.address-inner .name-row {
    border-bottom: 1px dashed rgb(160, 160, 160);
    height: 30px;
    line-height: 10px;
}

.member-text {
    color: rgb(51, 51, 51);
    font-size: smaller;
    position: relative;
}

.member-text .tick {
    position: absolute;
    right: 0;
    bottom: -22px;
}

.update-address-text {
    color: rgb(29, 148, 209);
    font-size: smaller;
}

.update-address-text:hover {
    color: rgb(60, 189, 255);
}

.default-address-text {
    color: rgb(160, 160, 160);
    font-size: smaller;
}

.address-ul li .address-inner {
    background-color: rgb(255, 255, 255);
}

.address-ul li .address-add-row {
    background-color: rgb(249, 249, 249);
}

.address-ul li .address-add-row:hover {
    border: 1px solid rgb(0, 0, 0);
}

.address-ul li .address-inner .add-address {
    margin-top: 100px;
    color: rgb(160, 160, 160);
}

.address-ul li .address-inner .add-address>* {
    padding-top: 2%;
    padding-left: 40%;
}

.product-info-talbe {
    margin-top: 6%;
}

.product-info-talbe>thead {
    color: #000;
}

.product-info-talbe>tbody {
    border-top: 1px solid rgb(224, 224, 224);
    border-bottom: 1px solid rgb(224, 224, 224);
}

.product-item>* {
    float: left;
    margin-left: 10px;
}

.product-info .title {
    width: 300px;
    height: 70px;
    overflow: hidden;
    margin-bottom: 10px;
    color: rgb(51, 51, 51);
    font-weight: lighter;
    font-size: small;
}

.goods-item td:not(.product-item) {
    position: relative;
}

.goods-item td:not(.product-item)>* {
    position: absolute;
    top: 0.5em;
    font-size: small;
    color: black;
}

.m-toot tr td {
    color: #000;
    font-size: smaller;
    font-weight: bold;
}

.m-toot tr td .this-grop-price-text {
    display: block;
    float: right;
}

.this-grop-price {
    color: rgb(241, 1, 128);
    font-size: small;
}

.pay .pay-type-text {
    font-size: larger;
    font-weight: 900;
    margin-top: 6%;
}

.pay-type {
    margin-top: 2%;
    padding-top: 2%;
    border: 1px solid rgb(124, 191, 19);
}

.pay-type div div>* {
    float: left;
    margin-right: 20px;
}

/* 结算面板 */
.orders-total {
    border: 1px solid rgb(224, 224, 224);
}

.outer-div {
    height: 40px;
    margin-top: 10px;
}

.outer-div div>span:not(.dis-text) {
    width: 150px;
    text-align: right;
}

.outer-div .pay-price-text {
    font-size: 20px;
    font-weight: 900;
}

.outer-div .pay-price {
    font-size: 20px;
    font-weight: 900;
    color: rgb(241, 1, 128);
}

.delivery>div {
    font-size: smaller;
    color: rgb(102, 102, 102);
}

.orders-total>div:not(.orders-settlement)>div {
    float: right;
    margin-right: 2%;
    margin-top: 2%;
}

.orders-settlement {
    height: 60px;
}

.orders-settlement .orders-tips {
    height: 100%;
    background-color: rgb(243, 243, 243);
    text-align: right;
    line-height: 60px;
    color: rgb(102, 102, 102);
}

.settlement-button {
    height: 100%;
    background-color: rgb(241, 1, 128);
    line-height: 60px;
}
.timeout-button{
    height: 100%;
    background-color: rgb(159, 159, 159);
    line-height: 60px;
}

.product-img img {
    width: 70px;
    height: 70px;
}
</style>