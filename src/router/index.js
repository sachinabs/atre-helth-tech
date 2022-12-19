import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/HomeView.vue'
import History from '../views/History.vue'
import Chat from '../views/Chat.vue'
import DetailsOfPatients from '../views/DetailsOfPatients.vue'
import Calling from '../views/Calling.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/history',
      name: 'History',
      component: Dashboard
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Dashboard
    },
    {
      path: '/user/:userId',
      name: 'details',
      component: DetailsOfPatients
    },
    {
      path: '/call',
      name: 'call',
      component: Calling
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
