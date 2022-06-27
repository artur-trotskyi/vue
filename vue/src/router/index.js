import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import PostPage from "@/pages/PostPage";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;