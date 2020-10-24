<template>
  <div class="container-fluid">
    <div class="banner-row-title">选购男装</div>
    <div class="row" ref="row" :style="'height:' + allHeight + 'px'">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in saleCloses1" :key="index">
            <div class="body carousel-caption">
              <div class="carousel-cell is-selected">
                <div class="product-box catalog product">
                  <div class="product-thumbnail">
                    <a href=""  ref="imgH">

                      <img :src="item.img1" @mouseenter="enter(item)" v-if="item.isshow || item.num == 0"
                        alt=""
                      />
                      <img  v-if="!item.isshow && item.num"  :src="item.img2" @mouseleave="leave(item)" alt="" />
                    </a>
                    <div class="product-body" ref="font">
                      <a href="" class="brand">{{item.title}}</a>
                      <a href="" class="name"
                        >{{item.name}}</a
                      >
                      <div class="info" v-if="item.num">
                        <span class="sale-price">CNY {{item.price1}}</span>
                        <span class="regular-price on-sale">CNY {{item.price2}}</span>
                        <span class="hidden-xs">{{item.describ}}</span>
                      </div>
                      <div v-else>
                        <span>售罄</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
<!--          <div class="swiper-slide">-->
<!--            <div class="body carousel-caption">-->
<!--              <div class="carousel-cell is-selected">-->
<!--                <div class="product-box catalog product">-->
<!--                  <div class="product-thumbnail">-->
<!--                    <a href="">-->
<!--                      <img-->
<!--                        ref="img"-->
<!--                        src="https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F4a%2F74%2Fshirt_1_1-aa69c5a216d447105ec067be46e2.jpg?q=60&w=460&fit=max&v=1"-->
<!--                        alt=""-->
<!--                      />-->
<!--                      <img src="" alt="" />-->
<!--                    </a>-->
<!--                    <div class="product-body" ref="font">-->
<!--                      <a href="" class="brand">Sasquatchfabrix.</a>-->
<!--                      <a href="" class="name"-->
<!--                        >Oriental Tie Dye Open Collar Long Sleeve Shirt</a-->
<!--                      >-->
<!--                      <div class="info">-->
<!--                        <span class="sale-price">CNY 1,554</span>-->
<!--                        <span class="regular-price on-sale">CNY 3,885</span>-->
<!--                        <span class="hidden-xs">60% Off</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div></div>-->
<!--              <div></div>-->
<!--              <div></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="swiper-slide">Slide 3</div>-->
<!--          <div class="swiper-slide">Slide 4</div>-->
<!--          <div class="swiper-slide">Slide 5</div>-->
<!--          <div class="swiper-slide">Slide 6</div>-->
<!--          <div class="swiper-slide">Slide 7</div>-->
<!--          <div class="swiper-slide">Slide 8</div>-->
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- Add Arrows -->
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-next"></div>
      </div>
      <div style="height:500px;width:100%"></div>
    </div>
    <div class="banner-row-title">选购女装</div>
    <div class="row" ref="row" :style="'height:' + allHeight + 'px'">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in saleCloses2" :key="index">
            <div class="body carousel-caption">
              <div class="carousel-cell is-selected">
                <div class="product-box catalog product">
                  <div class="product-thumbnail">
                    <a href="" ref="imgH">
                      <img @mouseenter="enter(item)" v-if="item.isshow || item.num == 0"
                              :src="item.img1"
                        alt=""
                      />
                      <img v-if="!item.isshow && item.num"  :src="item.img2" @mouseleave="leave(item)" alt="" />
                    </a>
                    <div class="product-body" ref="font">
                      <a href="" class="brand">{{item.title}}</a>
                      <a href="" class="name"
                        >{{item.text}}</a
                      >
                      <div class="info" v-if="item.num">
                        <span class="sale-price">CNY {{item.price1}}</span>
                        <span class="regular-price on-sale">CNY {{item.price2}}</span>
                        <span class="hidden-xs">{{item.describ}}</span>
                      </div>
                      <div v-if="!item.num">
                        <span>售罄</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
