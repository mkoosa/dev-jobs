import { createRouter, createWebHashHistory } from 'vue-router';

// components
import TheMain from '@/components/View/TheMain.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: TheMain
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
