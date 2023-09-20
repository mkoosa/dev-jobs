import { createRouter, createWebHashHistory } from 'vue-router';

// components
import TheHome from '@/components/View/TheHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHome
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
