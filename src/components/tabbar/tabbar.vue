<template>
  <div class="index">
    <el-row>
      <div class="herder_content">
        <div style="padding-left: 10px; display: flex; align-items: center">
          <i
            class="el-icon-s-fold hidden-sm-and-up show_goods"
            @click="drawer = true"
          ></i>
          <ul class="hidden-xs-only" v-for="(item, index) in arr1" :key="index">
            <li
              :class="item.styles"
              @mouseover="showGoods(index)"
              @mouseleave="notShowGoods()"
            >
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
            <ul
              class="show_choose_goods"
              v-show="ishow == index&&index!=4"
              @mouseover="showGoods(index)"
              @mouseleave="notShowGoods()"
            >
            <ul v-for="(item1, index1) in good[index]" :key="index1" class="choose_goods_show">
                <h4>{{item1.title}}</h4>
                <li v-for="(item2, index2) in item1.goods" :key="index2">
                    <router-link to="#">{{item2}}</router-link>
                </li>
            </ul>
            </ul>
          </ul>
        </div>
        <div class="title_hbx">
          <router-link to="/home"
            ><img
              src="https://static.hbx.com/bundles/hypebeastweb/images/hbx-logo.svg?1603102056"
          /></router-link>
        </div>
        <div>
          <ul>
            <li>搜寻</li>
            <li class="hidden-xs-only">
              <router-link to="/login">登入</router-link>
            </li>
            <li class="hidden-md-and-down">
              <router-link to="/help">帮助</router-link>
            </li>
            <li><router-link to="/bags">您的购物袋(0)</router-link></li>
            <li class="hidden-xs-only img_cna">
              <router-link to="/bags"
                ><img
                  src="https://static.hbx.com/bundles/hypebeastweb/images/flags/cn.jpg?1603090404"
                />CNY</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false"
        append-to-body
        direction="ltr"
        size="70%"
      >
        <div class="drop_title">
          <img
            src="https://static.hbx.com/bundles/hypebeastweb/images/hbx-logo.svg?1603102056"
          />
          <i class="el-icon-close btn_close" @click="closeGoods()"></i>
        </div>
        <div class="drop_clothse">
          <ul>
            <li>男装<i class="el-icon-arrow-right drop_clothse_right"></i></li>
            <li>女装<i class="el-icon-arrow-right drop_clothse_right"></i></li>
            <li>套装<i class="el-icon-arrow-right drop_clothse_right"></i></li>
          </ul>
        </div>
        <div class="drop_other_goods">
          <ul>
            <li>中古逸品</li>
            <li>最新发售</li>
            <li>折扣商品</li>
            <li>HBX手机APP</li>
            <li>登入</li>
            <li>帮助</li>
            <li>关于HBX</li>
            <li>简体中文</li>
            <li>CHINA中国</li>
            <li>CNY</li>
            <li>A K</li>
            <li>2020 HYPEEBAST LIMITED 版权所有</li>
          </ul>
        </div>
      </el-drawer>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
    data() {
        return {
            drawer: false,
             count: 0,
             ishow:null,
             arr1:[
                 {
                     path:'/man',
                     name:'男装',
                     styles:''
                 },
                 {
                     path:'/women',
                     name:'女装',
                     styles:''
                 },
                 {
                     path:'/kid',
                     name:'童装',
                     styles:''
                 },
                 {
                     path:'/times',
                     name:'中古逸品',
                     styles:'hidden-md-and-down'
                 },
                 {
                     path:'/newest',
                     name:'最新发售',
                     styles:'hidden-md-and-down'
                 },
                 {
                     path:'/discount',
                     name:'折扣商品',
                     styles:''
                 },
                 {
                     path:'',
                     name:'更多',
                     styles:'hidden-lg-and-up'
                 }
             ],
             good:[
                 [
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新裤款','最新球鞋','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'服装',
                     goods:['服装','所有服装','外套','T裇','恤衫','运动衫','帽衫','长裤','牛仔裤','短裤','编织衫','POLO 衫','无袖外套']
                 },
                 {
                     title:'饰品',
                     goods:['饰品','配件','所有饰品配件','帽子','手袋','手表','银包','袜子','生活家品','玩具','鞋履护理','电子产品']
                 },
                 {
                     title:'鞋类',
                     goods:['新到货品','新到货品最','帽子','手袋','皮带','首饰','玩具','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新裤款','最新球鞋','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 }
             ],
             [
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新裤款','最新球鞋','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'服装',
                     goods:['服装','所有服装','外套','T裇','恤衫','运动衫','帽衫','长裤','牛仔裤','短裤','编织衫','POLO 衫','无袖外套']
                 },
                 {
                     title:'饰品',
                     goods:['饰品','配件','所有饰品配件','帽子','手袋','皮带','首饰','手表','银包','袜子','生活家品','玩具','鞋履护理','电子产品']
                 },
                 {
                     title:'鞋类',
                     goods:['新到货品','新到货品最','帽子','手袋','皮带','首饰','手表','银包','袜子','生活家品','玩具','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新裤款','最新球鞋','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 }
             ],
             [
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新裤款','最新球鞋','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'服装',
                     goods:['服装','所有服装','外套','T裇','恤衫','运动衫','帽衫','长裤','牛仔裤','短裤','编织衫','POLO 衫','无袖外套']
                 },
                 {
                     title:'饰品',
                     goods:['饰品','配件','所有饰品配件','帽子','手表','银包','袜子','生活家品','玩具','鞋履护理','电子产品']
                 }
             ],
             [
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新裤款','最新球鞋','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'服装',
                     goods:['服装','所有服装','外套','T裇','恤衫','运动衫','帽衫','长裤','牛仔裤','短裤','编织衫','POLO 衫','无袖外套']
                 },
                 {
                     title:'饰品',
                     goods:['饰品','配件','所有饰品配件','帽子','手表','银包','袜子','生活家品','玩具','鞋履护理','电子产品']
                 },
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新裤款','最新球鞋','精选T裇','HBX 户外风格']
                 }
             ],
             [],
             [
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','生活家品','玩具','鞋履护理','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'服装',
                     goods:['服装','所有服装','生活家品','玩具','鞋履护理','帽衫','长裤','牛仔裤','短裤','编织衫','POLO 衫','无袖外套']
                 },
                 {
                     title:'饰品',
                     goods:['饰品','配件','所有饰品配件','帽子','袜子','生活家品','玩具','鞋履护理','电子产品']
                 },
                 {
                     title:'鞋类',
                     goods:['新到货品','最新裤款','最新球鞋','最新袋款','首饰','手表','银包','袜子','生活家品','玩具','最新袋款','最新饰品配件','精选T裇','HBX 户外风格']
                 },
                 {
                     title:'新到货品',
                     goods:['新到货品','新到货品最','新T恤','最新帽衫','最新饰品配件','精选T裇','HBX 户外风格']
                 }
             ]
             ]
        }
    },
    methods: {
        closeGoods(){
            this.drawer=false
        },
        load () {
        this.count += 2
        },
        showGoods(index){
            this.ishow=index
        },
        notShowGoods(){
            this.ishow=null
        }
    },
}
</script>

