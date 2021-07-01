<template>
  <div id="app">
    <keep-alive exclude="Detail">
   <router-view v-wechat-title="$route.meta.title"></router-view>
   </keep-alive>
   <main-tab-bar/>
   
  
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default{
  name:'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';

</style>
