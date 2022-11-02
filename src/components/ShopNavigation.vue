<template>
  <!-- -======================导航2========================== -->
  <div class="nav">
    <div class="nav-center">
      <div class="caidan">
        <span class="fenlei">商品分类</span>
        <div class="slide">
          <ul>
            <li v-for="m in menu" :key="m.menuId">
              <a class="a-li">{{ m.title }}</a>
              <div class="slide-list">
                <div class="slide-box">
                  <dl class="box-dl" v-for="secound in m.children" :key="secound.menuId">
                    <dt class="box-dt">
                      <span>{{ secound.title }}></span>
                    </dt>
                    <dd class="box-dd">
                      <router-link v-for="three in secound.children" :key="three.menuId" :to="`/productList?kindId=${three.menuId}`" class="box-dd-a">
                        {{ three.title }}
                      </router-link>
                    </dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <a href="" class="nav-b tuijian">推荐</a>
      <a href="" class="nav-b">3折疯抢</a>
      <a href="" class="nav-b">唯品快抢</a>
      <a href="" class="nav-b">唯品奢</a>
      <a href="" class="nav-b">女装</a>
      <a href="" class="nav-b">运动</a>
      <a href="" class="nav-b">鞋包</a>
      <a href="" class="nav-b">美妆</a>
      <a href="" class="nav-b">母婴</a>
      <a href="" class="nav-b">电器</a>
      <a href="" class="nav-b">男装</a>
      <a href="" class="nav-b">首饰</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import menuApi from '@/api/menu.js'
const menu = ref([])
onBeforeMount(() => {
  getMenu()
})
function getMenu() {
  menuApi.getMenu().then(response => {
    menu.value = response.data.multiMenus
  })
}
</script>

<style scoped>
/* =====================导航2============================ */
.nav {
  width: 100%;
  height: 43px;
  border-bottom: 2px solid rgb(200, 198, 198);
}

.nav .nav-center {
  width: 1170px;
  height: 43px;
  margin: 0 auto;
  /* border: 1px solid; */
}

.nav .nav-center .caidan {
  background-color: #f10180;
  width: 156px;
  height: 43px;
  margin-right: 20px;
  line-height: 43px;
  float: left;
  color: rgb(253, 253, 253);
}

.nav .nav-center .caidan .caidan-a {
  text-decoration: none;
  font-size: 16px;
  color: rgb(255, 253, 253);
}

.nav .nav-center .caidan .fenlei {
  display: block;
  width: 70px;
  height: 43px;
  margin: auto 42px;
  font-size: 16px;
  color: rgb(253, 253, 253);
}

/* 商品分类子标签不显示 */
.nav .nav-center .caidan .slide {
  display: none;
  position: absolute;
  z-index: 50000;
  width: 156px;
  height: 72%;
  background-color: #f10180;
  top: 170px;
  list-style: none;
  font-size: 10px;
  left: 11.5%;
}

.nav .nav-center .caidan:hover .slide {
  display: block;
}

.slide>ul>li {
  height: 42px;
  line-height: 50px;
  /* padding-left: 30px; */
  text-align: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
}

.slide>ul>li>a {
  font-size: 14px;
}

.slide i {
  float: right;
  color: #f10180;
  font-size: 14px;
}

.slide-list {
  z-index: 750;
  display: none;
  /*绝对定位*/
  position: absolute;
  top: 0;
  left: 100%;
  width: 970px;
  height: 510px;
  border: 1px solid #e0e0e0;
  border-left: none;
  background-color: #fff;
  box-shadow: 0 8px 16px #e0e0e0(0, 0, 0, 0.18);
  padding-top: 2px;
}

.slide li:hover>.slide-list {
  display: block;
}

/* 筛选框开始 */
.slide-list .slide-box {
  /* background-color: aqua; */
  width: 95%;
  height: 95%;
  margin: auto;
}

.box-dl {
  /* background-color: burlywood; */
  width: 100%;
  height: 50px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.box-dt {
  /* background-color: chartreuse; */
  width: 20%;
  height: 30px;
  float: left;
  line-height: 22px;
  left: 0;
  width: 83px;
  color: #222;
  font-weight: bold;
  overflow: hidden;
}

.box-dt>span {
  margin: auto;
}

.box-dd {
  /* background-color: #9F9F9F; */
  width: 90%;
  height: 30px;
  float: left;
}

.box-dd-a {
  display: block;
  text-align: left;
  float: left;
  margin: -12px 0px 5px 10px;
}

.box-dd-a:hover {
  color: #f10180;
}

/* 筛选框结束 */
/* ============导航推荐，三者疯抢 唯品快抢======================= */
.nav .nav-center .nav-b {
  display: block;
  width: auto;
  height: 43px;
  /* border: 1px solid; */
  color: rgb(107, 104, 104);
  font-size: 13px;
  float: left;
  margin: 0 20px;
  line-height: 43px;
  text-align: center;
  font-weight: bolder;
  text-decoration: none;
}

.nav .nav-center .nav-b:hover {
  color: #f10180;
}

.nav .nav-center .tuijian {
  margin-left: 30px;
  display: block;
  color: #f10180;
  font-size: 14px;
}
</style>