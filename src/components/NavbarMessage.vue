<template>
<div id="nav-message" v-if="show">
  <div id="inner-message" class="alert" :class="'alert-' + type">
    <div class="container">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
      ×
      </button>
      <i class="fa" :class="'fa-' + icon" aria-hidden="true">&nbsp;&nbsp;</i>
      <strong>{{ message }}</strong>
    </div>
  </div>
</div>
</template>

<script>
export default {

  name: 'NavbarMessage',
  /*props: {
    message: {
      type: String,
      default: ''
    },
    type: {
    	type: String,
    	default: 'info',
    	validator: function(value){
    		return [
	    		'primary',
	    		'danger',
	    		'warning',
	    		'info',
	    		'success',
	    		'secondary' ].includes(value)
    	}
    }
  },*/
  data () {
    return {
    	icon: '',
    	show: false,
      message: '',
      type: 'info'
    }
  },
  methods: {
  	checkIcon() {
		let icon = 'exclamation'
		if(this.type == 'primary' || this.type == 'success'){
			icon = 'check-circle'
		}else if(this.type == 'danger'){
			icon = 'exclamation-triangle'
		}
		return icon
	},
	autoClose(active = true, time = 6000){
		if(!active) return;
		setTimeout(() => {
        this.show = false
    }, time);
	}
  },
  created(){
    console.log('created nav message')

    this.$bus.$on('show:nav-message', (data) => {
      this.message = data.message
      this.type = data.type
      this.show = true
      this.icon = this.checkIcon()
      this.autoClose()
    })
  }
}
</script>

<style lang="css" scoped>

/**
 * Nav bar message
 */
#nav-message
{
  width: 100%;
  margin-top: 0px;
  margin-bottom: 7px;
  opacity: .9;
}

#nav-message:hover{
  opacity: 1;
}

#inner-message {
  margin: 0 auto;
  border: none;
  padding: 8px;
  border-radius: 0;
}
</style>