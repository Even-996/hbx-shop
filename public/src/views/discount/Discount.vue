<template>
	<div>
    <News />
    <Choose />
    <Man />
<!--     <Woman />-->
    <Brand />
	</div>
</template>

<script>
import Choose from './choose'
import Man from './man'
import Woman from './woman'
import Brand from '../brands/brand'
import News from "../../components/news"
	export default {
    name: "Discount",
    components:{
      Choose,
      Man,
      Woman,
      Brand,
      News
    }
	} 
</script>

<style>
</style>
