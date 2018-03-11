import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Register from '@/components/Register'
import NavbarMessage from '@/components/NavbarMessage'
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'
import Api from '@/plugins/api.js'

/*Vue.mixin({
	methods: {
		hMessage: (message, type = 'info') => {
			var ComponentClass = Vue.extend(NavbarMessage)
	        var instance = new ComponentClass({
	            propsData: {
	            	type: type,
	            	message: message
	        	}
	        })
	        instance.$mount()
	        return instance
		}, 

    	hCapitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
  }
}) */

Vue.use(Router)
Vue.use(Api)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: {
			guests: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			guests: true
		}
	},
	{
		path: '/404',
		component: NotFound
	},
	{
		path: '*',
		redirect: '/404'
	}
	]
})


