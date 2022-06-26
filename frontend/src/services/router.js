import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView";
import DragonsView from "@/views/DragonsView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import store from "@/services/store";
import UserView from "@/views/UserView";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Epic dragons",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/dragons",
        name: "dragons",
        component: DragonsView,
        meta: {
            title: "Dragons",
            authRequired: true,
            authForbidden: false
        },
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        meta: {
            title: "Login",
            authRequired: false,
            authForbidden: true
        },
    },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
        meta: {
            title: "Register",
            authRequired: false,
            authForbidden: true
        },
    },
    {
        path: "/user",
        name: "user",
        component: UserView,
        meta: {
            title: "User profile",
            authRequired: true,
            authForbidden: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// routes protection
router.beforeEach(async (to, from, next) => {
    // update store if needed
    if (!store.state.isStoreUpdated) {
        await store.dispatch("updateStore");
    }

    // control routes
    const isAuthenticated = store.state.userLoggedIn;
    if (!isAuthenticated && to.meta.authRequired) {
        next({name: "login"});
    } else if (isAuthenticated && to.meta.authForbidden) {
        next({name: "user"});
    } else {
        next();
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;