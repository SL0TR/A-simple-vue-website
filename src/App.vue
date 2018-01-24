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

* {
  font-family: 'Lato', sans-serif;
}



</style>
