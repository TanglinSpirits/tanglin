import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Quiz from '@/views/Quiz.vue'
import Result from '@/views/Result.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Tanglin X Cellarbration',
      },
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz,
      meta: {
        title: 'Cellarbration Quiz',
      },
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
      meta: {
        title: 'Your Cellarbration Match',
      },
    }
  ],
})

router.beforeEach((to, from, next) => {
  // 'to' is the route the user is navigating to.
  // We check if it has a title defined in its meta field.

  const defaultTitle = 'Tanglin Gin' // A fallback title

  // Set the document title. Use the route's title if it exists, otherwise use the default.
  document.title = to.meta.title || defaultTitle

  // 'next()' must be called to resolve the hook and continue with the navigation.
  next()
})

export default router
