<template>
  <div>
    <div class="news-ticker news-ticker-solid">
    <div class="news-ticker-body" style="height:16px">
      <div class="scroll-wrap">
        <ul class="scroll-content" :style="{top}">
          <li v-for="(items,index) in prizeList" :key="index">{{items.name}}</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prizeList:[
        {name:"现在订阅便会得到首单九折优惠"},
        {name:"季中优惠：指定正价货品75折 - 使用优惠代码'MIDSEASON25'购物。"},
        {name:"消费满 CNY 2300 包邮。不适用于部分产品。"}
      ],
      activeIndex:0,
    }
  },
  computed: {
    top() {
      return -this.activeIndex *14 + 'px'
    }
  },
  mounted() {
    setInterval(_ => {
      if( this.activeIndex < this.prizeList.length -1) {
        this.activeIndex ++
      } else {
        this.activeIndex = 0
      }
    },3000)
  },
}
</script>

<style scope>
.news-ticker{
  background: #f5f5f5;
  border-color: #f5f5f5;
  border-style: solid;
  border-width: 1px 0;
  color: #000;
}
.news-ticker.news-ticker-solid{
  background: #f5f5f5;
  border-color: #f5f5f5;
  border-style: solid;
  border-width: 8px 0;
  color: #000;
}
.scroll-wrap{
  width: 100%;
  height: 14px;
  overflow: hidden;
}
.scroll-content{
  position: relative;
  transition: top 0.5s;
}
ul{
  margin-top: 1px;
}
li{
  line-height: 14px;
  font-size: 4px;
}
.scroll-content>li{
  text-align: center;
}
</style>