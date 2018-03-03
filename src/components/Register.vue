<template>
	 <div class="row">
    	<div class="col-md-12">
			<div class="card">
    			<div class="card-header">
    				Sign Up
    			</div>
    			<div class="card-block">
    				<div class="row">
	    				<div class="col-md-4">
			    			<img src="../assets/signuphere.jpg" class="rounded img-fluid my-auto d-block">
			    		</div>
			    		<div class="col-md-8">
			    			<div class="px-4 py-4">
		    				<form action="" method="post">
		    					<div class="row">
		    						<div class="col-md-6">
	    								<div class="form-group">
					    					<label for="firstname">First Name:</label>
					    					<input type="text" name="firstname" id="firstname" class="form-control" value="" />
					    				</div>
		    						</div>
		    						<div class="col-md-6">
		    							<div class="form-group">
					    					<label for="lastname">Last Name:</label>
					    					<input type="text" name="lastname" id="lastname" class="form-control" value="" />
					    				</div>
		    						</div>
		    					</div>

		    					<div class="row">
		    						<div class="col-md-4">
		    							<div class="form-group">
					    					<label for="username">Username:</label>
					    					<input type="text" name="username" id="username" class="form-control" value="" />
					    				</div>
		    						</div>
		    						<div class="col-md-8">
		    							<div class="form-group">
					    					<label for="email">Email:</label>
					    					<input type="text" name="email" id="email" class="form-control" value="" />
					    					
					    				</div>
		    						</div>
		    					</div>

		    					<div class="row">
		    						<div class="col-md-6">
				    					<div class="form-group">
					    					<label for="password">Password:</label>
					    					<input type="password" name="password" id="password" class="form-control" />
					    				</div>
		    						</div>
		    						<div class="col-md-6">
		    							<div class="form-group has-error has-feedback">
					    					<label for="confirm_password">Confirm Password:</label>
					    					<input type="password" name="confirm_password" id="confirm_password" class="form-control" />
					    				</div>
		    						</div>
		    					</div>
			    				<button class="btn btn-primary right" type="submit">Sign Up</button>
		    				</form>
		    				</div>
		    			</div>
	    			</div>
	    		</div>
    		</div>
    	</div>
</div>
</template>

<script>
export default {

  name: 'Register',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>