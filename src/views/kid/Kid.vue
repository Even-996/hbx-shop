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

	</div>
</template>

<script>
	import {getHomeMultData} from "../../network/home";

	export default {
		name: "Kid",
		data(){
			return{
				childCloses:[]
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
</style>
