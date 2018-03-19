<template>
  <div>
    <header>
     <navbar></navbar>
     <navmessage></navmessage>
    </header>
    <div id="app">
      <div class="container">
        <router-view/>
      </div>
        <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavbarMessage from './components/NavbarMessage'

export default {
  name: 'App',
  components:{
    'navbar': Navbar,
    'app-footer': Footer,
    'navmessage': NavbarMessage
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './styles/vars.scss';

.bg-white {
    background:#ffffff !important;
}

body, html {
  background-image: url("assets/background.png");

  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100%;
}

body {
  /*margin-bottom: 60px; */
}


#app > .container {
  padding: 0 15px 0;
}

.logo
{
    height: 60px;
    margin-top: -13px;
}
.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>
