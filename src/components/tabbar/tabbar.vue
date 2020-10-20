<template>
  <div class="index">
          <el-row>
              <div class="herder_content">
                  <div style="padding-left: 10px;display: flex;align-items: center;">
                      <i class="el-icon-s-fold hidden-sm-and-up show_goods"  @click="drawer = true"></i>
                      <ul class="hidden-xs-only">
                          <li><router-link to="/man">男装</router-link></li>
                          <li><router-link to="/women">女装</router-link></li>
                          <li><router-link to="/kid">童装</router-link></li>
                          <li class="hidden-md-and-down"><router-link to="/times">中古逸品</router-link></li>
                          <li class="hidden-md-and-down"><router-link to="/newest">最新发售</router-link></li>
                          <li><router-link to="/discount">折扣商品</router-link></li>
                          <li class="hidden-lg-and-up">更多</li>
                      </ul>
                  </div>
                  <div class="title_hbx"><router-link to="/home"><img src="https://static.hbx.com/bundles/hypebeastweb/images/hbx-logo.svg?1603102056"></router-link></div>
                  <div>
                      <ul>
                          <li>搜寻</li>
                          <li class="hidden-xs-only"><router-link to="/login">登入</router-link></li>
                          <li class="hidden-md-and-down"><router-link to="/help">帮助</router-link></li>
                          <li><router-link to="/bags">您的购物袋(0)</router-link></li>
                          <li class="hidden-xs-only img_cna"><router-link to="/bags"><img src="https://static.hbx.com/bundles/hypebeastweb/images/flags/cn.jpg?1603090404">CNY</router-link></li>
                      </ul>
                  </div>
              </div>
              <el-drawer
                title="我是标题"
                :visible.sync="drawer"
                :with-header="false"
                append-to-body
                direction="ltr"
                size="70%">
                <div class="drop_title">
                    <img src="https://static.hbx.com/bundles/hypebeastweb/images/hbx-logo.svg?1603102056">
                    <i class="el-icon-close btn_close" @click="closeGoods()"></i>
                </div>
                <div class="drop_clothse">
                    <ul>
                        <li>男装<i class="el-icon-arrow-right drop_clothse_right" ></i></li>
                        <li>女装<i class="el-icon-arrow-right drop_clothse_right" ></i></li>
                        <li>套装<i class="el-icon-arrow-right drop_clothse_right" ></i></li>
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
                    <li> A K</li>
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
             count: 0
        }
    },
    methods: {
        closeGoods(){
            this.drawer=false
        },
        load () {
        this.count += 2
      }
    },
}
</script>

<style scoped>
a{
    color: black;
}
.herder_content{
    width: 100%;
    height: 65px;
    line-height: 65px;
    display: flex;
    justify-content: space-between;
	align-items: center;
    border-bottom: 1px solid #000;
}
.herder_content ul li{
    float: left;
    padding: 0 15px;
    font-weight: 600;
    font-size: 14px;
	list-style-type: none;
}
.title_hbx{
    display: flex;
    align-items: center;
    line-height: 0;
}
@media (max-width: 768px) {
	.title_hbx{
		position: absolute;
		left: 42%;
	}
}
.title_hbx img{
	width: 70px;
}
.show_goods{
    font-size: 25px;
}
.drop_title{
    height: 65px;
    border-bottom: 1px solid #000;
    font-size: 20px;
    line-height:65px;
}
.drop_title img{
    font-size: 12px;
}
.btn_close{
    float: right;
}
.drop_clothse {
    border-bottom: 1px solid #000;
}
.drop_clothse ul li{
    font-size: 15px;
    padding: 15px 5px;
    font-weight: 600;
}
.drop_clothse_right{
    float: right;
}
.drop_other_goods ul li{
    font-size: 15px;
    padding: 15px 5px;
    font-weight: 600;
}
.drop_other_goods ul li:nth-last-child(1){
    font-size: 8px;
}
ul{
	margin-bottom: 0 !important;
}
.img_cna img{
    width: 30px;
    position: relative;
    top: 4px;
    right: 5px;
}
.el-drawer.ltr{
    overflow: scroll;
}
img{
	vertical-align: baseline !important;
}
</style>