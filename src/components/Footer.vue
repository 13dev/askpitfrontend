<template>
	<div class="footer">
    <div class="container">
      <div class="clearfix">
        <div class="footer-logo"><a href="#"><img src="../assets/logo.png" width="120"></a></div>
        <dl class="footer-nav">
          <dt class="nav-title">PORTFOLIO</dt>
          <dd class="nav-item"><a href="#">Web Design</a></dd>
          <dd class="nav-item"><a href="#">Branding &amp; Identity</a></dd>
          <dd class="nav-item"><a href="#">Mobile Design</a></dd>
          <dd class="nav-item"><a href="#">Print</a></dd>
          <dd class="nav-item"><a href="#">User Interface</a></dd>
        </dl>
        <dl class="footer-nav">
          <dt class="nav-title">ABOUT</dt>
          <dd class="nav-item"><a href="#">The Company</a></dd>
          <dd class="nav-item"><a href="#">History</a></dd>
          <dd class="nav-item"><a href="#">Vision</a></dd>
        </dl>
        <dl class="footer-nav">
          <dt class="nav-title">GALLERY</dt>
          <dd class="nav-item"><a href="#">Flickr</a></dd>
          <dd class="nav-item"><a href="#">Picasa</a></dd>
          <dd class="nav-item"><a href="#">iStockPhoto</a></dd>
          <dd class="nav-item"><a href="#">PhotoDune</a></dd>
        </dl>
        <dl class="footer-nav">
          <dt class="nav-title">CONTACT</dt>
          <dd class="nav-item"><a href="#">Basic Info</a></dd>
          <dd class="nav-item"><a href="#">Map</a></dd>
          <dd class="nav-item"><a href="#">Conctact Form</a></dd>
        </dl>
      </div>
      <div class="footer-copyright text-center">Copyright © 2018 Askpit. All rights reserved.</div>
    </div>
</div>
</template>

<script>
export default {

  name: 'Footer',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

.footer {
	position: relative;
	right: 0;
	bottom: 0;
	left: 0;
	margin-top: 40px;
	box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, .85);
  	padding: 40px 0;
  	background-color: #434a54;
}
.footer-logo, .footer-nav {
	float: left;
	width: 20%;
	padding: 0 20px;
}
@media (max-width: 768px) {
  .footer-logo {
    margin-bottom: 20px;
  }
  .footer-logo, .footer-nav {
    display: block;
    float: none;
    width: 100%;
  }
}
.footer-logo {
  	height: 32px;
  	margin-top: -5px;
  	line-height: 32px;
}
.footer-logo img {
  	margin-right: 10px;
}
.footer-logo a {
  	font-size: 20px;
  	font-weight: bold;
  	color: white;
}
.footer-logo a:hover, .footer-logo a:active {
  	text-decoration: none;
}
.footer-nav .nav-title {
  	margin-bottom: 15px;
  	color: #e6e9ed;
}
.footer-nav .nav-item {
  	line-height: 28px;
}
.footer-nav .nav-item > a {
  	color: #aab2bd;
}
.footer-nav .nav-item > a:hover, .footer-nav .nav-item > a:active {
	color: #ccd1d9;
	text-decoration: none;
}
.footer-copyright {
	color: #aab2bd;
}
</style>