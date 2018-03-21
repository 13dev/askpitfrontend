<template>
	<div class="wrapper row bg-white content">
    	<div class="profile w-100">
    		<div class="cover">
    			 <img :src="user.avatar" class="img-fluid">
    		</div>
    		<div class="avatar">
    			 <img :src="user.cover" class="img-fluid">
    		</div>
    		<div class="profile-name">
    			 <h4>{{ user.firstname }} {{user.lastname }}</h4>
    		</div>
			<div class="profile-nav">
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <img src="../assets/publication.png" class="img-fluid">
                        <h4>5 PUBLICAÇÕES</h4>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <img src="../assets/like.png" class="img-fluid">
                        <h4>10 GOSTOS</h4>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <img src="../assets/followers.png" class="img-fluid">
                        <h4>11 SEGUIDORES</h4>
                    </div>
                </div>
            </div>
    		</div>
		<ul>
			<li>ID: 			{{ user.id }}</li>
			<li>birthday: 		{{ user.birthday }}</li>
			<li>created_at: 	{{ user.created_at }}</li>
			<li>email: 			{{ user.email }}</li>
			<li>gender:  		{{ user.gender }}</li>
		</ul>
	</div>
</template>


<script>
	export default {
		name: 'Profile',
		data() {
			return {
				user: {
					avatar: '',
					birthday: '',
					cover: '',
					created_at: '',
					email: '',
					firstname: '',
					gender: '',
					id: '',
					lastname: '',
					username: ''
				}
			}
		},
		created() {
			this.$log.debug('Profile')
			this.$log.debug('id: ', this.$route.params.id)
			this.searchUser(this.$route.params.id)
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
					//console.log(data[0])

					//emit a event
					this.$bus.$emit('update:navbar', 'Update Navbar')

					this.user.firstname 	= data[0].firstname
					this.user.lastname 		= data[0].lastname
					this.user.username 		= data[0].username
					this.user.avatar 		= data[0].avatar
					this.user.birthday 		= data[0].birthday
					this.user.cover 		= data[0].cover
					this.user.created_at 	= data[0].created_at
					this.user.email 		= data[0].email
					this.user.gender 		= data[0].gender
					this.user.id 			= data[0].id
				})
			}
		}
	}
</script>
<style lang="css">

.avatar {
    position: absolute;
    margin-left: 30px;
    width: 30%;
    min-width: 200px;
    margin-top: -60px;
}
.avatar > img {
    /* border-radius: 50%; */
    border: 2px solid #F5F7FA;
    /* max-width: 30%; */
    width: 100px;
    height: 100px;

}

.cover > img {
    width: 100%;
    max-height: 250px;
}

.profile-name {
    position: absolute;
    margin-top: -40px;
    margin-left: 150px;

}

.profile-name > h4 {
    color: #F5F7FA;
    font-size: 22px;
    letter-spacing: 0.05em;
    text-shadow: #000 0px 0px 10px;
    font-weight: 800;
}
.profile-nav {
	min-height: 50px;
    width: 100%;
    border-top: 2px solid #3BAFDA;
    border-bottom: 1px solid #F5F7FA;
    box-shadow: inset rgba(0, 0, 0, 0.21) 0px 0px 5px;
}
.profile-nav > .row {
    margin-left:20%;
}

.profile-nav > .row > .col-md-4 > img {
  max-height: 33px;
  min-height: 33px;
  margin-right: 10px;
  margin-top: -5px;
  display: inline-block;
}

.profile-nav > .row > .col-md-4 > h4 {
  display: inline-block;
  font-size: 20px;
  margin-top: 10px;
}
</style>