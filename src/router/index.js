import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      header: Header,
      default: Home,
      footer: Footer
    }
  },
  {
    path: '/profile/:summonerName',
    name: 'Profile',
    components: {
      header: Header,
      default: Profile,
      footer: Footer
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
