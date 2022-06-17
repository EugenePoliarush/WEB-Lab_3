import { createRouter, createWebHistory } from 'vue-router'
import CalculatorView from '../views/CalculatorView.vue'

const routes = [
  {
    path: '/',
    name: 'CalculatorView',
    component: CalculatorView
  },
  {
    path: '/ProfileView',
    name: 'ProfileView',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/SingupView',
    name: 'SingupView',
    component: () => import('../views/SingupView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
