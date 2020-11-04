<template>
<div class="hove_goods">
    <el-row class="hidden-sm-and-down">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="header">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>女装</el-breadcrumb-item>
    <el-breadcrumb-item>鞋履</el-breadcrumb-item>
    <el-breadcrumb-item>运动鞋</el-breadcrumb-item>
    <el-breadcrumb-item>{{itemClose.subname}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" class="content">
    <el-col :span="3" :offset="1" class="content_left" >
        <ul v-for="(item,index) in img1" :key="index" ref="imgleft">
            <li @click="changeImg(index)" ><img v-if="item" :src="item"></li>
        </ul>
    </el-col>
    <el-col :span="10" class="content_index" >
        <img :src="img1[ischoose]" ref="box" @mouseover="moveStart()" @mouseleave="moveEnnd()">
        <div class="s_box" ref="sbox"  @mouseover="moveStart()" @mouseleave="moveEnnd()"></div>
    </el-col>
    <el-col :span="10" class="content_left">
        <div class="b_box" ref="big">
				<img :src="img1[ischoose]" class="big-img" ref="bimg">
		</div>
        <div class="content_box">
            <router-link to="#"><h5>{{itemClose.subname}}</h5></router-link>
            <h1>{{itemClose.name}}</h1>
            <span>USD 179</span>
            <div class="content_box_4">
                <span>4 Interest-Free Installments available by  </span>
                <i class="el-icon-warning"></i>
            </div>
            <div class="content_box_size" ref="lbox">
                <span>尺寸</span>
                <div class="content_box_size_label">
                    <div>
                        <el-radio-group v-model="radio1">
                        <el-radio-button :label="0" disabled>
                            <span>US W 5</span><br>
                            <span>售罄</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" fill="#000000">
                        <el-radio-button :label="1">
                            <span>US W 5.5</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" fill="#000000">
                        <el-radio-button :label="2">
                            <span>US W 6</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" fill="#000000">
                        <el-radio-button :label="3">
                            <span>US W 6.5</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" fill="#000000">
                        <el-radio-button :label="4">
                            <span>US W 7</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" fill="#000000">
                        <el-radio-button :label="5">
                            <span>US W 7.5</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" fill="#000000">
                        <el-radio-button :label="6">
                            <span>US W 8</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" fill="#000000">
                        <el-radio-button :label="7">
                            <span>US W 8.5</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <el-radio-group v-model="radio1" >
                        <el-radio-button :label="8" disabled >
                            <span>US W 9</span><br>
                            <span>售罄</span>
                        </el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
            </div>
            <div class="num">
                <span>数量</span>
                <div class="num_change">
                    <span><el-button :disabled="itemClose.num==1" @click="changeNum('-')">-</el-button></span>
                    <input type="text" v-model="itemClose.num">
                    <span><el-button :disabled="itemClose.num==10" @click="changeNum('+')">+</el-button></span>
                </div>
            </div>
            <div class="add_car">
                <el-button class="add_car_btn" v-show="!radio1" :disabled="!radio1">请选择一个尺码</el-button>
                <el-button v-show="radio1" :disabled="!radio1" @click="transToGoShop">加入到购物袋</el-button>
                <!-- <el-button :disabled="!radio1">前往付款</el-button> -->
            </div>
            <div class="footer">
                <div class="footer_day">
                    <span><i class="iconfont icon-30tiantuihuo"></i> 30 天退货</span>
                    <span><router-link to="#"><i class="iconfont icon-LQYyuanwangqingdan"></i>加到我的愿望清单 <i class="iconfont icon-dayuhao"></i></router-link></span>
                </div>
                <div class="share">
                    <span>分享</span>
                    <router-link to="#"><i class="iconfont icon-facebook"></i></router-link>
                    <router-link to="#"><i class="iconfont icon-Instagram"></i></router-link>
                    <router-link to="#"><i class="iconfont icon-twitter"></i></router-link>
                    <router-link to="#"><i class="iconfont icon-weibo"></i></router-link>
                </div>
            </div>
        </div>
    </el-col>
    </el-row>
    </el-row>
    <el-row class="hidden-md-and-up moblie">
        <div class="img_swiper">
            <template>
                <el-carousel indicator-position="outside" arrow="never" :autoplay="false">
                    <el-carousel-item v-for="(item,index) in img1" :key="index">
                    <img v-if="item" :src="item">
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <div class="title">
            <span>Converse</span>
            <h4>Converse x Feng Chen Wang Chuck 70 Hi 2 In 1</h4>
            <span class="usd_179">USD 179</span>
            <div class="free_4">
                <span>4 Interest-Free Installments available by<i class="el-icon-warning"></i></span>
            </div>
            <div class="choose_size">
                <span>尺寸</span><br><br>
                <el-select v-model="size" placeholder="请选择一个尺码">
                <el-option label="US W 5" value="US W 5" disabled></el-option>
                <el-option label="US W 5.5" value="US W 5.5"></el-option>
                <el-option label="US W 6" value="US W 6"></el-option>
                <el-option label="US W 6.5" value="US W 6.5"></el-option>
                <el-option label="US W 7" value="US W 7"></el-option>
                <el-option label="US W 7.5" value="US W 7.5"></el-option>
                <el-option label="US W 8" value="US W 8"></el-option>
                <el-option label="US W 8.5" value="US W 8.5"></el-option>
                <el-option label="US W 9" value="US W 9" disabled></el-option>
                </el-select>
            </div>
            <div class="choose_num">
                <span>数量</span><br><br>
                <el-select v-model="num" placeholder="请选择数量">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
                <el-option label="4" value="4"></el-option>
                <el-option label="5" value="5"></el-option>
                <el-option label="6" value="6"></el-option>
                <el-option label="7" value="7"></el-option>
                <el-option label="8" value="8"></el-option>
                <el-option label="9" value="9"></el-option>
                <el-option label="10" value="10"></el-option>
                </el-select>
            </div>
            <div class="choose_btn">
                <el-button class="no_choose" v-show="!size">请选择一个尺码</el-button>
                <el-button  v-show="size">加入到购物袋</el-button>
                <!-- <el-button :disabled="!radio1">前往付款</el-button> -->
            </div>
            <span class="hopes"><router-link to="#"><i class="iconfont icon-LQYyuanwangqingdan"></i> 加到我的愿望清单 <i class="iconfont icon-dayuhao"></i></router-link></span><br>
            <span><i class="iconfont icon-30tiantuihuo"></i> 30 天退货</span>
            <div class="share mobile_share">
                    <span>分享</span>
                    <router-link to="#"><i class="iconfont icon-facebook"></i></router-link>
                    <router-link to="#"><i class="iconfont icon-Instagram"></i></router-link>
                    <router-link to="#"><i class="iconfont icon-twitter"></i></router-link>
                    <router-link to="#"><i class="iconfont icon-weibo"></i></router-link>
            </div>
        </div>
    </el-row>
    <br><br><br>
    <detail-param></detail-param>
</div>
</template>
 
<script>
    import DetailParam from './DetailParam'
    export  default {
        components:{
            DetailParam,
            itemClose: {}
        },
        data() {
            return {
                ischoose:0,
                radio1:null,
                num:1,
                size:null,
                // img:[
                //     'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F8f%2F62%2FShoes_1_1-5e218961fb0b4b96d3e3fd4a8fc7.jpg?fit=max&q=90&w=640&h=832&v=1',
                //     'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F34%2F33%2FShoes_1_2-9658a1bd34aac459a81ad8cae337.jpg?fit=max&q=90&w=640&h=832&v=1',
                //     'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fb1%2F4c%2FShoes_1_3-104748bfc713393365c4139b77c9.jpg?fit=max&q=90&w=640&h=832&v=1',
                //     'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F8c%2F4f%2FShoes_1_4-b880453e250ce26310fb989eadd5.jpg?fit=max&q=90&w=640&h=832&v=1',
                //     'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F6e%2F46%2FShoes_1_5-1e794014c84d2d8cf5b1b5f018ee.jpg?fit=max&q=90&w=640&h=832&v=1',
                //     'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fd8%2Fdc%2FShoes_1_6-8f053d862d1ab9bb238f989d44b3.jpg?fit=max&q=90&w=640&h=832&v=1'
                //     ],
                //     img1:[
                //         'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F8f%2F62%2FShoes_1_1-5e218961fb0b4b96d3e3fd4a8fc7.jpg?fit=max&q=90&w=640&h=832&v=1',
                //         'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F34%2F33%2FShoes_1_2-9658a1bd34aac459a81ad8cae337.jpg?fit=max&q=90&w=640&h=832&v=1',
                //         'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fb1%2F4c%2FShoes_1_3-104748bfc713393365c4139b77c9.jpg?fit=max&q=90&w=640&h=832&v=1',
                //         'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F8c%2F4f%2FShoes_1_4-b880453e250ce26310fb989eadd5.jpg?fit=max&q=90&w=640&h=832&v=1',
                //         'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F6e%2F46%2FShoes_1_5-1e794014c84d2d8cf5b1b5f018ee.jpg?fit=max&q=90&w=640&h=832&v=1',
                //         'https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fd8%2Fdc%2FShoes_1_6-8f053d862d1ab9bb238f989d44b3.jpg?fit=max&q=90&w=640&h=832&v=1'
                //     ]
                img1: [],
                itemClose:{}
            }
        },
        created(){
            this.itemClose = this.$route.query;
            this.img1.push(this.itemClose.img1,this.itemClose.img2,this.itemClose.img3,this.itemClose.img4,
                this.itemClose.img5,this.itemClose.img6);
        },
        methods: {
            changeImg(index){
                this.ischoose=index
            },
            moveStart(){
                var box=this.$refs['box']
                var sbox=this.$refs['sbox']
                var big=this.$refs['big']
                var bimg=this.$refs['bimg']
                var imgleft=this.$refs['imgleft']
                var lbox=this.$refs['lbox']
                lbox.style.display='none'
                sbox.style.display='block'
                big.style.display='block'
                document.addEventListener('mousemove',function(e){
                    let x=e.pageX - box.offsetLeft-3
                    let y=e.pageY - box.offsetTop-137
                    var max=box.offsetWidth-sbox.offsetWidth
                    var maxy=box.offsetHeight-sbox.offsetHeight
                    var mx=x-sbox.offsetWidth/2
                    var my=y-sbox.offsetHeight/2
                    if(mx<=0){
                        mx=0
                    }
                    if(mx>=max){
                        mx=max
                    }
                    if(my<=0){
                        my=0
                    }
                    if(my>=maxy){
                        my=maxy
                    }
                    sbox.style.marginLeft=mx+'px'
                    sbox.style.marginTop=my-620+'px'
                     var bmax=bimg.offsetWidth - big.offsetWidth
                      let bigX=mx * bmax /max
                      let bigY=my*bmax/maxy
                      bimg.style.left = - bigX +'px';
			          bimg.style.top = - bigY +'px';
                })
            },
            moveEnnd(){
                var box=this.$refs['box']
                var sbox=this.$refs['sbox']
                var big=this.$refs['big']
                var lbox=this.$refs['lbox']
                lbox.style.display='block'
                sbox.style.display='none'
                big.style.display='none'
            },
            changeNum(way){
                if(way == '-' && this.itemClose.num > 1)
                    this.itemClose.num --;
                if(way == '+')
                    this.itemClose.num ++;

            },
            transToGoShop(){
                this.$router.push({path:'/bags',query:this.itemClose});
            }
        },

    }

</script>

<style scoped>
.app{
    width: 100%;
}
.hove_goods{
    width: 97%;
    margin: 20px auto;
}
.content{
    margin-top: 40px;
}
.content_left ul li{
    list-style-type: none;
    height:100px;
    width: 100%;
}
.content_left ul li img{
    height: 100%;
    width: 60%;
}
.content_index{
    height: 620px;
}
.content_index img{
    width: 100%;
    height: 100%;
}
.s_box{
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: lightgoldenrodyellow;
    opacity: 0.5;
    cursor: move;
    margin-top: -620px;
    display: none;
}
.b_box{
    position: absolute;
    top: -1px;
    left: 60%;
    height: 620px;
    width: 470px;
    overflow: hidden;
    display: none;
}
.b_box img{
    position: absolute;
    width: 150%;
    height: 150%;
    left: -30px;
}
.content_box{
    max-width: 480px;
    padding-left: 20px;
}
.content_box>h1{
    font-size: 0.3rem;
    font-weight: 600;
    line-height: 50px;
}
.content_box>span{
    font-weight: 600;
}
.content_box_4{
    margin-top: 20px;
    color: grey;
}
.content_box_size{
    margin-top: 20px;
}
.content_box_size>span{
    font-weight: 600;
}
.content_box_size_label div{
    float: left;
    padding-right: 5px;
    margin-top: 5px;
}
.num{
    clear: both;
    padding-top: 20px;
}
.num span{
    font-weight: 600;
}
.num span button{
    width: 40px;
    height: 50px;
    background-color: white;
    outline: none;
    border: 1px solid black;
    border-radius: 0!important;
    text-align: center;
}
.num input{
    width: 83px;
    height: 50px;
    margin-top: 5px;
    background-color:white;
    outline: none;
    border: 1px solid black;
    border-left: none;
    border-right: none;
    text-align: center;
}
.add_car button{
    margin-top: 20px;
    width: 100%;
    height: 46px;
    background-color: black;
    color: white;
    margin-left: 0;
    outline: none;
    border: none;
    border-radius: 0;
}
.add_car_btn{
    background-color: gray!important;
}
.footer_day{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    color: gray;
}
.footer_day span a{
    color: gray;
}
.share{
    margin-top: 5px;
}
.share span{
    font-weight: 600;
}
.share a{
    padding-left: 5px;
    color: black;
}
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2162674_ycazo73rxtb.eot?t=1603849039899'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2162674_ycazo73rxtb.eot?t=1603849039899#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQwAAsAAAAACFAAAAPiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqEBIM+ATYCJAMQCwoABCAFhG0HVRs1B1FUbkpkPxIyt2s0QygSKk06BW+ry93St/EQvz++M/fOw/fCrk6bhCSmAraNG6IrSmMXQntDedYs5DmpKzKYpIg2nR7kdo9SkvMTerrdAFH/GXBN/hLPA3q3/0VSpUXavy5wgKMEGmhkimy6AeKGsSsvYj2BUUuMZXeopKoJuEpGt0DcNrAEcE05ZI029EJbMjYn4zEnfblTHuGR//v4ZUe4UjSV0ffI1WIa5H319XmdOajLdVk9ng9sEhWbAEmcLw2c4xCmNnEwqiznaAuglUL5Gp+eDzOm7DtYZ6Cnzx+vEC3DOg6ZXenKV7YS2wJa+LbnUKXAyxjTo8NTwAeGfRGeN6Qyw9c3vBMaGSoOhLADs2yLA2nGedO1M4OQdYr3qVfQcbuS7HNWG+K0Q5206VqS95kb0U5bb3r4LLke1WZbG3jsVYmqtni0NHlsvj5qv5LssURLHLB1HFBTbr2KW2sNsoYc1UoVpdm9udV9yw3etieYuaLazdJyNa05PVNTmi8rwFdZ9Npdkxe/QnvPVLKR1YO9qs1Sc1S1qanlgmpnk4r272/2f+TXsmE9mJPxe+TfvH8/A5IHf9v9LKvIf1FAllqFz8IPzy50WFSyi+wdon1ptxPtoubk8t3LTzZvnx04OfTY+USp0I6u8ckvaeGauJL+qgkPDkdvyzxT5u9hY8b5/K+NWvnflKMNG914+9bWnpS+ImA65pdXWMc1cAVkDwg/tXIzti45P9aYlT3O8Ppk46fsrQkP7675Wtvq94wzlOzHfXly79BinzmXdO2DiwuGt5LDWu023vdzsD6MH96hr9HkV5p/1b42vyilMEVoHQQkeKP6vnAADNSr5TtDmepQ9HvbWfhmYXOvT9Yv17FrrPjy9net7xhoFwL6uw4GPzMnUwAYzlRuMJyZss627Wmflo4ZPFEwakYYUGSGj2PYZytqQm92jKKzGFVvFZHMJjTG7EKrtxejNiqdPGYmmYPIEWwwDyBMcxTFpHeopnlMJPMBjTl+ojUtHDDqVATMOWZNGNwLZURgRENyEjRQosBYbuweaBsQa+EIOWnw2RYkmw1RGK+Ly2ZLkYDkMQaYx7MJGDOQkUUeloDNEMeJUJJFI6KwTo+xlBEby5S9SEeJPHB3kAwhYAgNIk0CGVBEAsYtj7nnvt8AYVlwCHJNUUXaApGZGZqH4unEtSBKrUKromu5xGw8VgIMY0AMmYgHlQAfwpkpESSVtzJCKJiOvkdCkiEWlWLaWnXz2/kn3ACjjLtllKiR0eguE5MsekL0TIzDBkLAFoPeIvpX1bdPshDCBMvL9hvsJE0IAAAAAA==') format('woff2'),
  url('//at.alicdn.com/t/font_2162674_ycazo73rxtb.woff?t=1603849039899') format('woff'),
  url('//at.alicdn.com/t/font_2162674_ycazo73rxtb.ttf?t=1603849039899') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2162674_ycazo73rxtb.svg?t=1603849039899#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-dayuhao:before {
  content: "\e601";
}

