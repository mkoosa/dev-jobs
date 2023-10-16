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
import useModalStore from '@/stores/modal'
import useBlur from '@/stores/blur';
import {Button, Result, Modal} from 'ant-design-vue';



library.add(fas);
const app = createApp(App);
export const pinia = createPinia();
app.use(pinia).use(Button).use(Result).use(Modal).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

const paginationStore = usePaginationStore();     
const modalStore = useModalStore()
const jobStore = useJobsStore();
const userStore = useUserStore();
const blurStore = useBlur();
export { jobStore, paginationStore, blurStore, userStore, modalStore };