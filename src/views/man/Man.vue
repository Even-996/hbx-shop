
<template>
	<div class="main-body">
		<div class="template">
			<div class="container">
				<div class="row flex">
					<div class="banner-image col-md-9 col-xs-12">
						<img src="https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F10%2FGG_1600x900.jpg?q=90&w=1600&fit=max&v=1" />
					</div>
					<div class="banner-body col-md-3 col-xs-12">
						<div class="banner-txt">

							<h3>精选推介</h3>
							<h2>冬季外套</h2>
							<p>最新发售功能性外套，品牌包括: Canada Goose、Moncler Genius、Stüssy 及更多。</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="template">
			<div class="container">
				<div class="row" >
					<div class="col-md-6 col-xs-12"  v-for="(item,index) in homeCloses" :key="index">
						<img :src="item.img" >
						<div class="banner-txt2">
							<h3>{{item.title}}</h3>
							<h2>{{item.name}}</h2>
							<p>{{item.describ}}</p>
							<a style="margin-left: 0;">选购男装</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<Brand />
	</div>
</template>

<script>
	import Brand from '../brands/brand'
	import {getHomeMultData} from '../../network/home'
	export default {
		name: "Man",
		components:{
			Brand
		},
		created() {
			this.loadData();
		},
		data(){
			return{
				homeCloses:[]
			}
		},
		methods:{
			loadData(){
				getHomeMultData().then(res =>{
					this.homeCloses =  res.data.homecloses;
					console.log(this.homeCloses);
				}).catch(error=>{

				})
			}
		}
	}
</script>

<style scoped>
	.template{
		margin: 15px;
	}
	.banner-txt h2,p,a{
		font-weight: 700;
	}
	.banner-txt h2{
		font-size: .35rem;
		margin-top: 0;
	}
	.banner-txt h3{
		font-size: .14rem;
		font-weight: 400;
	}
	.banner-txt p{
		font-size: .15rem;
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
</style>

