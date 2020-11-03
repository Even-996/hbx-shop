<template>
<div>
  <News />
  <div class="container">
    <div class="site-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">
          <a href="" class="a2">首页</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="" class="a2">男装</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="" class="a2">鞋履</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="" class="a2">运动鞋</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="" class="a2">{{itemClose.subname}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sold-out-container ">
      <div class="product-wrapper">
        <h2 class="sold-out-header">此商品已经售罄</h2>
        <div class="container-lg">
          <div class="row">
            <div id="product-gallery" class="col-md-7">
              <div class="gallery-carousel flickity-enabled is-draggable">
                <div class="flickity-viewport">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="carousel-cell is-selected">
                          <img class="img-fluid loading" :src="itemClose.img2" alt="">
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="carousel-cell is-selected">
                          <img class="img-fluid loading" :src="itemClose.img1" alt="">
                        </div>
                      </div>
                      <div class="swiper-slide" v-if="itemClose.img3">
                        <div class="carousel-cell is-selected">
                          <img class="img-fluid loading" :src="itemClose.img3" alt="">
                        </div>
                      </div>
                      <div class="swiper-slide" v-if="itemClose.img4">
                        <div class="carousel-cell is-selected">
                          <img class="img-fluid loading" :src="itemClose.img4" alt="">
                        </div>
                      </div>
                      <div class="swiper-slide" v-if="itemClose.img5">
                        <div class="carousel-cell is-selected">
                          <img class="img-fluid loading" :src="itemClose.img5" alt="">
                        </div>
                      </div>
                      <div class="swiper-slide" v-if="itemClose.img6">
                        <div class="carousel-cell is-selected">
                          <img class="img-fluid loading" :src="itemClose.img6" alt="">
                        </div>
                      </div>
<!--                      <div class="swiper-slide">Slide 3</div>-->
<!--                      <div class="swiper-slide">Slide 4</div>-->
<!--                      <div class="swiper-slide">Slide 5</div>-->
<!--                      <div class="swiper-slide">Slide 6</div>-->
                    </div>
                    <!-- Add Pagination -->
                    <!-- <div class="swiper-pagination"></div> -->
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-button-prev" slot="button-next"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="product-summary" class="col-md-5">
              <div id="product-summary-content-wrapper">
                <div id="product-summary-content">
                  <div class="info product-name-price-container">
                    <h1 class="brand-name"><a href="" class="d-block">{{itemClose.subname}}</a></h1>
                    <h2 class="name">{{itemClose.name}}</h2>
                    <div class="offers">
                      <span class="price">
                        <span class="regular-price">{{itemClose.size}}</span>
                        <small class="text-muted">
                          <span class="separator">/</span>
                          售价 CNY {{itemClose.price}}
                        </small>
                      </span>
                      <link href="http://schema.org/InStock">
                    </div>
                  </div>
                  <p class="sold-out-msg">抱歉，此商品没有存货</p>
                  <div id="shop-links">
                    <a href="" class="a1">选购 {{itemClose.subname}}</a>
                    <a href="" class="a1">立即选购</a>
                  </div>
                  <hr>
                  <div class="share-wishlist-container">
                    <div class="wishlist">
                      <div class="wishlist-wrapper">
                        <button class="wishlist-btn">
                          <a href="" >
                            <span class="sprite sprite-fav-star-hollow"></span>
                            <span class="text">加到我的愿望清单</span>
                            <span class="sprite sprite-dropdown-arrow"></span>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="social-shares">
                    <ul class="list-inline">
                      <li class="list-inline-item">分享</li>
                      <li class="list-inline-item"><a href=""><i class="iconfont icon-xinfeng icons"></i></a></li>
                      <li class="list-inline-item"><a href=""><i class="iconfont icon-facebook icons"></i></a></li>
                      <li class="list-inline-item"><a href=""><i class="iconfont icon-twitter icons"></i></a></li>
                      <li class="list-inline-item"><a href=""><i class="iconfont icon-pinterest icons"></i></a></li>
                      <li class="list-inline-item"><a href=""><i class="iconfont icon-google icons"></i></a></li>
                      <li class="list-inline-item"><a href=""><i class="iconfont icon-tumblr icons"></i></a></li>
                    </ul>
                  </div>
                  <button type="button" class="btn btn-link product-details-toggle" >
                    <span>查看商品细节</span>
                    <svg viewBox="0 0 100 100" width="10">
                      <path d="M 10,50 L 50,95 L 55,90 L 20,50  L 55,10 L 50,5 Z" class="arrow">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DetailParam />
</div>
  
</template>

<script>
import Swiper from "swiper";
import News from "../../components/news"
import DetailParam from "./DetailParam"
export default {
  components:{
    News,
    DetailParam,
    itemClose:{}
  },
  mounted() {

    this.initSwiper();

  },
  created(){
    let item =  this.$route.query;
    this.itemClose = item;

    console.log(this.itemClose);
  },
  methods: {
    initSwiper:function () {
      setTimeout(() => {
        let mySwiper = new Swiper(".swiper-container", {
          slidesPerView: 2,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }, 200);
    },
  },
}
</script>

<style scoped>
@import url("../../../node_modules/swiper/dist/css/swiper.css");
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-button-prev {
  width: 0.36rem;
  height: 0.28rem;
  background: url("../../assets/img/l.png") no-repeat;
  background-size: 100% 100%;
}
.swiper-button-next {
  width: 0.36rem;
  height: 0.28rem;
  background: url("../../assets/img/r.png") no-repeat;
  background-size: 100% 100%;
}
*{
  box-sizing: border-box;
}
@media (min-width: 768px){
  .container-lg{
    width: 100%;
    /* padding-right: 30px;
    padding-left: 30px; */
    /* margin-right: auto;
    margin-left: auto; */
  }
  .col-md-7{
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-md-5{
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
}
@media (min-width: 1200px){
  .container{
    width: 100%;
  }
}
@media (min-width: 992px){
  .container-lg{
    max-width: 1200px;
  }
}
@media (max-width: 768px){
  .name{
  margin-top: -20px !important;
  font-size: .16rem; 
  text-align: center;
  } 
  .brand-name{
    text-align: center;
  }
  .offers{
    text-align: center;
  }
  .sold-out-msg{
    text-align: center;
  }
  #shop-links{
    text-align: center;
  }
  .share-wishlist-container{
    text-align: center;
  }
  .btn-link{
    display: block;
    width: 100%;
  }
  .carousel-cell{
    padding: 10px 0 !important;
  }
  .sold-out-container{
    margin: -60px 10px 0 !important;
  }
  .el-breadcrumb{
    display: none;
  }
}




.container{
  min-height: 650px;
}
.container {
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}
.site-breadcrumb{
  min-height: 20px;
  margin: 30px 0;
}
.sold-out-container{
  margin: 0 30px 35px;
  border: 1px solid #f0f0f0;
}
.product-wrapper{
  padding-bottom: 35px;
}
.sold-out-container .product-wrapper .sold-out-header{
  margin: 0 0 30px;
  padding: 15px 0;
  background-color: #f0f0f0;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}
h2{
  text-transform: uppercase;
  /* font-size: 2rem; */
  color: #000;
  margin-bottom: .5rem;
  font-weight: 700;
  line-height: 1.2em;
  margin-top: 0;
  margin-bottom: .2rem;
}
.name{
  margin-top: -40px ;
}
.container-lg{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-12{
  flex: 0 0 100%;
  max-width: 100%;
}
.col-md-7{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.carousel-cell{
  width: 100%;
  padding: 0 5px;
}
img{
  width: 100%;
  height: auto;
}
.gallery-carousel{
  padding: 0 25px;
}
.col-12,.col-md-5{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
#product-summary-content-wrapper{
  position: -webkit-sticky;
  position: sticky;
  top: 85px;
}
.product-name-price-container{
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 10px;
  font-size: 12px;
  color: #999;
}
.d-block{
  display: block!important;
}
a,a:hover{
  text-decoration: none;
  color:#999;
}
a{
  color:#000;
  background-color: transparent;
  font-weight: 400 !important;
  font-size: .11rem;
}
.a2{
color: #999;
}
.a2:hover{
  color: #000;
}
.btn:hover{
  color:#999;
  fill:#999
}
.btn{
  outline:none;
}
/* svg:hover{
  fill: #999;
} */

.brand-name{
  font-size: 14px;
  font-weight: 400;
}
h1{
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-bottom: .5rem;
  font-weight: 700;
  line-height: 1.2em;
  margin-top: 0;
  margin-bottom: .5rem;
}
.offers{
  margin: 0 0 10px;
  font-size: 12px;
  color: #999;
}
.regular-price{
  font-size: 14px;
  font-weight: 700;
  color: #000;
}
.text-muted{
  color: #999!important;
}
small{
  font-size: 80%;
  font-weight: 400;
}
.separator{
  margin: 0 5px;
}
link{
  display: none;
}
.sold-out-msg{
  font-size: 17px;
  color: #999;
  margin-bottom: 20px;
}
p{
  margin-top: 0;
  margin-bottom: 1rem;
}
#shop-links{
  margin-bottom: 15px;
}
#shop-links a{
  display: inline-block;
  margin-right: 30px;
  padding-bottom: 5px;
  position: relative;
}
.a1,.a1:hover{
  text-decoration: none;
  border-bottom: 1px solid #999;
}
.a1{
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid #000;
  color: #000;
  background-color: transparent;
}
.share-wishlist-container{
  margin-bottom: 20px;
}
#wishlist{
  display: inline-block;
  vertical-align: middle;
}
.wishlist-wrapper{
  display: inline-block;
  position: relative;
}
.wishlist-btn{
  padding: 0;
  background: transparent;
  border: none;
}
.sprite{
  margin: 4px;
}
.sprite{
  vertical-align: middle;
  display: inline-block;
}
.sprite-fav-star-hollow{
  background-image:url('../../assets/img/sprite.png');
  background-position: -110px -342px;
  width: 20px;
  height: 20px;
}
.text{
  position: relative;
  top: 3px;
  font-size: 15px;
}
.sprite-dropdown-arrow{
  background-image: url('../../assets/img/sprite.png');
  background-position: -287px -56px;
  width: 9px;
  height: 5px;
}
#social-shares{
  margin-bottom: 20px;
  font-size: 14px;
  text-transform: uppercase;
}
.list-inline{
  display: flex;
  align-items: center;
  padding-left: 0;
  list-style: none;
}
.list-inline-item:first-child{
  font-weight: 700;
}
/* .list-inline-item:not(:last-child){
  margin-right: .5rem;
} */
.list-inline-item{
  display: inline-block;
}
/* .icons{
  width: 25px;
  height: 25px;
} */
.product-details-toggle{
  background: none;
  border: none;
  padding: 0;
}
.btn-link{
  font-weight: 400;
  color: #000;
  text-decoration: none;
}

.product-details-toggle svg{
  margin-top: -5px;
  margin-left: 5px;
  transform: rotate(-90deg);
}
svg{
  overflow: hidden;
}
.el-breadcrumb__inner a{
  font-weight: 0;
}
.el-breadcrumb{
  margin-left: 30px;
}
</style>
