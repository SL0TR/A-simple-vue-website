<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Aiyan Enterprise</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/">About</router-link></b-nav-item>
          <b-nav-item><router-link to="mission">Mission</router-link></b-nav-item>
          <b-nav-item><router-link to="vision">Vision</router-link></b-nav-item>
          <b-nav-item><router-link to="our-services">Our Services</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
  export default {
    
  }
</script>

<style>

.nav-link a {
  color: rgb(202, 199, 199);
  text-decoration: none;

}

.router-link-exact-active {
  color: #fff !important;
}
</style>
