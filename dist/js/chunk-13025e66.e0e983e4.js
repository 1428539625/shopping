(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13025e66"],{"064a":function(t,e,n){"use strict";n("663a")},1388:function(t,e,n){},"40c0":function(t,e,n){},"55cd":function(t,e,n){"use strict";n("40c0")},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"663a":function(t,e,n){},"77b8":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"nav-center"},slot:"nav-center"},[t._v("购物天堂")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[n("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),n("recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("good-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},r=[],s=n("6b75");function a(t){if(Array.isArray(t))return Object(s["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=n("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||i(t)||Object(c["a"])(t)||l()}var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",t._l(t.banners,(function(e){return n("swiper-item",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},f=[],m=n("ace8"),p=n("09fc"),h={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:m["a"],SwiperItem:p["a"]},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},b=h,v=n("2877"),g=Object(v["a"])(b,d,f,!1,null,"02fd9e5d",null),w=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return n("div",{staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},k=[],C={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},T=C,$=(n("80f4"),Object(v["a"])(T,y,k,!1,null,null,null)),_=$.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"feature"},[o("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[o("img",{attrs:{src:n("5cbe"),alt:""}})])])}],O={name:"FeatureView"},j=O,I=(n("064a"),Object(v["a"])(j,x,S,!1,null,null,null)),L=I.exports,H=n("a7ac"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,o){return n("div",{staticClass:"tab-control-item",class:{active:o===t.currentIndex},on:{click:function(e){return t.itemClick(o)}}},[n("span",[t._v(t._s(e))])])})),0)},E=[],A={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},B=A,F=(n("cdcf"),Object(v["a"])(B,G,E,!1,null,"c5f25580",null)),Y=F.exports,M=n("6d71"),V=n("5d17"),N=n("fdd6"),z=n("1bab");function J(){return Object(z["a"])({url:"/home/multidata"})}function R(t,e){return Object(z["a"])({url:"/home/data",params:{type:t,page:e}})}var U=[],P=[20,11,222];U.push.apply(U,P);var q=n("90b9"),D={name:"Home",components:{HomeSwiper:w,RecommendView:_,FeatureView:L,NavBar:H["a"],TabControl:Y,GoodList:M["a"],Scroll:V["a"],BackTop:N["a"]},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShowBackTop:!1,tabOffsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods:function(){return this.goods[this.currentType].list}},destroyed:function(){console.log("home destroyed")},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){var t=Object(q["a"])(this.$refs.scroll.refresh,50);this.$bus.$on("itemImageLoad",(function(){t()}))},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},backClick:function(){this.$refs.scroll.scrollTo(0,0)},contentScroll:function(t){this.isShowBackTop=-t.y>1e3,this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){this.getHomeGoods(this.currentType)},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;J().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;R(t,n).then((function(n){var o;(o=e.goods[t].list).push.apply(o,u(n.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))}},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh(),console.log(this.saveY),console.log("1")},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("imgLoad",this.imgListener),console.log(this.saveY),console.log("2")}},K=D,Q=(n("55cd"),Object(v["a"])(K,o,r,!1,null,"1819e0de",null));e["default"]=Q.exports},"80f4":function(t,e,n){"use strict";n("1388")},cdcf:function(t,e,n){"use strict";n("ebc3")},ebc3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-13025e66.e0e983e4.js.map