.icon-30tiantuihuo:before {
  content: "\e6b0";
}

.icon-LQYyuanwangqingdan:before {
  content: "\e600";
}
.hidden-md-and-up{
    width: 100%;
}
.img_swiper{
    height: 350px;
}
.img_swiper img{
    width: 100%;
    height: 100%;
    z-index: -1;
}
.moblie{
    width: 95%;
    margin: 0 auto;
}
.choose_size span{
    font-weight: 600;
}
.choose_size select{
    width: 100%;
    outline: none;
    height: 40px;
}
.el-select-dropdown__item{
    font-size: 20px;
    font-weight: 600;
}
.el-select {
    width: 100%!important;
    border: 1px solid black!important;
}
.el-input{
    border: 1px solid black!important;
}
.choose_num{
    margin-top: 10px;
}
.choose_btn{
    margin-top: 20px;
}
.choose_btn button{
    width: 100%;
    background-color: black;
    margin-left: 0;
}
.no_choose{
    background-color: gray!important;
    outline: none;
    border: none;
    border-radius: 0;
    color: black;
}
.hopes{
    display: inline-block;
    margin-top: 10px;
}
.hopes a{
    color: gray;
}
.mobile_share{
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid rgb(230, 224, 224);
    border-bottom: 1px solid rgb(161, 158, 158);
}
</style>
<style>
.el-radio-button:first-child:last-child .el-radio-button__inner{
    border-radius:0;
    height: 42px;
    font-size: 12px;
    border: 1px solid #000;
    font-weight: 600;
}
.el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover{
    border: 1px solid black;
}
.el-carousel__indicators--outside button{
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.title h4{
    font-weight: 600;
}
.tabbar{
    z-index: 3;
}
.usd_179{
    font-weight: 600;
}
.free_4{
    margin: 20px;
    text-align: center;
    color: gray;
}
.el-button{
  padding: 12px 15px;
}
</style>
