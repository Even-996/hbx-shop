<template>
	<div>
		<div class="template">
			<div class="container">
				<div class="row flex">
					<div class="banner-image col-md-9 col-xs-12">
						<img src="https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F08%2FHBX_VisualBanner_EOSS70C_1600x900_SC.jpg?q=90&w=1600&fit=max&v=1" />
					</div>
					<div class="banner-body1 col-md-3 col-xs-12">
						<div class="banner-txt">
							<h3>最终优惠</h3>
							<h2>优惠低至三折</h2>
							<p>选购最热门货品</p>
							<a>选购男装</a>
							<a style="margin-left:10px ;">选购女装</a>
							<a>选购童装</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="banner-row-title">按类别选购</div>
			<div class="row">
				<div class="col-sm-6 col-md-4 col-xs-12" v-for="(items,index) in imgs" :key="index">
					<div class="banner">
						<div class="banner-image">
							<img :src="items.urls" alt="" width="100%" height="auto">
						</div>
						<div class="banner-body">
							<a href="" class="banner-cta">
								选购男装
							</a>
							<a href="" class="banner-cta">
								选购女装
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				imgs: [{
						urls: 'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Ft-shirts-1500x1000.jpg?q=90&w=500&fit=max&v=1'
					},
					{
						urls: 'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fsneakers-1500x1000.jpg?q=90&w=500&fit=max&v=1'
					},
					{
						urls: 'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fbags-1500x1000_.jpg?q=90&w=500&fit=max&v=1'
					},
					{
						urls: 'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fhoodies-1500x1000.jpg?q=90&w=500&fit=max&v=1'
					},
					{
						urls: 'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fpants-1500x1000.jpg?q=90&w=500&fit=max&v=1'
					},
					{
						urls: 'https://image-cdn.hypb.st/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2020%2F05%2Fjackets-1500x1000.jpg?q=90&w=500&fit=max&v=1'
					}
				]
			}
		},
	}
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}

	.template {
		margin: 15px;
	}

	.banner-txt h3 {
		font-size: .14rem;
		font-weight: 400;
		margin-bottom: .05rem;
	}

	.banner-txt h2,
	p,
	a {
		font-weight: 700;
	}

	.banner-txt h2 {
		font-size: .35rem;
	}

	.banner-txt p {
		font-size: .16rem;
	}

	.banner-txt a {
		color: #000000;
		cursor: pointer;
		font-size: .16rem;
		line-height: .4rem;
	}

	.banner-txt a:last-child {
		margin-left: 10px;
	}

	.container img {
		width: 100%;
	}

	.container-fluid {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
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

	@media (min-width: 768px) {
		.container-fluid {
			width: 100%;
			padding-right: 30px;
			padding-left: 30px;
			margin-right: auto;
			margin-left: auto;
		}

		.col-md-6 {
			flex: 0 0 50%;
			max-width: 50%;
		}
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
		display: flex;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}

	.col-md-6 {
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
	}

	.banner {
		margin-bottom: 50px;
	}

	.banner-body {
		text-align: center;
		text-transform: uppercase;
		margin-top: 20px;
	}

	.banner-cta {
		margin-left: 7.5px !important;
		margin-right: 7.5px !important;
		display: inline-block;
		font-size: .16rem;
		font-weight: 700;
		text-decoration: underline;
	}

	a {
		color: #000;
		background-color: transparent;
	}

	.banner-image {}
</style>
