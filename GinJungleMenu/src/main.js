import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { inject } from '@vercel/analytics'
import App from './App.vue'
import router from './router'

inject()

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)

app.mount('#app')
