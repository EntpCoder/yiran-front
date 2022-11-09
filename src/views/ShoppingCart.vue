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
    <!-- 页身 -->
    <div class="g-bd layui-container">
        <div class="cart-tab-row layui-row">
            <div class="cart-tab layui-col-md1 layui-col-md-offset0">
                <span>特卖商品</span>
            </div>
        </div>
        <div class="channel-tips layui-row">
            <span class="area-delivery-info">
                
                <strong class="area-delivery-province">依然-购物车</strong>
            </span>
            <div class="shop-tips inline-block-item">
                勾选商品“<img src="/images/shop-lock-success.png">”后结算
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
                <tr v-if="!cartList.length && !data.isLoad">
                    请添加商品后，再来查看~~~
                </tr>
                <tr v-if="data.isLoad">
                    加载中~~~
                </tr>
                <tr class="goods-item" v-for="c in cartList" :key="c.cartId">
                    <!-- 商品信息 -->
                    <td class="product-item">
                        <!-- 选框 -->
                        <div class="m-checkbox">
                            <input type="checkbox" v-model="c.isChecked" />
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
                        <a class="order-button-del" href="javascript:;" @click="deleteByCartId(c.cartId)">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 订单 -->
        <div class="orders-total">
            <!-- 订单面板 -->
            <div class="orders-panel layui-row">
                <div class="price-panel-coupon layui-col-md2">
                    <button class="layui-btn" id="demo1" @click="chooseCoupon">
                        使用优惠券
                        <i class="layui-icon layui-icon-down layui-font-12"></i>
                    </button>
                    <div class="useCoupon" v-show="usec">
                        <div class="coupon coupon-wave-left coupon-wave-right coupon-red-gradient" v-for="c in couponList" :key="c.receiveId">
                            <div class="coupon-info coupon-info-right-dashed" @click="choosexiaogou(c)">
                                <div class="coupon-store">{{c.subject}}</div>
                                <div class="coupon-price">¥{{c.discountAmount}}<span>优惠券</span></div>
                                <div class="coupon-description">订单满{{c.fullMoney}}元</div>
                            </div>
                            <embed class="tick" width="50px" height="50px" src="/svg/choose.svg" v-if="c.isChecked" />
                        </div>
                    </div>
                </div>
                <div class="price-panel-item layui-col-md1">
                    共
                    <span class="product-num">{{ cartList.length }}</span>
                    件商品
                </div>
            </div>
            <!-- 金额面板 -->
            <div class="orders-price layui-row">
                <div class="sum-price-text layui-col-md-offset10">总金额:{{ data.sumPrice }}</div>
                <div class="sum-price layui-col-md1"></div>
            </div>
            <!-- 结算 -->
            <div class="orders-settlement layui-row">
                <div class="orders-tips layui-col-md8">
                    <span id="st-tips-text">请在倒计时之前结算</span>
                    <i id="st-tips" class="layui-icon"
                        style="font-size: 15px; color: rgb(97,137,248); margin-right: 20px; margin-left: 10px;">&#xe607;</i>
                </div>
                <a href="javascript:;" class="settlement-button layui-btn layui-col-md4" @click="goConfirmOrder">立即结算
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import cartApi from '@/api/cart.js'
import couponApi from '@/api/coupon.js'
// 购物车数据对象
let cartList = ref([])
let data = reactive({ isLoad: true, sumPrice: 0.0 })
let couponList = ref([])
// 勾选的购物车id
let cartCheckedIds = []
// 选择优惠券id
let couponCheckedId = ref()
// router
const router = useRouter()
// 页面挂挂载完毕执行
onBeforeMount(() => {
    getCart()
})
const usec = ref(false)
data.sumPrice = computed({
    get() {
        let sum = 0
        cartList.value.forEach((cart) => {
            sum += cart.sellingPrice * cart.nums
        })
        return sum.toFixed(2)
    },
    set() {
    }
})
//选择优惠券
function chooseCoupon() {
    usec.value = !usec.value
    couponApi.getUsableCoupon().then(
        response => {
            couponList.value = reactive(response.data.usableCouponList)
            couponList.value.forEach(coupon => {
                if (!coupon.default) { coupon.isChecked = false }
            });
        }
    )
}
//优惠券小钩
function choosexiaogou(coupon){
    couponList.value.forEach(c =>{
        if(coupon === c && c.isChecked == true){
            c.isChecked = false
            couponCheckedId.value = (function () { return; })(); 
        }
        else if(coupon === c && c.isChecked == false){
            c.isChecked = true
            couponCheckedId.value = c.receiveId
        }
        else {
            c.isChecked = false
            
        }
    })
}
// 请求购物车数据
function getCart() {
    cartApi.getCart().then(
        response => {
            cartList.value = reactive(response.data.cartList)
            data.isLoad = false
        }
    )
}
// 数量加减按钮
function decrease(cart) {
    cart.nums--
    cartApi.updataNums(cart)
}
function increase(cart) {
    cart.nums++
    cartApi.updataNums(cart)
}
// 删除
function deleteByCartId(cartId) {
    cartApi.deleleCartById(cartId).then(
        response => {
            if (response.code === 200) {
                getCart()
            }
        })
}
function goConfirmOrder(){
    cartList.value.filter(c => c.isChecked).map(c => {
        cartCheckedIds.push(c.cartId)
    })
    router.push({path:'/orderConfirm',query:{cartIds:cartCheckedIds,receiveCouponId:couponCheckedId.value}})
}

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
.useCoupon{
    width: auto;
    height: auto;

}
.coupon{
    width: auto;
    height: auto;
    background-color:rgb(248, 120, 188);

}

