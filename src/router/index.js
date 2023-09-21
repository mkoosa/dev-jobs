import { createRouter, createWebHistory } from 'vue-router';

// components
import Main from '@/components/View/TheMain.vue';
import Job from '@/components/View/TheJob.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    
  },
  {
    path: '/jobs/results/:id',
    name: 'Job',
    component: Job
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
