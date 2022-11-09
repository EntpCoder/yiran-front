<template>
    <div class="pro-consultation" id="pro-consultation">
        <div class="grey-head">
            <span>商品咨询</span>
        </div>
        <div class="pro-questions">
            <div class="pq-title">
                <span>购买前如有问题，请向依然咨询。</span>
            </div>
            <div class="question">
                <div class="Q">
                    <img src="/svg/quesyion.svg" height="20px" width="20px">
                    <span>尺码会不会偏大或偏小？</span>
                </div>
                <div class="A">
                    <span>
                        <img src="/svg/answer.svg" height="24px" width="24px">
                        商品尺码表是平铺测量尺寸仅供参考，部分商品由于版型特殊及个人测量方法位置不同，误差范围1-2cm为正常值。
                    </span>
                </div>
            </div>
            <div class="question">
                <div class="Q">
                    <img src="/svg/quesyion.svg" height="20px" width="20px">
                    <span>商品有没有气味？</span>
                </div>
                <div class="A">
                    <span>
                        <img src="/svg/answer.svg" height="24px" width="24px">
                        由于商品制作完成后立即包装，可能会导致部分商品存在一定的气味，都是比较淡且安全的，这个是正常现象，商品开封一段时间后，气味会散去哦。
                    </span>
                </div>
            </div>
            <div class="question">
                <div class="Q">
                    <img src="/svg/quesyion.svg" height="20px" width="20px">
                    <span>图片颜色与实物颜色是否相同？</span>
                </div>
                <div class="A">
                    <span>
                        <img src="/svg/answer.svg" height="24px" width="24px">
                        商品采用专业相机拍摄，平铺图更接近实物颜色；但由于不同的显示器显示出来的亮度不同，可能导致实物与图片存在色差，最终颜色以实物为准。
                    </span>
                </div>
            </div>
            <div class="question">
                <div class="Q">
                    <img src="/svg/quesyion.svg" height="20px" width="20px">
                    <span>价格说明</span>
                </div>
                <div class="A">
                    <span>
                        <div id="image">
                            <img src="/svg/answer.svg" height="24px" width="24px">
                        </div>
                        <div id="centent">
                            1、特卖价：指商品销售价,
                            是您决定是否购买商品的依据。特卖价可能会根据商品参与特定的活动优惠（补贴、满减、优惠券等）而发生变化，此时依然将在页面同时为您标示出商品参与活动优惠后的特卖价。<br>
                            2、划线价：依然展示的划横线价格并非原价，该价格为品牌零售参考价，采集自商品的吊牌、标签、包装、品牌官网或厂商提供的建议零售价等。由于地区、时间的差异性以及市场行情波动，品牌零售参考价可能与您购物时展示的不一致，仅供您参考。<br>
                            3、折扣：依然展示的折扣比为特卖价与划线价的对比（该值四舍五入后采小数点后1位，如￥799/￥2899=0.2756=2.8折） 该对比值仅供您参考，不作为结算基数。<br>
                            4、超V特卖价：超级VIP会员享受专属优惠（折扣、补贴等）后的商品价格。<br>
                            5、超V首单价：活动期首次付费超级VIP后，特定商品享受专属优惠后的价格。
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
/* *************************************************************商品咨询 */
.detail-container .pro-consultation {
    width: 100%;
    /* background-color: rgb(242, 192, 192); */
    float: left;
}

.detail-container .pro-consultation .grey-head {
    background-color: #eae8eb;
    line-height: 45px;
    padding-left: 15px;
    margin-bottom: 30px;
}

.detail-container .pro-consultation .pro-questions {
    width: 96%;
    /* background-color: #90dcff; */
    margin: 0px 20px 0px 20px;
    line-height: 30px;
    font-weight: 700;
    font-size: 14px;
}

/* 问题1 */
.detail-container .pro-consultation .pro-questions .question {
    width: 100%;
    /* background-color: rgb(215, 208, 250); */
    padding-top: 10px;
    padding-bottom: 10px;
}

.detail-container .pro-consultation .pro-questions .question .A {
    font-weight: 500;
}

.detail-container .pro-consultation .pro-questions .question .A span #image {
    float: left;
}

.detail-container .pro-consultation .pro-questions .question .A span #centent {
    float: left;
    width: 97%;
}
</style>