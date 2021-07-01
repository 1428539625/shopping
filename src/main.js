import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vant'
import VueWechatTitle from 'vue-wechat-title';  
Vue.use(VueWechatTitle)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

import FastClick from 'fastclick'
FastClick.attach(document.body)
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

