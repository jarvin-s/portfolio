import '@/style.css'
import router from '@/plugins/router'
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

createApp(App).use(MotionPlugin).use(router).mount('#app')
