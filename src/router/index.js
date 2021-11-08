import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
    {
        name: 'home',
        path: '/test-vue',
        component: Home,
    },
    {
        name: 'about',
        path: '/test-vue/propos',
        component: About,
    },
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
})


export default router;


