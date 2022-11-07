<template>
  <div class="layui-tab-content">
    <template v-if="couponType == 0">
      <div class="layui-tab-item layui-show">
        <ul class="m-thead-list clearfix">
          <li class="l1">额度 | 明细</li>
          <li class="l2">适用范围</li>
          <li class="l3">有效期</li>
          <li class="l4">获取途径</li>
        </ul>
        <table class="m-coupons-table">
          <!-- 优惠券1 -->
          <tr>
            <th class="detail">
              <p class="red">40元(满300减40元)</p>
              <p class="gray">编号V089209896836</p>
            </th>
            <th class="range">
              <div>
                <div class="range-text">品牌券 | 自然堂指定商品可用</div>
              </div>
            </th>
            <th class="time">
              <p class="time-line">2022-08-15 20:00:00至2022-09-15 23:59:59</p>
            </th>
            <th class="way">
              <p>页面领券</p>
            </th>
          </tr>
          <!-- 优惠券2 -->
          <tr>
            <th class="detail">
              <p class="red">40元(满300减40元)</p>
              <p class="gray">编号V089209896836</p>
            </th>
            <th class="range">
              <div>
                <div class="range-text">品牌券 | 自然堂指定商品可用</div>
              </div>
            </th>
            <th class="time">
              <p class="time-line">2022-08-15 20:00:00至2022-09-15 23:59:59</p>
            </th>
            <th class="way">
              <p>页面领券</p>
            </th>
          </tr>
        </table>
      </div>
    </template>
    <template v-if="couponType == 1">
        111
      <div class="layui-tab-item">
        <ul class="m-thead-list clearfix">
          <li class="l1">额度 | 明细</li>
          <li class="l2">适用范围</li>
          <li class="l3">使用时间</li>
          <li class="l4">订单号</li>
        </ul>
        <table class="m-coupons-table">
          <!-- 优惠券1 -->
          <tr>
            <th class="detail">
              <p class="red">40元(满300减40元)</p>
              <p class="gray">编号V089209896836</p>
            </th>
            <th class="range">
              <div>
                <div class="range-text">品牌券 | 自然堂指定商品可用</div>
              </div>
            </th>
            <th class="time">
              <p class="time-line">2022-08-15 20:00:00至2022-09-15 23:59:59</p>
            </th>
            <th class="way">
              <p><a href="" target="_blank">22082784137477</a></p>
            </th>
          </tr>
        </table>
      </div>
    </template>
    <template v-if="couponType == 2">
      <div class="layui-tab-item">
        <ul class="m-thead-list clearfix">
          <li class="l1">额度 | 明细</li>
          <li class="l2">适用范围</li>
          <li class="l3">有效期</li>
          <li class="l4">获取途径</li>
        </ul>
        <table class="m-coupons-table">
          <!-- 优惠券1 -->
          <tr>
            <th class="detail">
              <p class="red">40元(满300减40元)</p>
              <p class="gray">编号V089209896836</p>
            </th>
            <th class="range">
              <div>
                <div class="range-text">品牌券 | 自然堂指定商品可用</div>
              </div>
            </th>
            <th class="time">
              <p class="time-line">2022-08-15 20:00:00至2022-09-15 23:59:59</p>
            </th>
            <th class="way">
              <p>页面领券</p>
            </th>
          </tr>
        </table>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue'
const route = useRoute()
const router = useRouter()
const couponType = ref(route.query.type)
// 当路由变化时重新加载数据
watch(() => router.currentRoute.value.fullPath, () => {
    couponType.value = route.query.type
}, { immediate: true }
)
</script>

<style>
.u-active-input {
  width: 525px;
}
.ui-input {
  height: 18px;
  line-height: 18px;
  padding: 6px 10px;
}
.ui-input {
  font: 14px/20px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei,
    "\5FAE\8F6F\96C5\9ED1", "\5B8B\4F53", sans-serif;
  color: #333;
  background-color: #fff;
  border: 1px solid #b2b2b2;
  border-radius: 3px;
  outline: 0;
}
input {
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
.u-active-placeholder {
  position: absolute;
  left: 13px;
  top: 5px;
  color: #999;
  font-size: 14px;
  display: none;
}
.m-input-box {
  margin: 0 10px;
}
.ui-form-item-group {
  position: relative;
  display: inline-block;
  vertical-align: top;
  transition: none !important;
  opacity: 1 !important;
}
.u-wavy-line {
  height: 10px;
  margin-top: -1px;
  background: url(../images/bg-cou-add.png) no-repeat;
}
.m-panel-modules {
  background-color: #fff;
  border: 1px solid #e4e4e4;
}
.m-thead-list {
  background-color: #f5f8fa;
  line-height: 35px;
  border-bottom: 1px solid #f2f2f2;
  padding: 0 20px;
}
li,
ol,
ul {
  list-style: none;
}
.clearfix {
  display: block;
  list-style-type: disc;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.m-thead-list li {
  float: left;
  text-align: center;
}
li {
  display: list-item;
  font-size: 12px;
}
.m-thead-list {
  background-color: #f5f8fa;
  line-height: 35px;
  border-bottom: 1px solid #f2f2f2;
  padding: 0 20px;
}
.m-thead-list .l1 {
  width: 214px;
  text-align: left;
}
.m-thead-list .l2 {
  width: 226px;
}
.m-thead-list .l3 {
  width: 180px;
}
.m-thead-list .l4 {
  width: 117px;
}
.m-coupons-table tr {
  border-bottom: 1px dotted #ccc;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.m-coupons-table {
  clear: both;
  margin: 0 20px;
  color: #666;
  text-align: left;
}
table {
  display: table;

  box-sizing: border-box;
  text-indent: initial;

  border-color: grey;
}
.m-coupons-table .detail {
  width: 214px;
  text-align: left;
}
.m-coupons-table tr th p {
  font-size: 12px;
}
.m-coupons-table tr th {
  text-align: center;
  height: 60px;
  font-style: normal;
  font-weight: 400;
  display: table-cell;
  vertical-align: inherit;
}
.m-coupons-table .detail .red {
  color: #f10180;
  font-weight: 700;
}
.range-text {
  font-size: 12px;
}
.m-coupons-table .detail .gray {
  color: #999;
}
.m-coupons-table .range {
  width: 226px;
  width: 186px;
  margin: 0 auto;
}
.m-coupons-table .time .time-line {
  width: 135px;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: top;
}
.m-coupons-table .time {
  display: block;
  margin-left: 60px;
}
.m-coupons-table .way p {
  width: 164px;
  max-height: 35px;
  overflow: hidden;
}
.layui-tab-title li {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
  font-size: 14px;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  position: relative;
  line-height: 40px;
  min-width: 65px;
  padding: 0 15px;
  text-align: center;
  cursor: pointer;
}
</style>