<template>
	<div class="header">
		<div class="container">
			<div class="header-left" style="left: 10px;position: absolute;">
				<ul class="nav navbar-nav">
					<li><a href="/man">男装</a></li>
					<li><a href="/women">女装</a></li>
					<li><a href="/kid">童装</a></li>
					<li><a href="/times">中古逸品</a></li>
					<li><a href="/newest">最新发售</a></li>
					<li><a href="/discount">折扣商品</a></li>
				</ul>
			</div>
			<div class="header-center">
				<a href="/home">
					<img src="https://static.hbx.com/bundles/hypebeastweb/images/hbx-logo.svg?1603090404" alt="HBX" class="site-header-logo loading"
					 data-was-processed="true">
				</a>
			</div>
			<div class="header-right">
				<ul class="nav navbar-nav">
					<li><a>搜寻</a></li>
					<li><a href="/login">登录</a></li>
					<li><a href="/help">帮助</a></li>
					<li><a href="/bags">您的购物袋 (0)</a></li>
					<li><a ><img src="https://static.hbx.com/bundles/hypebeastweb/images/flags/cn.jpg?1603090404" class="loading"
							 data-was-processed="true"> CNY</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tabbar'
	}
</script>

<style scoped>
	.header {
		width: 100%;
		border: solid #000;
		border-width: 0 0 1px;
		background: #fff;
		font-weight: 700;
		height: 66px;
	}

	a {
		color: #000000;
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.header-center {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 70px;
		margin: 0 auto;
	}

	.header-center img {
		width: 70px;
	}
    .header-right {
		position: absolute;
		right: 10px;
	}
	.header-right img {
		width: 26px;
	}
</style>
