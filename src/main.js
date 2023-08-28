import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from "pinia"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
library.add(faMoon);

const pinia = createPinia();


createApp(App).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

