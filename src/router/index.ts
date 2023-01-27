import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StreamingView from '../views/StreamingView.vue'
import LiveStreaming from '../views/LiveStreaming.vue'
import index from '../views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/index',
    name: 'index',
    component:index
  },
  {
    path: '/streamingview',
    name: 'streamingview',
    component: StreamingView
  },
  {
    path: '/streaming',
    name: 'streaming',
    component: LiveStreaming
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
