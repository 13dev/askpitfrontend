
export default (Vue) => {
	Vue.auth = {
		getToken (email, password) {
			Vue.$log.debug('getToken()', email, password)
		    var token = localStorage.getItem('token');
			var expiration = localStorage.getItem('expiration');

			if( ! token || ! expiration ){
				return null
			}

			if( Date.now() > parseInt(expiration) ){
				this.destroyToken()
				return null
			} else {
				return token;
			}
		},
	    setToken (token, expiration) {
	    	Vue.$log.debug('setToken()')
      		localStorage.setItem('token', token)
      		localStorage.setItem('expiration', expiration)
		},
	    destroyToken() {
	    	Vue.$log.debug('destroyToken()')
	      	localStorage.removeItem('token')
	      	localStorage.removeItem('expiration')
	    },

		isAuthenticated() {
			Vue.$log.debug('isAuthenticated()')
			//Vue.$log.debug('isAuthenticated', this.getToken())
		    if(!this.getToken()) {
		    	return false
		    }
		   	return true
		}
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
		  	get: () => {
		    	return Vue.auth
		  	}
		}
	});
}