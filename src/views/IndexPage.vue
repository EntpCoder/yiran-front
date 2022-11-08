<template>
  <YiRanHeader></YiRanHeader>
  <SecondHeader></SecondHeader>
  <ShopNavigation></ShopNavigation>
  <RightNavigation></RightNavigation>
  <!-- 轮播图开始 -->
  <div class="banner">
    <div class="wrap">
      <div class="banner-box">
        <el-carousel height="460px" indicator-position="outside">
          <el-carousel-item v-for="item in tupian" :key="item.src">
            <img class="banner" :src="item" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <!-- 导航结束结束 -->
  <!-- 主体开始 -->
  <div class="content">
    <div class="wrap">
      <!--广告区头牌-->
      <div class="home-box">
        <a href="#">
          <img src="/images/temp/超级大牌日.jpg" alt="" />
        </a>
      </div>
      <!--广告区-->
      <div class="adver">
        <div class="abver-a">
          <router-link to="/productList?brandId=121">
            <img src="/images/temp/广告1.jpg" alt="" />
          </router-link>
        </div>
        <div class="abver-b">
          <router-link to="/productList?brandId=2121212">
            <img src="/images/temp/广告2.jpg" alt="" />
          </router-link>
        </div>
        <div class="abver-c">
          <img src="/images/temp/广告3.jpg" alt="" />
        </div>
      </div>
      <!--每日必看模块-->
      <div class="home-box">
        <a href="#">
          <img src="/images/temp/每日必看.jpg" alt="" />
        </a>
      </div>
      <!--商品排行榜-->
      <div class="shop">
        <div class="shop-nav">
          <!--排行榜表头-->
          <div class="shop-a">
            <img src="/images/temp/排行榜.png" />
            <span>90%的会员都在买</span>
          </div>
          <div class="shop-b">
            <div class="itms">
              <img src="/images/temp/旁行榜1.jpg" alt="" class="goods-img" />
              <p class="name">￥1350</p>
              <p class="price">特卖价</p>
            </div>
            <div class="itms">
              <img src="/images/temp/排行榜2.jpg" alt="" class="goods-img" />
              <p class="name">￥1350</p>
              <p class="price">特卖价</p>
            </div>
            <div class="itms">
              <img src="/images/temp/排行榜3.jpg" alt="" class="goods-img" />
              <p class="name">￥1350</p>
              <p class="price">特卖价</p>
            </div>
          </div>
        </div>
        <div class="shop-nav-b">
          <!--今日降价表头-->
          <div class="shop-a">
            <img src="/images/temp/今日降价.jpg" />
            <span>直播爆款抢先购</span>
          </div>
          <div class="shop-b">
            <div class="itms">
              <img src="/images/temp/旁行榜1.jpg" alt="" class="goods-img" />
              <p class="name">￥1350</p>
              <p class="price">特卖价</p>
            </div>
            <div class="itms">
              <img src="/images/temp/排行榜2.jpg" alt="" class="goods-img" />
              <p class="name">￥1350</p>
              <p class="price">特卖价</p>
            </div>
            <div class="itms">
              <img src="/images/temp/排行榜3.jpg" alt="" class="goods-img" />
              <p class="name">￥1350</p>
              <p class="price">特卖价</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 折扣专区-->
      <div class="rebate">
        <!--                前一个盒子-->
        <div class="rebate-nav">
          <img src="/images/temp/折扣区.jpg" alt="" />
          <span class="rebate-a">1</span>
          <span class="rebate-b">折起</span>
          <span class="rebate-c">伊芙丽eifini女装专场</span>
        </div>
        <!--                后一个盒子-->
        <div class="rebate-nav-b">
          <img src="/images/temp/折扣区.jpg" alt="" />
          <span class="rebate-a">1</span>
          <span class="rebate-b">折起</span>
          <span class="rebate-c">伊芙丽eifini女装专场</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import YiRanHeader from "@/components/YiRanHeader.vue";
