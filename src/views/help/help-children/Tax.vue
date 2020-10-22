<template>
	<div class="container" id="content">
		<h1 class="text-center">关税及税项</h1>
		<div class="content">
			<p>HBX.com 不会退回任何关税及税项。建议您向海关查询或雇用报关行，以申请退回相关款项。</p>
			<p class="text-muted">HBX.com 不会退回任何关税及税项。建议您向海关查询或雇用报关行，以申请退回相关款项。<a href="#">此处</a>。</p>
			<hr>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Tax'
	}
</script>

<style scoped>
	#content{
		margin-bottom: 120px;
	}
	#content h1 {
		font-size: .25rem;
		margin: 40px 0;
		font-weight: 700;
	}
	.content h4{
		font-size: .22rem;
	}
	.content a{
		color: #000;
	}
	.content a:hover{
		color: #999;
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
