import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const home= () => import('../views/home/home.vue')

const category= () => import('../views/category/category')

const cart= () => import('../views/cart/cart')

const profile= () => import('../views/profile/Profile')

const Detail = () => import('../views/detail/Detail')

const routes=[
  {
      path:'/',
      redirect:'/home',
      meta:{title:"购物天堂-首页"}
  },  
  {
      path:'/home',
      component: home,
      meta:{title:"购物天堂-首页"}
  },  
  {
      path:'/category',
      component:category,
      meta:{title:"购物天堂-分类-测试"}
  },
  {
      path:'/cart',
      component:cart,
      meta:{title:"购物天堂-购物车"}
  },
  {
      path:'/profile',
      component:profile,
      meta:{title:"购物天堂-个人中心"}
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta:{title:"购物天堂-商品详情"}
  }
  ]
  
  const router = new VueRouter({
    routes,
    mode:'history'
  })
  
  export default router
