import { createRouter, createWebHistory } from 'vue-router'
import page2 from '../views/page2.vue'
import page1 from '../views/page1.vue'

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: page1,
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router