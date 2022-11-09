<template>
    <p id="m-title">
        <a href="my-info.html">依然</a>
        &nbsp;>&nbsp;订单详情
    </p>
    <div class="m-detail-modules">
        <h3 class="u-modules-title">
            <span class="u-modules-title-span">订单概况</span>
        </h3>
        <div class="m-detail-info">
            <div class="m-detail-state">
                <p>订单号：{{ order.numbers }}
                    <span class="type"></span>
                    状态：<b class="" style="color:rgb(241,1,128)">
                        <template v-if="order.orderState === 0">
                            待付款
                        </template>
                        <template v-if="order.orderState === 1">
                            待发货
                        </template>
                        <template v-if="order.orderState === 3">
                            待收货
                        </template>
                        <template v-if="order.orderState === 4">
                            已完成
                        </template>
                    </b>
                    <span class="time">下单时间：{{ order.placeTime }}</span>
                </p>
                <template v-if="order.orderState === 4">
                    <div class="ui-tips-nor ui-tips2">
                        <p class="info"><i class="vipFont if-info"></i><span>本次交易已完成。欢迎再次光临体验，祝您生活愉快！</span>
                        </p>
                    </div>
                </template>
            </div>
            <dl class="m-detail-info-list">
                <dt>订单金额：</dt>
                <dd><b class="money">¥{{order.orderAmount}}</b><span>（含运费¥0.00）</span></dd>
                <dt>收货信息：</dt>
                <dd>{{address.name}},{{address.phone}}，{{address.province}} {{address.city}} {{address.area}} {{address.stree}} {{address.detail}}</dd>
                <dt>支付方式：</dt>
                <dd>支付宝</dd>
            </dl>
        </div>
    </div>
    <div class="m-detail-modules">
        <h3 class="u-modules-title"><span>订单跟踪</span></h3>
        <!-- 步骤条 -->
        <el-steps :active="step" align-center>
            <el-step title="" description="待支付" />
            <el-step title="" description="待发货" />
            <el-step title="" description="待收货" />
            <el-step title="" description="已完成" />
        </el-steps>
        <div class="b"></div>
    </div>
    <div class="m-detail-modules clearfix" id="goodList">
        <h3 class="u-modules-title"><span>商品清单</span></h3>
        <table class="m-order-goods-list" id="goodsList_">
            <thead class="">
                <tr class="u-goods-title">
                    <th class="title-good">商品</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                </tr>
            </thead>
            <tbody>
                <tr class="suitGoodsItem" v-for="od in order.orderDetails" :key="od.orderDetailsId">
                    <td class="m-goods">
                        <a href="" target="_blank" title="" class="pic">
                            <img :src="od.proMainImageAddress" width="50" height="63" alt="">
                        </a>
                        <div class="m-goods-info">
                            <a target="_blank" class="name" href="" :title="od.proName">{{od.proName}}</a>
                            <span class="size">L</span>
                            <div class="supportTip">
                            </div>
                        </div>
                    </td>
                    <td>{{od.proPrice}}</td>
                    <td>{{od.proNum}}</td>
                    <td class="u-money-color">¥{{od.proNum*od.proPrice}}</td>
                </tr>
            </tbody>
        </table>
        <ul class="m-total-pay">
            <li><span class="category">共 <span class="num">{{order.proNum}}</span> 件商品 金额：
                </span><span class="txt">{{order.orderAmount + order.discountAmount}}</span>
            </li>
            <li><span class="category">运费（已免运费）
                    ：
                </span><span class="txt">¥0.00</span>
            </li>
            <li><span class="category">优惠券：</span><span class="txt">-¥{{order.discountAmount}}</span>
            </li>
            <li><span class="category "><b class="total">订单金额：</b></span><span class="txt"><b class="u-money-color"
                        data-hover="u-money-color-hover">¥{{order.orderAmount}}</b></span>
            </li>
            <li class="clearfix">
                <div class="ui-tips-pop u-special-pay ui-tips-pop-1">
                    <div class="cnt">
                        <span>支付宝支付：¥{{order.orderAmount}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import orderApi from '@/api/order.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const orderId = route.query.orderId
const address = ref({})
const order = ref({})
const step = ref(0)
onMounted(() => {
    loadData()
})
function loadData() {
    orderApi.getOrderDetails(orderId)
        .then(response => {
            // 加载地址信息和订单信息
            address.value = response.data.address
            order.value = response.data.order
            // 确定步数
            if(order.value.orderState===0) step.value = 1
            if(order.value.orderState===1) step.value = 2
            if(order.value.orderState===3) step.value = 3
            if(order.value.orderState===4) step.value = 4
        })
}
</script>

<style scoped>
:root .m-detail-modules {
    border: 0 none;
}

.m-detail-modules {
    border: 1px solid #ececec;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
    margin-bottom: 15px;
}

.u-modules-title {
    color: #000;
    background-color: #f9f9f9;
    font: 14px/24px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei, \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, sans-serif;
    padding-left: 20px;
    line-height: 40px;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.m-detail-state {
    position: relative;
    border-bottom: 1px dotted #dcdcdc;
    zoom: 1;
    padding-bottom: 15px;
}

.m-detail-info {
    padding: 2px 20px;
    line-height: 24px;
    position: relative;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.m-detail-state .type {
    color: #999;
    padding-right: 30px;
}

b {
    font-weight: bold;
}

.m-detail-state .time {
    float: right;
}

.m-detail-modules .time {
    float: right;
    margin-right: 15px;
}

.m-detail-state p,
span {
    font-size: 12px;
}

.m-detail-state .ui-tips-nor {
    margin-top: 5px;
    position: static;
}

.ui-tips2 {
    background-color: #dff1f8;
    border: 1px solid #b4e1f3;
}

.ui-tips-nor {
    position: relative;
    padding-left: 15px;
    line-height: 30px;
    border-radius: 2px;
    zoom: 1;
    font-family: tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei, '\5FAE\8F6F\96C5\9ED1', '\5B8B\4F53', sans-serif;
}

.ui-tips-nor i {
    margin-right: 13px;
    vertical-align: top;
}

.if-info {
    color: #249fdf;
}

.vipFont {
    font-family: vipFont;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.m-detail-info-list dt {
    float: left;
}

dt {
    display: block;
}

.m-detail-info-list .money {
    color: #f10180;
}

b {
    font-weight: bold;
}

.m-detail-info-list {
    font-size: 12px;
}

h3 span {
    font-size: 14px;
}

.ui-step {
    padding: 0 40px;
}

.step {
    width: 80%;
    margin: 0 auto;
}

.ui-step-3 li {
    width: 20%;
}

.ui-step li.ui-step-end {
    width: 250px;
}

.m-detail-modules .b {
    height: 12px;
}

/* 商品清单 */
.m-order-goods-list {
    color: #666;
    margin: 0 auto;
    width: 820px;
    margin-left: 10px;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 12px;
}

table {
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-color: grey;
}

thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}

.m-order-goods-list .u-goods-title {
    border-bottom: 1px solid #e0e0e0;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

td {
    display: table-cell;
    vertical-align: inherit;
}

.m-order-goods-list .u-goods-title th {
    line-height: 1;
    padding: 2px 4px 8px;
}

.m-order-goods-list .title-good {
    text-align: left;
}

.m-order-goods-list th {
    color: #999;
}

th {
    font-style: normal;
    font-weight: 400;
}


.m-order-goods-list .m-goods {
    padding: 20px 0;
    text-align: left;
}

.suitGoodsItem td {
    border-bottom: 0;
}

.m-goods {
    font-size: 0;
    line-height: 1.5;
}

.m-goods .pic {
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
    letter-spacing: normal;
    word-spacing: normal;
}

.m-goods-info {
    display: inline-block;
    width: 220px;
    font-size: 12px;
    vertical-align: middle;
    letter-spacing: normal;
    word-spacing: normal;
    position: relative;
}

.m-goods-info .name {
    max-height: 36px;
    overflow: hidden;
    white-space: normal;
    word-wrap: break-word;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 3px;
    color: #666;
    font-size: 12px;
}

.m-goods-info .size {
    display: block;
    color: #333;
}

b {
    font-weight: bold;
}

.u-money-color {
    color: #f10180;
    font-weight: bolder;
}

.m-total-pay {
    float: right;
    padding: 14px 20px 24px 0;
    line-height: 30px;
    text-align: right;
}

.m-total-pay .u-special-pay .cnt {
    padding: 5px 7px;
    line-height: 20px;
}

.ui-tips-pop .cnt {
    position: relative;
    background-color: #fff;
}

.m-total-pay .num {
    color: #f10180;
}

.m-total-pay .txt {
    display: inline-block;
    min-width: 75px;
    white-space: nowrap;
}

.m-detail-modules .num,
.m-detail-modules .txt {
    color: #f10180;
}

.m-total-pay>li {
    position: relative;
}

.m-total-pay .u-special-pay {
    position: relative;
    float: right;
    white-space: nowrap;
    margin-top: 3px;
    text-align: left;
}

.ui-tips-pop,
.ui-tooltips {
    position: absolute;
    max-width: 800px;
    border: 1px solid #dbdada;
    border-radius: 2px;
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    font: 12px/18px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei, '\5FAE\8F6F\96C5\9ED1', '\5B8B\4F53', sans-serif;
    color: #4d4d4d;
    z-index: 50;
}

.m-total-pay .u-money-color {
    font-size: 16px;
}

.u-money-color {
    color: #f10180;
    font-weight: bolder;
}
</style>