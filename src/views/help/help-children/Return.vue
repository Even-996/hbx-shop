<template>
	<div class="container" id="returns-content">
		<h2 class="text-center">简易退货流程</h2>
		<p>从到货日起计30天内，您可以为某些指定商品办理退货或换货。商品必须是全新，包装及吊牌齐全 ，而且未经穿着 ，我们不会接受违规的商品。请留意，最终清货商品不可以退换。</p>
		<p class="text-center"><a href="#">退货细则</a>请见此。</p>
		<div id="return-steps">
			<div class="row">
				<div class="col-md-4 col-sm-12" v-for="(item,index) in items" :key="index">
					<img :src="item.src">
					<p class="step-label">{{item.text1}}</p>
					<p class="description">{{item.text2}}</p>
				</div>
			</div>
		</div>
		<p class="text-center text-muted">*请注意：优惠活动期间，退货/换货时间可能会较长。</p>
		<hr>
		<help-footer></help-footer>
	</div>
</template>

<script>
	import HelpFooter from '../help-footer/HelpFooter.vue'
	export default {
		name: 'Return',
		components:{
			HelpFooter
		},
		data(){
			return{
				items:[
					{
						src:"https://static.hbx.com/bundles/hypebeastweb/images/returns/returns-1@2x.png?1603274925",
						text1:'列印',
						text2:'填妥并列印确认电邮附件中的退货单。'
					},
					{
						src:"https://static.hbx.com/bundles/hypebeastweb/images/returns/returns-2@2x.png?1603274925",
						text1:'列印',
						text2:'把商品包装好，并把退货单贴于包裹表面。'
					},
					{
						src:"https://static.hbx.com/bundles/hypebeastweb/images/returns/returns-3@2x.png?1603274925",
						text1:'寄出',
						text2:'把包裹寄到我们其中一个退货地址。'
					}
				]
			}
		}
	}
</script>

<style scoped>
	#returns-content h2 {
		margin: 20px 0;
		font-size: .36rem;
		font-weight: 400;
	}

	#returns-content p {
		font-size: .18rem;
		margin-bottom: 30px;
	}

	#returns-content a {
		color: #000;
	}

	#return-steps {
		text-align: center;
	}

	#return-steps img {
		width: 114px;
		margin: 0 auto;
	}

	.step-label {
		text-transform: uppercase;
		font-size: .2rem;
		letter-spacing: .1em;
		margin-bottom: 15px !important;
	}
    .description{
		font-size: .15rem !important;
	    color: #7d7d7d;
	}
	.text-muted{
		color: #999!important;
		font-size: .16rem !important;
	}
	@media (min-width: 1200px) {
		.container {
			width: 900px;
		}
	}
</style>
