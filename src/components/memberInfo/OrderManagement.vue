<template>
    <p id="m-title">
        <a href="my-info.html">我的依然</a>
        &nbsp;>&nbsp;订单管理
    </p>
    <div class="mad J-declare">
        <i class="i-horn"></i>
        <div class="J-declare-warning">
            <p>安全提醒：依然-不会以任何理由要求您提供银行卡信息或支付额外费用，请谨防钓鱼链接或诈骗电话。</p>
            <p>*为保障您的信息安全，订单信息中的联系电话已被加密隐藏。</p>
        </div>
    </div>
    <div class="layui-tab">
        <ul class="layui-tab-title">
            <li class="layui-this"><router-link to="/memberInfo/orderManagement/orderInfo">全部订单</router-link></li>
            <li><router-link to="/memberInfo/orderManagement/orderInfo?type=0">待付款</router-link></li>
            <li><router-link to="/memberInfo/orderManagement/orderInfo?type=1">待发货</router-link></li>
            <li><router-link to="/memberInfo/orderManagement/orderInfo?type=3">待收货</router-link></li>
            <li><router-link to="/memberInfo/orderManagement/orderInfo?type=4">已完成</router-link></li>
        </ul>
        <div class="layui-tab-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
/* 右侧内容栏 */
#m-title {
    font-size: 12px;
}

.mad {
    position: relative;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #ececec;
    padding: 1px 5px 1px;
    line-height: 20px;
    margin-bottom: 10px;
}

.J-declare-warning p {
    display: block;
    margin-left: 40px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-end: 0px;
    font-size: 12px;
}

.i-horn {
    position: absolute;
    left: 15px;
    top: 15px;
    background-image: url(/images/sprites.png);
    background-position: -145px -174px;
    width: 21px;
    height: 21px;
}

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
    background-image: url(../images/sprites.png);
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