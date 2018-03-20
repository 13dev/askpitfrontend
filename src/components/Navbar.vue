<template>
  <div>
   <nav class="navbar navbar-toggleable-sm navbar-expand-md navbar-light bg-white">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <img src="../assets/logo.png" class="navbar-brand logo" alt="Askpit Logo">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li v-for="item in links" class="nav-item">
        <a class="nav-link mx-2">{{ item.text }}</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <router-link to="/register" v-if="!isLogged" tag="button" class="btn btn-primary my-2 mx-2 my-sm-0">Register</router-link>
      <router-link to="/login" v-if="!isLogged" tag="button" class="btn btn-outline-success my-2 mx-2 my-sm-0">Login</router-link>
      <button v-if="isLogged" @click.prevent="doLogout()" class="btn btn-outline-danger my-2 mx-2 my-sm-0">Logout</button>
    </form>
  </div>
</nav>
</div>
</template>

<script>
import NavbarMessage from './NavbarMessage'
import Vue from 'vue'
export default {
  name: 'Navbar',
  data () {
    return {
      links: [
        {
          text: 'Home',
          page:'/Home',
        },
        {
          text: 'About',
          page:'/About'
        },
        {
          text: 'Contact',
          page:'/Contact'
        }
      ],
      isLogged: this.checkIfIsLogged()
    }
  },
  created() {
    this.$bus.$on('update:navbar', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {
    doLogout()
    {
      //User is authenticated ?
      if(!this.$auth.isAuthenticated())
        return

      //Destroy the token
      this.$auth.destroyToken()

      //Show a message
      this.$bus.$emit('show:nav-message', { 
        type: 'info', 
        message: 'We hope to see you again.'
      })

      // update the navbar
      this.$bus.$emit('update:navbar', 'Update Navbar')

      // Redirect
      //this.$router.go('/')

    },
    checkIfIsLogged() {
      if(this.$auth.isAuthenticated())
        return true
      else
        return false
    }
  },
  components:{
    'navbar-message': NavbarMessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../styles/anim.css');

.navbar {
  font-size: 1.09em!important;
  padding: 1rem 1.5rem !important;
  border: none;
  min-height: 70px;
  border-bottom: 2px solid rgba(59, 175, 218, .55);
  background-color: #fff;
  -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .45);
}


.nav-link {
  border-bottom: 2px solid transparent;
  cursor:pointer;
}
.nav-link:hover, .nav-link:focus {
  transition: border-color .318s;
  border-bottom: solid 2px #5d9cec;

}

</style>
