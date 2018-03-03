<template>
<div id="nav-message">
  <div id="inner-message" class="alert" :class="'alert-' + type">
    <div class="container">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <i class="fa fa-exclamation-triangle" aria-hidden="true">&nbsp;&nbsp;</i>
      <strong>deqwf {{ message }}</strong>
    </div>
  </div>
</div>
</template>

<script>
export default {

  name: 'NavbarMessage',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
    	type: String,
    	default: 'primary',
    	validator: function(value){
    		return [
	    		'primary',
	    		'danger',
	    		'warning',
	    		'info',
	    		'success'
    			].includes(value)
    	}
    }
  },
  data () {
    return {
    }
  },
  methods: {
  	show: function() {
  		this.message = "hehee";
  	}
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
  margin-top: -4px;
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