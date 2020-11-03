<template>
<div class="newest">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="header">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>最新发售</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="new_pay">最新发售</h1>
    <el-row :gutter="20" class="content">
      <el-col
        :md="6"
        :sm="12"
        :xs="12"
        class="content_goods"
        v-for="(item, index) in newcloses"
        :key="index"
      >
        <img
          v-show="item.isshow || !item.num"
          :src="item.img1"
          @mouseenter=" imageChange(item)"
          @mouseleave="imageLeaveChange(item) "
          @click="transToDetail(item)"

        />
        <img
          v-show="!item.isshow && item.img2 && item.num"
          :src="item.img2"
          @mouseenter="imageChange(item)"
          @mouseleave="imageLeaveChange(item)"
          @click="transToDetail(item)"
        /><br />
        <br />
        <div class="title"
		    @mouseenter="imageChange(item)"
        @mouseleave="imageLeaveChange(item)"
		    >
			<span>{{ item.time }}</span>
			<router-link to="#" @click="transToDetail(item)">{{ item.name }}</router-link>
			<span @click="transToDetail(item)" class="nosell_all" v-if="!item.num">{{ item.state }}</span>
<!--            v-show="!item.isshow"-->
			<router-link @click="transToDetail(item)" v-if="item.num" to="#">{{item.state}}</router-link>
            <router-link to="#" @click="transToDetail(item)"  v-if="!item.isshow" class="lookQuit">快速查看</router-link>
        </div>
      </el-col>
    </el-row>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
    import {getHomeMultData} from "../../network/home";

    export default {
  name: "Newest",
  data() {
    return {
      msg: [
        // {
        //   url1:
        //     "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
        //   url2:
        //     "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F2a%2Fa5%2FShoes_2_1-98828f66be68923cbc070ba1f451.jpg?q=60&w=460&fit=max&v=1",
        //   msg1: "OCT 21, 2020 / 09:00 EST",
        //   msg2: "Asics x GmbH Gel-quantum 360 6",
        //   msg3: "选购女装",
        //   msg4: "快速查看",
        //   ishover: true,
        // },
        // {
        //   url1:
        //     "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
        //   url2: "",
        //   msg1: "OCT 21, 2020 / 09:00 EST",
        //   msg2: "Asics x GmbH Gel-quantum 360 6",
        //   msg3: "",
        //   msg4: "快速查看",
        //   ishover: true,
        // },
        // {
        //   url1:
        //     "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
        //   url2:
        //     "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F2a%2Fa5%2FShoes_2_1-98828f66be68923cbc070ba1f451.jpg?q=60&w=460&fit=max&v=1",
        //   msg1: "OCT 21, 2020 / 09:00 EST",
        //   msg2: "Asics x GmbH Gel-quantum 360 6",
        //   msg3: "选购女装",
        //   msg4: "快速查看",
        //   ishover: true,
        // },
        // {
        //   url1:
        //     "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
        //   url2: "",
        //   msg1: "OCT 21, 2020 / 09:00 EST",
        //   msg2: "Asics x GmbH Gel-quantum 360 6",
        //   msg3: "",
        //   msg4: "快速查看",
        //   ishover: true,
        // },
      ],
      newcloses:[]
    };
  },
        created(){
            this.loadData();
        },
  methods: {
    imageChange(item) {
       // if(item.num)
       item.isshow = 0;
    },
    imageLeaveChange(item) {
        // if(item.num)
        item.isshow = 1;
    },
      loadData(){
        getHomeMultData().then(res=>{
            this.newcloses = res.data.newcloses;
        }).catch(error=>{
        })
      },
      transToDetail(item){
        if(item.num){
            this.$router.push({ path:"/detail-have",query: item});
        }else {
            this.$router.push({path:"/detail-sold",query:item});
        }
      }
  },
};
</script>

<style scoped>
.newest {
  width: 97%;
  margin: 0 auto;
  margin-top: 30px;
}
.new_pay {
  width: 100%;
  text-align: center;
  font-weight: 600;
}
.content img {
  width: 100%;
  height: 100%;
}
.content_goods {
  text-align: center;
    padding-bottom: .5rem;
}
.content_goods a {
  display: block;
  margin-top: 10px;
  color: black;
  font-size: 16px;
  font-weight: 600;
}
.nosell_all {
  color: red !important;
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
}
.haveSellAll {
  display: block;
  position: absolute;
  background-color: rgba(194, 194, 192, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.title{
  width: 100%;
  height: 160px;
  margin-top: -20px;
  padding-top: 20px;
}
.lookQuit{
  color: rgb(163, 111, 120)!important;
}
</style>
