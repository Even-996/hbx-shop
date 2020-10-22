<template>
	<div>
		<div class="leader">
			<div><img src="https://static.hbx.com/bundles/hypebeastweb/images/icons/empty-bag@2x.png?1603274925" /></div>
			<p class="lea">你的购物袋没有商品</p>
			<p><a href="/home" class="led">继续购物</a> </p>
			<p class="lef">如果你已选购产品，但购物车未能正确显示，可能你的浏览器设定已停用Cookie，请重新启用Cookie后再次尝试。</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Bags"
	}
</script>

<style scoped="scoped">
	.leader {
		margin-top: 1.5rem;
		text-align: center;
	}

	.leader p {
		text-align: center;
	}

	.leader img {
		width: 0.73rem;
	}

	.lea {
		margin: 20px 0 50px;
		font-size: 30px;
		font-weight: 700;
	}

	.led {
		width: 0.82rem;
		height: 0.46rem;
		line-height: 0.46rem;
		font-size: 0.14rem;
		display: inline-block;
		color: #fff;
		background-color: #000;
		border-color: #000;
		outline: none;
		text-decoration: none;
	}

	.lef {
		max-width: 590px;
		margin: 1rem auto 50px;
		font-size: 14px;
		color: #999;
	}
</style>
