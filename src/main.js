import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

// NAVBAR COMPONENT
import navBar from './components/navBar.vue'
Vue.component('nav-bar', navBar)

// FOOTER COMPONENT
import footer from './components/footer.vue'
Vue.component('footer-comp', footer)



Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
