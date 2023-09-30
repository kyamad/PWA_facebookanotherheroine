import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Another from '../views/Another.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Another',
    component: Another
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
