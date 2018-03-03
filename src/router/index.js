import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Register from '@/components/Register'


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
