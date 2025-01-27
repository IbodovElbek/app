import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';

// Vue 3 da global propertilar uchun prototip o'rniga app.config.globalProperties dan foydalanamiz
const app = createApp(App);

app.config.globalProperties.$http = axios;

app.use(store)
   .use(router)
   .mount('#app');
