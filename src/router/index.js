import { createRouter, createWebHistory } from 'vue-router'

// 1. Temel Sayfa Component'lerini (Views) içeri aktar
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import BlogView from '../views/BlogView.vue'
import PostDetailView from '../views/PostDetailView.vue' // <-- 1. BU SATIRI EKLEYİN
import ContactView from '../views/ContactView.vue' // <-- 1. BU SATIRI EKLEYİN

const router = createRouter({
  // Temiz URL'ler kullan (hash'siz: # olmadan)
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // 2. Rota (Route) dizisini tanımla
  routes: [
    {
      path: '/', 
      name: 'home',
      component: HomeView
    },
    {
      path: '/hakkimda', 
      name: 'about',
      component: AboutView
    },
    {
      path: '/portfolyo', 
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/blog', 
      name: 'blog',
      component: BlogView
    },
    {
      path: '/iletisim', 
      name: 'contact',
      component: ContactView
    },
    
    {
     
      path: '/blog/:slug', 
      name: 'postDetail',
      component: PostDetailView
    },
  ]
})

export default router