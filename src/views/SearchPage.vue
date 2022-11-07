<template>
    <YiRanHeader></YiRanHeader>
    <SecondHeader></SecondHeader>
    <ShopNavigation></ShopNavigation>
    <RightNavigation></RightNavigation>
    <!-- =============商品============== -->
    <div class="pro-show-page page-1">
        <h1 v-if="product == undefined || product.length <= 0">暂无商品</h1>
        <ul class="pro-ul" v-for="p in product" :key="p.product">
            <li class="pro-li">
                <router-link :to="{ path: `/productDetail/explainSize/${p.proId}` }" class="li-li">
                    <div class="product-img">
                        <img width="216px" height="218px" :src="p.proMainImageAddress">
                    </div>
                    <!-- ==商品价格== -->
                    <div class="pro-price-item">
                        <span class="temai">特卖价</span>
                        <span class="pro-pri">
                            <span class="pro-pri-img">￥</span>
                            <span class="pro-pri-num">{{ p.sellingPrice }}</span>
                        </span>
                        <span class="pre-price">￥{{}}</span>
                        <span class="pro-noe-zhekou">{{}}折</span>
                    </div>
                    <!-- ======近60天内最低价=== -->
                    <div class="lower_price_60">近60天内最低价</div>
                    <span class="pro-name-text" v-html="p.proName"></span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {onBeforeMount, ref,watch} from 'vue'
import { useRoute,useRouter} from 'vue-router';
import searchApi from '@/api/search.js'
const route = useRoute()
const router = useRouter()
const s = ref(route.query.s)
let product = ref([])

// 页面挂载 -钩子函数
onBeforeMount(() => {
    getHighProduct()
})
// 当路由变化时重新加载数据
watch(() => router.currentRoute.value.fullPath, () => {
    s.value = route.query.s
    getHighProduct()
}, { immediate: true }
)
function getHighProduct(){
    searchApi.getProduct(s.value).then(
        response =>{
         product.value = response.data.highProduct
        }
    )
}
</script>

<style scoped>
/* ==商品=============== */
/* =============商品列表====================== */
/* ===========商品小框框========== */
.pro-show-page {
    width: 80%;
    height: auto;
    float: left;
    /* border: 1px solid; */
    margin: 0 150px;
    min-width: 1000px;
}

.pro-show-page .pro-ul .pro-li {
    width: 224px;
    height: 344px;
    float: left;
    margin: 20px 8px;
    border: 1px solid white;
}

.pro-show-page .pro-ul .pro-li .product-img img {
    width: 216px;
    height: 218px;
}

.pro-show-page .pro-ul .pro-li .li-li {
    width: 218px;
    height: 338px;
    float: left;
    border: solid 1px #e7e7e7;
    margin: 2px 2px;
}

.pro-show-page .pro-ul .pro-li:hover {
    border: 1px solid #f32b80;
}

.pro-show-page .pro-ul .pro-li:hover .li-li {
    border: solid 1px white;
}

/* ==============商品框框内容================ */
.page-1 {
    display: block;
}

.page-2 {
    display: none;
}

.page-3 {
    display: none;
}

.page-4 {
    display: none;
}

.page-5 {
    display: none;
}



.pro-show-page .pro-ul .pro-li .li-li .pro-2-img {
    display: block;
    width: 216px;
    height: 218px;
    margin: auto;
    background-image: url("../images/pro-2-img.jpg");
}

.pro-show-page .pro-ul .pro-li .li-li .pro-3-img {
    display: block;
    width: 216px;
    height: 218px;
    margin: auto;
    background-image: url("../images/pro-3-img.jpg");
}

.pro-show-page .pro-ul .pro-li .li-li .pro-4-img {
    display: block;
    width: 216px;
    height: 218px;
    margin: auto;
    background-image: url("../images/pro-4-img.jpg");
}

.pro-show-page .pro-ul .pro-li .li-li .pro-5-img {
    display: block;
    width: 216px;
    height: 218px;
    margin: auto;
    background-image: url("../images/pro-5-img.jpg");
}

.pro-show-page .pro-ul .pro-li .li-li .pro-price-item {
    width: 210px;
    height: 40px;
    /* border: 1px solid; */
    margin: auto;
    color: #333333;
    margin-top: 10px;
}

.pro-show-page .pro-ul .pro-li .li-li .pro-price-item .temai {
    display: block;
    width: 40px;
    height: 20px;
    /* border: 1px solid; */
    color: #fff;
    text-align: center;
    line-height: 20px;
    font-size: 10px;
    background-color: #e46dfb;
    border-radius: 10px;
    float: left;

}

.pro-show-page .pro-ul .pro-li .li-li .pro-price-item .pro-pri {
    width: auto;
    height: 20px;
    float: left;
    /* border: 1px solid; */
    color: rgb(18, 17, 17);
    text-align: center;
    line-height: 20px;
    font-size: 18px;
    font-weight: 700;
    margin-top: 3px;

}

.pro-show-page .pro-ul .pro-li .li-li .pro-price-item .pre-price {
    text-decoration: line-through;
    float: left;
    color: #999;
    line-height: 14px;
    margin-left: 2px;
    font-size: 13px;
    width: auto;
    height: 14px;
    /* border: 1px solid; */
    margin-top: 6px;
}

.pro-show-page .pro-ul .pro-li .li-li .pro-price-item .pro-noe-zhekou {
    float: left;
    color: #999;
    line-height: 14px;
    font-size: 14px;
    width: auto;
    height: 10px;
    /* border: 1px solid; */
    margin-top: 6px;
    margin-left: 5px;
}

/* =========近60天内最低价============ */
.pro-show-page .pro-ul .pro-li .li-li .lower_price_60 {
    line-height: 14px;
    font-size: 14px;
    padding-top: 6px;
    color: #999;
    width: 210px;
    height: 14px;
    /* border: 1px solid; */
    margin: 5px 0;
}

.pro-show-page .pro-ul .pro-li .li-li .pro-name-text {
    text-overflow: ellipsis;
    min-height: 36px;
    float: left;
    font-size: 12px;
    color: #666;
    line-height: 18px;
    margin-top: 8px;
}
</style>