import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import HomePage from "@/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        children: [
            {
                path: '/1',
                name: 'bgone',
                component: () => import('@/bg/BgOne.vue'),
            },
            {
                path: '/2',
                name: 'bgtwo',
                component: () => import('@/bg/BgTwo.vue'),
            }, {
                path: '/3',
                name: 'bgthree',
                component: () => import('@/bg/BgThree.vue'),
            }
        ]
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
                path: '/blog/intro',
                name: 'intro',
                component: () => import('@/pages/IntroPage.vue'),
            },
            {
                path: '/blog/doc',
                name: 'doc',
                component: () => import('@/pages/DocPage.vue'),
            },
            {
                path: '/blog/friend',
                name: 'friend',
                component: () => import('@/pages/FriendPage.vue'),
            },
            {
                path: '/blog/doc/docone',
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
