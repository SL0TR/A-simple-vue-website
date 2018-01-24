import Home from './Home.vue'
import Mission from './Mission.vue'

export const routes = [
  { path: '', component: Home , name: 'home-page'},
  { path: '/mission', component: Mission, name: 'mission-page' }  
]