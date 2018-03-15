<template>
	<div class="wrapper">
		<form class="form-signin">
			<h2 class="form-signin-heading">Please login</h2>
			<input
			v-model="email"
			type="text"
			class="form-control"
			name="username"
			placeholder="Email Address"
			:class="{'is-invalid': invalid}"
			required=""
			autofocus="" />

			<input
			v-model="password"
			type="password"
			class="form-control"
			:class="{'is-invalid': invalid}"
			name="password"
			placeholder="Password"
			required=""/>
			<div class="invalid-feedback" v-if="invalid">
          Please choose a username.
        </div>
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
				invalid: false
			}
		},
		methods: {
			doLogin() {
				this.$log.debug('doLogin()')
				if(this.$auth.isAuthenticated()){
					this.$router.push({
						name:'Home'
					})
				}
				this.axios.post('auth/login',{
					email: this.email,
					password: this.password
				})
				.catch((error) => {
					this.$log.debug('Catch - doLogin()')
					this.invalid = true
					if (error.response) {
				      	// The request was made, but the server responded with a status code
				      	this.$log.debug(error.response, error.response.status,error.response.headers);
				    } else {
				      	// Something happened in setting up the request that triggered an Error
				    	this.$log.debug('Error', error.response);
				    }
				})
				.then((response) => {
					if(response === undefined) return
					this.invalid = false

					let data = response.data.data
					this.$auth.setToken(data.token, data.expires_in + Date.now())
					this.$log.debug('Then - doLogin()', response.data.code, response.data.message)

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