import SecondHeader from "@/components/SecondHeader.vue";
import ShopNavigation from "@/components/ShopNavigation.vue";
import RightNavigation from "@/components/RightNavigation.vue";
let tupian = ["https://img0.baidu.com/it/u=3315921660,2451197639&fm=253&fmt=auto&app=138&f=JPEG?w=1280&h=367", "https://b.appsimg.com/upload/momin/2022/10/27/60/1666855175963.jpg", "https://b.appsimg.com/upload/momin/2022/10/20/121/1666254648786.jpg"]

</script>
<style scoped>
.content {
  text-align: center;
}

.wrap {
  width: 1226px;
  margin: 0 auto;
}

/* 轮播图开始  */
.banner {
  width: 100%;
  height: 460px;
}

.banner-box {
  position: relative;
  margin-top: 50px;
  width: 100%;
  height: 460px;
}

.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

/* 轮播图结束  */
/* 主体开始 */
.content {
  width: 100%;
  /*background-color: aqua;*/
  padding: 4px 0 12px;
}

.home-box {
  width: 100%;
  height: 70px;
  margin: 22px 0;
}

/*广告区开始*/
.adver {
  width: 100%;
  height: 300px;
}

.abver-a {
  width: 378px;
  height: 250px;
  float: left;
  border-radius: 10px;
  margin: 28px 0px 21px 14px;
  /*background-color: #FFB800;*/
}

.abver-b,
.abver-c {
  width: 378px;
  height: 250px;
  float: left;
  border-radius: 10px;
  margin: 28px 0px 21px 33px;
}

/*广告区结束*/
/*每日必看专区开始*/
.shop {
  width: 100%;
  height: 350px;
}

.shop-nav {
  float: left;
  width: 580px;
  height: 345px;
  border: 1px solid rgb(234, 234, 234);
  margin: 0px 36px 0px 0px;
}

.shop-nav-b {
  float: left;
  width: 580px;
  height: 345px;
  border: 1px solid rgb(234, 234, 234);
}

.shop-a {
  float: left;
  width: 100%;
  height: 70px;
}

.shop-a img {
  float: left;
}

.shop-a span {
  float: right;
  font-size: 20px;
  margin: 20px 30px 0px 0px;
  background-color: #ffffff;
}

.shop-b {
  width: 100%;
  height: 100%;
  /*background-color: #ffffff;*/
}

.itms {
  float: left;
  width: 170px;
  height: 170px;
  margin-bottom: 14px;
  margin-left: 14px;
  transition: all 0.2s linear;
}

.goods-img {
  width: 160px;
  margin: 20px 0 18px;
}

.name {
  width: 214px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
  height: 21px;
  margin-bottom: 2px;
  font-size: 14px;
  color: #333;
}

.price {
  width: 50px;
  height: 20px;
  color: #ffffff;
  font-size: 14px;
  float: left;
  border-radius: 8px;
  margin: -24px 0px 0px 30px;
  background-color: #f03867;
}

/*每日必看专区结束*/
/*折扣专区开始*/
.rebate {
  width: 100%;
  height: 400px;
}

.rebate-box {
  width: 570px;
  height: 400px;
}

.rebate-nav {
  width: 570px;
  float: left;
  height: 273px;
  margin: 40px 0px 0px 12px;
  background-color: #9f9f9f;
}

.rebate-nav-b {
  width: 570px;
  float: left;
  height: 273px;
  margin: 40px 0px 0px 39px;
  background-color: #9f9f9f;
}

.rebate-name {
  width: 600px;
  height: 35px;
  float: left;
}

.rebate-a {
  width: 30px;
  height: 30px;
  font-size: 30px;
  font-weight: bold;
  float: left;
  color: #f03867;
}

.rebate-b,
.rebate-c {
  font-size: 20px;
  font-weight: bold;
  float: left;
  margin: 6px 0px 0px 0px;
}

.banner {
  width: 100%;
}
</style>