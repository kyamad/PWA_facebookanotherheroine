import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Develop from '../components/SignIn.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/streamingview',
    name: 'streamingview',
    component: () => import('../views/StreamingView.vue')
  },
  {
    path: '/streaming',
    name: 'LiveStreaming',
    component: () => import('../views/LiveStreaming.vue')
  },
  // {
  //   path: '/develop',
  //   name: 'develop',
  //   component:Develop
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
