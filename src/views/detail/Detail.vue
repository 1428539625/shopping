<template>
  <div id="detail">
    <detail-nav-bar :titles="titles" @itemClick="itemClick" ref="nav_bar" class="detail-nav" />
    <scroll class="content" ref="scroll" :probeType="3" @scrollPostion="scrollPostion" @showBackTop="showBackTop">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo"  ref="itemParams"/>
      <detail-comment-info :rate="rate" ref="comment"></detail-comment-info>
    </scroll>
    <back-top @click.native="scrollTop" v-show="isShopBackTop"></back-top>
    <detail-bottom-bar @addCart="addCart" ></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import {backTopMixin} from 'common/mixin'
import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from './childComps/DetailBottomBar.vue';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      rate:{},
      detailInfo: {},
      paramInfo: {},
      recommended:[],
      offsetTopY:[],
      currentIndex:0,
      iid:0
    };
  },
  mixins:[backTopMixin],
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 1.获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services,
        this.rate = data.rate.list?data.rate.list[0]:{}
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
        getRecommentdData().then(res=>{
        this.recommended = res.data.list
      })
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.offsetTopY.push(0)
      this.offsetTopY.push(this.$refs.itemParams.$el.offsetTop)
      this.offsetTopY.push(this.$refs.comment.$el.offsetTop)
      //this.offsetTopY.push(this.$refs.recommend.offsetTop)
      this.offsetTopY.push(Number.MAX_VALUE)
    },
    itemClick(index){
      this.$refs.scroll.scrollTo(0,-this.offsetTopY[index],500)
    },
    scrollPostion(position){
      let positionY=-position.y
      for(let i =0;i<this.offsetTopY.length-1;i++)
      {
        if(this.currentIndex!==i&&(positionY>this.offsetTopY[i]&&positionY<this.offsetTopY[i+1]))
        {
          this.currentIndex=i
        }
      }
      this.$refs.nav_bar.currentIndex=this.currentIndex
    },
      addCart(){
        const cartListData = {
          title : this.goods.title,
          desc : this.goods.desc,
          iid : this.iid,
          image : this.topImages[0],
          price:this.goods.lowNowPrice
        }
        this.$store.dispatch('addCart',cartListData)
      }
    },
  destroyed(){
    this.$bus.$off('imgLoad',this.imgListener)
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
 
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
 
}

.content {
  height: calc(100% - 44px);
}

</style>
