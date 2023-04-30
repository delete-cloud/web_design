import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import HomePage from "@/HomePage.vue";
import IntroPage from "@/blog/IntroPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/blog',
        name: 'blog',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: IntroPage
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
