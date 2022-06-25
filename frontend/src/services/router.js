import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView";
import DragonsView from "@/views/DragonsView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Epic dragons"
        }
    },
    {
        path: "/dragons",
        name: "dragons",
        component: DragonsView,
        meta: {
            title: "Dragons"
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        meta: {
            title: "Login"
        }
    },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
        meta: {
            title: "Register"
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;