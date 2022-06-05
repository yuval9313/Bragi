import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/HomeView.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/home', component: Home },
  { path: '/home', component: Home },
];

export const applicationRouter = createRouter({
  history: createWebHistory(),
  routes,
});
