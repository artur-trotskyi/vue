import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import PostPage from "@/pages/PostPage";
import PostsPageWithStore from "@/pages/PostsPageWithStore";
import PostsPageCompositionApi from "@/pages/PostsPageCompositionApi";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/posts',
        name: 'PostsPage',
        component: PostsPage,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/posts/:id',
        name: 'PostPage',
        component: PostPage,
    },
    {
        path: '/store',
        name: 'PostsPageWithStore',
        component: PostsPageWithStore,
    },
    {
        path: '/composition',
        name: 'PostsPageCompositionApi',
        component: PostsPageCompositionApi,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;