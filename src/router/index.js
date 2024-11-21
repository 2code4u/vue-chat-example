import Vue from 'vue'
import VueRouter from 'vue-router'
import { useAuthStore } from '@/store/auth'
import MainView from '@/views/MainView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import(/* webpackChunkName: "Authorization" */ '@/views/AuthView')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async(to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = await authStore.authCheck()

  if (to.name !== 'Authorization' && !isAuthenticated) {
    next({ name: 'Authorization' })
  } else next()
})

export default router
