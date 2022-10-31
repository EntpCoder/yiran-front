<template>
    <!-- 页头 -->
    <div class="g-hd layui-container">
        <div class="layui-row">
            <div class="carlogo layui-col-md2">
                <router-link to="/">
                    <img class="toplogo" src="/images/cartHeader.png" />
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
    <!-- 页身 -->
    <div class="g-bd layui-container">
        <div class="cart-tab-row layui-row">
            <div class="cart-tab layui-col-md1 layui-col-md-offset0">
                <span>特卖商品</span>
            </div>
        </div>
        <div class="channel-tips layui-row">
            <span class="area-delivery-info">
                配送至
                <strong class="area-delivery-province">苏州工业园区 驰星教育</strong>
            </span>
            <div class="shop-tips inline-block-item">
                勾选商品“<img src="/images/shop-lock-success.png">”即可锁定库存20分钟，倒计时内不用担心商品被抢走～
            </div>
        </div>
        <!-- 商品列表 -->
        <table class="orders-table layui-table" style="table-layout:fixed" lay-skin="nob" lay-size="sm">
            <!-- 列宽 -->
            <colgroup>
                <col width="400">
                <col width="300">
                <col width="200">
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>商品</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr class="goods-item" v-for="c in cartList" :key="c.proAttributeInfoId">
                    <!-- 商品信息 -->
                    <td class="product-item">
                        <!-- 选框 -->
                        <div class="m-checkbox">
                            <input type="checkbox" />
                        </div>
                        <div class="product-img">
                            <img width="70px" height="70px" :src="c.proMainImageAddress">
                        </div>
                        <div class="product-info">
                            <div class="title">{{ c.proName }}</div>
                            <p>尺码{{ c.sizeType }}-颜色{{ c.colorName }}</p>
                        </div>
                    </td>
                    <td class="price-item"><strong>￥{{ c.sellingPrice }}</strong></td>
                    <!-- 数量组件 -->
                    <td class="quantity-item">
                        <div class="layui-btn-group">
                            <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" @click="decrease(c)">
                                <i class="layui-icon">&#xe67e;</i>
                            </button>
                            <button type="button" class="layui-btn layui-btn-primary layui-btn-sm">
                                <input class="product-num" type="text" :value="c.nums" readonly="readonly" />
                            </button>
                            <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" @click="increase(c)">
                                <i class="layui-icon">&#xe654;</i>
                            </button>
                        </div>
                    </td>
                    <td class="actions-item">
                        <a class="order-button-del" href="javascript:;"
                            @click="deleteByCartId(c.proAttributeInfoId)">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 订单 -->
        <div class="orders-total">
            <!-- 订单面板 -->
            <div class="orders-panel layui-row">
                <div class="price-panel-coupon layui-col-md2">
                    <button class="layui-btn" id="demo1">
                        使用优惠券
                        <i class="layui-icon layui-icon-down layui-font-12"></i>
                    </button>
                </div>
                <div class="price-panel-item layui-col-md1">
                    共
                    <span class="product-num">3</span>
                    件商品
                </div>
            </div>
            <!-- 金额面板 -->
            <div class="orders-price layui-row">
                <div class="sum-price-text layui-col-md1 layui-col-md-offset10">总金额:</div>
                <div class="sum-price layui-col-md1">￥1888</div>
            </div>
            <!-- 结算 -->
            <div class="orders-settlement layui-row">
                <div class="orders-tips layui-col-md8">
                    <span id="st-tips-text">请在倒计时之前结算</span>
                    <i id="st-tips" class="layui-icon"
                        style="font-size: 15px; color: rgb(97,137,248); margin-right: 20px; margin-left: 10px;">&#xe607;</i>
                </div>
                <a href="/orderConfirm" class="settlement-button layui-btn layui-col-md4">立即结算</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import cartApi from '@/api/cart.js'
let cartList = ref()
cartApi.getCart(101)
    .then(
        response => {
            cartList.value = reactive(response.data.cartList)
        }
    )
function decrease(cart) {
    cart.nums--
}
function increase(cart) {
    cart.nums++
}
function deleteByCartId(cartId) {
    console.log(cartId)
    cartApi.deleleCartById(cartId)
        .then(
            response => {
                console.log(response)
            })
}
</script>

<style scoped>
/* head css */
* {
    margin: 0;
    padding: 0;
}

.toplogo {
    padding-top: 16px;
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

/* ==================== */
.cart-tab {
    padding-top: 4%;
    padding-bottom: 1%;
    font-size: larger;
    font-weight: bold;
    color: rgb(241, 1, 128);
    border-bottom: 3px solid rgb(241, 1, 128);
    text-align: center;
}

.cart-tab-row {
    border-bottom: 1px solid rgb(226, 225, 225);
}

.channel-tips {
    margin-top: 2%;
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
    color: #c4c4c4;
    font-weight: lighter;
}

.shop-tips::before {
    content: "|";
    margin-left: 10px;
    color: #c4c4c4;
    font-size: large;
    width: 1px;
}

.orders-table thead {
    border: 1px solid #d8d8d8;
    height: 40px;
}

.orders-table tbody tr {
    border: none;
}

.orders-table thead tr th {
    text-align: center;
}

.orders-table tbody tr td:not(.product-item) {
    text-align: center;
}

.product-item>* {
    float: left;
    margin-left: 10px;
    height: 70px;
}

.m-checkbox input {
    height: 70px;
}

.product-info .title {
    width: 250px;
    height: 40px;
    overflow: hidden;
    margin-bottom: 10px;
    color: black;
    font-weight: lighter;
}

.product-info p {
    color: black;
    font-weight: lighter;
}

.price-item strong {
    font-size: large;
    color: rgb(241, 1, 128);
}

.product-num {
    background: none;
    outline: none;
    border: none;
    width: 20px;
}

.order-button-del {
    color: rgb(51, 51, 51);
}

.orders-table>* {
    border: 1px solid #d8d8d8;
}

.orders-total {
    border: 1px solid #d8d8d8;
    margin-top: 4%;
}

.orders-panel .price-panel-item {
    margin-top: 1%;
    float: right;
    color: #929292;
    font-weight: lighter;
    font-size: small;
}

.orders-panel .price-panel-item .product-num {
    color: black;
}

.orders-panel .price-panel-coupon {
    margin-top: 1%;
    margin-left: 1%;
    float: left;
}

.orders-price {
    margin-top: 1%;
    color: #929292;
    font-weight: lighter;
    font-size: small;
}

.orders-price .sum-price-text {
    text-align: center;
}

.orders-price .sum-price {
    color: rgb(241, 1, 128);
    font-weight: bold;
    font-size: larger;
}

.price-panel-coupon button {
    color: rgb(241, 1, 128);
    font-weight: lighter;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(53, 53, 53);
}

.price-panel-coupon button:hover {
    color: rgb(241, 1, 128);
    background-color: rgb(253, 244, 247);
}

.orders-settlement {
    height: 60px;
}

.orders-settlement .orders-tips {
    height: 100%;
    background-color: rgb(243, 243, 243);
    text-align: right;
    line-height: 60px;
}

.settlement-button {
    height: 100%;
    background-color: rgb(244, 52, 153);
    line-height: 60px;
}

.product-img img {
    width: 70px;
    height: 70px;
}
</style>