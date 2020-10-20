<template>
  <div class="app">
    <tabbar />
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import changeSize from "assets/js/app_home";
import Home from "views/home/Home";
import Tabbar from "components/tabbar/tabbar.vue";
import Footer from 'components/footer'
export default {
  name: "App",
  components: {
    Tabbar,
    Footer
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.app {
  /*font-size: 100px;*/
}
</style>
