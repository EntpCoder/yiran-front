<template>
  <YiRanHeader></YiRanHeader>
  <SecondHeader></SecondHeader>
  <ShopNavigation></ShopNavigation>
  <RightNavigation></RightNavigation>
  <!-- ------------------ -->
  <div class="product-container">
    <!-- ----------------------------图片展示和商品参数 -->
    <div class="layui-row">
      <!-- 左边 -->
      <div class="layui-col-md5">
        <!-- 大图片 -->
        <img
          class="mainImg"
          src="/images/temp/pro-detail-image1.jpg"
          height="100%"
          width="100%"
        />
        <!-- 小图片 -->
        <div class="layui-row layui-col-space5">
          <div class="layui-col-md1">
            <span><img src="/svg/箭头 -左.svg" /></span>
          </div>
          <div class="layui-col-md2">
            <img
              src="/images/temp/pro-detail-image1.jpg"
              height="100%"
              width="100%"
            />
          </div>
          <div class="layui-col-md2">
            <img
              src="/images/temp/pro-detail-image1.jpg"
              height="100%"
              width="100%"
            />
          </div>
          <div class="layui-col-md2">
            <img
              src="/images/temp/pro-detail-image1.jpg"
              height="100%"
              width="100%"
            />
          </div>
          <div class="layui-col-md2">
            <img
              src="/images/temp/pro-detail-image1.jpg"
              height="100%"
              width="100%"
            />
          </div>
          <div class="layui-col-md2">
            <img
              src="/images/temp/pro-detail-image1.jpg"
              height="100%"
              width="100%"
            />
          </div>
          <div class="layui-col-md1">
            <span><img src="/svg/箭头 -右.svg" /></span>
          </div>
        </div>
        <!-- 商品编码 & 商品收藏 -->
        <div class="proId-and-collect">
          <span>商品编码：{{data.product.proNum}}</span>
          <div class="pro-collect">
            <img src="/svg/collect-start.svg" alt="" />
            <span>收藏商品</span>
          </div>
        </div>
      </div>

      <!-- 右边 -->
      <div class="layui-col-md7">
        <div class="grid-demo">
          <!-- 间隔 -->
          <div class="layui-col-md1">1</div>
          <!-- 参数参数box -->
          <div class="layui-col-md11">
            <!-- 品牌和标题 -->
            <div class="brand-and-title">
              <a href="#">太平鸟</a>
              <div class="weipin-ziying">
                <span>唯品自营</span>
              </div>
              <span>男装2022秋季新品 Seiji Matsumoto联名宽松男式夹克</span>
            </div>
            <!-- 打折券 -->
            <div class="discount-coupon">
              <img src="/images/discount-bgm.png" height="100%" width="100%" />
              <div class="left">
                <div id="up-part">
                  <div id="box500">
                    <span>￥</span>
                    <span>500</span>
                  </div>
                  <div id="temaijia-box">
                    <img src="/images/三角内心圆.png" id="sanjiao-yuan" />
                    <div id="tamaijia-box-2">
                      <span>特卖价</span>
                      <span>￥</span>
                      <span>470</span>
                    </div>
                    <img src="/svg/attention.svg" id="attention" />
                  </div>
                </div>
                <div id="down-part">
                  <del>￥1180</del>
                  <span>4折</span>
                </div>
              </div>
              <div class="right">
                <div class="super-brand-image">
                  <img
                    src="/images/超级大牌日.png"
                    height="100%"
                    width="100%"
                  />
                </div>
                <div id="clock-box">
                  <span id="clock-day">3</span>
                  <span>天</span>
                  <span id="clock-hour">22</span>
                  <span>小时</span>
                  <span>后结束</span>
                </div>
              </div>
            </div>
            <!-- 配送、运费、颜色、尺码、数量。。 -->
            <div class="layui-row">
              <div class="layui-col-md1">
                <div class="grid-demo grid-demo-bg1">
                  <span>配送</span>
                  <span>至&nbsp;</span>
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                </div>
              </div>
              <div class="layui-col-md1">
                <div class="grid-demo">
                  <span>&emsp;&emsp;</span>
                  <span>现在付款，最快8月28日发货，8月29日送达</span>
                </div>
              </div>
              <div class="layui-col-md1">
                <div class="grid-demo grid-demo-bg1">
                  <span>运费</span>
                  <span id="yunfei"
                    >新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</span
                  >
                </div>
              </div>
              <div class="layui-col-md1">
                <div class="grid-demo">
                  <span>颜色</span>
                  <ul>
                    <li>
                      <div class="box">
                        <img
                          src="/images/temp/pro-detail-image1.jpg"
                          width="25%"
                          height="100%"
                        />
                        <span>黑色</span>
                        <span>(大阔)</span>
                      </div>
                    </li>
                    <li>
                      <div class="box">
                        <img
                          src="/images/temp/pro-detail-image1.jpg"
                          width="25%"
                          height="100%"
                        />
                        <span>棕色</span>
                        <span>(大阔)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="layui-col-md1 chima-box">
                <div class="grid-demo grid-demo-bg1 chima">
                  <span>尺码</span>
                  <ul>
                    <li>
                      <div class="box">
                        <span>S</span>
                      </div>
                    </li>
                    <li>
                      <div class="box">
                        <span>M</span>
                      </div>
                    </li>
                    <li>
                      <div class="box">
                        <span>L</span>
                      </div>
                    </li>
                    <li>
                      <div class="box">
                        <span>XL</span>
                      </div>
                    </li>
                    <li>
                      <div class="box">
                        <span>XXL</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="layui-col-md1">
                <div class="grid-demo shuliang">
                  <span>数量</span>
                  <div class="pro-num"><span class="sub">-</span></div>
                  <input type="text" value="1" />
                  <div class="pro-num"><span>+</span></div>
                </div>
              </div>
              <div class="layui-col-md1">
                <div class="grid-demo grid-demo-bg1 lastbox">
                  <!-- 价格按钮 -->
                  <div class="pay-for-it-box">
                    <span>特卖价&nbsp;抢&nbsp;></span>
                    <span>470</span>
                    <span>￥</span>
                    <div class="lightpink-box">
                      <del>￥1180</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="detail-container">
    <div class="maodian-box">
      <div class="maodian-ul">
        <ul>
          <router-link to="/productDetail/explainSize/123"
            >规格参数</router-link
          >
          <router-link to="/productDetail/show">商品展示</router-link>
          <router-link to="/productDetail/comment">全部评价</router-link>
          <router-link to="/productDetail/consultation">商品咨询</router-link>
        </ul>
      </div>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import YiRanHeader from '@/components/YiRanHeader.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import ShopNavigation from '@/components/ShopNavigation.vue'
