<template>
      <div class="app">
		   <tabbar/>
           <router-view></router-view>
      </div>
</template>

<script>
    import changeSize from 'assets/js/app_home'
    import Home from 'views/home/Home'
	import Tabbar from 'components/tabbar/tabbar.vue'
export default {

  name: 'App',
  components: {
        Tabbar
  }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
   .app{
       /*font-size: 100px;*/
   }
</style>
