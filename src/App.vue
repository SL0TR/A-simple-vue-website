<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Aiyan Enterprise</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" active>About</b-nav-item>
            <b-nav-item href="#">Mission</b-nav-item>
            <b-nav-item href="#">Vision</b-nav-item>
            <b-nav-item href="#">Our services</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="header  justify-content-center">
        <h1>Aiyan Enterprise</h1>
        <h4>
          Aiyan Enterprise is an Export and Import oriented proprietorship organization. It imports food 
          items mainly baby food,cosmetics items and various raw material and day to day usable items. Importing
          countries are mainly from Chaina, Malaysia, Thailand, UAE, Middle East and UK.
        </h4>
        <h5>
          We also export processed fish, vegetables and other consumable items to different countries.
          Besides importing and exporting Aiyan Enterprise is supplying raw materials and construction items to
          different companies in different locations of Bangladesh.
        </h5>

      </div>

      <!-- <b-navbar toggleable="md" type="dark" variant="dark" fixed="bottom">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Aiyan Enterprise</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" active>About</b-nav-item>
            <b-nav-item href="#">Mission</b-nav-item>
            <b-nav-item href="#">Vision</b-nav-item>
            <b-nav-item href="#">Our services</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>    -->
  </div>
</template>

<script>


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>

* {
  font-family: 'Lato', sans-serif;
}

.header {
  background-image: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .6)), url('./assets/1202-min.jpg');
  height: calc(100vh - 56px);
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  padding: 0 2rem;
}

h1 {
  margin-bottom: 5rem;
  font-size: 4rem;
  position: relative;
}

h1::after {
  content: "";
  height: 2px;
  width: 70%;
  position: absolute;
  bottom: -.5em;
  background: #17a2b8 ;
  left: 15%;
}

h4, h5 {
  line-height: 1.5em;
  letter-spacing: .08em;
  word-spacing: .2em;
}

</style>
