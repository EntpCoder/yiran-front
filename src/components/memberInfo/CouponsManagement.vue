<template>
  <p id="m-title">
                    <a href="my-info.html">我的依然</a>
                    &nbsp;>&nbsp;优惠券
                </p>
                <div class="m-coupons-modules">
                    <p class="u-active-title">领取优惠券</p>
                    <div class="coupon-item" v-for="c in couponList" :key="c.couponId">
                        <div class="style-two">
                        <div class="info-box">
                            <p class="nick">{{c.subject}}</p>
                        <div class="coupon-money">
                        <div class="lay of">￥<em>{{c.discountAmount}}</em></div>
                        <div class="lay">
                            <p class="tit">优惠劵</p>
                            <p class="demand">满{{c.fullMoney}}元可用</p>
                        </div>
                        </div>
                        </div>
                            <a href="javascript:void(0)" @click="getReceiveCoupon(c)" class="get-btn">
                            <span>立即领取</span></a>
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
function getReceiveCoupon(c){
    couponApi.getReceiveCoupon(c.couponId).then(
        response => {
            receiveCoupon.value = reactive(response.data.receiveCoupon)
            if(response.code==200){
                alert('领取成功')
            }else{
                alert('您已领取过该优惠券')
            }
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
.style-one, .style-two, .style-three, .style-four, .style-five, .style-six, .style-seven{width: 100%; height:8rem; position: relative;margin: 5% 0;
 
 display: -webkit-box; display: -webkit-flex; display: flex; align-items: center; justify-content: center;
 
 background-color: #fff; border:1px solid #E5004F;}
 .style-one .info-box, .style-two .info-box, .style-three .info-box, .style-four .info-box, .style-five .info-box , .style-six .info-box, .style-seven .info-box{
 
 -webkit-box: 1; -webkit-flex: 1; flex: 1; padding: 0 3% 0 10%; position: relative;}
 .style-two .info-box:before, .style-two .info-box:after,
 
.style-two .get-btn:before,  .style-two .get-btn:after{
 
content:""; width: 1.4rem; height: 1.8rem; position: absolute; z-index: 9;
 
border-right: 1px solid #E5004F;  -webkit-border-radius: 50%; border-radius: 50%; background-color: #f5f5f5;
 
}
 
.style-one .info-box:before, .style-two .info-box:before{ top:-1.5rem; left:-.5rem; -webkit-transform: rotate(36deg); transform: rotate(36deg);}
 
.style-one .info-box:after, .style-two .info-box:after{ bottom:-1.5rem; left:-.5rem; -webkit-transform: rotate(-36deg); transform: rotate(-36deg);}
 
.style-one .get-btn:before, .style-two .get-btn:before{ top:-.5rem; right:-.35rem; -webkit-transform: rotate(136deg); transform: rotate(136deg);}
 
.style-one .get-btn:after, .style-two .get-btn:after{bottom:-.5rem; right:-.35rem; -webkit-transform: rotate(-136deg); transform: rotate(-136deg);}
 
  
 
.style-one .get-btn, .style-two .get-btn, .style-three .get-btn, .style-four .get-btn, .style-six .get-btn, .style-seven .get-btn{
 
width: 24%; height: 8rem; text-align: center; color: #fff; font-size: 1.6rem; background-color: #E5004F; position: relative;}
 
.style-one .get-btn span{width: 1.6rem; padding: .66rem 2rem .66rem 0; display: inherit; margin:0 auto; word-break: break-all;}
.style-two{ background-color: #ED008C; border:1px solid #ED008C; color: #fff;}
 
.style-two:before, .style-two:after{
 
content:""; height: .5rem; position: absolute; display: block; z-index: 9;
 
background-image: linear-gradient(135deg,transparent, transparent 45%, #ED008C, #ED008C 55%, transparent 100%),
 
  linear-gradient(45deg, transparent, #ED008C 45%, #ED008C, transparent 55%, transparent 100%);
 
background-size: 1rem 1rem; background-repeat: repeat-x, repeat-x;
 
}
 
.style-two:before{top: -.36rem; left: .8rem; right: 1rem;}
 
.style-two:after{bottom: -.36rem; -webkit-transform: rotate(180deg);transform: rotate(180deg); left: 1.1rem; right: 1.2rem;}
 
.style-two .get-btn{background-color: #ed008c;}
 
.style-two .get-btn span, .style-three .get-btn span, .style-six .get-btn span, .style-seven .get-btn span{
 
width:4rem; height: 8rem; display: inline-block; padding:1.66rem 0; font-size: 2rem; word-break: break-all;
 
}
 
.style-two .of{color:#FFF100;}
.style-two.have .info-box:before, .style-two.have .info-box:after{border-right:1px solid #c1c1c1;}
.style-two.have .get-btn:before, .style-two.have .get-btn:after{border-right: #c1c1c1;}
.style-two.have, .style-three.have{background-color: #c1c1c1; border:none;}
 
.style-two.have .of{color: #fff;}
 
.style-two.have:before, .style-two.have:after{background-image: linear-gradient(135deg,transparent, transparent 45%, #c1c1c1, #c1c1c1 55%, transparent 100%),
 
 linear-gradient(45deg, transparent, #c1c1c1 45%, #c1c1c1, transparent 55%, transparent 100%);}
 
.style-two.have .get-btn{background-color: #c1c1c1;}
 
.style-two.have .get-btn span, .style-three.have .get-btn span,
 
.style-six.have .get-btn span, .style-seven.have .get-btn span{width: 1.6rem; padding: 1.36rem 0; font-size: 1.6rem;}
.coupon-wrapper .coupon-item{width: 100%;}
 
.coupon-wrapper h3{ height: 3rem; line-height: 1.8rem;font-size: 1.4rem; color:#454545; padding: 2% 0;}
 
.coupon-item .nick{padding:.66% 0; color: #fff; font-size: 1px;}
 
.coupon-item .coupon-money {width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; font-size: 1.2rem; align-items: center;}
 
.coupon-item .coupon-money em{font-size: 3.8rem;}
 
.coupon-item .coupon-money .lay:last-child{flex: 1; padding:0 3%;line-height: 1.66rem;}
.coupon-item {margin: 0; height: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;font-size: 62.5%; }
 
  
 
.coupon-item { width: 100%; max-width: 640px;min-width:320px; height: 100%; margin: 0 auto; padding: 0; font-family: "Microsoft Yahei";
 
 }
 
  
 
a { text-decoration: none; color: #a1a1a1; background: transparent; -webkit-tap-highlight-color: transparent; }
 
a:active { color: #8c88ff; border: none; outline: none; }
</style>