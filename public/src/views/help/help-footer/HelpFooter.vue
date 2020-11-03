<template>
	<div class="footer text-center">
		<h3>其他问题</h3>
		<p>我们支援<strong>英语</strong>﹑<strong>国语</strong>,<strong>粤语</strong>及<strong>韩语</strong></p>
		<div class="row btn-content">
			<div class="col-md-4 col-sm-12">
				<a class="btn btn-primary btn-block btn-email">
					<i class="iconfont icon-xinfeng"></i>
					help@hbx.com
				</a>
				<p>我们会于二十四小时内回覆您的电邮
					<br>
					<span>*请注意：优惠活动期间，电邮回覆时间可能会较长。</span>
				</p>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'HelpFooter'
	}
</script>

<style scoped>
	.footer h3{
		font-size: 0.28rem;
		font-size: 700;
		margin: 30px 0;
	}
    .footer p{
		font-size: .16rem;
		margin-bottom: .18rem;
	}
	.footer p span{
		color: #777!important;
	}
	.footer a{
		background-color: #000000;
		margin-bottom: 12px;
		padding: .1rem;
	}
	.btn-content {
		display: flex;
		justify-content: center;
	}
</style>