<style scoped>
a {
  color: black;
}
.herder_content {
  width: 100%;
  height: 65px;
  line-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
}
.herder_content ul li {
  float: left;
  padding: 0 15px;
  font-weight: 600;
  font-size: 14px;
  list-style-type: none;
}
.title_hbx {
  display: flex;
  align-items: center;
  line-height: 0;
}
@media (max-width: 768px) {
  .title_hbx {
    position: absolute;
    left: 42%;
  }
}
.title_hbx img {
  width: 70px;
}
.show_goods {
  font-size: 25px;
}
.drop_title {
  height: 65px;
  border-bottom: 1px solid #000;
  font-size: 20px;
  line-height: 65px;
}
.drop_title img {
  font-size: 12px;
}
.btn_close {
  float: right;
}
.drop_clothse {
  border-bottom: 1px solid #000;
}
.drop_clothse ul li {
  font-size: 15px;
  padding: 15px 5px;
  font-weight: 600;
}
.drop_clothse_right {
  float: right;
}
.drop_other_goods ul li {
  font-size: 15px;
  padding: 15px 5px;
  font-weight: 600;
}
.drop_other_goods ul li:nth-last-child(1) {
  font-size: 8px;
}
ul {
  margin-bottom: 0 !important;
}
.img_cna img {
  width: 30px;
  position: relative;
  top: 4px;
  right: 5px;
}
.el-drawer.ltr {
  overflow: scroll;
}
img {
  vertical-align: baseline !important;
}
.show_choose_goods {
  position: absolute;
  top: 65px;
  border: 1px solid black;
  border-top: none ;
  background-color: white;
  z-index: 1;
  margin-left: -10px;
  padding: 10px 20px 20px 30px;
}
.show_choose_goods::before {
  position: absolute;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid rgb(15, 15, 15);
  margin-left: -8px;
  margin-top: -19px;
}
.choose_goods_show h4{
    font-weight: 800;
}
.choose_goods_show{
    float: left;
    padding: 0 20px;
    font-weight: 800;
}
.choose_goods_show li{
    clear: both;
    padding: 0!important;
    line-height: 30px;
    font-size: 8px;
}
</style>