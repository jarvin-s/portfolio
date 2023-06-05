import '@/style.css'
import router from '@/plugins/router'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
