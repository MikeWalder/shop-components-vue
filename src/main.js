import { createApp } from 'vue'
import App from './App.vue';

import router from './router';
import 'animate.css';

import 'es6-promise/auto'
import store from './store'


createApp(App).use(store).use(router).mount('#app')
