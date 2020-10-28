<template>
	<div class="index">
		<el-row>
			<div class="herder_content">
				<div class="all_goods_show" style="padding-left: 10px; display: flex; align-items: center">
					<i class="el-icon-s-fold hidden-sm-and-up show_goods" @click="drawer = true"></i>
					<ul class="hidden-xs-only " v-for="(item, index) in arr1" :key="index">
						<li :class="item.styles" @mouseover="showGoods(index)" @mouseleave="notShowGoods()">
							<router-link :to="item.path">{{ item.name }}</router-link>
						</li>
						<ul class="show_choose_goods" v-show="ishow == index&&index!=4" @mouseover="showGoods(index)" @mouseleave="notShowGoods()">
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
					<router-link to="/home"><img src="https://static.hbx.com/bundles/hypebeastweb/images/hbx-logo.svg?1603102056" /></router-link>
				</div>
				<div>
					<ul>
						<li class="searchs" @click="showSearch()">
							搜寻
							<div class="search_btn" v-show="isSearch">
								<input placeholder="搜寻" ref="seafor" utocomplete="off" v-model="search">
								<img src="../../assets/img/no.png" @click="del()">
							</div>
						</li>
						<li class="hidden-xs-only">
							<router-link to="/login">登入</router-link>
						</li>
						<li class="hidden-md-and-down" @mouseover="isHelpShow=true" @mouseleave="isHelpShow=false">
							<router-link to="/help">帮助</router-link>
							<div class="hetp_box" v-show="isHelpShow">
								<ul>
									<li>
										<router-link to="#">常见问题</router-link>
									</li>
									<li>
										<router-link to="#">送货细则</router-link>
									</li>
									<li>
										<router-link to="#">退货</router-link>
									</li>
									<li>
										<router-link to="#">在线支付</router-link>
									</li>
									<li>
										<router-link to="#">联系我们</router-link>
									</li>
									<li>
										<router-link to="#">订单状态</router-link>
									</li>
								</ul>
							</div>
						</li>
						<li @mouseleave="isbagShow=false" @mouseover="isbagShow=true" class="hidden-sm-and-down">
							<router-link to="/bags">您的购物袋(0)</router-link>
							<div class="show_bags" v-show="isbagShow">
								<span>你的购物袋中暂时未有货品。</span><br>
								<router-link to="#">新到货品</router-link>
							</div>
						</li>
						<li @mouseleave="isbagShow=false" @mouseover="isbagShow=true" class="hidden-md-and-up">
							<router-link to="/bags">您的购物袋(0)</router-link>
						</li>
						<li class="hidden-xs-only img_cna" @mouseover="iscnyShow=true" @mouseleave="iscnyShow=false">
							<router-link to="/bags"><img src="https://static.hbx.com/bundles/hypebeastweb/images/flags/cn.jpg?1603090404" />CNY</router-link>
							<div class="cny" v-show="iscnyShow">
								<div class="cny_top">
									<h4 style="font-weight:600">语言</h4>
									<ul>
										<li>
											<router-link to="#">ENGLISH</router-link>
										</li>
										<li>
											<router-link to="#">繁體中文</router-link>
										</li>
										<li>
											<router-link to="#">简体中文</router-link>
										</li>
										<li>
											<router-link to="#">한국어</router-link>
										</li>
									</ul>
								</div><br>
								<div class="cny_bottom">
									<h4 style="font-weight:600">运送目的地 / 地区</h4>
									<ul ref="langues">
										<li v-for="item in language" class="lii">
											<span class="imgs" :class="item.class"></span>
											<span class="spantext"> {{item.text}}</span>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" append-to-body direction="ltr" size="70%">
				<div class="drop_title">
					<img src="https://static.hbx.com/bundles/hypebeastweb/images/hbx-logo.svg?1603102056" />
					<i class="el-icon-close btn_close" @click="closeGoods()"></i>
				</div>
				<div class="drop_clothse">
					<ul>
						<router-link to="/man"><li :class="isactived==1?'isactive':''" @click="changeActive(1)">男装<i class="el-icon-arrow-right drop_clothse_right"></i></li></router-link>
						<router-link to="/women"><li :class="isactived==2?'isactive':''" @click="changeActive(2)">女装<i class="el-icon-arrow-right drop_clothse_right"></i></li></router-link>
						<router-link to="/kid"><li :class="isactived==3?'isactive':''" @click="changeActive(3)">童装<i class="el-icon-arrow-right drop_clothse_right"></i></li></router-link>
					</ul>
				</div>
				<div class="drop_other_goods">
					<ul>
						<router-link to="/times"><li :class="isactived==4?'isactive':''" @click="changeActive(4)">中古逸品</li></router-link>
						<router-link to="/newest"><li :class="isactived==5?'isactive':''" @click="changeActive(5)">最新发售</li></router-link>
						<router-link to="/discount"><li :class="isactived==6?'isactive':''" @click="changeActive(6)">折扣商品</li></router-link>
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
				ishow: null,
				isHelpShow: false,
				isbagShow: false,
				iscnyShow: false,
				isSearch: false,
				search: '',
				num: 0,
				num1: 0,
				isactived:null,
				arr1: [{
						path: '/man',
						name: '男装',
						styles: ''
					},
					{
						path: '/women',
						name: '女装',
						styles: ''
					},
					{
						path: '/kid',
						name: '童装',
						styles: ''
					},
					{
						path: '/times',
						name: '中古逸品',
						styles: 'hidden-md-and-down'
					},
					{
						path: '/newest',
						name: '最新发售',
						styles: 'hidden-md-and-down'
					},
					{
						path: '/discount',
						name: '折扣商品',
						styles: ''
					},
					{
						path: '',
						name: '更多',
						styles: 'hidden-lg-and-up'
					}
				],
				good: [
					[{
							title: '新到货品',
							goods: ['新到货品', '最新T恤', '最新帽衫', '最新裤款', '最新球鞋', '最新贷款', '最新饰品配件', '精选T裇', 'HBX 户外风格']
						},
						{
							title: '新到货品',
							goods: ['新到货品', '最新T裇', '最新帽衫', '最新裤款', '最新球鞋', '最新袋款', '最新饰品配件', '精选T恤', 'HBX 户外风格']
						},
						{
							title: '服装',
							goods: ['所有服装', '外套', 'T恤', '恤衫', '运动衫', '帽衫', '长裤', '牛仔裤', '短裤', '编织衫', 'POLO衫','无袖外套']
						},
						{
							title: '饰品配件',
							goods: ['所有饰品配件', '帽子', '手袋', '皮带', '首饰','眼镜','手表','银包','袜子','生活家品','玩具','鞋履护理','电子产品','印刊','围巾','内裤']
						},
						{
							title: '鞋类产品',
							goods: ['全部鞋类', '运动鞋', '靴', '凉鞋', '休闲鞋']
						},
						{
							title: '品牌',
							goods: ['所有品牌', 'ADIDAS ORIGINALS', 'ACNE STUDIOS', 'BOTTEGA VENETA', 'BURBERRY', 'CONVERSE', 'HERON PRESTON', 'HUMAN MADE', 'LOEWE', 'MAISON MARGIELA',
								'MASTERMIND WORLD','MONCLER','NIKE','OFF-WHITE','PALM ANGELS']
						},
					],
					[{
							title: '新到货品',
							goods: ['新到货品', '新到货品最', '新T恤', '最新帽衫', '最新裤款', '最新球鞋', '最新袋款', '最新饰品配件', '精选T裇', 'HBX 户外风格']
						},
						{
							title: '服装',
							goods: ['服装', '所有服装', '外套', 'T裇', '恤衫', '运动衫', '帽衫', '长裤', '牛仔裤', '短裤', '编织衫', 'POLO 衫', '无袖外套']
						},
						{
							title: '饰品配件',
							goods: ['所有饰品配件', '帽子', '手袋', '皮带', '首饰','眼镜','手表','银包','袜子','生活家品','玩具','鞋履护理','电子产品','印刊','围巾','内裤']
						},
						{
						    title: '手袋',
							goods:['全部手袋','斜挎包','腰包','背包','托特包','单肩包','手拿包']
						},
						{
							title: '鞋类',
							goods: ['全部鞋类', '运动鞋', '靴', '凉鞋', '休闲鞋']
						},
						{
							title: '品牌',
							goods: ['所有品牌', 'ADIDAS ORIGINALS', 'ACNE STUDIOS', 'BOTTEGA VENETA', 'BURBERRY', 'CONVERSE', 'HERON PRESTON', 'HUMAN MADE', 'LOEWE', 'MAISON MARGIELA',
							'MASTERMIND WORLD','MONCLER','NIKE','OFF-WHITE','PALM ANGELS']
						},

					],
					[{
							title: '男孩',
							goods: ['全部货品', '服装', '饰品配件', '鞋类产品' ]
						},
						{
							title: '女孩',
							goods: ['全部货品', '服装', '饰品配件', '鞋类产品']
						},

					],
					[{
							title: '新到货品',
							goods: ['新到货品', '新到货品最', '新T恤', '最新帽衫', '最新裤款', '最新球鞋', '最新袋款', '最新饰品配件', '精选T裇', 'HBX 户外风格']
						},
						{
							title: '服装',
							goods: ['服装', '所有服装', '外套', 'T裇', '恤衫', '运动衫', '帽衫', '长裤', '牛仔裤', '短裤', '编织衫', 'POLO 衫', '无袖外套']
						},
						{
							title: '饰品',
							goods: ['饰品', '配件', '所有饰品配件', '帽子', '手表', '银包', '袜子', '生活家品', '玩具', '鞋履护理', '电子产品']
						},
						{
							title: '新到货品',
							goods: ['新到货品', '新到货品最', '新T恤', '最新帽衫', '最新裤款', '最新球鞋', '精选T裇', 'HBX 户外风格']
						}
					],
					[],
					[{
							title: '男装',
							goods: ['男士折扣商品', 'T恤', '长裤', '帽衫', '外套', '运动鞋', '手袋', '七折', '六折','五折','四折']
						},
						{
							title: '女装',
							goods: ['女士折扣商品', '服装', 'T恤', '外套', '饰品配件', '鞋履', '手袋', '七折', '六折', '五折', '四折', '三折']
						},
						{
							title: '童装',
							goods: [ 'T恤', '外套', '饰品配件', '鞋履', '七折', '六折', '五折', '四折', '三折']
						},


					],
					[{
						title: '',
						goods: ['日志', '中古逸品']
					}, ]
				],
				language:[
					{class:'s1',text:'UNITED STATES'},
					{class:'s2',text:'AUSTRALIA'},
					{class:'s3',text:'CANADA'},
					{class:'s4',text:'CHINA'},
					{class:'s5',text:'SOUYTH KOREA'},
					{class:'s6',text:'HONG KONG'},
					{class:'s7',text:'JAPAN'},
					{class:'s8',text:'SINGAPORE'},
					{class:'s9',text:' TAIWAN'},
					{class:'s10',text:' UNITED KINGDOM'},
				]
			}
		},
		created() {
			document.addEventListener('click', e => {
				const searchs = document.getElementsByClassName("searchs")[0]
				const app = document.getElementsByClassName("app")[0]
				if (searchs.contains(e.target)) {
					this.$refs.seafor.focus()
					this.isSearch = true
				} else {
					this.isSearch = false
				}
			})
		},
		methods: {
			closeGoods() {
				this.drawer = false
			},
			load() {
				this.count += 2
			},
			showGoods(index) {
				this.ishow = index
			},
			notShowGoods() {
				this.ishow = null
			},
			showSearch() {
				var _this = this
				setTimeout(() => {
					_this.$refs.seafor.focus()
				}, 0);
			},
			del() {
				this.search = ''
			},
			changeActive(index){
				this.isactived=index
			}
		},
	}
