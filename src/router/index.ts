import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Nijikano from '../views/HomeView.vue'
import RELACS from '../views/RELACS.vue'
import EC from '../views/ECHome.vue'
import WellcomeView from '../views/WellcomeView.vue'
import SexView from '../views/Sex.vue'
import AgeView from '../views/Age.vue'
import TopicsView from '../views/Topics.vue'
import MotivationView from '../views/Motivation.vue'
import LastView from '../views/LastView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Nijikano',
    component: Nijikano
  },
  {
    path: '/relacs',
    name: 'RELACS',
    component:RELACS
  },
  {
    path: '/ec',
    name: 'EC',
    component:EC
  },
  {
    path: '/ec/p01',
    name: 'WellcomeView',
    component:WellcomeView
  },
  {
    path: '/ec/p02',
    name: 'SexView',
    component:SexView
  },
  {
    path: '/ec/p03',
    name: 'AgeView',
    component:AgeView
  },
  {
    path: '/ec/p04',
    name: 'TopicsView',
    component:TopicsView
  },
  {
    path: '/ec/p05',
    name: 'MotivationView',
    component:MotivationView
  },
  {
    path: '/ec/p06',
    name: 'LastViewView',
    component:LastView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
