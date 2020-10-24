<template>
	<div>
		<div class="template">
			<div class="container" v-for="(item,index) in childCloses" :key="index">
				<div class="row flex">
					<div class="banner-image col-md-9 col-xs-12">
						<img :src="item.img" />
					</div>
					<div class="banner-body col-md-3 col-xs-12">
						<div class="banner-txt">
							<h3>{{item.title}}</h3>
							<h2>{{item.name}}</h2>
							<p>{{item.describ}}</p>

							<a>立即选购男童装</a>
							<a>立即选购女童装</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="kidtext">
			<div class="header">
			  <h2 class="heading">注目品牌</h2>
			  <a href="">全部品牌</a>
			</div>
			<ul class="ground count">
				<li v-for="item in text" class="bott">
					<span>{{item.title}}</span>
					<ul class="lii">
						<li v-for="tt in item.value"><a>{{tt}}</a></li>
					</ul>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import {getHomeMultData} from "../../network/home";

	export default {
		name: "Kid",
		data(){
			return{
				childCloses:[],
				text:[
					{title:'A',value:['ADIDAS ORIGINALS','AKID','ALPHA INDUSTRIES']},
					{title:'B',value:['BALEMENTS','BASH+SASS','BÉTON CIRÉ']},
					{title:'C',value:['CONVERSE','CP COMPANY']},
					{title:'F',value:['F.A.M.T.','FJALLRAVEN']},
					{title:'H',value:['HAPPY SOCKS','HAUS OF JR','HEY BABE']},
					{title:'L',value:['LITTLE GIANTS | GIANT SHORTIES']},
					{title:'M',value:['MADNESS','MINI RODINI','MSGM']},
					{title:'N',value:['NIKE','NUNUNU']},
					{title:'P',value:['POLO RALPH LAUREN']},
					{title:'R',value:['REEBOK']},
					{title:'S',value:['SONS + DAUGHTERS EYEWEAR','STONE ISLAND','SUICOKE']},
					{title:'T',value:['THRASHER']},
					{title:'U',value:['UNAUTHORIZED','UNDERCOVER']},
					{title:'V',value:['VANS','VERSACE']},
					{title:'W',value:['WOOD WOOD']},
				]
			}
		},
		created(){
		 this.loadData()
		},
		methods:{
			loadData(){
				getHomeMultData().then(res=>{
					this.childCloses = res.data.childcloses;

				}).catch(error=>{

				})
			}
		}
	}
</script>

<style scoped="scoped">
	.template{
		margin: 15px;
	}
	.banner-txt h2,p,a{
		font-weight: 700;
	}
	.banner-txt h2{
		font-size: .3rem;
		margin-top: 0;
	}
	.banner-txt h3{
		font-size: .14rem;
		font-weight: 400;
		margin-bottom: .05rem;
	}
	.banner-txt p{
		font-size: .16rem;
	}
	.banner-txt a{
		color: #000000;
		cursor: pointer;
		font-size: .16rem;
		line-height: .4rem;
	}
	.banner-txt a:last-child{
		margin-left: 10px;
	}
	.container img {
		width: 100%;
	}

	@media (min-width: 992px) {
		.container {
			width: 1400px !important;
		}
		.flex {
			display: flex;
			align-items: flex-end;
		}
	}
	/* 组件2样式 */
	.banner-txt2{
		margin: 0.2rem 0;
	}
	.banner-txt2 h2,p,a{
		font-weight: 700;
	}
	.banner-txt2 h2{
		font-size: .32rem;
		margin-top: 10px;
	}
	.banner-txt2 h3{
		font-size: .14rem;
		font-weight: 400;
	}
	.banner-txt2 p{
		font-size: 16px;
	}
	.banner-txt2 a{
		color: #000000;
		cursor: pointer;
		font-size: .16rem;
	}
	.banner-txt2 a:last-child{
		margin-left: .16rem;
	}
	.kidtext{
			border-top: 1px solid #000;
			padding-top: 0.3rem;
			padding-bottom: 0.3rem;
			margin: 0 30px;
			font-size: 0.12rem;
			color: #000;
			font-weight: 700;
		}
		
	@media (max-width:768px) {
		  .count{
					column-count: 2;
					column-gap: 30px;
					break-inside: avoid; 
			  }
		}
		@media (min-width: 768px){
			 .count{
				column-count: 4;
				column-gap: 30px;
				break-inside: avoid; 
			 }
		}
		.header {
		  display: flex;
		  align-items: flex-end;
		  margin-bottom: 0.2rem;
			
		}
		.header h2{
			  margin: 0;
			  font-size: 18px;
		}
		.header a{
			 color: #000;
			 margin-left: .15rem;
			 text-decoration:underline; 
			 font-weight: 500;
		}
		.header a:hover{
			  text-decoration: none;
			  color: #ccc;
		}
		.ground{
			list-style: none;
		}
		.bott{
			margin-bottom: 0.15rem;
		}
		
		.lii{
			list-style: none;
		}
		.lii a{
			color: #000;
		}
		.lii a:hover{
			color: #ccc;
			text-decoration: none;
			cursor: pointer;
		}
</style>
