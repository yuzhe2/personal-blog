import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/page/Login/index.vue'
import Home from '@/page/Home/index.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router