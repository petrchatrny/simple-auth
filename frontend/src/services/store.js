import {createStore} from "vuex";
import Api from "@/services/api";

const store = createStore({
    state: {
        user: null,
        userLoggedIn: false,
        isStoreUpdated: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setUserIsLoggedIn(state, payload) {
            state.userLoggedIn = payload;
        },
        setIsStoreUpdated(state, payload) {
            state.isStoreUpdated = payload;
        }
    },
    actions: {
        async login(context, {email, password}) {
            const res = await Api.post("/users/login",
                {email, password},
                {withCredentials: true})
                .catch((err) => {
                    throw new Error(err);
                });
            if (res && res.data) {
                context.commit("setUser", res.data.data);
                context.commit("setUserIsLoggedIn", true);
            } else {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
                throw new Error("unknown error");
            }
        },
        async updateStore(context) {
            try {
                const res = await Api.get("/users");
                context.commit("setUser", res.data.data);
                context.commit("setUserIsLoggedIn", true);
            } catch (e) {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
            } finally {
                context.commit("setIsStoreUpdated", true);
            }
        }
    }
})

export default store;