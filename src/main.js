import '@/style.css'
import router from '@/plugins/router'
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'

createApp(App).use(VueScrollTo, {
    duration: 1500,
    offset: -100,
    cancelable: true,
    lazy: false,
    x: false,
    y: true
}).use(MotionPlugin).use(router).mount('#app')
