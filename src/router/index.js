import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Register from '@/components/Register'
import NavbarMessage from '@/components/NavbarMessage'

Vue.mixin({
	methods: {
		hMessage: (message, type = 'info') => {
			var ComponentClass = Vue.extend(NavbarMessage)
	        var instance = new ComponentClass({
	            propsData: {
	            	type: type,
	            	message: message
	        	}
	        })
	        return instance
		},
    	hCapitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
  }
})

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	}
	]
})
