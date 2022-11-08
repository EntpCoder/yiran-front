<template>
    <YiRanHeader></YiRanHeader>
    <SecondHeader></SecondHeader>
    <ShopNavigation></ShopNavigation>
    <RightNavigation></RightNavigation>
    <div class="pinpai">
        <div class="layui-col-md9">
            <div class="pinpai-name">
                <span class="brand">伊芙丽eifini女装专场</span>
                <div class="zhekou">
                    <span class="zhekou-num">0.5</span>
                    <span class="zhekou-name">折起</span>
                </div>
            </div>
        </div>
        <!-- <div class="layui-col-md3">
            <div class="pinpai-like">
                <span class="like-img"></span>
                <span class="like-text">收藏商品</span>
                <span class="like-num">(1234567)</span>
            </div>
        </div> -->
    </div>
    <!-- =======================大筛选=========================== -->
    <div class="shaixuan shaixuan1">
        <span class="leibie pinlei">品牌</span>
        <ul class="ul-item">

            <li class="group-li" v-for="b in brandList" :key="b.brandId">
                <span @click="pinPaiCheck(b)" v-if="!brandIsMoreChecked" :class="b.spanClass">{{ b.brandName }}
                </span>
                <span v-if="brandIsMoreChecked">
                    <input :id="b.brandId" type="checkbox" v-model="b.spanClass.checked" :class="b.spanClass" /><label
                        :for="b.brandId">{{ b.brandName }}</label>
                </span>
            </li>
        </ul>
        <span class="other-item">
            <button class="clean-all" @click="brandclearAllClick()">清空已选</button>

            <button class="duoxuan duoxiuan1" @click="brandIsMoreChecked = !brandIsMoreChecked">
                <span v-if="!brandIsMoreChecked">多选</span>
                <span v-if="brandIsMoreChecked">确定</span>
            </button>
        </span>
        <div class="clean"></div>
    </div>
    <div class="shaixuan shaixuan2">
        <span class="leibie chima">品类</span>
        <ul class="ul-item">
            <li class="group-li" v-for="k in kindList" :key="k.menuId">
                <span @click="kindCheck(k)" v-if="!kindIsMoreChecked" :class="k.spanClass">{{ k.title }}
                </span>
                <span v-if="kindIsMoreChecked">
                    <input :id="k.menuId" type="checkbox" v-model="k.spanClass.checked" :class="k.spanClass" /><label
                        :for="k.menuId">{{ k.title }}</label>
                </span>
            </li>
        </ul>
        <span class="other-item">
            <button class="clean-all" @click="kindclearAllClick()">清空已选</button>

            <button class="duoxuan duoxiuan1" @click="kindIsMoreChecked = !kindIsMoreChecked">
                <span v-if="!kindIsMoreChecked">多选</span>
                <span v-if="kindIsMoreChecked">确定</span>
            </button>
        </span>
        <div class="clean"></div>
    </div>
    <div class="shaixuan shaixuan3">
        <span class="leibie chima">尺码</span>
        <ul class="ul-item">
            <li class="group-li" v-for="s in sizeList" :key="s.sizeId">
                <span @click="sizeCheck(s)" v-if="!sizeIsMoreChecked" :class="s.spanClass">{{ s.sizeType }}
                </span>
                <span v-if="sizeIsMoreChecked">
                    <input :id="s.sizeId" type="checkbox" v-model="s.spanClass.checked" :class="s.spanClass" /><label
                        :for="s.sizeId">{{ s.sizeType }}</label>
                </span>
            </li>
        </ul>
        <span class="other-item">
            <button class="clean-all" @click="sizeClearAllClick()">清空已选</button>

            <button class="duoxuan duoxiuan1" @click="sizeIsMoreChecked = !sizeIsMoreChecked">
                <span v-if="!sizeIsMoreChecked">多选</span>
                <span v-if="sizeIsMoreChecked">确定</span>
            </button>
        </span>
        <div class="clean"></div>
    </div>
    <div class="shaixuan shaixuan3">
        <span class="leibie chima">颜色</span>
        <ul class="ul-item">
            <li class="group-li" v-for="c in colorList" :key="c.colorId">
                <span @click="colorCheck(c)" v-if="!colorIsMoreChecked" :class="c.spanClass">{{ c.colorName }}
                </span>
                <span v-if="colorIsMoreChecked">
                    <input :id="c.colorId" type="checkbox" v-model="c.spanClass.checked" :class="c.spanClass" /><label
                        :for="c.colorId">{{ c.colorName }}</label>
                </span>
            </li>
        </ul>
        <span class="other-item">
            <button class="clean-all" @click="colorClearAllClick()">清空已选</button>
            <button class="duoxuan duoxiuan1" @click="colorIsMoreChecked = !colorIsMoreChecked">
                <span v-if="!colorIsMoreChecked">多选</span>
                <span v-if="colorIsMoreChecked">确定</span>
            </button>
        </span>
        <div class="clean"></div>
    </div>
    <!-- ======================小筛选============================== -->
    <div class="filter" v-if="productList[0]">
        <div class="pro-oper">
            <div class="oper oper-all">综合</div>
            <div class="oper oper-xiaoliang">销量</div>
            <div class="select oper-price">
                <span class="a price-name">价格</span>
                <span class="up price-up"></span>
                <span class=" down price-down"></span>
            </div>
            <div class="select oper-zhekou">
                <span class="a zhekou-name">折扣</span>
                <span class="up zhekou-up"></span>
                <span class="down zhekou-down"></span>
            </div>
            <div class="oper-price-select">
                <div class="select-start">
                    <input type="text" placeholder="￥">
                </div>
                <em>--</em>
                <div class="select-end">
                    <input type="text" placeholder="￥">
                </div>
                <span class="ensure">确定</span>
                <span class="delete">删除</span>
            </div>
        </div>
        <div class="pro-page">
            <span class="page-total">
                <span class="page-num">{{ productList[0].proCount }}</span>
                件商品
            </span>
        </div>
    </div>
    <!-- =============商品============== -->
    <div class="pro-show-page page-1">
        <h1 v-if="productList == undefined || productList.length <= 0">暂无商品</h1>
        <ul class="pro-ul" v-for="p in productList" :key="p.proId">
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
                        <span class="pre-price">￥{{ p.proPrice }}</span>
                        <span class="pro-noe-zhekou">{{ p.discount }}折</span>
                    </div>
                    <!-- ======近60天内最低价=== -->
                    <div class="lower_price_60">近60天内最低价</div>
                    <span class="pro-name-text">{{ p.proName }}</span>
                </router-link>
            </li>
        </ul>
    </div>
    <el-pagination background layout="prev, pager, next" 
    :total="200" 
    :default-page-size="5" 
    v-model:currentPage="currentPage"/>
