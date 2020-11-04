<template>
	<div id="container" class="container">
		<div id="root-state-container">
			<div></div>
		</div>
		<div id="login-register-container">
			<div class="tab-header">
				<div class="tab-header-item">
					<router-link to="/login/exlogin" class="tab-item">
						<span class="heading-primary">登入</span>
						<span class="heading-secondary">现有客户</span>
					</router-link>
				</div>
				<div class="tab-header-item">
					<router-link to="/login/register" class="tab-item">
						<span>建立新账户</span>
						<span>新客户</span>
					</router-link>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
	}
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		font-family: Nimbus San D, Arial, sans-serif, Microsoft Yahei;
		/*font-size: 1rem;*/
		font-weight: 400;
		line-height: 1.5;
		color: #212529;
		text-align: left;
		background-color: #fff;
	}

	@media (max-width: 768px) {
		.container,
		.container-sm {
			width: 100%;
			margin: 20px auto;
			max-width: 568px;
		}
		#login-register-container{
			margin: 0 auto;
		}
	}

	@media (min-width: 768px) {
		.container,
		.container-md,
		.container-sm {
			margin: 90px auto;
			max-width: 720px;
		}
		#login-register-container{
			width: 568px;
			margin: 0 auto;
		}
	}

	@media (min-width: 992px) {

		.container,
		.container-lg,
		.container-md,
		.container-sm {
			max-width: 960px;
		}
	}

	@media (min-width: 1200px) {
		.container {
			max-width: 1140px;
		}
	}

	.container {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	#login-register-container {
		/* width: 570px; */
		border: 1px solid #000;
		font-size: 14px;
	}

	#login-register-container .tab-header {
		display: flex;
	}

	.tab-header .tab-header-item {
		flex-basis: 0;
		flex-grow: 1;
		position: relative;
		width: 100%;
		max-width: 100%;
		height: 80px;
	}

	.tab-header-item .tab-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.tab-item {
		background-color: #000;
		color: #fff;
	}

	.heading-primary {
		font-size: 16px;
		font-weight: 700;
		text-transform: uppercase;
	}


	a {
		color: #000;
		background-color: transparent;
	}

	a,
	a:hover {
		text-decoration: none;
	}

	a:focus {
		text-decoration: none;
		color: #000000;
	}

	.router-link-active {
		background-color: #fff;
		color: #000;
		pointer-events: none;
	}
</style>
