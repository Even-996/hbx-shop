<template>
	<div>
		<div class="care-header">
			<h4>帮助</h4>
			<h2>有任何疑问?</h2>
			<p>查看常见问题或联络我们</p>
			<ul class="list-inline">
				<li class="list-inline-item">
					<router-link to="/help/problem">常见问题</router-link>
				</li>
				<li class="list-inline-item">
					<router-link to="/help/rule">送货细则</router-link>
				</li>
				<li class="list-inline-item">
					<router-link to="/help/return">退货</router-link>
				</li>
				<li class="list-inline-item">
					<router-link to="/help/payment">在线支付</router-link>
				</li>
				<li class="list-inline-item">
					<router-link to="/help/tax">关税及税项</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "Help"
	}
</script>

<style scoped>
	.care-header {
		padding: 11px 0 7px;
		background-color: #f5f5f5;
		text-align: center;
	}

	.care-header h4 {
		color: #777;
		font-size: .25rem;
	}

	.care-header h2 {
		margin-top: .35rem;
		font-size: .36rem;
	}
    .router-link-active{
		color: #000 !important;
	}
	.care-header p {
		font-size: .16rem;
		margin-bottom: .5rem;
		color: #999;
		padding: 0 .15rem;
	}
	.list-inline>li{
		padding: 8px 12px;
	}
	.list-inline>li a{
		color: #999;
	}
	.list-inline>li a:hover{
		color: #000;
	}
	
</style>
