import './main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueFeather from "vue-feather"
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App }
    ]
})
const app = createApp(App);

library.add(fas);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component(VueFeather.name, VueFeather);

app.use(router);
app.mount("#app");
