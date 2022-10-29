<template>
  <div class="detail-box">
    <!------------------------- 商品展示-图片 -->
    <div class="pro-show-imag">
      <div class="pro-modol-head">
        <p id="pro-show-imag">
          <img src="/svg/Hollow-diamond.svg">
          图片展示
          <i>IMAGE</i>
        </p>
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image1.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image2.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image3.jpg" alt="">
      </div>
      <div class="put-image" id="image4">
        <img src="/images/productDetailPage-image4.jpg" alt="">
      </div>
      <div class="put-image" id="image5">
        <img src="/images/productDetailPage-image5.jpg">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image6.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image7.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image8.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image81.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image9.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image10.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image11.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image12.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image13.jpg" alt="">
      </div>
      <div class="put-image">
        <img src="/images/productDetailPage-image-last.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/******************************************** 商品展示-图片 */
.detail-container .detail-box .pro-show-imag {
  width: 100%;
  /* background-color: rgb(176, 238, 195); */
  margin-top: 20px;
}

.detail-container .detail-box .pro-show-imag .pro-modol-head {
  text-align: left;
  clear: both;
  /* padding-left: 20px; */
  background: url(//shop.vipstatic.com/img/detail/detial_line-hash-73c7b229.png?f06a5522) repeat-x left bottom;
  position: relative;
  padding-bottom: 6px;
}

.detail-container .detail-box .pro-show-imag .pro-modol-head p {
  color: #f10180;
  font-size: 20px;
}

.detail-container .detail-box .pro-show-imag .pro-modol-head p img {
  height: 13px;
  width: 13px;
}

.detail-container .detail-box .pro-show-imag .pro-modol-head p i {
  color: #999;
  font-size: 20px;
  padding-left: 5px;
  position: relative;
  bottom: -2px;
  font-family: arial;
}

.detail-container .detail-box .pro-show-imag .put-image {
  width: 100%;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 20px;
}

.detail-container .detail-box .pro-show-imag #image4 {
  margin-bottom: 0;
  padding-bottom: 0;
}

.detail-container .detail-box .pro-show-imag #image5 {
  margin-top: 0;
  padding-top: 0;
}
</style>