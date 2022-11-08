<template>
    <YiRanHeader></YiRanHeader>
    <SecondHeader></SecondHeader>
    <ShopNavigation></ShopNavigation>
    <RightNavigation></RightNavigation>
    <div class="c-banner">
        <img class="banner" src="/images/collection-banner.png">
    </div>
    <!-- 商品收藏 -->
    <div class="layui-container">
        <div class="layui-tab">
            <ul class="layui-tab-title">
                <li class="layui-this">全部分类</li>
                <li>有货</li>
                <li>降价</li>
            </ul>
            <div class="layui-tab-content">
                <!-- 商品数据 -->
                <div class="layui-tab-item layui-show layui-col-space24">
                    <div class="layui-col-md3" v-for="c in collectionsVOList" :key="c.proId">
                        <div class="goods-item">
                            <div class="goods-item-inner">
                                <router-link :to="`/productDetail/explainSize/${c.proId}`"><img
                                        :src="c.proMainImageAddress" alt="" /></router-link>
                                <div class="goods-item-price-row layui-row">
                                    <div class="temai-label layui-inline">特卖价</div>
                                    <div class="goods-item-sale-price layui-inline">￥{{ c.proPrice }}</div>
                                    <div class="goods-item-original-price layui-inline"><del>￥{{ c.sellingPrice }}</del>
                                    </div>
                                    <div class="goods-item-discount layui-inline">{{ c.discount }}折</div>
                                </div>
                                <div class="goods-item-product-row layui-row">
                                    <div class="goods-item-name">{{ c.brandName }} | {{ c.describe }}</div>
                                </div>
                                <router-link :to="`/productDetail/explainSize/${c.proId}`">
                                    <button type="button" class="add-car layui-btn">
                                        <embed width="18px" height="18px" src="/svg/shop-bag.svg" />
                                        查看商品
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
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
import collectionApi from '@/api/collections.js'
import { reactive, ref, onBeforeMount } from 'vue'

let collectionsVOList = ref([])
// 页面挂挂载完毕执行
onBeforeMount(() => {
    viewMyCollections()
})

function viewMyCollections() {
    collectionApi.viewMyCollections().then(
        response => {
            collectionsVOList.value = reactive(response.data.collectionsVOList)
        }
    )
}
</script>

<style scoped>
.banner-row {
    width: 100%;
    border-bottom: 1px solid rgb(233, 233, 233);
}

.c-banner {
    margin: 0, auto;
}

.m-nav-box .m-nav {
    width: 200px;
    border-bottom: 1px solid rgb(243, 43, 128);
    height: 60px;
    margin: 0 auto;
    text-align: center;
}

.m-nav-box .m-nav span {
    line-height: 60px;
    font-size: larger;
    color: rgb(241, 1, 128);
}

.layui-tab-title {
    border-bottom-width: 0px;
}

.layui-tab-title li {
    line-height: 30px;
    background-color: rgb(250, 250, 250);
    margin-right: 1%;
    border: 1px solid rgb(102, 102, 102);
    border-radius: 5px;
    color: rgb(102, 102, 102);
}

.layui-tab-title li:hover {
    color: rgb(241, 1, 128);
    border-color: rgb(241, 1, 128);
}

.layui-tab-title .layui-this::after {
    border-width: 0px;
    height: 31px;
}

.layui-tab-title .layui-this {
    height: 32px;
    border-width: 0px;
    border-radius: 5px;
    background-color: rgb(241, 1, 128);
    color: #fff;
}

.goods-item {
    height: 420px;
    padding: 9px;
    border: 1px solid rgba(231, 231, 231, 0);
}

.goods-item:hover {
    border: 1px solid rgb(241, 1, 128);
}

.goods-item-price-row>* {
    margin-left: 2%;
}

.goods-item .goods-item-inner {
    width: 245px;
    height: 420px;
    border: 1px solid rgb(231, 231, 231);
    position: relative;
}

.goods-item .goods-item-inner img {
    width: 245px;
    height: 245px;
}

.goods-item:hover .goods-item-inner {
    border: 1px solid rgb(231, 231, 231, 0);
}

.temai-label {
    height: 20px;
    background: linear-gradient(to right, rgb(255, 0, 149), rgb(230, 113, 248));
    color: #fff;
    line-height: 20px;
    width: 50px;
    text-align: center;
    font-size: smaller;
    border-radius: 10px;
}

.goods-item-sale-price {
    font-size: 25px;
    font-weight: bold;
}

.goods-item-original-price,
.goods-item-discount {
    color: rgb(153, 153, 153);
    margin-top: 5px;
}

.goods-item-product-row {
    margin: 3%;
    font-size: small;
    color: rgb(102, 102, 102);
}

.add-car {
    background-color: rgb(250, 250, 250);
    color: rgb(51, 51, 51);
    width: 100%;
    border-top: 1px solid rgb(224, 224, 224);
    border-radius: 0px;
    position: absolute;
    bottom: 0px;
}

.add-car:hover {
    color: rgb(241, 1, 128);
}

.banner {
    width: 100%;
}
</style>