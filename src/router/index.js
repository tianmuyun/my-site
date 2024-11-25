import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Welcome from "../views/Welcome.vue"
import Personal from "../views/Personal.vue"
import Genshin from '../views/Genshin.vue'
import NotFound from '../views/NotFound.vue'
import Post from '../views/Post.vue'
import Towebp from '../views/Towebp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/genshin',
      name: 'genshin',
      component: Genshin
    },
    {
      path: '/towebp',
      name: 'towebp',
      component: Towebp
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound
    },
  ]
})

export default router
