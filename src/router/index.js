import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    meta: { layout: 'MainLayout' }
  }
  ,
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
