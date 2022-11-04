<template>
  <div class="detail-box">
    <!--  全部评价-->
    <div class="pro-all-comment" id="pro-all-comment">
      <div class="comprehensive-coment-box">
        <div class="grey-head">
          <span>全部评价</span>
        </div>
        <!-- 100%满意度 -->
        <div class="comprehensive-score">
          <span>100%</span>
          <span>的用户对商品满意</span>
        </div>
        <!-- 评价分类 -->
        <div class="comment-selections">
          <div class="selecttion">
            <span>全部-按照默认顺序</span>
          </div>
          <div class="selecttion">
            <span>最新-按照时间顺序</span>
          </div>
          <div class="selecttion">
            <span>有图(5)</span>
          </div>
          <div class="selecttion">
            <span>时尚百搭(2)</span>
          </div>
          <div class="selecttion">
            <span>尺码标准(1)</span>
          </div>
          <div class="selecttion">
            <span>回头客(3)</span>
          </div>
          <div class="product-comment-info">
            <span>100%</span>
            <span>的顾客满意</span>
          </div>
        </div>
      </div>
      <div class="comments-bob">
        <div class="comment">
          <div class="user-name-image">
            <img src="/images/user-touxiang.png" height="40px" width="40px">
            <span>***先生</span>
          </div>
          <div class="user-text">
            <div class="time">
              <div class="time1">
                <span>2022-03-04</span>
                <span>13:05:11</span>
              </div>
              <div class="time1">
                <span>身材信息：163cm/62kg</span>
              </div>
              <div class="time1">
                <span>颜色：黑色（大阔）</span>
              </div>
              <div class="time1">
                <span>尺码：M</span>
              </div>
            </div>
            <div class="main-text">
              <span>【厚薄度】：秋冬</span>
              <span>【版型风格】：合身</span>
              <span>【搭配建议】：黑裤子白卫衣</span>
            </div>
            <div class="main-text-image">
              <div class="text-imag">
                <img src="/images/pro-1-img.jpg" width="100%" height="100%">
              </div>
            </div>
            <div class="great">
              <span>赞</span>
              <div>
                <img src="/svg/great-img.svg" height="14px" width="14px">
              </div>
            </div>
          </div>
        </div>
        <div class="comment">
          <div class="user-name-image">
            <img src="/images/user-touxiang.png" height="40px" width="40px">
            <span>***先生</span>
          </div>
          <div class="user-text">
            <div class="time">
              <div class="time1">
                <span>2022-03-04</span>
                <span>13:05:11</span>
              </div>
              <div class="time1">
                <span>身材信息：163cm/62kg</span>
              </div>
              <div class="time1">
                <span>颜色：黑色（大阔）</span>
              </div>
              <div class="time1">
                <span>尺码：M</span>
              </div>
            </div>
            <div class="main-text">
              <span>【厚薄度】：秋冬</span>
              <span>【版型风格】：合身</span>
              <span>【搭配建议】：黑裤子白卫衣</span>
            </div>
            <div class="main-text-image">
              <div class="text-imag">
                <img src="/images/pro-1-img.jpg" width="100%" height="100%">
              </div>
            </div>
            <div class="great">
              <span>赞</span>
              <div>
                <img src="/svg/great-img.svg" height="14px" width="14px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import commentApi from "@/api/comment.js";
import { ref,onMounted,reactive } from 'vue'
import { useRoute } from 'vue-router'
// 钩子函数，进入页面就要执行的方法，里面的方法事需要执行的
onMounted(() => {
  getCommentByproId()
})

// 评论对象
let comments =ref([])
// 获取路由中的商品id
const route = useRoute()
const proId = ref()
proId.value = route.query.proId
// 测试是否拿到商品id
// alert(proId.value)
// 根据商品id获取所有评论的方法
function getCommentByproId(){
  commentApi.getCommentByproId(proId.value).then(
    response=>{
      console.log(response)
      comments.value=reactive(response.data.ok)
    }
  )
}
</script>
  
