import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import chapters from '../components/chapters.vue'
import saved from '../components/saved.vue'
import dua from '../components/dua.vue'
import savedDua from '../components/savedDua.vue'
import morning from '../components/morning.vue'
import evening from '../components/evening.vue'
import night from '../components/night.vue'
import moli from '../components/moli.vue'
import istixfor from '../components/istixfor.vue'
import tasbeh from '../components/tasbeh.vue'
import farz from '../components/farz.vue'
import times from '../components/times.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/saved',
    name: 'saved',
    component: saved
  },{
    path: '/dua',
    name: 'dua',
    component: dua
  },{
    path: '/savedDua',
    name: 'savedDua',
    component: savedDua
  },{
    path: '/evening',
    name: 'evening',
    component: evening
  },{
    path: '/night',
    name: 'night',
    component: night
  },{
    path: '/moli',
    name: 'moli',
    component: moli
  },{
    path: '/istixfor',
    name: 'istixfor',
    component: istixfor
  },{
    path: '/tasbeh',
    name: 'tasbeh',
    component: tasbeh
  },{
    path: '/morning',
    name: 'morning',
    component: morning
  },{
    path: '/chapters',
    name: 'chapters',
    component: chapters
  },{
    path: '/times',
    name: 'times',
    component: times
  },{
    path: '/farz',
    name: 'farz',
    component: farz
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
