import {createStore} from "vuex"
import Api from "@/services/api";

const store = createStore({
    state: {
        user: null,
        userLoggedIn: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setUserIsLoggedIn(state, payload) {
            state.userLoggedIn = payload
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
        }
    }
})

export default store;