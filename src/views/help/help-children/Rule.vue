<template>
	<div class="container" id="content" >
		<h1 class="text-center">送货细则</h1>
		<div class="content">
			<p>我们采用联邦快递、DHL、顺丰速运、Sagawa、Lotte或本地快递专递运送订单。</p>
			<hr />
			<h4>运输时间及收费</h4>
			<p>您可从以下表格查询送货目的地所需的时间及收费。</p>
			<p>如您未能在下拉列表中找到您的国家/地区，则表示HBX暂时无法提供服务。我们正在寻求解决方法，希望未来能为您服务！</p>
			<p>订单满指定金额可享有免费送货。请注意，折扣活动、减价商品、Archives 货品及印刷品不会享有此优惠。</p>
			<p><strong>Archives商品：</strong>需额外2-3个工作日送货。</p>
			<p><strong>公众假期：</strong>请留意，公众假期或优惠活动期间的送货时间或会延长。有关香港的公众假期，您可以参考。有关世界各地的公众假期，请向您的政府网页查询。</p>
			<p>请确保您提供的地址、邮政编号及电话等信息准确并完整。如有错误或缺漏，我们将与您联系以补充相关资料，发货速度或会因此延误。此外，银行的付款审查﹑海关清关及恶劣天气也会影响送货所需的时间。</p>
			<p>我们不发货到邮政信箱、美国军事地址及台湾金门与澎湖县。</p>
			<hr>
			<h4>订单查阅</h4>
			<p>订单寄出後， 我们会透过电邮通知。如您於付款後五个工作天内仍未收到送货通知，请电邮至help@hbx.com与我们联络。</p>
			<p>您可以到以下网站查阅包裹的运送状态。</p>
			<ul>
				<li>全球：FedEx丶DHL</li>
				<li>中国内地：FedEx丶顺丰速运</li>
				<li>香港特别行政区：本地快递丶顺丰速运</li>
				<li>澳门特别行政区：顺丰速运</li>
				<li>日本：DHL,Sagawa</li>
				<li>南韩：DHL,Lotte</li>
			</ul>
			<p>请留意：追踪号码需要大约24小时更新。</p>
			<hr>
			<h4>进口关税</h4>
			<p>进口税及关税将会於结账时计算，并将在结账时显示於“税项”中。</p>
			<hr>
			<h4>海关及进口限制</h4>
			<p>海关可能要求您提供额外文件和相应时间进行清关，而发货速度或会因此延误。对于进口商品的限制，请向当地海关查询。我们将不会对任何无法清关的商品负上任何责任。</p>
			<hr>
			<h4>海外交易费用</h4>
			<p>交易一经被确定，信用卡的发卡银行可能会向您收取海外交易手续费，金额将取决于银行制定的价格及条款。有关海外交易的手续费事宜，请向您的发卡银行查询。</p>
			<hr>
		</div>
		<help-footer></help-footer>
	</div>
</template>

<script>
	import HelpFooter from '../help-footer/HelpFooter.vue'
	export default{
		name: 'Rule',
		components:{
			HelpFooter
		}
	}
</script>

<style scoped>
	#content h1 {
		font-size: .25rem;
		margin: 40px 0;
		font-weight: 700;
	}
	.content ul{
		margin-left: .3rem;
	}
	.content h4{
		font-size: .25rem;
		font-weight: 700;
	}
	.content p{
		margin-bottom: .15rem;
	}
	
	@media (min-width: 1200px) {
		.container {
			width: 900px;
		}
	}
</style>
