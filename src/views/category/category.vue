<template>
<div class="wrapper" ref="aaaa">
  <div>
    <button @click="btnClick">按钮</button>
    <div @click="divClick">呵呵</div>
    <ul>
      <li>列表数据1</li>
      <li>列表数据2</li>
      <li>列表数据3</li>
      <li>列表数据4</li>
      <li>列表数据5</li>
      <li>列表数据6</li>
      <li>列表数据7</li>
      <li>列表数据8</li>
      <li>列表数据9</li>
      <li>列表数据10</li>
      <li>列表数据11</li>
      <li>列表数据12</li>
      <li>列表数据13</li>
      <li>列表数据14</li>
      <li>列表数据15</li>
      <li>列表数据16</li>
      <li>列表数据17</li>
      <li>列表数据18</li>
      <li>列表数据19</li>
      <li>列表数据20</li>
      <li>列表数据21</li>
      <li>列表数据22</li>
      <li>列表数据23</li>
      <li>列表数据24</li>
      <li>列表数据25</li>
      <li>列表数据26</li>
      <li>列表数据27</li>
      <li>列表数据28</li>
      <li>列表数据29</li>
      <li>列表数据30</li>
      <li>列表数据31</li>
      <li>列表数据32</li>
      <li>列表数据33</li>
      <li>列表数据34</li>
      <li>列表数据35</li>
      <li>列表数据36</li>
      <li>列表数据37</li>
      <li>列表数据38</li>
      <li>列表数据39</li>
      <li>列表数据40</li>
      <li>列表数据41</li>
      <li>列表数据42</li>
      <li>列表数据43</li>
      <li>列表数据44</li>
      <li>列表数据45</li>
      <li>列表数据46</li>
      <li>列表数据47</li>
      <li>列表数据48</li>
      <li>列表数据49</li>
      <li>列表数据50</li>
    </ul>
  </div>
</div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  name: "category",
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
this.scroll=new BScroll(this.$refs.aaaa,{
  probeType:3
})
this.scroll.on('scroll',(position)=>{
  console.log(position);
})
  },
  computed:{
    count(){
      return this.$store.state.counter
    }
  },
  methods:{
      add:function(){
        this.$store.commit('increment')
      },
            btnClick() {
        console.log('btnClick');
      },
      divClick() {
        console.log('divClick');
      }
  }
}
</script>

<style  scoped>
  .wrapper {
    height: 150px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
