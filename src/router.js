import { createRouter, createWebHistory } from 'vue-router';

import ResourceList from './pages/ResourceList.vue';
// import AddResource from './pages/AddResource.vue';
// import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/resources'
        },
        {
            name: 'resources',
            path: '/resources',
            component: ResourceList
        },
        // {
        //     path: '/add-resource',
        //     component: AddResource
        // },
        // {
        //     path: '/:notFound(.*)', component: NotFound
        // }
    ],
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

export default router;