import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contador',
    name: 'Contador',
    component: () => import(/* webpackChunkName: "contador" */ '../views/ContadorView.vue')
  },
  {
    path: '/paises',
    name: 'Paises',
    component: () => import(/* webpackChunkName: "paises" */ '../views/PaisesView.vue')
  },
  {
    path: '/paises/:nombre',
    name: 'Pais',
    props: true,
    component: () => import(/* webpackChunkName: "pais" */ '../views/PaisView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
