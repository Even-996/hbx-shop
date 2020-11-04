import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import "bootstrap";
// import './assets/css/bootstrap.css'
// import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';


// Vue.config.productionTip = false
router.afterEach((to,from,next)=>{
  window.scroll(0,0);
})

Vue.use(ElementUI)
new Vue({
  axios,
  router,
  // store,
  render: h => h(App),

}).$mount('#app')
