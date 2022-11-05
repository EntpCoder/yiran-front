<template>
  <div class="detail-box">
    <!------------- 商品尺码 -------------->
    <div class="pro-size">
      <div class="pro-modol-head">
        <p id="pro-size">
          <img src="/svg/Hollow-diamond.svg">
          商品尺码
          <i>SIZE</i>
        </p>
      </div>
      <div class="pro-size-table">
        <div class="h4-warming">
          <b>尺码对照表：</b>
          <span>温馨提示</span>
          <img src="/svg/attendtion-blue.svg" width="20px">
        </div>
        <div class="pro-table">
          <div class="layui-form">
            <table class="layui-table">
              <colgroup>
                <col width="150">
                <col width="150">
                <col width="200">
                <col>
              </colgroup>
              <thead>
                <tr>
                  <th>尺码</th>
                  <th>号型</th>
                  <th>肩宽(cm)</th>
                  <th>胸围(cm)</th>
                  <th>衣长(cm)</th>
                  <th>袖长(cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>S165/84A</td>
                  <td>52.4</td>
                  <td>118</td>
                  <td>65</td>
                  <td>57.6</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>M170/88A</td>
                  <td>54.2</td>
                  <td>124</td>
                  <td>67</td>
                  <td>58.8</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>L175/92A</td>
                  <td>56</td>
                  <td>130</td>
                  <td>69</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>XL180/96A</td>
                  <td>57.2</td>
                  <td>134</td>
                  <td>71</td>
                  <td>61.5</td>
                </tr>
                <tr>
                  <td>XXL</td>
                  <td>XXL185/100A</td>
                  <td>58.4</td>
                  <td>138</td>
                  <td>73</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td>XXXL</td>
                  <td>XXXL150/104A</td>
                  <td>59.6</td>
                  <td>142</td>
                  <td>73</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td colspan="6">
                    <span>温馨提示：</span>
                    <span>以上数据仅供参考，由于尺码是手工测量，所以难免存在1cm-2cm的误差
                    </span>
                  </td>
                </tr>
                <!-- <tr>
                  <td colspan="6">
                    <span><a href="#">收起∧</a><a href="#">展开∨</a></span>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!------------------- 商品参数 -------------->
    <div class="pro-static">
      <div class="pro-modol-head">
        <p>
          <img src="/svg/Hollow-diamond.svg">
          商品参数
          <i>DETAIL</i>
        </p>
      </div>
      <div class="pro-detail-table">
        <table class="layui-table" lay-even="" lay-skin="row">
          <colgroup>
            <col width="150">
            <col width="150">
            <col width="200">
            <col>
          </colgroup>
          <tbody>
            <tr>
              <th>风格：</th>
              <td>美式街头</td>
              <th>适用场景：</th>
              <td>休闲</td>
            </tr>
            <tr>
              <th>版型：</th>
              <td>宽松</td>
              <th>厚薄：</th>
              <td>常规</td>
            </tr>
            <tr>
              <th>适用季节：</th>
              <td>秋</td>
              <th>衣门襟：</th>
              <td>单排扣</td>
            </tr>
            <tr>
              <th>袖长：</th>
              <td>长袖</td>
              <th>衣长：</th>
              <td>常规</td>
            </tr>
            <tr>
              <th>适用人群：</th>
              <td>青少年</td>
              <th>面料：</th>
              <td>涤纶/聚酯纤维</td>
            </tr>
            <tr>
              <th>功能：</th>
              <td>无特殊功能</td>
              <th>图案：</th>
              <td>人像</td>
            </tr>
            <tr>
              <th>里材料：</th>
              <td>其他</td>
              <th>款式：</th>
              <td>开衫</td>
            </tr>
            <tr>
              <th>适用性别：</th>
              <td>男士</td>
              <th>领型：</th>
              <td>棒球领</td>
            </tr>
            <tr>
              <th>首销日期：</th>
              <td>2022-08-11</td>
              <th>详细材料信息：</th>
              <td>涤纶55.5% 粘纤11.5%</td>
            </tr>
            <tr id="open-close">
              <th>产地：</th>
              <td>中国</td>
              <th>商品编码：</th>
              <td>BWBCC360289</td>
            </tr>
            <!-- <tr>
              <td colspan="4">
                <span><a href="#" id="close2">收起∧</a><a href="#" id="open1">展开∨</a></span>
              </td>
            </tr> -->
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>
  
<script>
</script>
  
<style scoped>
/* 参数图片等部分 */
/* 自适应盒子 */
.detail-container .detail-box {
  width: 100%;
  /* background-color: rgb(175, 172, 250); */
}

/* *************************************************** 商品尺码*/
.detail-container .detail-box .pro-size {
  width: 100%;
  /* background-color: rgb(208, 253, 254); */
}

.detail-container .detail-box .pro-size .pro-modol-head {
  text-align: left;
  clear: both;
  /* padding-left: 20px; */
  background: url(//shop.vipstatic.com/img/detail/detial_line-hash-73c7b229.png?f06a5522) repeat-x left bottom;
  position: relative;
  padding-bottom: 6px;
}

.detail-container .detail-box .pro-size .pro-modol-head p {
  color: #f10180;
  font-size: 20px;
}

.detail-container .detail-box .pro-size .pro-modol-head p img {
  height: 13px;
  width: 13px;
}

.detail-container .detail-box .pro-size .pro-modol-head p i {
  color: #999;
  font-size: 20px;
  padding-left: 5px;
  position: relative;
  bottom: -2px;
  font-family: arial;
}

/* 尺码对照表 */
.detail-container .detail-box .pro-size .pro-size-table {
  font-size: 14px;
  position: relative;
  line-height: 1.8;
  margin-top: 10px;
}

.detail-container .detail-box .pro-size .pro-size-table .h4-warming b {
  font-size: 14px;
  padding-bottom: 10px;
  font-weight: 700;
}

.detail-container .detail-box .pro-size .pro-size-table .h4-warming img {
  float: right;
  margin-top: 2px;
}

.detail-container .detail-box .pro-size .pro-size-table .h4-warming span {
  float: right;
}

/* table1 */
.detail-container .detail-box .pro-size .pro-size-table .pro-table {
  width: 100%;
  background-color: rgb(184, 200, 242);
}

.detail-container .detail-box .pro-size .pro-size-table .pro-table .layui-form thead tr td {
  background-color: #dbdbdb;
  color: #333;
  font-weight: 700;
}

.detail-container .detail-box .pro-size .pro-size-table .pro-table .layui-form tr th {
  padding: 0;
  height: 36px;
  text-align: center;
  line-height: 36px;
}

.detail-container .detail-box .pro-size .pro-size-table .pro-table .layui-form tr td {
  padding: 0;
  height: 36px;
  text-align: center;
  line-height: 36px;
}

/* 温馨提示这一行 */
.detail-container .detail-box .pro-size .pro-size-table .pro-table .layui-form :nth-child(7) td {
  text-align: left;
}

.detail-container .detail-box .pro-size .pro-size-table .pro-table .layui-form :nth-child(7) td :nth-child(1) {
  color: #cd197a;
}

/*********************************************** 商品参数 */
.detail-container .detail-box .pro-static {
  width: 100%;
  /* background-color: rgb(226, 220, 252); */
  margin-top: 20px;
}

.detail-container .detail-box .pro-static .pro-modol-head {
  text-align: left;
  clear: both;
  /* padding-left: 20px; */
  background: url(//shop.vipstatic.com/img/detail/detial_line-hash-73c7b229.png?f06a5522) repeat-x left bottom;
  position: relative;
  padding-bottom: 6px;
}

.detail-container .detail-box .pro-static .pro-modol-head p {
  color: #f10180;
  font-size: 20px;
}

.detail-container .detail-box .pro-static .pro-modol-head p img {
  height: 13px;
  width: 13px;
}

.detail-container .detail-box .pro-static .pro-modol-head p i {
  color: #999;
  font-size: 20px;
  padding-left: 5px;
  position: relative;
  bottom: -2px;
  font-family: arial;
}

/* detail-table */
.detail-container .detail-box .pro-static .pro-detail-table {
  width: 100%;
  padding: 10px 0 20px;
}

.detail-container .detail-box .pro-static .pro-detail-table .layui-table tbody tr td {
  background-color: rgb(255, 255, 255);
  color: #999;
  width: 20%;
  border: 1px #ededed solid;
}

.detail-container .detail-box .pro-static .pro-detail-table .layui-table tbody tr th {
  background: #f5f5f5;
  font-weight: 700;
  text-align: right;
  padding: 0;
  color: #666;
  width: 4%;
}

.detail-container .detail-box .pro-static .pro-detail-table .layui-table tbody tr :last-child {
  text-align: center;
}

</style>