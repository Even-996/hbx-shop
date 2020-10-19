import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import router from './router'
import "bootstrap";
// import './assets/css/bootstrap.css'
// import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// Vue.config.productionTip = false


Vue.use(ElementUI)
new Vue({
  // axios,
  router,
  // store,
  render: h => h(App),

}).$mount('#app')
