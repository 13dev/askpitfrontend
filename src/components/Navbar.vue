<template>
  <div class="margin-bottom">
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
      <router-link to="/register" tag="button" class="btn btn-primary my-2 mx-2 my-sm-0">Register</router-link>
      <router-link to="/login" tag="button" class="btn btn-outline-success my-2 mx-2 my-sm-0">Login</router-link>
    </form>
  </div>
</nav>
<div ref="navmessage"></div>
<!--<n-message message="looowefowlel" type="primary"></n-message>-->
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
          id: 0,
          text: 'Hello World',
          page:'/HelloWorld',
        },
        {
          id: 1,
          text: 'Home',
          page:'/Home',
        },
        {
          id: 2,
          text: 'About',
          page:'/About'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        }
      ]
    }
  },
  components:{
    'n-message': NavbarMessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../styles/anim.css');
.margin-bottom {
  margin-bottom: 25px;
}

.navbar {
  font-size: 1.09em!important;
  padding: 1rem 1.5rem !important;
  border: none;
  height: 70px;
  border-bottom: 2px solid rgba(59, 175, 218, .55);
  background-color: #fff;
  -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .45);
}


.nav-link {
  border-bottom: 2px solid transparent;
}
.nav-link:hover, .nav-link:focus {
  transition: border-color .318s;
  border-bottom: solid 2px #5d9cec;

}

</style>
