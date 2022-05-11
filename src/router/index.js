import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes :[
   {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutPage.vue')
  }
  ]
})
export default router