<template>
      <div class="tab-bar-item" @click="itemclick">
        <div v-if="!isactive"><slot  name="item-icon" ></slot> </div>
          <div v-else><slot  name="item-icon-active"></slot></div>
          <div :style="activestyle"><slot name="item-text"></slot></div>
          
        </div>
      
</template>

<script type="text/javascript">

export default {
  name: "TabBarItem",
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'red'
    }
  },
  data(){
      return {
          //isactive:false 
      }},
      computed:{
        isactive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activestyle(){
          return this.isactive?{color:this.activecolor}:{}
        }
      },
  methods: {
      itemclick(){
        this.$router.replace(this.path)
      }    
      }
  }

</script>

<style  scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
 
}
.active{
    color: red;
}


</style>