import RightNavigation from '@/components/RightNavigation.vue'
import prodetailApi from "@/api/product-detail.js";
import {  ref,onBeforeMount,reactive } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const proId = ref()
// 获取路由中的商品id
proId.value = route.params.id
const data = reactive({});
// 获取路由中的商品id
proId.value = route.params.id;
// 根据商品id获取商品编码
onBeforeMount(() => {
    getProById();
});
function getProById() {
  prodetailApi.getproductencode(proId.value).then((response) => {
    console.log(response);
    data.product = response.data.result;
  });
}
</script>

<style scoped>
.product-container {
  width: 1000px;
  /* height: 700px; */
  /* background-color: rgb(244, 214, 214); */
  margin: 0 auto;
  margin-top: 20px;
}

.product-container .head {
  /* height: 100px; */
  width: 100%;
  background-color: rgb(239, 148, 148);
}

/* *****************************左边 */
.product-container .layui-row .layui-col-md5 .layui-row {
  margin-top: 8px;
}

.product-container .layui-row .layui-col-md5 .layui-row .layui-col-md3 {
  border: 1px rgb(184, 184, 184) solid;
  height: 23%;
  width: 23%;
}

/* 小图片列表 */

/* 小图片列表的左右按钮 */
.product-container .layui-row .layui-col-md5 .layui-row .layui-col-md1 {
  background-color: rgb(111, 111, 111);
  opacity: 0.5;
  height: 69px;
}

.product-container .layui-row .layui-col-md5 .layui-row .layui-col-md1 img {
  margin-top: 17px;
}

/* 商品编码和收藏 */
.product-container .layui-row .layui-col-md5 .proId-and-collect {
  height: 30px;
  width: 100%;
  /* background-color: rgb(180, 239, 170); */
  margin-top: 10px;
  border-bottom: 1px rgb(210, 210, 210) dashed;
}

.product-container .layui-row .layui-col-md5 .proId-and-collect span {
  color: rgb(210, 210, 210);
  font-size: x-small;
  display: block;
  float: left;
}

.product-container .layui-row .layui-col-md5 .proId-and-collect .pro-collect {
  /* background-color: #fff; */
  float: left;
  margin-left: 25px;
}

.product-container
  .layui-row
  .layui-col-md5
  .proId-and-collect
  .pro-collect
  img {
  float: left;
}

/* ****************************右边 */

