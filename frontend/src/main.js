import {createApp} from "vue";
import App from "./App.vue";

import router from "./services/router";
import store from "./services/store";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App)
    .use(router)
    .use(VueToast)
    .use(store)
    .mount("#app");
