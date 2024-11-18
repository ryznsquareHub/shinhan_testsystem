import { createRouter, createWebHistory } from 'vue-router'
import EffectAnalysisPage from '@/views/EffectAnalysisPage.vue'
import CodeTestPage from '@/views/CodeTestPage.vue'
import CodeCoveragePage from '@/views/CodeCoveragePage.vue'
import LoginPage from "@/views/LoginPage";
import SearchPage from "@/views/SearchPage";
import FeedbackPage from "@/views/FeedbackPage";
import ManagementPage from "@/views/ManagementPage";
import TestAutoPage from "@/views/TestAutoPage";
import PerformancePage from "@/views/PerformancePage";

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
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage,
  },
  {
    path: '/effect-feedback',
    name: 'FeedbackPage',
    component: FeedbackPage,
  },
  {
    path: '/performance',
    name: 'PerformancePage',
    component: PerformancePage,
  },
  {
    path: '/test-automation',
    name: 'TestAutoPage',
    component: TestAutoPage,
  },
  {
    path: '/management',
    name: 'ManagementPage',
    component: ManagementPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router