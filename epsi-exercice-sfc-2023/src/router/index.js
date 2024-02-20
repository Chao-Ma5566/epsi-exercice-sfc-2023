import { createRouter, createWebHistory } from 'vue-router'
import AlbumView from '../views/AlbumView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/detail',
            name: 'detail',
            component: () =>
                import ('../views/PageDetailAlbum.vue')
        },
        {
            path: '/albums-Daft-Punk',
            component: AlbumView
        }
    ]
})

export default router