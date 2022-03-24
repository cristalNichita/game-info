import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: HomeView
    },
    {
      path: '/news',
      name: 'Новости',
      component: HomeView
    },
    {
      path: '/games',
      name: 'Игры',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'Блог',
      component: HomeView
    },
    {
      path: '/videos',
      name: 'Видео',
      component: HomeView
    },
    {
      path: '/streams',
      name: 'Стримы',
      component: HomeView
    },
    {
      path: '/bugs',
      name: 'Баги',
      component: HomeView
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: HomeView
    },
  ]
})

export default router