</script>

<style scoped>
	a {
		color: black;
	}
	a:focus, a:hover {
    text-decoration: none;
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
		padding: 0 0.12rem;
		font-weight: 600;
		font-size: 14px;
		list-style-type: none;
	}

	.title_hbx {
		line-height: 100%;
		position: absolute;
		left: 47.5%;
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
		padding: 15px;
	}

	.btn_close {
		float: right;
	}

	.drop_clothse {
		border-bottom: 1px solid #000;
	}

	.drop_clothse ul li {
		font-size: 15px;
		padding: 15px ;
		font-weight: 600;
	}
	.drop_clothse ul a li{
		color: #000;
	}
	.drop_clothse_right {
		float: right;
	}

	.drop_other_goods ul li {
		font-size: 15px;
		padding: 15px ;
		font-weight: 600;
		
	}
	.drop_other_goods ul a li{
		font-size: 14px!important;
		font-weight: 600;
		color: #000;
		outline: none;
	}
	.drop_other_goods ul a {
		text-decoration: none;
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
		border-top: none;
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

	.choose_goods_show h4 {
		font-weight: 800;
	}

	.choose_goods_show {
		float: left;
		padding: 0 20px;
		font-weight: 800;
	}

	.choose_goods_show li {
		clear: both;
		padding: 0 !important;
		line-height: 30px;
		font-size: 8px;

	}

	.choose_goods_show li a {
		color: rgb(121, 120, 120)
	}

	.choose_goods_show li a:hover {
		color: pink;
	}

	.all_goods_show>ul:nth-last-child(1) ul li {
		width: 100%;
		text-align: center;
	}

	.all_goods_show>ul:nth-last-child(1) ul li a {
		color: #000;
		padding-left: 13px;
	}

	.all_goods_show>ul:nth-last-child(1) ul {
		margin-left: -30px;
	}

	.all_goods_show>ul:nth-last-child(1) ul::before {
		display: none;
	}

	.all_goods_show>ul:nth-last-child(1) ul ul::after {
		position: absolute;
		content: "";
		display: block;
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 7px solid rgb(15, 15, 15);
		margin-left: 28px;
		margin-top: -29px;
	}

	.hetp_box {
		position: absolute;
		width: 200px;
		border: 1px solid #000;
		border-top: none;
		margin-left: -80px;
		padding-bottom: 10px;
		z-index: 1;
		background-color: white;
	}

	.hetp_box ul li {
		clear: both;
		padding: 0;
		font-size: 12px;
		line-height: 30px;
		margin-left: 73px;
	}

	.hetp_box ul li a {
		color: rgb(121, 119, 116);
	}

	.hetp_box ul li a:hover {
		color: pink;
	}

	.hetp_box ul li:nth-of-type(3) {
		margin-left: 84px;
	}

	.hetp_box::before {
		position: absolute;
		content: "";
		display: block;
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 7px solid rgb(15, 15, 15);
		margin-top: -8px;
		margin-left: 85px;
	}

	.show_bags {
		position: absolute;
		width: 400px;
		border: 1px solid black;
		border-top: none;
		right: 90px;
		text-align: center;
		background-color: white;
		z-index: 1;
	}

	.show_bags span {
		font-size: 14px;
		font-weight: 700;
	}

	.show_bags a {
		padding: 17px 120px;
		background-color: #000;
		color: white;
		font-size: 16px;
		text-decoration: none;
	}

	.show_bags::before {
		position: absolute;
		content: "";
		display: block;
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 7px solid rgb(15, 15, 15);
		margin-top: -8px;
		margin-left: 350px;
	}

	.cny {
		width: 400px;
		border: 1px solid black;
		border-top: none;
		position: absolute;
		right: 0;
		background-color: white;
		z-index: 1;
		padding-left: 20px;
	}

	.cny::before {
		position: absolute;
		content: "";
		display: block;
		width: 0;
		height: 0;
		right: 15px;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 7px solid rgb(15, 15, 15);
		top: -8px;
		z-index: 2;
	}

	.cny_top ul li {
		padding: 0;
		padding-right: 100px;
		font-weight: 400;
		font-size: 12px;
		line-height: 30px;
	}

	.search_btn {
		width: 298px;
		height: 38px;
		border: 1px solid #000;
		border-top: none;
		position: absolute;
		right: 200px;
		overflow: hidden;
		z-index: 1;
		background-color: white;
	}

	@media (max-width: 1079px) {
		.search_btn {
			position: absolute;
			right: 150px;
			overflow: hidden;
			z-index: 1;
		}
	}

	@media (max-width: 691px) {
		.search_btn {
			position: absolute;
			left: 0;
			width: 100%;
			height: 40px;
			background-color: white;
			overflow: hidden;
			z-index: 1;
			border: none;
			border-bottom: 1px solid #000;
		}

		.search_btn input {
			overflow: hidden;
			width: 88% !important;
		}

		.search_btn img {
			left: 90% !important;
			margin-top: 6px;
		}
	}

	.searchs {
		cursor: pointer;
	}

	.search_btn input {
		position: absolute;
		top: 20px;
		font-weight: 16px;
		padding-left: 15px;
		width: 88%;
		height: 100%;
		margin-top: -20px;
		border: none;
		outline: none;
		overflow: hidden;
	}

	.search_btn img {
		position: absolute;
		width: 0.3rem;
		left: 260px;
		top: 0.02rem;
	}


    .lii{
		width: 50%;
		position: relative;
		white-space: nowrap;
		height: 0.3rem;
		line-height: 0.3rem;
		margin-bottom: 8px;
	 }
	.cny_bottom .lii .imgs {
		position: absolute;
		width: 0.28rem;
		height: 0.17rem;
		border: 0.01rem solid gainsboro;
		top: 25%;
		background-image:url(../../assets/img/sprite.png);
		background-repeat: no-repeat;
	}
	.spantext{
		position: absolute;
		left: 28%;
		font-weight: 100;
		font-size: 11px;
	}
	.spantext:hover{
		color: #0077AA;
	}
	.s1{
		background-position: -198px -342px;
	}
	.s2{
		background-position: -56px -364px;
	}
	.s3{
		background-position: -28px -364px;
	}
	.s4{
		background-position: 0 -364px;
	}
	.s5{
		background-position: -254px -342px;
	}
	.s6{
		background-position: -306px -244px;
	}
	.s7{
		background-position: -282px -342px;
	}
	.s8{
		background-position: -84px -364px;
	}
	.s9{
		background-position: -226px -342px;
	}
	.s10{
		background-position: -310px -342px;
	}
	.isactive{
		color: pink!important;
	}
</style>
<style>
	.el-drawer.ltr {
		overflow: scroll;
	}
	.el-drawer:focus {
    outline: none;
   } 
   .el-drawer.ltr :focus {
    outline: none;
   } 
</style>
