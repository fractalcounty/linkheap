import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import './assets/app.css';

// Create a global head instance
const head = createHead()

// Attach head instance to Vue app
createApp(App)
  .use(head)
  .mount('#app')