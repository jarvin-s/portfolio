import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/Projects.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/single-project',
        name: 'single-project',
        component: () => import('@/views/SingleProject.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active'
})

export default router