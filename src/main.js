import Vue from 'vue'
import App from './App'
import Router from './router'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLogger from 'vuejs-logger'

Vue.use(VueLogger, {
	// ['debug', 'info', 'warn', 'error', 'fatal']
    logLevel : 'debug',
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
})

axios.defaults.baseURL = process.env.APP_BASE_URL
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  Router,
  //components: { App },
  render: h => h(App),
  //template: '<App/>',
})


