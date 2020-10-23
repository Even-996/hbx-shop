<template>
	<div class="container" id="content">
		<h1 class="text-center">在线支付</h1>
		<div class="content">
			<p>我们提供多种付款方式，为您的网上购物提供便利。所有支付交易均以美元计算，汇率以成交当天为准。</p>
			<h4>信用卡</h4>
			<p>我们接受所有主流信用卡，包括 VISA、万事达卡、美国运通 及 银联。</p>
			<h4>PayPal</h4>
			<p>我们接受注册用户使用 PayPal 在线支付，更多使用信息请点击: https://www.paypal.com/hk/webapps/mpp/pay-online</p>
			<h4>支付宝</h4>
			<p>我们接受注册用户使用支付宝在线支付，更多使用信息请点击: https://payservice.alipay.com/intro/index.htm</p>
			<h4>Apple Pay</h4>
			<p>我们接受启用 Touch ID 和 Apple Wallet 功能的用户通过 Apple Pay 在线支付。目前 Apple Pay 只能在 HBX App 上进行支付，更多使用信息请点击: http://www.apple.com/apple-pay/</p>
			<h4>微信支付</h4>
			<p>我们接受所有中国发货地址的用户以微信支付付款。微信支付目前只能用於电脑上使用。有关如何使用微信支付付款或更多信息，请访问：https://pay.weixin.qq.com/index.php/public/wechatpay</p>
		    <h4>海外交易费用</h4>
			<p>交易一经被确定，信用卡的发卡银行可能会向您收取海外交易手续费，金额将取决於银行制定的价格及条款。有关海外交易的手续费事宜，请向您的发卡银行查询。</p>
			<h4>防止欺诈行为</h4>
			<p>我们将获取顾客的信用卡信息，用于支付处理和防止欺诈行为。如果顾客提供信息不全，或提交任何虚假信息，我们将保留取消订单和消除账号的权利。所有信用卡信息仅用于验证目的，并将得到严格保密。</p>
			<h4>退款</h4>
			<p>所有退款都将退回原始支付方式之中，个别银行或支付方式可能需要额外的处理时间，预计退款处理时间如下：</p>
			<p>信用卡: 2-5 工作日<br>
			PayPal: 2 工作日<br>
			支付宝: 5 工作日<br>
			Apple Pay: 2-5 工作日<br>
			微信支付: 5 工作日</p>
		</div> 
		<hr>
		<help-footer></help-footer>
	</div>
</template>

<script>
	import HelpFooter from '../help-footer/HelpFooter.vue'
	export default{
		name:'Payment',
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
	.content h4{
		font-size: .22rem;
	}
	.content p{
		margin-bottom: .15rem;
		font-size: .15rem;
	}
	@media (min-width: 1200px) {
		.container {
			width: 900px;
		}
	}
</style>
