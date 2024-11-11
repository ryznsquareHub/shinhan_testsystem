import { createRouter, createWebHistory } from 'vue-router'
import EffectAnalysisPage from '@/views/EffectAnalysisPage.vue'
import CodeTestPage from '@/views/CodeTestPage.vue'
import CodeCoveragePage from '@/views/CodeCoveragePage.vue'

const routes = [
  {
    path: '/effect-analysis',
    name: 'effect-analysis',
    component: EffectAnalysisPage,
  },
  {
    path: '/code-test',
    name: 'CodeTestPage',
    component: CodeTestPage,
  },
  {
    path: '/code-coverage',
    name: 'CodeCoveragePage',
    component: CodeCoveragePage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router