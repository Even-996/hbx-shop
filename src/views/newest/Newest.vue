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
        v-for="(item, index) in msg"
        :key="index"
      >
        <span
          v-show="!item.ishover && !item.url2"
          class="haveSellAll"
          @mouseenter="imageChange(index)"
          @mouseleave="imageLeaveChange(index)"
		  :md="6"
          :sm="12"
          :xs="12"
          >已售完</span
        >
        <img
          v-show="item.ishover || !item.url2"
          :src="item.url1"
          @mouseenter="imageChange(index)"
          @mouseleave="imageLeaveChange(index)"
        />
        <img
          v-show="!item.ishover && item.url2"
          :src="item.url2"
          @mouseenter="imageChange(index)"
          @mouseleave="imageLeaveChange(index)"
        /><br />
        <br />
        <div class="title" 
		@mouseenter="imageChange(index)"
        @mouseleave="imageLeaveChange(index)"
		>
			<span>{{ item.msg1 }}</span>
			<router-link to="#">{{ item.msg2 }}</router-link>
			<router-link to="#" v-if="item.msg3">{{ item.msg3 }}</router-link>
			<span v-else class="nosell_all">售罄</span>
			<router-link v-show="!item.ishover" to="#">{{ item.msg4 }}</router-link>
		</div>
      </el-col>
    </el-row>
    <br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "Newest",
  data() {
    return {
      msg: [
        {
          url1:
            "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
          url2:
            "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F2a%2Fa5%2FShoes_2_1-98828f66be68923cbc070ba1f451.jpg?q=60&w=460&fit=max&v=1",
          msg1: "OCT 21, 2020 / 09:00 EST",
          msg2: "Asics x GmbH Gel-quantum 360 6",
          msg3: "选购女装",
          msg4: "快速查看",
          ishover: true,
        },
        {
          url1:
            "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
          url2: "",
          msg1: "OCT 21, 2020 / 09:00 EST",
          msg2: "Asics x GmbH Gel-quantum 360 6",
          msg3: "",
          msg4: "快速查看",
          ishover: true,
        },
        {
          url1:
            "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
          url2:
            "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F2a%2Fa5%2FShoes_2_1-98828f66be68923cbc070ba1f451.jpg?q=60&w=460&fit=max&v=1",
          msg1: "OCT 21, 2020 / 09:00 EST",
          msg2: "Asics x GmbH Gel-quantum 360 6",
          msg3: "选购女装",
          msg4: "快速查看",
          ishover: true,
        },
        {
          url1:
            "https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9f%2F58%2FShoes_1_0_Drops-18a88146700a02f6b4cc81aa4791.jpg?q=60&w=460&fit=max&v=1",
          url2: "",
          msg1: "OCT 21, 2020 / 09:00 EST",
          msg2: "Asics x GmbH Gel-quantum 360 6",
          msg3: "",
          msg4: "快速查看",
          ishover: true,
        },
	  ],
    };
  },
  methods: {
    imageChange(index) {
      this.msg[index].ishover = false;
    },
    imageLeaveChange(index) {
      this.msg[index].ishover = true;
    },
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
</style>
