import Vue from 'vue'
import App from './App'
import router from './router'
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
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.use(VueAxios, axios)

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

new Vue({
  el: '#app',
  router,
  //components: { App },
  render: h => h(App),
  //template: '<App/>',
})


