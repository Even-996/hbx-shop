<template>
	<div>
    <Choose />
    <Man />
    <!-- <Woman /> -->
    <Brand />
	</div>
</template>

<script>
import Choose from './choose'
import Man from './man'
// import Woman from './woman'
import Brand from '../brands/brand'
	export default {
    name: "Discount",
    components:{
      Choose,
      Man,
      // Woman,
      Brand
    }
	} 
</script>

<style>
</style>
