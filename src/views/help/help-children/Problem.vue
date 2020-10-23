<template>
	<div class="container" id="content">
		<h1 class="text-center">常见问题</h1>
		<div class="content">
			<div class="row">
				<div class="col-md-6 col-sm-12" v-for="(item,index) in items" :key="index">
					<div class="section">
						<div class="header">
							<div class="circle">
								<span class="sprite sprite-faq-order" :class="item.class"></span>
							</div>
							<h2>{{item.title}}</h2>
						</div>
						<a href="#">{{item.text1}}</a>
						<a href="#">{{item.text2}}</a>
						<a href="#">{{item.text3}}</a>
						<a href="#">{{item.text4}}</a>
						<a href="#">{{item.text5}}</a>
						<a href="#" class="more">{{item.text6}}</a>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<help-footer></help-footer>
	</div>
</template>

<script>
	import HelpFooter from '../help-footer/HelpFooter.vue'
	export default {
		name: 'Problem',
		components:{
			HelpFooter
		},
		data(){
			return{
				items: [
					{
						class: 'order1',
						title: '您的订单',
						text1: '下订单需要注册帐户吗？',
						text2: '我忘记帐户密码了，该怎么办？',
						text3: '如何编辑或取消您的订单？',
						text4: '我下了单但没有收到订单确认电邮，请问什么时候才会收到？',
						text5: '如何查询订单状态？',
						text6: '查看更多'
					},
					{
						class: 'order2',
						title: '送货',
						text1: '你们的商品是从哪裏寄出？',
						text2: '订单可发送到哪些目的地或地區？',
						text3: '运费多少钱？',
						text4: '我的订单明明可享有免费送货，但仍然向我收取运费。该怎么办？',
						text5: '我需要支付关税吗？',
						text6: '查看更多'
					},
					{
						class: 'order3',
						title: '优惠活动',
						text1: '如何获得优惠活动的资讯？',
						text2: '哪些商品是优惠活动豁免？',
						text3: '如何在订单中加入优惠码？',
						text4: '我的优惠码不能使用，该怎么办？',
						text5: '我可以在订单上使用一个以上的优惠码吗？'
					},
					{
						class: 'order4',
						title: '付款',
						text1: '如何更改货币设置？',
						text2: '汇率如何计算？',
						text3: '我如何支付我的订单？',
						text4: '我会被收取额外费用吗？',
						text5: '我的支帐户口被扣款，但订单没有成功建立，该怎么办？'
					},
					{
						class: 'order5',
						title: '退货和退款',
						text1: '如何办理退货手续？',
						text2: '您们会支付退货运费吗？',
						text3: '我怎样知道包裹已被退回？',
						text4: '我什么时候才得到退款？',
						text5: '退款的时效一般是多久？'
					},
					{
						class: 'order6',
						title: '商品',
						text1: '您们的商品是否正货？',
						text2: '您们会补货吗？',
						text3: '您们有格价保障吗？',
						text4: '为什麽在结帐时产品的价格不同了？',
						text5: '之前购买的商品现在降价了，我可以得到差额退还吗？'
					},
				]
			}
		}
	}
</script>

<style scoped>
	#content h1 {
		font-size: .25rem;
		margin: 40px 0;
		font-weight: 700;
	}

	.section {
		height: calc(100% - 30px);
		margin-bottom: 30px;
		padding: 20px 20px 15px;
		background-color: #f5f5f5;
	}

	.section h2 {
		padding: 0 10px;
		display: inline-block;
		vertical-align: middle;
		font-size: 16px;
		line-height: 0;
		margin: 0;
	}

	.header {
		margin-bottom: 15px;
	}

	.section a {
		padding: 6px 0;
		color: #7d7d7d;
		line-height: 1.6em;
		font-size: 15px;
		display: block;
	}

	.circle {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #fff no-repeat 50%;
		background-size: 29px;
		vertical-align: middle;
		display: inline-block;
		position: relative;
	}

	.sprite{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.sprite-faq-order {
		background-image: url(../../../assets/img/sprite.png);
		width: 46px;
		height: 46px;
		display: block;
	}
    .order1{
		background-position: -48px -262px;
	}
	.order2{
		background-position: -306px -196px;
	}
	.order3{
		background-position: -306px -100px;
	}
	.order4{
		background-position: 0 -262px;
	}
	.order5{
		background-position: -306px -52px;
	}
	.order6{
		background-position: -306px -148px;
	}
	.more {
		font-size: 11px;
		color: #333;
		font-weight: 700;
		text-decoration: underline;
	}

	@media (min-width: 1200px) {
		.container {
			width: 900px;
		}
	}
</style>
