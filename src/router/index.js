import { createRouter, createWebHistory } from 'vue-router';

// components
import Main from '@/components/View/TheMain.vue';
import Job from '@/components/View/TheJob.vue';
import NoResults from '@/components/View/NoResults.vue'

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
  },
  {
    path: '/jobs/no-results',
    name: 'NoResults',
    component: NoResults
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    };
  }
});




export default router;
