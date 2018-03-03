<template>
  <div>
    <navbar></navbar>
    <div id="app">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default {
  name: 'App',
  components:{
    'navbar': Navbar,
    'app-footer': Footer
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
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo
{
    height: 80px;
    margin-top: -13px;
}
</style>
