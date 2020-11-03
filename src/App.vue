<template>
  <div class="app">
   <div class="tabbar">
    <tabbar />
   </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import changeSize from "assets/js/app_home";
import Home from "views/home/Home";
import Tabbar from "components/tabbar/tabbar.vue";
import Footer from 'components/footer';
export default {
  name: "App",
  components: {
    Tabbar,
    Footer
  },
};
</script>


<style>
@media (max-width: 768px){
  .template{
    margin: 0!important;
    margin-top: 15px!important;
    margin-bottom: 15px !important;
  }
}
* {
  padding: 0;
  margin: 0;
}
.app {
  padding-top: 65px;
  /*font-size: 100px;*/
}
.tabbar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: white;
}
</style>
