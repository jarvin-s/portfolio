import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/projects.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active'
})

export default router