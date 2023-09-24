import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import router from '@/router';
import useJobsStore from '@/stores/jobs';
import usePaginationStore from '@/stores/pagination';

library.add(fas);
const app = createApp(App);
export const pinia = createPinia();
app.use(pinia).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');

const jobStore = useJobsStore();
const paginationStore = usePaginationStore();
export { jobStore, paginationStore };
