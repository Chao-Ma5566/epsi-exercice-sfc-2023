import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/detail',
        name: 'detail',
        component: () =>
            import ('../views/PageDetailAlbum.vue')
    }]
})

export default router