.product-container .layui-row .layui-col-md7 .grid-demo .layui-col-md1 {
  /* background-color: rgb(243, 164, 164); */
  color: aliceblue;
}

/* 品牌和标题 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .brand-and-title
  a {
  color: #007cff;
  font-size: 16px;
  line-height: 22px;
  height: 20px;
  width: 100%;
  /* background-color: #fff; */
  float: left;
}

/* 唯品自营框 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .brand-and-title
  .weipin-ziying {
  height: 21px;
  width: 60px;
  background-color: #f03867;
  border-radius: 2px;
  float: left;
  margin-top: 7px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .brand-and-title
  .weipin-ziying
  span {
  font-size: 12px;
  color: whitesmoke;
  display: block;
  padding-left: 5px;
  margin: 0 auto;
  font-weight: 500;
}

/* 标题 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .brand-and-title
  span {
  float: left;
  font-size: 16px;
  color: #333;
  max-height: 40px;
  overflow: hidden;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 700;
  margin-left: 10px;
}

/* 打折券 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon {
  height: 94px;
  /* width: 100%; */
  float: top;
  /* background-color: rgb(209, 62, 62); */
  margin-top: 60px;
  margin-bottom: 10px;
  position: relative;
}

/* 左部分 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left {
  height: 94px;
  width: 300px;
  /* background-color: rgb(214, 244, 254); */
  position: absolute;
  margin-top: -94px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part {
  height: 65%;
  width: 100%;
  /* background-color: rgb(255, 210, 49); */
}

