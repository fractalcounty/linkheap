import { createMemoryHistory, createRouter } from 'vue-router'

import LinkPage from './pages/LinkPage.vue'
import AboutPage from './pages/AboutPage.vue'

const routes = [
  { path: '/', component: LinkPage },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router