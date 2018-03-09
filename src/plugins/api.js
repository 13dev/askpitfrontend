
export default (Vue) => {
	Vue.auth = {
		getToken: () => {
			console.log('get tokennnnnn')
			Vue.axios.get('posts')
			.then(response => {
				console.log(response)
			})
		},
	    // setToken: () => {
	    // },
	    // deleteToken: () => {
	    // }
	}
	Object.defineProperties(Vue.prototype, {
		$auth: {
		  	get: () => {
		    	return Vue.auth
		  	}
		}
	});
}