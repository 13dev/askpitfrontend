<template>
	<div>
		<h1>Profile Name </h1>
		<ul>
			<li>Post 1</li>
			<li>Post 2</li>
			<li>Post 3</li>
			<li>Post 4</li>
			<li>Post 5</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Profile',
		data() {
			return {
				user: {}
			}
		},
		created() {
			this.$log.debug('Profile')
			this.$log.debug('id: ', this.$route.params.id)
			this.user = this.searchUser(this.$route.params.id)
		},
		methods: {
			searchUser(id){
				//make get request
				this.axios.get('users/' + id)
				.catch((error) => {
					this.$log.debug('Catch - searchUser()')

					if (error.response) {
				      	this.$log.debug(error.response, error.response.status);

				      	this.$bus.$emit('show:nav-message', { 
				      		type: 'danger', 
				      		message: error.response.data.message
				      	})
				     	return
				    }		

			    	this.$log.debug('Error ', error.response);
			    	this.$bus.$emit('show:nav-message', { 
			      		type: 'danger', 
			      		message: error.response //TODO: Correct ?
			      	})
			    	//TODO: router 
			      	return

				}).then((response) => {
					if(response === undefined) return

					let data = response.data.data
				
					//Debug
					this.$log.debug('Then - searchUser()', response.data.code, response.data.message)
					console.log(data)

					//emit a event
					this.$bus.$emit('update:navbar', 'Update Navbar')

					//TODO: set user
					return data
				})
			}
		}
	}
</script>
<style>
	
</style>