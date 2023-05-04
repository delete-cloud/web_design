import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import HomePage from "@/HomePage.vue";
import BlogPage from "@/blog/BlogPage.vue";

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
        component: () => import('@/blog/BlogPage.vue'),
        // component: BlogPage,
        children: [
            {
                path: '/intro',
                name: 'intro',
                component: () => import('@/pages/IntroPage.vue'),
            },
            {
                path: '/doc',
                name: 'doc',
                component: () => import('@/pages/DocPage.vue'),
            },
            {
                path: '/friend',
                name: 'friend',
                component: () => import('@/pages/FriendPage.vue'),
            },
            {
                path: '/doc/docone',
                name: 'docone',
                component: () => import('@/docs/DocOne.vue'),
            }
        ]
    },
    {
        path: '/mikutap',
        name: 'mikutap',
        component: () => import('@/mikutap/MikuTap.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
