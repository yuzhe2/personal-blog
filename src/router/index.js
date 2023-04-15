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
    component: Login,
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/write',
    component: Write,
    meta: {
      hidden: true
    }
  },
  {
    path: '/check/:articleId',
    component: Check
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router