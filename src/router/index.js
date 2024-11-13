import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
import Genshin from '../views/Genshin.vue'
import NotFound from '../views/NotFound.vue'
import Post from '../views/Post.vue'
import Test from '../views/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: Main
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
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound
    },
  ]
})

export default router
