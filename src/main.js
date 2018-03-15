import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLogger from 'vuejs-logger'
import VeeValidate from 'vee-validate'

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
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)

Vue.config.productionTip = false

//Navigation guard
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.guests)){
    if(Vue.auth.isAuthenticated()){
      next('/')
    }
    Vue.$log.info('guests - isAuthenticated', Vue.auth.isAuthenticated())
  }
  next()

  /* else if(to.matched.some(record => record.meta.forAuth)){
      if( ! Vue.auth.isAuthenticated() ){
        next({
          path: '/login'
        });
      } else {
        next()
      }
    } else {
      next()
    } */
})

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  //components: { App },
  render: h => h(App),
  //template: '<App/>',
}).$mount('#app')


