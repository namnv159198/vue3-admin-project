import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'uno.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuide } from './router/guard'
import { routes } from './router'

const app = createApp(App)

const pinia = createPinia();
app.use(pinia)

const router = createRouter({ history: createWebHistory(), routes })

createRouterGuide(router)
app.use(router)
app.mount('#app')