<!--          <div class="swiper-slide">-->
<!--            <div class="body carousel-caption">-->
<!--              <div class="carousel-cell is-selected">-->
<!--                <div class="product-box catalog product">-->
<!--                  <div class="product-thumbnail">-->
<!--                    <a href="">-->
<!--                      <img-->
<!--                        ref="img"-->
<!--                        src="https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F4a%2F74%2Fshirt_1_1-aa69c5a216d447105ec067be46e2.jpg?q=60&w=460&fit=max&v=1"-->
<!--                        alt=""-->
<!--                      />-->
<!--                      <img src="" alt="" />-->
<!--                    </a>-->
<!--                    <div class="product-body" ref="font">-->
<!--                      <a href="" class="brand">Sasquatchfabrix.</a>-->
<!--                      <a href="" class="name"-->
<!--                        >Oriental Tie Dye Open Collar Long Sleeve Shirt</a-->
<!--                      >-->
<!--                      <div class="info">-->
<!--                        <span class="sale-price">CNY 1,554</span>-->
<!--                        <span class="regular-price on-sale">CNY 3,885</span>-->
<!--                        <span class="hidden-xs">60% Off</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div></div>-->
<!--              <div></div>-->
<!--              <div></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="swiper-slide">Slide 3</div>-->
<!--          <div class="swiper-slide">Slide 4</div>-->
<!--          <div class="swiper-slide">Slide 5</div>-->
<!--          <div class="swiper-slide">Slide 6</div>-->
<!--          <div class="swiper-slide">Slide 7</div>-->
<!--          <div class="swiper-slide">Slide 8</div>-->
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- Add Arrows -->
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-next"></div>
      </div>
      <div style="height:500px;width:100%"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import {getHomeMultData} from "../../network/home";

export default {
  data() {
    return {
      page: 4,
      screenWidth: document.body.clientWidth,
      mySwiper: "",
      imgHeight: 0,
      fontHeight: 0,
      allHeight: 800,
      saleCloses1:[],
      saleCloses2:[]
    };
  },
  computed: {},
  methods: {
    initSwiper() {
      this.mySwiper = new Swiper(".swiper-container", {
        slidesPerView: this.page,
        spaceBetween: 30,
        // slidesPerGroup: this.page,
        // loop: false,
        // loopFillGroupWithBlank: true,
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
    },
    loadData(){
      getHomeMultData().then(res=>{
        this.saleCloses1 = res.data.salecloses1;
        this.saleCloses2 = res.data.salecloses2;
      }).catch(error=>{

      })
    },
    enter(item){
      item.isshow = 0;
    },
    leave(item){
      item.isshow = 1;
    }
  },
  created() {
    if (this.screenWidth < 768) {
      this.page = 2;
    } else {
      this.page = 4;
    }
    this.initSwiper();
    this.loadData();


  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
    window.addEventListener("resize", () => {
      this.imgHeight = this.$refs.imgH.height;
      this.fontHeight = this.$refs.font.offsetHeight;
      this.allHeight = this.imgHeight + this.fontHeight + 40;
    });
    window.addEventListener('load',() => {
      this.imgHeight = this.$refs.imgH.height;
      this.fontHeight = this.$refs.font.offsetHeight;
      this.allHeight = this.imgHeight + this.fontHeight + 40;
    })
    
  },
  updated() {},
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        // setTimeout(function () {
        //   // console.log(that.screenWidth);
        //   that.timer = false;
        // }, 200);
      }
      if (this.screenWidth < 768) {
        this.page = 2;
        this.initSwiper();
      } else {
        this.page = 4;
        this.initSwiper();
      }
    },
  },

};
</script>

<style scoped>
@import url("../../../node_modules/swiper/dist/css/swiper.css");
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: 1px;
  width: 100%;
  height: auto !important;
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
.swiper-slide-active {
  height: auto !important;
}
* {
  box-sizing: border-box;
}
@media (min-width: 768px) {
  .container-fluid {
    width: 100%;
    padding-right: 5px;
    padding-left: 5px;
    margin-right: auto;
    margin-left: auto;
  }
}
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.banner-row-title {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: .32rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.row {
  /* height: 600px; */
  margin-right: -15px;
  margin-left: -30px;
}
.body {
  position: absolute;
  width: 100%;
  height: 100%;
}
.carousel {
  width: 100%;
}
.carousel-inner {
  height: 400px;
}
.carousel-cell {
  width: 100%;
  padding: 30px 0px;
}
.catalog.product {
  position: relative;
  margin-bottom: 25px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  padding-bottom: 60px;
}
.product-thumbnail {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin-bottom: 25px;
}
a {
  text-decoration: none;
  color: #000;
  background-color: transparent;
  height: 100%;
}
img {
  width: 100%;
  height: auto;

  /* margin: auto; */
}
.product-body {
  flex-grow: 1;
  width: 100%;
  font-size: .14re,;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 5px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.brand {
  width: 100%;
  margin: 10px 0 5px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
}
.name {
  margin: 0 0 15px;
  line-height: 1.1em;
  white-space: normal;
  display: block;
}
.info {
  font-size: 13px;
  font-weight: 700;
}
.info > span {
  padding: 0 2px;
  vertical-align: middle;
}
.on-sale.regular-price {
  color: #7d7d7d;
  text-decoration: line-through;
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
</style>