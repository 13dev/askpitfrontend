<template>
	<div class="wrapper">
		<form class="form-signin">
			<h2 class="form-signin-heading">Please login</h2>

			<input
			v-validate="'required|email'"
			v-model="email"
			type="text"
			class="form-control"
			name="email"
			placeholder="Email Address" />

			<input
			v-model="password"
			type="password"
			class="form-control"
			name="password"
			placeholder="Password" />

	        <p class="text-danger" v-if="errors.has('email') || invalid">
	        	{{ errors.first('email') }}
	        	{{ invalidMessage }}
	        </p>
			<label class="checkbox">
				<input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
			</label>
			<button class="btn btn-lg btn-primary btn-block" @click.prevent="doLogin">Login</button>   
		</form>
	</div>
</template>
<script>
	export default {
		name: 'Login',
		data() {
			return {
				email: 'lesch.chesley@feil.biz',
				password: 'secret',
				invalid: false,
				invalidMessage: null
			}
		},
		methods: {
			doLogin() {
				this.$log.debug('doLogin()')

				// check if user is authenticated
				if(this.$auth.isAuthenticated()){
					this.$router.push({
						name:'Home'
					})
				}

				//make post request
				this.axios.post('auth/login',{
					email: this.email,
					password: this.password
				})
				.catch((error) => {
					this.$log.debug('Catch - doLogin()')
					this.invalid = true
					if (error.response) {
				      	// The request was made, but the server responded with a status code
				      	this.$log.debug(error.response, error.response.status);
				      	
				      	this.invalidMessage = (error.response.data.message !== undefined ? error.response.data.message : null)
				    } else {
				      	
				      	// Something happened in setting up the request that triggered an Error
				    	
				    	this.$log.debug('Error ', error.response);
				    }
				})
				.then((response) => {
					if(response === undefined) return
					this.invalid = false

					let data = response.data.data

					//set Token
					this.$auth.setToken(data.token, data.expires_in + Date.now())
					
					//Debug
					this.$log.debug('Then - doLogin()', response.data.code, response.data.message)

					//emit a event
					this.$bus.$emit('update-navbar', 'Update Navbar')
					
					// Redirect
					this.$router.push({
						name:'Home'
					})
				})
			}
		}
	}
</script>
<style lang="scss" scoped>

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}

</style>