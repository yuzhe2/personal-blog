import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/page/Login/index.vue'
import Home from '@/page/Home/index.vue'
import Write from '@/page/Write/index.vue'
import Check from '@/page/Check/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/write',
    component: Write
  },
  {
    path: '/check',
    component: Check
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router