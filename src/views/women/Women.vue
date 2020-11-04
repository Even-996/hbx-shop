<template>
	<div>
    <News />
		<div class="template">
			<div class="container">
				<div class="row flex">
					<div class="banner-image col-md-9 col-xs-12">
						<img src="https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F10%2FB_12-scaled.jpg?q=90&v=1" />
					</div>
					<div class="banner-body col-md-3 col-xs-12">
						<div class="banner-txt">
							<h3>新品上架</h3>
							<h2>精选手袋</h2>
							<p>热门款式包括 Bottega Veneta，LOEWE ，Chloé 等</p>
							<a style="margin-left: 0;">立即选购</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="template">
			<div class="container">
				<div class="row" >

					<div class="col-md-6 col-xs-12"  v-for="(item,index) in womenCloses" :key="index">
						<img :src="item.img" >
						<div class="banner-txt2">
							<h3>{{item.title}}</h3>
							<h2>{{item.name}}</h2>
							<p>{{item.describ}}</p>
							<a style="margin-left: 0;">立即选购</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="template">
			<div class="container">
				<div class="row" >

					<div class="col-md-4 col-xs-12"  v-for="(item,index) in women2Closes" :key="index">
						<img :src="item.img" >
						<div class="banner-txt2">
							<h3>{{item.title}}</h3>
							<h2>{{item.name}}</h2>
							<p>{{item.describ}}</p>
							<a style="margin-left: 0;">立即选购</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="womantext container-fluid">
			<div class="header">
			  <h2 class="heading">注目品牌</h2>
			  <a href="">全部品牌</a>
			</div>
			<ul class="ground count">
				<li v-for="item in text"class="bott">
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
  import News from "../../components/news"

	export default {
		name: "Women",
		data(){
			return{
				womenCloses:[],
				women2Closes:[],
				text:[
					{title:'#',value:['1017 ALYX 9SM']},
					{title:'A',value:['A.P.C.','ACNE STUDIOS','ADER ERROR','ADIDAS ORIGINALS','ALEXANDER MCQUEEN','ALEXANDER WANG','ALEXANDER WANG.T','AMBUSH','ASICS']},
					{title:'B',value:['BOTTEGA VENETA','BURBERRY','BY FAR']},
					{title:'C',value:['CHLOÉ','COMMON PROJECTS','CONVERSE']},
					{title:'D',value:["D'HEYGERE",'DION LEE','DR. MARTENS']},
					{title:'E',value:['EYTYS']},
					{title:'G',value:['GANNI']},
					{title:'H',value:['HELMUT LANG','HERON PRESTON','HYEIN SEO']},
					{title:'J',value:['JUSTINE CLENQUET','JW ANDERSON']},
					{title:'K',value:['KANGOL','KIRIN','KOCHÉ']},
					{title:'L',value:['LAURA LOMBARDI','LOEWE']},
					{title:'M',value:['MAISIE WILEN','MAISON KITSUNE','MAISON MARGIELA','MARINE SERRE','MARTINE ROSE','MISBHV','MM6 MAISON MARGIELA','MONCLER']},
					{title:'N',value:['NANA-NANA','NANUSHKA','NEW BALANCE','NIKE']},
					{title:'O',value:['OFF-WHITE']},
					{title:'P',value:['PALM ANGELS','PARIS TEXAS','PRADA']},
					{title:'S',value:['SPORTY & RICH','STAND STUDIO','STAUD','STELLA MCCARTNEY','STUSSY']},
					{title:'T',value:['THOM BROWNE','TOGA PULLA']},
					{title:'V',value:['VANS','VERDY X MINIONS','VERSACE']},
					{title:'W',value:['WE11DONE']},
				]
			}
    },
    components:{
      News
    },
		created() {
			this.loadData();
		},
		methods:{
			loadData(){
				getHomeMultData().then(res=>{
					this.womenCloses = res.data.womancloses;
					this.women2Closes = res.data.womancloses2;
					
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
	.banner-txt h3{
		font-size: .14rem;
		font-weight: 400;
		margin-bottom: .05rem;
	}
	.banner-txt h2,p,a{
		font-weight: 700;
	}
	.banner-txt h2{
		font-size: .35rem;
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
			width: 1250px !important;
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
	.womantext{
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