/* 左边框的波浪 */
.coupon-wave-left::before, .coupon-wave-right::after{
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 14px;
    background-image: radial-gradient(white 0, white 4px, transparent 4px);
    /** 如果只设置为半径的两倍(直径)，那么半圆之间没有类似堤岸的间隔 */
    background-size: 14px 14px;
    background-position: 0 2px;
    background-repeat: repeat-y;
    z-index: 1;
}
.coupon-wave-left::before {
    left: -7px;
}
.coupon-wave-right::after {
    right: -7px;
}
.coupon-info {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 5px;
    padding-bottom: 1.5rem;
    position: relative;
    min-width: 15rem;
}
.coupon-info-right-dashed {
    border-right: 2px dashed white;
}
.coupon-info-right-solid {
    border-right: 2px solid white;
}
/* 使用两个边框为圆角的白色div制造半圆缺角，有个缺点是这个缺角必须与背景色相同（clip-path不好弄） */
.coupon-hole::before, .coupon-hole::after {
    content: '';
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    right: -.5rem;
}
.coupon-info::before {
    top: -.5rem;
}
.coupon-info::after {
    bottom: -.5rem;
}
.coupon-info>div {
    margin-bottom: .2rem;
}
.coupon-price {
    font-size: 250%;
    font-weight: bold;
}
.coupon-price>span {
    font-size: 40%;
    margin-left: .5rem;
    font-weight: normal;
}
.coupon-get {
    padding: 1rem;
    /** 这里使用flex是为了让文字居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 5rem;
    position: relative;
}
.coupon-get>.coupon-desc {
    font-size: 150%;
    margin-bottom: .5rem;
    font-weight: bold;
}

.coupon {
    display: inline-flex;
    color: white;
    position: relative;
    padding-left: .5rem;
    padding-right: .5rem;
    margin: 1rem;
    /** 这里不能用百分号，因为百分号是分别相对宽和高计算的，会导致弧度不同  */
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    overflow: hidden;
}

.coupon-red-gradient {
    background-image: linear-gradient(150deg, #D24161 50%, #D24161D8 50%);
    height: 100px;
}
.choose-coupon{
    margin-top: 41px;
    width: 18px;
    height: 18px;
}
.tick{
    margin-top: 20px;
}
</style>