<template>
  <div class="nav-bar">
      <div class="left"><slot name="nav-left"></slot></div>
      <div class="center"><slot name="nav-center"></slot></div>
      <div class="right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "NavBar"
}
</script>

<style  scoped>
.nav-bar{
  display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
.left{
    width: 60px;

}
.center{
    flex: 1;
}
.right{
   width: 60px; 
}
</style>
