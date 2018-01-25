import Home from './pages/Home.vue'
import Mission from './pages/Mission.vue'
import Vision from './pages/Vission.vue'
import OurServices from './pages/OurServices.vue'
import FourOhFour from './pages/404.vue'

export const routes = [
  { path: '', component: Home , name: 'home-page'},
  { path: '/mission', component: Mission, name: 'mission-page' },
  { path: '/vision', component: Vision, name: 'vision-page' },
  { path: '/our-services', component: OurServices, name: 'our-services-page'},
  { path: '*', component: FourOhFour, name: '404-page'}  
]