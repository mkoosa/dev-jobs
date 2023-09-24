import { createRouter, createWebHistory } from 'vue-router';

// components
import Main from '@/components/View/TheMain.vue';
import Job from '@/components/View/TheJob.vue';
import useJobsStore from '@/stores/jobs';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/jobs/results/:id',
    name: 'Job',
    component: Job
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'}
  }
});

router.beforeEach(() => {
  useJobsStore();
});

export default router;
