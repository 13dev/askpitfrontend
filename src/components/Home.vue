<template>
    <div class="wrapper row bg-white p30 content">
        <div class="mx-auto text-center">
            <h2 style="letter-spacing: 10px;">ASK&nbsp;&&nbsp;ANSWER</h2>
				<p class="lead">Stay connected to friends with the askpit mobile app. Available for Android.</p>
				<img src="../assets/logo.png" height="80">
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
</template>

<script>
	export default {
		name: 'Home',
		data () {
			return { }
		},
		created() {
			//this.$bus.$emit('show:nav-message', { type: 'primary', message: 'ehhehehhehe' })
			this.$log.info('Home created')
			this.$log.info(process.env.APP_BASE_URL)
		}
	}
</script>

<style scoped>

</style>