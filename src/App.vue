<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view> 
    <footer-comp/>   
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

  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700');

  * {
    font-family: 'Raleway', sans-serif;
  }

  @media only screen and (max-width: 500px) {

    body {
      font-size: 80%;
    }

  }

</style>