<style scoped>
/* *************************************************************全部评价 */
.detail-container .detail-box .pro-all-comment {
  width: 100%;
  background-color: #fafafa;
}

/*************** 综合评论评分盒子 */
.detail-container .detail-box .pro-all-comment .comprehensive-coment-box {
  width: 100%;
  /* background-color: #ddf4ff; */
  height: 200px;
  border: 1px solid #999;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .grey-head {
  background-color: #eae8eb;
  line-height: 45px;
  padding-left: 15px;
}

/* 100%盒子 */
.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comprehensive-score {
  margin: 36px 35px 45px 70px;
  height: 80px;
  width: 165px;
  border: 1px white solid;
  border-right: 1px #999 solid;
  float: left;
  padding-right: 35px;
  /* background-color: rgb(169, 64, 64); */
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comprehensive-score :nth-child(1) {
  font-size: 50px;
  display: block;
  line-height: 40px;
  margin-bottom: 5px;
  color: #de327f;
  font-family: "Microsoft YaHei";
  height: 40px;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comprehensive-score :nth-child(2) {
  color: #333;
  margin-left: 10px;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections {
  margin: 36px 35px 45px 35px;
  /* height: 100px; */
  width: 620px;
  /* background: rgb(62, 69, 201); */
  float: left;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion {
  height: 23px;
  /* width: 100px; */
  background-color: #fff;
  float: left;
  margin: 0px 10px 10px 0px;
  border: 1px solid #999;
  padding: 5px 12px 5px 12px;
  border-radius: 3px;
  cursor: pointer;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion:visited {
  border: 1px solid #de327f;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion:hover {
  border: 1px solid #de327f;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion:active {
  border: 1px solid #de327f;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion span {
  color: #666;
  line-height: 23px;
  font-size: 12px;

}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion span:visited {
  color: #de327f;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion span:hover {
  color: #de327f;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .selecttion span:active {
  color: #de327f;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .product-comment-info {
  /* height: 100px; */
  width: 100%;
  /* background-color: rgb(243, 184, 184); */
  border-top: #999 1px solid;
  float: left;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .product-comment-info span {
  font-size: 10px;
  display: block;
  float: left;
  line-height: 15px;
  color: #666;
}

.detail-container .detail-box .pro-all-comment .comprehensive-coment-box .comment-selections .product-comment-info :nth-child(1) {
  margin-left: 40%;
}

/* **********用户评论盒子 */
.detail-container .detail-box .pro-all-comment .comments-bob {
  width: 100%;
  /* height: 500px; */
  background-color: #90dcff;
}

/* **********用户评论 */
.detail-container .detail-box .pro-all-comment .comments-bob .comment {
  width: 100%;
  background-color: #1d7097;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-name-image {
  width: 210px;
  height: 40px;
  padding: 30px;
  background-color: #fff;
  float: left;
  margin-right: 10px;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text {
  width: 670px;
  height: 300px;
  /* background-color: rgb(208, 249, 255); */
  float: left;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .time {
  width: 100%;
  line-height: 15px;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .time .time1 {
  float: left;
  padding-right: 10px;
  color: #6f6f6f;
  font-size: 12px;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .time :nth-child(2) {
  margin-right: 10px;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .main-text {
  width: 100%;
  float: left;
  margin-top: 15px;
  color: #6f6f6f;
  font-size: 12px;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .main-text span {
  display: block;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .main-text-image {
  width: 100%;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .main-text-image .text-imag {
  height: 72px;
  width: 72px;
  border: 1px solid #999;
  float: left;
  margin-top: 15px;
  padding: 3px;
  cursor: pointer;
}

/* 点赞 */
.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .great {
  height: 20px;
  width: 100%;
  /* background-color: rgb(213, 183, 249); */
  float: left;
  margin-top: 25px;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .great div {
  float: right;
  margin-right: 5px;
  cursor: pointer;
}

.detail-container .detail-box .pro-all-comment .comments-bob .comment .user-text .great span {
  color: #6f6f6f;
  float: right;
  cursor: pointer;
}
</style>