import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home,
    },
    {
        name: 'about',
        path: '/a-propos',
        component: About,
    },
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
})


export default router;


