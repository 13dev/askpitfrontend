// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'  
import VueAxios from 'vue-axios'
//import Api from './plugins/api.js'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
Vue.use(VueAxios, axios)
//Vue.use(Api)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})


