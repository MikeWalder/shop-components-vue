import { createApp } from 'vue'
import App from './App.vue';

import router from './router';
import store from './store';
import 'animate.css';

import 'es6-promise/auto'


createApp(App).use(store).use(router).mount('#app')
