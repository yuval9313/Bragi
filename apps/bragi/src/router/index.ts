import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  { path: '/search', component: () => import('@/views/SearchView.vue') },
  { path: '/library', component: () => import('@/views/LibraryView.vue') },
  { path: '/playlist', name: 'playlist', component: () => import('@/views/SearchView.vue') },
];

export const applicationRouter = createRouter({
  history: createWebHistory(),
  routes,
});
