import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import router from '@/router';
import useJobsStore from '@/stores/jobs';
import usePaginationStore from '@/stores/pagination';
import useUserStore from '@/stores/user';
import useBlur from '@/stores/blur';
import {Button, Result} from 'ant-design-vue';



library.add(fas);
const app = createApp(App);
export const pinia = createPinia();
app.use(pinia).use(Button).use(Result).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

const paginationStore = usePaginationStore();     
const jobStore = useJobsStore();
const userStore = useUserStore();
const blurStore = useBlur();

export { jobStore, paginationStore, blurStore, userStore };
