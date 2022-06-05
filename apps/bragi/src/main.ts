import { createApp } from 'vue';
import App from './App.vue';
import { applicationRouter } from "@/router";
import './index.css';

createApp(App).use(applicationRouter).mount('#app');
