import Home from "../components/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import About from "../components/About.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 暴露给其他js内使用（如main.js）
export default router;