<template>
    <!-- 全部订单 -->
    <div class="layui-tab-item layui-show">
        <div class="col-name">
            <div class="goods">商品</div>
            <div class="total">单价</div>
            <div class="state">订单状态</div>
            <div class="control">操作</div>
        </div>
        <template v-if="orderList.length === 0">
            <h2>暂无订单</h2>
        </template>
        <!-- ======== -->
        <div class="order-list-info">
            <template v-for="o in orderList" :key="o.orderId">
                <div class="order-hd">
                    <i class="ii-te"></i>
                    <span class="num">
                        订单号：
                        <a href="">{{ o.numbers }}</a>
                    </span>
                    <span class="num order-gen-date">{{ o.placeTime }}</span>
                </div>
                <!-- 具体商品 -->
                <template v-for="od in o.orderDetails" :key="od.orderDetailsId">
                    <div class="order-bd">
                        <div class="order-goods">
                            <div class="good">
                                <a href="">
                                    <img :src="od.proMainImageAddress" width="50" height="63" alt>
                                </a>
                                <div class="goods-info">
                                    <div class="goods-name">
                                        <a href="" target="_blank" class="name" :title="od.proName">{{ od.proName }}</a>
                                        <span class="size">尺码:{{ od.sizeType }}-颜色:{{ od.colorName }}</span>
                                    </div>
                                    <div class="goods-num">
                                        <span class="num">×{{ od.proNum }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-price">
                            <strong>￥{{ od.proPrice }}</strong>
                        </div>
                        <!-- 订单待付款样式 -->
                        <template v-if="o.orderState == 0">
                            <div class="order-state">
                                <span class="red">未支付</span>

                                <router-link :to="`/memberInfo/orderdetail?orderId=${o.orderId}`"
                                    mars_sead="account_order_detail_btn">订单详情</router-link>
                            </div>
                            <div class="order-control">
                                <p>
                                    <a :href="`http://localhost:2177/pay/goAliPay/${o.orderId}`" role="button"
                                        mars_sead="account_order_secondpay_btn"
                                        class="ui-btn-mini ui-btn1 J_showUnpaid">支付</a>
                                </p>

                            </div>
                            <div class="order-other">
                                <p>
                                    <a href="">取消订单</a>
                                </p>
                            </div>
                        </template>
                        <!-- 待发货样式 -->
                        <template v-if="o.orderState == 1">
                            <div class="order-state">
                                <span class="green">已支付</span>
                                <router-link :to="`/memberInfo/orderdetail?orderId=${o.orderId}`"
                                    mars_sead="account_order_detail_btn">订单详情</router-link>
                            </div>
                            <div class="order-control">
                            </div>
                            <div class="order-other">
                                <p>
                                    <a href="">提醒发货</a>
                                </p>
                                <p>
                                    <a href="">取消订单</a>
                                </p>
                            </div>
                        </template>
                        <!-- 已取消样式 -->
                        <template v-if="o.orderState == 2">
                            <div class="order-state">
                                <span class="green">已取消</span>
                            </div>
                            <div class="order-control">

                            </div>
                            <div class="order-other">
                            </div>
                        </template>
                        <!-- 待收货样式 -->
                        <template v-if="o.orderState == 3">
                            <div class="order-state">
                                <span class="green">已发货</span>

                                <router-link :to="`/memberInfo/orderdetail?orderId=${o.orderId}`"
                                    mars_sead="account_order_detail_btn">订单详情</router-link>
                            </div>
                            <div class="order-control">
                                <div class="confirmSign-content J-confirmSign-content">
                                    <p><a class="ui-btn-mini ui-btn2 J_confirmSign" data-ordersn="22082784137477"
                                            @click="confirmReceipt(o.orderId)" role="button"
                                            href="javascript:;">确认收货</a></p>
                                </div>

                            </div>
                            <div class="order-other"></div>
                        </template>
                        <!-- 已完成样式 -->
                        <template v-if="o.orderState == 4">
                            <div class="order-state">
                                <span class="gray">已签收</span>
                                <router-link :to="`/memberInfo/orderdetail?orderId=${o.orderId}`"
                                    mars_sead="account_order_detail_btn">订单详情</router-link>
                            </div>
                            <div class="order-control">

                            </div>
                            <div class="order-other">
                                <p>
                                    <a href="javascript:;" class="comment" role="button">评价</a>
                                </p>
                            </div>
                        </template>
                    </div>
                </template>
            </template>
        </div>

    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onBeforeMount, ref, watch } from 'vue'
import orderApi from '@/api/order.js'
const route = useRoute()
const router = useRouter()
const orderType = ref(route.query.type)
const orderList = ref([])
// 当路由变化时重新加载数据
watch(() => router.currentRoute.value.fullPath, () => {
    orderType.value = route.query.type
    if (orderType.value) {
        loadOrderByStatus()
    } else {
        loadAllOrder()
    }
    // 加载数据
}, { immediate: true }
)
onBeforeMount(() => {
    loadAllOrder()
})
function loadAllOrder() {
    orderApi.getAllOrders().then(response => {
        orderList.value = response.data.ordersList
    })
}
// 根据订单状态查询订单
function loadOrderByStatus() {
    orderApi.getOrdersByStatus(orderType.value).then(response => {
        orderList.value = response.data.QueryStatusList
    })
}
// 确认收货
function confirmReceipt(orderId) {
    orderApi.confirmReceipt(orderId).then(response => {
        if (response.code === 200) {
            if (orderType.value) {
                loadOrderByStatus()
            } else {
                loadAllOrder()
            }
        }else{
            alert("收货失败")
        }
    })
}
</script>