</template>

<script setup>
import YiRanHeader from '@/components/YiRanHeader.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import ShopNavigation from '@/components/ShopNavigation.vue'
import RightNavigation from '@/components/RightNavigation.vue'
import { reactive, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import productApi from '@/api/product.js'

const brandIsMoreChecked = ref(false)
const kindIsMoreChecked = ref(false)
const sizeIsMoreChecked = ref(false)
const colorIsMoreChecked = ref(false)
const currentPage = ref(1)

//商品数据对象
let productList = ref([])
//品牌列表
let brandList = ref([])
//品类列表
let kindList = ref([])
//颜色列表
let colorList = ref([])
//尺码列表
let sizeList = ref([])
//品牌
const param = []

const route = useRoute()
const router = useRouter()
let brandId = route.query.brandId
let kindId = route.query.kindId
// 当路由变化时重新加载数据
watch(() => router.currentRoute.value.fullPath, () => {
    brandId = route.query.brandId
    kindId = route.query.kindId
    loadData()
}, { immediate: true }
)
// 请求商品列表数据
onMounted(() => {
    loadData()
})
function loadData() {
    if (brandId) {
        getProListByBrandId(brandId)
        getFiltrateByBrandId(brandId)

    }
    if (kindId) {
        getProListByKindId(kindId)
        getFiltrateByKindId(kindId)
    }
}
//根据品牌查商品
function getProListByBrandId(brandId) {
    productApi.getProListByBrandId(brandId).then(
        response => {
            productList.value = reactive(response.data.result)
        }
    )

}
//根据品类查商品
function getProListByKindId(kindId) {
    productApi.getProListByKindId(kindId).then(
        response => {
            productList.value = reactive(response.data.result)
        }
    )
}
//筛选栏
function getFiltrateByBrandId(brandId) {
    param[0] = brandId
    param[1] = []
    param[2] = []
    param[3] = []
    productApi.getFiltrateByBrandId(brandId).then(
        response => {
            brandList.value = reactive(response.data.result.brandList)
            brandList.value.forEach((brand) => {
                brand.spanClass = { checked: false }
            })
            kindList.value = reactive(response.data.result.kindList)
            kindList.value.forEach((kind) => {
                kind.spanClass = { checked: false }
            })
            sizeList.value = reactive(response.data.result.sizeList)
            sizeList.value.forEach((size) => {
                size.spanClass = { checked: false }
            })
            colorList.value = reactive(response.data.result.colorList)
            colorList.value.forEach((color) => {
                color.spanClass = { checked: false }
            })
        }
    )
}
function getFiltrateByKindId(kindId) {
    param[0] = []
    param[1] = kindId
    param[2] = []
    param[3] = []
    productApi.getFiltrateByKindId(kindId).then(
        response => {
            brandList.value = reactive(response.data.result.brandList)
            brandList.value.forEach((brand) => {
                brand.spanClass = { checked: false }
            })
            kindList.value = reactive(response.data.result.kindList)
            kindList.value.forEach((kind) => {
                kind.spanClass = { checked: false }
            })
            sizeList.value = reactive(response.data.result.sizeList)
            sizeList.value.forEach((size) => {
                size.spanClass = { checked: false }
            })
            colorList.value = reactive(response.data.result.colorList)
            colorList.value.forEach((color) => {
                color.spanClass = { checked: false }
            })
        }
    )
}
// 品牌是否被选中
function pinPaiCheck(b) {
    brandList.value.forEach(brand => {
        brand.spanClass = { 'checked': false }
        if (brand === b) {
            brand.spanClass.checked = !brand.spanClass.checked
        } else {
            brand.spanClass.checked = false
        }
    })
    b.spanClass = { 'checked': true }
    param[0] = b.brandId
    //调用筛选方法
    productApi.getByBrandKindSizeColor(param[0], param[1], param[2], param[3]).then(
        response => {
            if (response.code === 200)
                productList.value = reactive(response.data.result)
            else
                productList.value = []
        }
    )
}
//清空已选
function brandclearAllClick() {
    brandList.value.forEach(brand => {
        brand.spanClass.checked = false
    });
}
function colorClearAllClick() {
    colorList.value.forEach(color => {
        color.spanClass.checked = false
    });
}
// 品类是否被选中
function kindCheck(k) {
    kindList.value.forEach(kind => {
        kind.spanClass = { 'checked': false }
        if (kind === k) {
            kind.spanClass.checked = !kind.spanClass.checked
        } else {
            kind.spanClass.checked = false
        }
    });
    k.spanClass = { 'checked': true }
    param[1] = k.menuId
    //调用筛选方法
    productApi.getByBrandKindSizeColor(param[0], param[1], param[2], param[3]).then(
        response => {
            if (response.code === 200)
                productList.value = reactive(response.data.result)
            else
                productList.value = []
        }
    )

}
//尺码是否被选中
function sizeCheck(s) {
    sizeList.value.forEach(size => {
        size.spanClass = { 'checked': false }
        if (size === s) {
            size.spanClass.checked = !size.spanClass.checked
        } else {
            size.spanClass.checked = false
        }
    });
    s.spanClass = { 'checked': true }
    param[2] = s.sizeId
    //调用筛选方法
    productApi.getByBrandKindSizeColor(param[0], param[1], param[2], param[3]).then(
        response => {
            if (response.code === 200)
                productList.value = reactive(response.data.result)
            else
                productList.value = []
        }
    )

}
//颜色是否被选中
function colorCheck(c) {
    colorList.value.forEach(color => {
        color.spanClass = { 'checked': false }
        if (color === c) {
            color.spanClass.checked = !color.spanClass.checked
        } else {
            color.spanClass.checked = false
        }
    });
    c.spanClass = { 'checked': true }
    param[3] = c.colorId
    //调用筛选方法
    productApi.getByBrandKindSizeColor(param[0], param[1], param[2], param[3]).then(
        response => {
            if (response.code === 200)
                productList.value = reactive(response.data.result)
            else
                productList.value = []
        }
    )
}
</script>

<script>

</script>

<style scoped>
/* =================头部导航固定================ */
.el-pagination {
    justify-content: space-around;
}
.pinpai {
    width: 80%;
    height: 30px;
    margin: 0 auto;
    /* background-color: rgb(246, 209, 209); */
    margin-bottom: 10px;
    margin-top: 20px;
}

.pinpai .pinpai-name {
    width: 70%;
    height: 100%;

}

.pinpai .pinpai-name .brand {
    width: auto;
    font-size: 18px;
    color: #333333;
    float: left;
    /* border: 1px solid; */
    margin-right: 30px;
}

.pinpai .pinpai-name .zhekou {
    width: 30%;
    height: 100%;
    float: left;
}

.pinpai .pinpai-name .zhekou .zhekou-num {
    width: auto;
    height: 100%;
    font-size: 18px;
    font-weight: bolder;
    color: #333333;
    /* border: 1px solid; */
    line-height: 100%;
    padding-top: 5px;
    float: left;
}

.pinpai .pinpai-name .zhekou .zhekou-name {
    width: auto;
    height: 100%;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    /* border: 1px solid; */
    line-height: 100%;
    padding-top: 5px;
    margin-left: 5px;
    float: left;
}

.pinpai .pinpai-like {
    float: right;
    margin-right: 20px;
    width: 150px;
    height: 20px;
    border: 1px solid red;
    border-radius: 30px;
}

.pinpai .pinpai-like .like-img {
    display: block;
    width: 15px;
    height: 15px;
    /* border: 1px solid; */
    margin-top: 3px;
    margin-left: 10px;
    float: left;
    margin-right: 5px;
    background: url("../svg/like-img.svg");
}

/* .pinpai .pinpai-like .like-text {
    font-size: 13px;
    line-height: 20px;
    float: left;
    color: #f32b80;

} */

.pinpai .pinpai-like .like-num {
    font-size: 13px;
    color: #686666;
    margin-top: 3px;
    float: left;
    margin-left: 5px;
}

.pinpai .pinpai-like:hover {
    background-color: #f32b80;
    cursor: pointer;
}

/* .pinpai .pinpai-like:hover .like-text {
    color: white;
} */

.pinpai .pinpai-like:hover .like-num {
    color: white;
}

.pinpai .pinpai-like:hover .like-img {
    background: url("../svg/like-hover.svg");
}

/* =================筛选===================== */
.shaixuan {
    width: 80%;
    margin: 0 auto;
    border: 1px solid #dfdfdf;
}

.clean {
    clear: both;
    height: 0;
    font-size: 1px;
    line-height: 0px;
}

.shaixuan .leibie {
    display: block;
    width: 10%;
    height: 46px;
    /* border: 1px solid blue; */
    font-size: 13px;
    text-align: left;
    padding-left: 20px;
    line-height: 50px;
    color: #f10180;
    /* background-color: rgb(251, 196, 196); */
    float: left;
}

.shaixuan .ul-item {
    width: 60%;
    height: 46px;
    /* border: 1px solid red; */
    float: left;
    overflow: hidden;
}

.shaixuan .ul-item .group-li {
    display: block;
    width: 80px;
    height: 46px;
    float: left;
    line-height: 46px;
    text-align: left;
    margin-right: 20px;
    /* border: 1px solid;   */
    font-size: 12px;
    cursor: pointer;
    color: rgba(0, 0, 0, .85);
}

.shaixuan .ul-item .group-li span:hover {
    color: #f10180;
}

.shaixuan .other-item {
    float: right;
    width: 15%;
    height: 46px;
    /* border: 1px solid; */
}

.shaixuan .other-item .more,
.duoxuan,
.clean-all {
    border: none;
    background: none;
    margin-right: 25px;
    margin-top: 15px;
    float: right;
    cursor: pointer;
    font-size: 12px;
}

.shaixuan .ensure,
.quxiao {
    background-color: rgb(222, 17, 103);
    margin-top: 20px;
    border: none;
    color: white;
    font-size: 12px;
    width: 45px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
}

.shaixuan .ensure {
    margin-left: 400px;
}

.shaixuan .quxiao {
    margin-left: 30px;
}

.shaixuan .ul-item .li-check {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.shaixuan .ul-item li:hover {
    color: #f10180;
}

/* =================小筛选======================= */
.filter {
    width: 80%;
    margin: 0 auto;
    height: 46px;
    background-color: #f5f5f5;
    border: 1px solid #dfdfdf;
    min-width: 1000px;
    margin-top: 30px;
}

.filter .pro-oper {
    width: 600px;
    height: 46px;
    float: left;

}

.filter .pro-oper .oper {
    float: left;
    width: 70px;
    height: 46px;
    border-right: 1px solid #dfdfdf;
    line-height: 46px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
}

.filter .pro-oper .oper:hover {
    color: #f32b80;
    border: 1px solid #f32b80;
}

/* ========折扣价格======= */
.filter .pro-oper .select {
    width: 70px;
    float: left;
    border-right: 1px solid #dfdfdf;
    line-height: 46px;
    height: 46px;
    padding-left: 10px;
    font-size: 12px;
    cursor: pointer;
}

.filter .pro-oper .select:hover {
    color: #f32b80;
    border: 1px solid #f32b80;
}

.filter .select .up {
    float: right;
    display: block;
    width: 12px;
    height: 12px;
    /* border: 1px solid; */
    background: url("../svg/price-up.svg");
    margin-top: 13px;
    margin-right: 25px;
}

.filter .select .down {
    float: right;
    width: 12px;
    height: 12px;
    /* border: 1px solid; */
    background: url("../svg/price-down.svg");
    margin-top: 23px;
    margin-right: -12px
}

/* ==============价格筛选============== */
.filter .oper-price-select {
    float: left;
    width: 280px;
    height: 46px;
}

.filter .oper-price-select:hover {
    background-color: white;
}

.filter .oper-price-select:hover .ensure {
    display: block;
}

.filter .oper-price-select:hover .delete {
    display: block;
}

.filter .oper-price-select .select-start {
    width: 62px;
    height: 24px;
    border-right: 1px solid #dfdfdf;
    margin-left: 20px;
    margin-top: 10px;
}

.filter .oper-price-select .select-start input[type=text] {
    width: 80%;
    height: 100%;
    background-color: white;
    border: none;
    float: left;
    padding: 0 6px;
}

.filter .oper-price-select em {
    float: left;
    margin-top: -20px;
    margin-left: 90px;
}

.filter .oper-price-select .select-end {
    float: left;
    width: 62px;
    height: 24px;
    border: 1px solid #dfdfdf;
    margin-left: 107px;
    margin-top: -26px;
}

.filter .oper-price-select .select-end input[type=text] {
    float: left;
    width: 80%;
    height: 100%;
    background-color: white;
    border: none;
    padding: 0 6px;
}

.filter .oper-price-select .ensure {
    display: none;
    width: 30px;
    height: 20px;
    color: white;
    background-color: #f32b80;
    font-size: 14px;
    float: left;
    margin-top: -23px;
    margin-left: 190px;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;
}

.filter .oper-price-select .delete {
    display: none;
    width: 30px;
    height: 20px;
    color: white;
    background-color: #f32b80;
    font-size: 14px;
    float: left;
    margin-top: -23px;
    margin-left: 240px;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;
}

/* =============分页=============== */
.filter .pro-page {
    width: 250px;
    height: 46px;
    /* border: 1px solid; */
    float: right;
    font-weight: 400;

}

.filter .pro-page .page-total {
    width: auto;
    height: 46px;
    line-height: 46px;
    text-align: center;
    /* border: 1px solid; */
    margin-right: 20px;
    float: left;

}

.filter .pro-page .page-total .page-num {
    color: #f32b80;
}

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

.checked {
    color: rgb(244, 20, 147);
}
</style>