/* 原价盒子 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #box500 {
  height: 70%;
  width: 32%;
  /* background-color: rgb(255, 232, 149); */
  float: left;
  margin-top: 18px;
  margin-left: 10px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #box500
  :nth-child(1) {
  color: white;
  font-size: 24px;
  line-height: 55px;
  display: block;
  float: left;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #box500
  :nth-child(2) {
  color: white;
  font-size: 38px;
  font-weight: 700;
}

/* 特卖价盒子 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #temaijia-box {
  height: 70%;
  width: 60%;
  /* background-color: rgb(77, 216, 255); */
  float: left;
  margin-top: 18px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #temaijia-box
  #sanjiao-yuan {
  margin-top: 6px;
  float: left;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #temaijia-box
  #tamaijia-box-2 {
  height: 30px;
  width: 120px;
  background-color: #fff;
  margin-top: 6px;
  /* margin-left: 14px; */
  float: left;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #temaijia-box
  #tamaijia-box-2
  :nth-child(1) {
  font-size: 16px;
  line-height: 30px;
  font-weight: 700;
  float: left;
  color: #f03867;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #temaijia-box
  #tamaijia-box-2
  :nth-child(2) {
  display: block;
  float: left;
  font-size: 20px;
  color: #f03867;
  font-weight: 700;
  margin-left: 5px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #temaijia-box
  #tamaijia-box-2
  :nth-child(3) {
  display: block;
  float: left;
  font-size: 26px;
  color: #f03867;
  font-weight: 700;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #up-part
  #temaijia-box
  #attention {
  float: left;
  width: 22px;
  height: 22px;
  margin-top: 10px;
  margin-left: 6px;
}

/* 中间删除线 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #down-part {
  height: 35%;
  width: 100%;
  /* background-color: rgb(255, 118, 49); */
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #down-part
  span {
  color: white;
  display: block;
  float: left;
  margin-left: 8px;
  font-size: 16px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .left
  #down-part
  del {
  color: white;
  display: block;
  float: left;
  margin-left: 12px;
  font-size: 16px;
  font-weight: 500;
}

/* 右部分 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .right {
  height: 94px;
  width: 150px;
  /* background-color: rgb(243, 183, 234); */
  position: absolute;
  margin-top: -94px;
  margin-left: 385px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .right
  .super-brand-image {
  height: 24px;
  width: 100px;
  /* background-color: rgb(199, 112, 112); */
  float: right;
  margin-top: 24px;
  margin-right: 20px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .discount-coupon
  .right
  #clock-box {
  height: 24px;
  width: 110px;
  /* background-color: #fff; */
  margin-top: 60px;
  font-size: 12px;
  margin-left: 5px;
  padding-left: 20px;
  color: white;
}

/* ********************************待补充*********************** */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-col-md1 {
  font-size: 12px;
  color: #999999;
  display: block;
  height: 40px;
  width: 100%;
  line-height: 40px;
}

/* 配送 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .grid-demo
  :first-child {
  margin-right: 20px;
  float: left;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .grid-demo
  select {
  border: 1px #999999 solid;
  height: 32px;
  width: 350px;
}

/* 运费 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .grid-demo
  #yunfei {
  color: #333;
}

/* 颜色 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .grid-demo
  ul
  li {
  font-style: none;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .grid-demo
  ul
  li
  .box {
  height: 32px;
  width: 129px;
  /* background-color: rgb(251, 201, 201); */
  float: left;
  margin: 0 auto;
  border: 2px solid #f03867;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .grid-demo
  ul
  li
  .box
  img {
  margin: 0 auto;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .grid-demo
  ul
  li
  .box
  span {
  color: #333;
  display: block;
  float: left;
  line-height: 34px;
  margin-left: 10px;
}

/* 尺码 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .chima-box {
  height: 60px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .chima
  ul
  :first-child {
  margin: 0;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .chima
  ul
  li
  .box {
  height: 28px;
  width: 32px;
  border: 1px solid #999999;
  padding: 1px 20px 1px 20px;
  float: left;
  margin-right: 20px;
  margin-top: 10px;
}

/* 数量 */
.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .shuliang
  .pro-num {
  float: left;
  height: 28px;
  width: 21px;
  background-color: #fff;
  border: 1px solid #999;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .shuliang
  .pro-num
  span {
  display: block;
  font-size: 30px;
  margin: 0;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .shuliang
  .pro-num
  span {
  margin-top: -6px;
  margin-left: 2px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .shuliang
  .pro-num
  .sub {
  margin-left: 5px;
  margin-top: -8px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .shuliang
  input {
  float: left;
  height: 28px;
  width: 31px;
  border: 1px solid #999999;
  border-left: none;
  border-right: none;
  /* 文字居中 */
  line-height: 30px;
  text-align: center;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .pay-for-it-box {
  height: 46px;
  width: 252px;
  /* background-color: rgb(238, 203, 203); */
  background-color: #f03867;
  border-radius: 2px;
  margin-top: 20px;
  margin-left: 45px;
  position: relative;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox {
  height: 110px;
  width: 535px;
  /* background-color: rgb(232, 19, 19); */
  border-bottom: 1px rgb(210, 210, 210) dashed;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox
  .pay-for-it-box
  span {
  display: block;
  float: right;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox
  .pay-for-it-box
  .lightpink-box {
  height: 100%;
  width: 50%;
  /* background-color:#f03867; */
  background-color: #f688a4;
  float: left;
  border-radius: 2px 0px 0px 2px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox
  .pay-for-it-box
  .lightpink-box
  del {
  display: block;
  font-size: 20px;
  color: white;
  position: relative;
  margin-top: 5px;
  margin-left: 25px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox
  .pay-for-it-box
  span {
  display: block;
  color: white;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox
  .pay-for-it-box
  :nth-child(1) {
  font-size: 14px;
  position: absolute;
  margin-left: 150px;
  margin-top: 15px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox
  .pay-for-it-box
  :nth-child(2) {
  font-size: 20px;
  position: absolute;
  margin-left: 171px;
  margin-top: -5px;
}

.product-container
  .layui-row
  .layui-col-md7
  .grid-demo
  .layui-col-md11
  .layui-row
  .layui-col-md1
  .lastbox
  .pay-for-it-box
  :nth-child(3) {
  font-size: 20px;
  position: absolute;
  margin-left: 154px;
  margin-top: -5px;
}

.detail-container {
  width: 1000px;
  /* height: 100px; */
  /* background-color: rgb(194, 255, 230); */
  margin: 0 auto;
  margin-top: 150px;
}

/* 锚点-头标题栏 */
.detail-container .maodian-box {
  width: 100%;
  background-color: rgb(255, 195, 195);
  height: 36px;
  margin-bottom: 15px;
}

.detail-container .maodian-box .maodian-ul {
  width: 100%;
  height: 100%;
  border-top: 1px solid #e7e7e7;
  border-bottom: 3px solid #000;
  background-color: #fff;
  border-right: 1px solid #e7e7e7;
}

.detail-container .maodian-box .maodian-ul ul {
  position: relative;
}

.detail-container .maodian-box .maodian-ul ul a {
  cursor: pointer;
  float: left;
  padding: 0 15px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  color: #333;
  border-left: 1px solid #e7e7e7;
}

.detail-container .maodian-box .maodian-ul ul a:hover {
  border-bottom: 3px solid #f10180;
  color: #f10180;
}
/* ==============图片============== */
.mainImg{
  height: 100%;
  width: 100%;
}
</style>