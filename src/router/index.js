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
import ModalSamples from "@/views/ModalSamples";
import ModalSamples2 from '@/views/ModalSamples2.vue';
import EffectAnalysisPageTest from '@/views/EffectAnalysisPageTest.vue';
import EffectAnalysisPageNoHead from "@/views/EffectAnalysisPageNoHead";
import CodeTestPageNoHead from "@/views/CodeTestPageNoHead";
import CodeCoveragePageNoHead from "@/views/CodeCoveragePageNoHead";

const routes = [
  {
    path: '/',
    name: 'effect-feedback',
    component: FeedbackPage,
  },
  {
    path: '/web/effect-analysis',
    name: 'effect-analysis',
    component: EffectAnalysisPage,
  },
  {
    path: '/web/effect-analysis-2',
    name: 'effect-analysis-no-header',
    component: EffectAnalysisPageNoHead,
  },
  {
    path: '/web/code-test',
    name: 'CodeTestPage',
    component: CodeTestPage,
  },
  {
    path: '/web/code-test-2',
    name: 'CodeTestPageNoHead',
    component: CodeTestPageNoHead,
  },
  {
    path: '/web/code-coverage',
    name: 'CodeCoveragePage',
    component: CodeCoveragePage,
  },
  {
    path: '/web/code-coverage-2',
    name: 'CodeCoveragePageNoHead',
    component: CodeCoveragePageNoHead,
  },
  {
    path: '/web/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/web/search',
    name: 'SearchPage',
    component: SearchPage,
  },
  {
    path: '/web/effect-feedback',
    name: 'FeedbackPage',
    component: FeedbackPage,
  },
  {
    path: '/web/performance',
    name: 'PerformancePage',
    component: PerformancePage,
  },
  {
    path: '/web/test-automation',
    name: 'TestAutoPage',
    component: TestAutoPage,
  },
  {
    path: '/web/management',
    name: 'ManagementPage',
    component: ManagementPage,
  },
  {
    path: '/web/modals',
    name: 'ModalSamples',
    component: ModalSamples,
  },
  {
    path: '/web/modals2',
    name: 'ModalSamples2',
    component: ModalSamples2,
  },
  {
    path: '/web/EffectAnalysisPageTest',
    name: 'EffectAnalysisPageTest',
    component: EffectAnalysisPageTest,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router