<style scoped>
.layui-tab-content .col-name {
    height: 36px;
    line-height: 36px;
    background-color: #f9f9f9;
    border: 1px solid #eaeaea;
}

.col-name .goods {
    display: inline-block;
    text-align: center;
    width: 406px;
    font-size: 12px;
}

.col-name .total {
    display: inline-block;
    text-align: center;
    width: 127px;
    font-size: 12px;
}

.col-name .state {
    display: inline-block;
    text-align: center;
    width: 97px;
    font-size: 12px;
}

.col-name .control {
    display: inline-block;
    text-align: center;
    width: 174px;
    font-size: 12px;
}

.order-hd {
    background-color: #f9f9f9;
    color: #333;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    border: 1px solid #eaeaea;
    border-bottom: 0;
    border-left: 2px solid #f10180;
}

.order-bd {
    background-color: #fff;
    border: 1px solid #eaeaea;
    display: table;
    width: 818px;
}

.ii-te {
    background-image: url(/images/sprites.png);
    background-position: -242px -205px;
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    margin-right: 8px;
}

.order-hd span {
    vertical-align: middle;
    font-size: 12px;
    display: inline-block;
}

.order-hd .num {
    vertical-align: middle;
    margin-right: 10px;
    color: #666;
    font-size: 12px;
}

.order-hd .order-gen-date {
    float: right;
    color: #999;
    margin-top: 2px;
}

.order-bd .order-goods {
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    width: 406px;
    border-right: 1px solid #eaeaea;
}

.order-bd .order-price {
    color: #999;
    width: 128px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border-right: 1px solid #eaeaea;
}

.order-bd .order-state {
    width: 97px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border-right: 1px solid #eaeaea;
}

.order-bd .order-control {
    border-right: 1px solid #eaeaea;
    width: 97px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.order-bd .order-other {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.order-bd .order-goods .good {
    display: block;
    padding: 20px;
    border-bottom: 1px solid #eaeaea;
}

.order-bd .order-goods .pic img {
    vertical-align: middle;
}

.goods-info {
    width: 300px;
    word-wrap: break-word;
    vertical-align: middle;
    display: inline-block;
}

.goods-info .goods-name {
    width: 170px;
    float: left;
    margin-top: 10px;
}

.goods-info .name {
    display: block;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
}

.goods-info .size {
    color: #999;
    font-size: 12px;
}

.goods-info .goods-num {
    float: left;
    margin-top: 20px;
    margin-left: 20px;
}

.goods-info {
    width: 300px;
    word-wrap: break-word;
    vertical-align: middle;
    display: inline-block;
}

.goods-info .goods-num .num {
    font-size: 12px;
}

.order-bd .order-price strong {
    font-size: 14px;
    font-family: arial;
    color: #333;
}

.order-bd .order-price p {
    font-size: 12px;
}

.order-bd .order-state span {
    display: block;
    font-size: 12px;
}

.order-bd .order-state .green {
    color: #16a61e;
}

.order-track {
    position: relative;
    zoom: 1;
    height: 22px;
    margin-bottom: -4px;
}

.order-track a {
    font-size: 12px;
}

.order-state a {
    font-size: 12px;
}

.order-bd .order-control .ui-btn-mini {
    text-decoration: none;
}

.confirmSign-content .ui-btn-mini {
    margin-top: 6px;
}

.ui-btn-secondary,
.ui-btn2 {
    background-color: #fcedf2;
    border: 1px solid #ffbee0;
    color: #e00078;
}

.ui-btn-mini {
    min-width: 24px;
    padding: 0 5px;
    font: 12px/20px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei, '\5FAE\8F6F\96C5\9ED1', '\5B8B\4F53', sans-serif;
    height: 20px;
}

.J-cancel-delivery,
.J-modify {
    font-size: 12px;
}

.order-bd .order-state .gray {
    color: #9e9e9e;
}

.order-other p a {
    font-size: 12px;
}

.order-bd .order-state .red {
    color: #f10180;
}

.ui-btn-primary,
.ui-btn1 {
    background-color: #f10180;
    border: 1px solid #f10180;
}

.order-bd .order-control .ui-btn-mini {
    text-decoration: none;
}

.ui-btn1 {
    color: #fff;
    display: inline-block;
    border-radius: 3px;
    text-decoration: none;
    text-align: center;
    vertical-align: top;
    -webkit-transition: .3s;
    transition: .3s;
    cursor: pointer;
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

.u-tips-pop {
    visibility: hidden;
    *visibility: visible;
    *display: none;
    opacity: 0;
    -webkit-transition: opacity .3s linear;
    transition: opacity .3s linear;
    top: 21px;
    width: 456px;
    left: -148px;
    height: 300px;
    background-color: #fff;
}

.order-track:hover .u-tips-pop {
    visibility: visible;
    opacity: 1;
    display: block;
}
</style>