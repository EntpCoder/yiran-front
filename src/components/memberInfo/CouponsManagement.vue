<template>
  <p id="m-title">
                    <a href="my-info.html">我的唯品会</a>
                    &nbsp;>&nbsp;优惠券
                </p>
                <div class="m-coupons-modules">
                    <p class="u-active-title">领取优惠券</p>
                    <div class="m-active-area">
                        <div  class="m-active-area coupon" v-on:click="xuanze(c)" v-for="c in couponList" :key="c.couponId">
                            <p>满{{c.discountAmount}}减{{c.fullMoney}}&nbsp; &nbsp;&nbsp;优惠类型{{c.subject}}</p>
                        </div>
                    </div>
                </div>
                <div class="u-wavy-line"></div>
                <div class="m-panel-modules">
                    <!-- 优惠券list -->
                    <div class="layui-tab layui-tab-card">
                        <ul class="layui-tab-title">
                          <li><router-link to="/memberInfo/couponsManagement/couponInfo?type=0">未使用</router-link></li>
                          <li><router-link to="/memberInfo/couponsManagement/couponInfo?type=1">已使用</router-link></li>
                          <li><router-link to="/memberInfo/couponsManagement/couponInfo?type=2">已过期</router-link></li>
                        </ul>    
                      </div>
                      <RouterView></RouterView>
                </div>
</template>

<script setup>
import couponApi from '@/api/coupon.js'
import { reactive, ref,onMounted } from 'vue'
let couponList = ref([])
let receiveCoupon =ref()
onMounted(() => {
    loadData()
})
function loadData(){
    couponApi.getCouponList().then(
        response => {
            couponList.value = reactive(response.data.couponList)
        }
    )
}
function xuanze(c){
    couponApi.getReceiveCoupon(c.couponId).then(
        response => {
            receiveCoupon.value = reactive(response.data.receiveCoupon)
        }
    )
}
</script>

<style scoped> 
/* 右侧内容栏 */
.coupon{
   width: 350px;
   height: 40px;
   border: 1px solid #ee0591;
   margin-bottom: 5px;
   background: rgb(239, 210, 210);

}
#m-title {
    font-size: 12px;
}
.m-coupons-modules {
    background-color: #fff;
    border: 1px solid #e4e4e4;
}
.m-active-area {
    z-index: 5;
    padding: 25px 70px;
    position: relative;
}
.u-active-title {
    background-color: #f9f9f9;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    padding-left: 20px;
    font-weight: 700;
    border-bottom: 1px solid #e4e4e4;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
input{
    margin: 0;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
}
.u-wavy-line {
    height: 10px;
    margin-top: -1px;
    background: url(/images/bg-cou-add.png) no-repeat;
}
.m-panel-modules {
    background-color: #fff;
    border: 1px solid #e4e4e4;
}
li, ol, ul {
    list-style: none;
}



li {
    display: list-item;
    font-size: 12px;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

table {
    display: table;

    box-sizing: border-box;
    text-indent: initial;

    border-color: grey;
}
.layui-tab-title li {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    font-size: 14px;
    transition: all .2s;
    -webkit-transition: all .2s;
    position: relative;
    line-height: 40px;
    min-width: 65px;
    padding: 0 15px;
    text-align: center;
    cursor: pointer;
}

</style>