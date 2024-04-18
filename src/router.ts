import { createMemoryHistory, createRouter } from 'vue-router'

import LinkView from './LinkView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: LinkView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router