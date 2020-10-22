<template>
<<<<<<< HEAD
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
=======
	<div>
		<div class="hid">
			<div class="headerone">
				<a href="http://localhost:8080/man" title="首页">首页</a>
				<a class="spann" title="中古逸品">中古逸品</a>
			</div>
			<div class="headertwo">
				<h1>新到货品</h1>
			</div>
			<div class="headerthree row container">
				<div class="col-lg-4 col-lg-offset-4">
					<ul class="liactive">
						<li>&larr;上一页</li>
						<li><a>1</a></li>
						<li><a>2</a></li>
						<li>下一页&rarr;</li>
					</ul>
				</div>
				<div class="select col-lg-4 text-right">
					<select>
						<option value="48 PER PAGE">48 PER PAGE</option>
						<option value="72 PER PAGE">72 PER PAGE</option>
						<option value="96 PER PAGE">96 PER PAGE</option>
						<option value="120 PER PAGE">120 PER PAGE</option>
					</select>
					<select>
						<option value="最新置顶">最新置顶</option>
						<option value="价格由低至高">价格由低至高</option>
						<option value="价格由高至低">价格由高至低</option>
					</select>
				</div>
			</div>

		</div>
		<div class="d-md-block mdblock hidden-lg">
			<h2>新到货品</h2>
			<div class="container row mdselect">
				<select  class="col-md-4 col-xs-4" >
					<option value="筛选">筛选</option>
					<option value="品牌">品牌</option>
					<option value="尺寸">尺寸</option>
					<option value="颜色">颜色</option>
					<option value="价格">价格 </option>
				</select>
				<select   class="col-md-4 col-xs-4">
					<option value="每页显示的商品数量">每页显示的商品数量</option>
					<option value="48">48</option>
					<option value="72">72</option>
					<option value="96">96</option>
					<option value="120">120</option>
				</select>
				<select  class="col-md-4 col-xs-4">
					<option value="最新置顶">最新置顶</option>
					<option value="价格由低至高">价格由低至高</option>
					<option value="价格由高至低">价格由高至低</option>
				</select>
				<!-- <span class="spantext">最新置顶</span> -->
			</div>
		</div>

		<div class="container ">
			<div class="row">
				<!--				v-for="(item,index)in historyCloses" :key="index"-->
				<div >
					<div class="col-lg-3 hid">
						<el-collapse v-model="activeName" @change="handleChange">
							<el-collapse-item title="类别" name="1">
								<div>全部类别</div>
								<el-collapse-item title="饰品配饰" name="11" class="aa">
									<div>手袋</div>
									<div>银包</div>
									<div>生活家品</div>
								</el-collapse-item>
								<el-collapse-item title="服装" name="12" class="aa">
									<div>长裤</div>
									<div>牛仔裤</div>
									<div>T恤</div>
									<div>恤衫</div>
									<div>帽衫</div>
									<div>运动衫</div>
									<div>外套</div>
								</el-collapse-item>
								<el-collapse-item title="鞋履" name="13" class="aa">
									<div>运动鞋</div>
								</el-collapse-item>
							</el-collapse-item>
							<el-collapse-item title="品牌" name="2">
								<div>全部品牌</div>
								<div v-for="item in text1">{{item}}</div>
							</el-collapse-item>
							<el-collapse-item title="尺寸" name="3">

							</el-collapse-item>
							<el-collapse-item title="颜色" name="4">
								<div v-for="item in text2">
									<input type="checkbox" />
									<span>{{item}}</span>
								</div>
							</el-collapse-item>
							<el-collapse-item title="价格" name="3">
								<div v-for="item in text3">
									<input type="checkbox" />
									<span>{{item}}</span>
								</div>
							</el-collapse-item>
						</el-collapse>

					</div>
					<div class="col-lg-9 col-md-12">

						<div class="row rowfloat">
							<div class="col-sm-6 col-md-4 col-xs-12 col-lg-4 " v-for="(item,index) in newCloses" :key="index">
								<div class="thumbnail" id="imgtext" v-cloak>
									<img :src="item.img"   v-if="isshow" >
									<!--									@mouseenter="enter(index)"-->
									<!--									<img :src="item.src2" @mouseleave="leave(index)" v-else />-->
									<div class="caption">
										<p><a class="cur"> {{item.time}}</a></p>
										<p><a class="cur"> {{item.name}}</a></p>
										<p>
											<span>CNY{{item.state}}</span>
										</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {getHomeMultData} from "../../network/home";

	export default {
		name: "Times",
		data(){
			return{
				activeName: ['1'],
				text1:['424','BALENCIAGA','BAPE','COMME DES GARÇONS','HOMME','CONVERSE','FEAR OF GOD','FOG - FEAR OF GOD','JORDAN BRAND','JUNYA WATANABE','MASTERMIND JAPAN','MEDICOM TOY','NEIGHBORHOOD','NIKE','OFF-WHITE','ORIGINALFAKE','SUPREME','UNDERCOVER','VANS','VISVIM','WTAPS'],
				text2:['米色','黑色','蓝色','褐色','迷彩','绿色','灰色','彩色','橙色','紫色','红色','银色','白色','黄色'],
				text3:['CNY 501 - CNY 1,500',' CNY 1,501 - CNY 2,500','CNY 2,501 - CNY 3,500',' CNY 3,501 - CNY 4,500','CNY 5,001 或以上'],
				// text4:[
				// 	{src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fd4%2Fd1%2FJacket_2-1352b4c46aaf7a6310a57df8d639.jpg?q=60&w=460&fit=max&v=1",src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F56%2Fdc%2FJacket_1-d1725e1899778edfd292d38c8c80.jpg?q=60&w=460&fit=max&v=1",p1:'424',p2:'424 DENIM JACKET',p3:'3,764',p4:'美中古货品',isshow:true},
				// 	{src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fb2%2Ff8%2F2-fa9a3bc8dcce698b711ae0a11e31.jpg?q=60&w=460&fit=max&v=1",src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fba%2F96%2F1-06c08139f5e682bbce0925e7d353.jpg?q=60&w=460&fit=max&v=1",p1:'BALENCIAGA',p2:'BALENCIAGA LONG SLEEVE T-SHIRT',p3:'2,174',p4:'美中古货品',isshow:true},
				// 	{src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fb3%2Ffc%2FJacket_2-1c26d3606ea18ed94fffd054431e.jpg?q=60&w=460&fit=max&v=1",src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F56%2Fc2%2FJacket_1-8b6efe1a1db7cd8534d234a505be.jpg?q=60&w=460&fit=max&v=1",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'9,279',p4:'美中古货品',isshow:true},
				// 	{src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F78%2F5a%2FSupremexTheNorthFaceMetallicMountainParka_1-6672464eefdbe372c647b5924ee3.jpg?q=60&w=460&fit=max&v=1",src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fc8%2Ffd%2FSupremexTheNorthFaceMetallicMountainParka_2-a9b11c1ee1341dd27cce2fc0cd23.jpg?q=60&w=460&fit=max&v=1",p1:'SUPREME',p2:'SUPREME X THE NORTH FACE METALLIC MOUNTAIN PARKA',p3:'6,037',p4:'美中古货品',isshow:true},
				// 	{src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fcd%2F36%2FSupremeDuckCamoBoxLogohoodie_1-c18c95e1baf4214e61b240e58d14.jpg?q=60&w=460&fit=max&v=1",src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F7e%2Fc5%2FSupremeDuckCamoBoxLogohoodie_2-7724a045baa26ee91fbf654f65ea.jpg?q=60&w=460&fit=max&v=1",p1:'SUPREME',p2:'SUPREME X DUCK CAMO BOX LOGO HOODIE',p3:'6,037',p4:'美中古货品',isshow:true},
				// 	{src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F45%2F51%2FBapeHoodieGreenCamo_1-9c7ec895a5d2c7ecc53141b7e695.jpg?q=60&w=460&fit=max&v=1",src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F3c%2F1c%2FBapeHoodieGreenCamo_2-b181220d84605f34040ce8beb578.jpg?q=60&w=460&fit=max&v=1",p1:'BAPE',p2:'BAPE HOODIE GREEN CAMO',p3:'1,507',p4:'美中古货品',isshow:true},
				// 	{src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F5b%2Fa2%2FBapeHoodieBlackCamo_1-99a556d49a9a2e4bb6bd715fbce4.jpg?q=60&w=460&fit=max&v=1",src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F5b%2Fa2%2FBapeHoodieBlackCamo_1-99a556d49a9a2e4bb6bd715fbce4.jpg?q=60&w=460&fit=max&v=1",p1:'BAPE',p2:'BAPE HOODIE GREEN CAMO',p3:'9,279',p4:'美中古货品',isshow:true},
				// 	{src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F63%2F68%2FOff-WhiteWoolBomberJacket_1-dd53f5bb2da0b166897e7630267e.jpg?q=60&w=460&fit=max&v=1",src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F5b%2Fa2%2FBapeHoodieBlackCamo_1-99a556d49a9a2e4bb6bd715fbce4.jpg?q=60&w=460&fit=max&v=1",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	{src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fd6%2F68%2FCamo1-f9b24883e52d97fc1d8ea5fe7119.jpg?q=60&w=460&fit=max&v=1",src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F5b%2Fa2%2FBapeHoodieBlackCamo_1-99a556d49a9a2e4bb6bd715fbce4.jpg?q=60&w=460&fit=max&v=1",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	{src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fee%2Fe5%2F12-0d6137f2193fa449e68c4e35acad.jpg?q=60&w=460&fit=max&v=1",src2:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F5b%2Fa2%2FBapeHoodieBlackCamo_1-99a556d49a9a2e4bb6bd715fbce4.jpg?q=60&w=460&fit=max&v=1",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	// {src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F9e%2F50%2F21-67e0e9d9a55961a197c7001d9a0c.jpg?q=60&w=460&fit=max&v=1",src2:"",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	// {src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F0e%2F40%2F31-d029a70c3146aa24ce93067c0d13.jpg?q=60&w=460&fit=max&v=1",src2:"",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	// {src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F4c%2Fa5%2FShirt_1_1-2ec51b0418a3bcd3f9d5fae2b62b.jpg?q=60&w=460&fit=max&v=1",src2:"",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	// {src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fb4%2F53%2Fjacket_1_1-75e637cda5cb0a32d0ec1219e8fc.jpg?q=60&w=460&fit=max&v=1",src2:"",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	// {src:"https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fb6%2F35%2Fhoodie_1_1-b99345a16efda5a9145cc8845bd7.jpg?q=60&w=460&fit=max&v=1",src2:"",p1:'SUPREME',p2:'SUPREME X STONE ISLAND JACKET',p3:'CNY 9,279',p4:'美中古货品',isshow:true},
				// 	],
				isshow:true,
				current:9999,
				region:'',
				newCloses:[]
			}
		},
		created(){
			this.loadData();
		},
		methods: {
			handleChange(val) {
			},
			enter(index){
				this.text4[index].isshow=false

			},
			leave(index){
				this.text4[index].isshow=true

			},
			loadData(){
				getHomeMultData().then(res=>{
					this.newCloses = res.data.newcloses;
				})
			}
		},

	}
