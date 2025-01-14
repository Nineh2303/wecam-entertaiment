import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/portfolio/PortfolioView.vue";
import AboutView from '../views/about/AboutView.vue';




const routes = [
  { path: '/', name:'Home', component: HomeView },
  { path: '/portfolio', name:'Portfolio', component: PortfolioView },
  { path: '/about', name:'about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export  default router