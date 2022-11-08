import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/views/IndexPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import MemberInfoPage from '@/views/MemberInfoPage.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import OrderConfirm from '@/views/OrderConfirm.vue'
import GoPayPage from '@/views/GoPayPage.vue'
import CollectionPage from '@/views/CollectionPage.vue'
import SearchPage from '@/views/SearchPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexPage,
      meta:{title:'依然--在线服饰品牌'}
    },
    {
      path: '/login',
      component: LoginPage,
      redirect: '/login/mobile',
      children: [
        {
          path: 'mobile',
          component: () => import('@/components/MobileLogin.vue'),
          meta:{title:'手机登录'}
        },
        {
          path: 'account',
          component: () => import('@/components/AccountLogin.vue'),
          meta:{title:'账号登录'}
        }
      ]
    },
    {
      path: '/register',
      component: RegisterPage,
      meta:{title:'会员注册'}
    },
    {
      path:'/productList',
      component: () => import('@/views/ProductListPage.vue'),
      meta:{title:'商品'}
    },
    {
      path:'/productDetail',
      component:ProductDetail,
      children:[
        {
          path:'consultation',
          component:() => import('@/components/productDetail/ProductConsultation.vue')
        },
        {
          path:'comment',
          component:() => import('@/components/productDetail/ProductComment.vue')
        },
        {
          path:'show',
          component:() => import('@/components/productDetail/ProductShow.vue')
        },
        {
          path:'explainSize/:id',
          component:() => import('@/components/productDetail/ProductExplainSize.vue')
        }
      ]
    },
    {
      path:'/memberInfo',
      redirect: '/memberInfo/orderManagement',
      component:MemberInfoPage,
      children:[
        {
          path:'orderManagement',
          redirect: '/memberInfo/orderManagement/orderInfo',
          meta:{title:'订单管理'},
          component: () => import('@/components/memberInfo/OrderManagement.vue'),
          children:[
            {
              path:'orderInfo',
              component: () => import('@/components/memberInfo/OrderInfo.vue'),
            }
          ]
        },
        {
          path:'addressManagement',
          meta:{title:'地址管理'},
          component: () => import('@/components/memberInfo/AddressManagement.vue'),
        },
        {
          path:'couponsManagement',
          meta:{title:'优惠券管理'},
          redirect:'/memberInfo/couponsManagement/couponInfo?type=0',
          component: () => import('@/components/memberInfo/CouponsManagement.vue'),
          children:[
            {
              path:'couponInfo',
              component: () => import('@/components/memberInfo/CouponInfo.vue'),
            }
          ]
        },
        {
          path:'infoManagement',
          meta:{title:'个人资料管理'},
          component: () => import('@/components/memberInfo/InfoManagement.vue'),
        },
        {
          path:'orderdetail',
          meta:{title:'订单详情'},
          component: () => import('@/components/memberInfo/OrderDetail.vue'),
        }
      ]
    },
    {
      path:'/cart',
      component:ShoppingCart,
      meta:{title:'购物车'}
    },
    {
      path:'/orderConfirm',
      component:OrderConfirm,
      meta:{title:'订单确认'},
    },
    {
      path:'/goPay',
      component:GoPayPage,
      meta:{title:'订单支付'}
    },
    {
      path:'/collection',
      component:CollectionPage,
      meta:{title:'我的收藏'}
    },
    {
      path:'/search',
      component:SearchPage,
      meta:{title:'搜索'}
    }
  ]
})

router.afterEach((to)=>{
  // 切换之后修改页签
  document.title = to.meta.title
  window.scrollTo(0,0);
})

export default router