</script>

<style scoped="scoped">
	[v-cloak] {
		display: none;
	}

	@media (max-width:991px) {
		.hid{
			display: none;
		}
		.mdblock{
			display: block;
		}
	}
	@media (min-width:992px) {
		.mdblock{
			display: none;
		}
	}
	.row .hid{
		margin: 0rem;
		padding: 0rem;
	}
	.mdblock{
		margin: 0.16rem 0 ;
		text-align: center;
		width: 100%;
	}
	.mdselect{
		width: 100%;
		margin: 0;
	}
	.mdselect select{
		appearance: none;
		text-align-last: center;
		height: 0.35rem;
		border: none;
		outline: none;
		border-top: 0.01rem solid;
		border-bottom: 0.01rem solid;
		border-right: 0.01rem solid;
	}
	.mdselect select:last-child{
		border-right: none;
	}
	.spantext{
		display: flex;
		justify-content: center;
		position: absolute;
	}
	.headerone{
		margin: 0.3rem 0.3rem;
		display: inline-block;
	}
	.headerone a{
		color: #999;
		margin: 0px 0.02rem;
	}
	.headerone a:hover{
		color:black;
		cursor: pointer;
		text-decoration: none;
	}
	.headerone .spann::before{
		content: "\203a";
		display: inline-block;
		margin: 0 0.05rem;
		color: #7d7d7d;
	}
	.headertwo h1{
		text-align: center;
		font-weight: bolder;
	}
	.headerthree{
		margin-top: 0.2rem;
		width: 100%;
	}
	.liactive a{
		color: black;
	}
	.liactive a:hover{
		color: #CCCCCC;
		text-decoration:none
	}
	.liactive a:active{
		text-decoration:underline
	}
	.headerthree ul{
		display: flex;
		width: 1.6rem;
		margin: 0 auto;
		justify-content: space-between;
		list-style: none;
	}
	.select select{
		padding-left: 0.2rem;
		border: none;
		outline: none;
		height: 0.24rem;
	}
	.aa .el-collapse-item__header{
		border: none;
	}
	.aa .el-collapse-item__header i{
		margin-left: 0.1rem;
	}
	#imgtext{
		border: none;
		text-align: center;
	}
	#imgtext p{
		margin-top: 0.05rem;
		font-weight: 100;
	}
	#imgtext p span{
		margin-right: 0.1rem;
	}
	#imgtext p span:last-child{
		color: #ccc;
	}
	.rowfloat{
		display: flex;
		flex-wrap: wrap;
	}
	.cur{
		color: black;
		text-decoration: none;
	}
	.cur:hover{
		text-decoration: none;
		cursor: pointer;
		color: #ccc;
	}
>>>>>>> 88cfdfbb7125dfb22bfdf8323d7feb3a73b01cd8
</style>
