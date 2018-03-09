<template>
	<div class="home">
		<div class="row" style="text-align:center; margin: 0 auto;">
			<div class="well" style="padding: 20px; height:100%; margin: 0 auto;">
	    		<h2 style="letter-spacing: 10px;">ASK&nbsp;&&nbsp;ANSWER</h2>
					<p class="lead">Stay connected to friends with the askpit mobile app. Available for Android.</p>
					<div style="margin: 30px;">
						<a class="btn btn-lg btn-secondary" style="margin-right:20px;" href="">
							<!--<img src="/img/android.png" width="40" />-->
							<span>ANDROID APP</span>
						</a>
						<a class="btn btn-primary btn-lg" href="">
						<!--<img src="img/sign-up.png" width="40" />-->
						<span>SIGN UP</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data () {
			return {
			}
		},
		created() {
			this.$auth.getToken()
		}
	}
</script>

<style scoped>
	.home {
		margin-top: 10vh;
	}
</style>